/** 错误类型 */
enum ErrorType {
  Error = 'error', // 普通 js 错误
  Resource = 'resource', // 资源加载错误
  Promise = 'promise', // 异步错误
}

/** 资源错误 */
type ResourceErrorDetailInfo = {
  type: ErrorType.Resource; // 错误类型
  tag: string; // 加载出错的资源标签，例如 img、script、link 等
  resourceUrl: string; // 资源地址
}

/** js 逻辑错误（包括同步错误、异步错误） */
type JsErrorDetailInfo = {
  type: ErrorType.Error | ErrorType.Promise;
  msg: string; // 错误信息
  resourceUrl: string; // 资源文件地址
  lineNo: number; // 错误行数
  colno: number; // 错误列数
  stack: string; // 错误堆栈
}
