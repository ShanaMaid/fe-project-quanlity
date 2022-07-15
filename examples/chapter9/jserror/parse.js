try {
  throw 1;
} catch (error) {
  console.log(error.stack); // undefined
  console.log(error); // undefined
}

const parseNormalError = (e) => {
  const { message, filename, lineno, colno, error } = e;
  const detail = {
    msg: message,
    resourceUrl: filename,
    lineNo: lineno,
    colNo: colno,
    //抛出的错误为 Error 对象时，可以读取 stack 堆栈信息，否则直接转字符串
    stack: error instanceof Error ? error.stack : JSON.stringify(error),
  };
  return detail;
};

const parseUnhandledrejection = (e) => {
  const detail = {
    msg: '',
    resourceUrl: '',
    lineNo: -1,
    colNo: -1,
    stack: '',
  };
  if (e.reason instanceof Error) {
    const { filename, lineno, colno } = parseStack(e.reason.stack); // 从堆栈中解析关键信息
    detail.msg = e.reason.message;
    detail.resourceUrl = filename;
    detail.lineNo = lineno;
    detail.colNo = colno;
    detail.stack = e.reason.stack;
  } else {
    // e.reason 可能为非 Error 对象，此时直接转字符串
    detail.stack = JSON.stringify(e.reason);
  }
  return detail;
};

/**  获取 dom 上所有的属性 */
const getAllAttrs= (dom) => {
  const attrs = {};
  for (let i = 0;; i++) {
    const temp = dom.attributes[i];
    if (!temp) {
      return attrs;
    }
    attrs[temp.name] = temp.value;
  }
};

/**  解析资源加载错误 */
const parseResourceError = (e) => {
  const { target } = e;
  const detail = {
    tag: target.nodeName,
    resourceUrl: target.src,
    attrs: getAllAttrs(target),
  };
  return detail;
};


const parseError = (e) => {
  if (e instanceof ErrorEvent) { // 处理同步错误
    return parseNormalError(e);
  } else if (e instanceof PromiseRejectionEvent) { // 处理异步错误
    return parseUnhandledrejection(e);
  } else if (e instanceof Event) { // 处理资源加载错误
    return parseResourceError(e);
  }
};