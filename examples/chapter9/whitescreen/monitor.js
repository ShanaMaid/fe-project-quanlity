const invalidNodes = ['meta','script', 'link', 'title', 'style','base','link', 'text'];
const isInvalidNodes = (tag) => invalidNodes.includes(tag.toLowerCase());

const isVisibleElement = (element) => {
  const style = window.getComputedStyle(element);
  const display = style.getPropertyValue('display');
  const visibility = style.getPropertyValue('visibility');
  const opacity = style.getPropertyValue('opacity');
  console.log(opacity, 'opacity', element)
  if (display === 'none' || visibility === 'hidden' || +opacity === 0) {
    return false;
  }
  return true;
};

const hasValidElement = (ele) => {
  // 如果目标节点没有在body树下代表以及被卸载，白屏不可见
  if (!document.body.contains(ele)) {
    return false;
  }

  const nodes = ele.childNodes;
  for (let i = 0; i < nodes.length; i++) {
    if (!isInvalidNodes(nodes[i].nodeName)) {
      const element = nodes[i];
      const style = window.getComputedStyle(element);
      const height = style.getPropertyValue('height');
      const width = style.getPropertyValue('height');

      if (!isVisibleElement(element)) {
        continue;
      }
      if ((parseInt(height, 10) > 0 && parseInt(width, 10) > 0) || hasValidElement(element)) {
        return true;
      }
    }
  }
  return false;
};

const whiteScreenObserve = (dom) => {
  console.log('白屏监控初始化，目标节点:', dom);
  let isUnset = false;
  const checkTargetDom = (error) => {
    const isWhiteScreen = !hasValidElement(dom);
    if (isWhiteScreen) {
      const pageUrl = window.location.href;
      const msg = {
        pageUrl,
        errorDetail: parseError(error),
      };
      owlReportWhiteScreen(msg);
      console.log('白屏了', msg)
    }
  };

  window?.addEventListener('unhandledrejection', checkTargetDom);
  window?.addEventListener('error', checkTargetDom)

  return {
    unset: () => {
      if (isUnset) {
        return;
      }
      isUnset = true;
      console.log('白屏监控已卸载，目标节点:', dom);
      window.removeEventListener('unhandledrejection', checkTargetDom);
      window.removeEventListener('error', checkTargetDom);
    },
  };
};