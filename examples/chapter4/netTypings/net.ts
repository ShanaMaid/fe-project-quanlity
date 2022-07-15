import axios, { AxiosRequestConfig } from 'axios';
import * as IReqRoutes from './requests/routes';
import * as IResRoutes from './responses/routes';

type BasicReponse<T> = {
  /** 接口状态码 */
  code: number;
  /** 接口提示信息 */
  message: string;
  /** 响应结果 */
  data: T;
}

type IGetRoutes = {
  [key in keyof IResRoutes.IGetRoutes]: {
    request: IReqRoutes.IGetRoutes[key],
    response: BasicReponse<IResRoutes.IGetRoutes[key]>,
  }
}

type IPostRoutes = {
  [key in keyof IResRoutes.IPostRoutes]: {
    request: IReqRoutes.IPostRoutes[key],
    response: BasicReponse<IResRoutes.IPostRoutes[key]>,
  }
}

type IPutRoutes = {
  [key in keyof IReqRoutes.IPutRoutes]: {
    request: IReqRoutes.IPutRoutes[key],
    response: BasicReponse<IResRoutes.IPutRoutes[key]>,
  }
}

type IDeleteRoutes = {
  [key in keyof IReqRoutes.IDeleteRoutes]: {
    request: IReqRoutes.IDeleteRoutes[key],
    response: BasicReponse<IResRoutes.IDeleteRoutes[key]>,
  }
}

class Net {
  get = async <T extends keyof IGetRoutes>(
    url: T,
    params?: IGetRoutes[T]['request'],
    config?: AxiosRequestConfig
  ) => {
    const r = await axios.get<IGetRoutes[T]['response']>(url, {
      params,
      ...config,
    });
    return r.data;
  }

  post = async <T extends keyof IPostRoutes>(
    url: T,
    params?: IPostRoutes[T]['request'],
    config?: AxiosRequestConfig
  ) => {
    const r = await axios.post<IPostRoutes[T]['response']>(url, params, config);
    return r.data;
  };

  put = async <T extends keyof IPutRoutes>(
    url: T,
    params?: IPutRoutes[T]['request'],
    config?: AxiosRequestConfig
  ) => {
    const r = await axios.put<IPutRoutes[T]['response']>(url, params, config);
    return r.data;
  }

  delete = async <T extends keyof IDeleteRoutes>(
    url: T,
    params?: IDeleteRoutes[T]['request'],
    config?: AxiosRequestConfig
  ) => {
    const r = await axios.delete<IDeleteRoutes[T]['response']>(url, {
      params,
      ...config,
    });
    return r.data;
  }
}

export const net = new Net();








async () => {
  const r = await net.post('/api/v1/person/info/edit', {
    id: '1',
    name: '张三',
    age: 18,
  });
  if (r.data.result) {

  }
}
