import { add } from './add'
import { substract } from './substract';
import { queryPersonInfo } from './person';

describe('test', () => {
  test('加法测试', () => {
    expect(add(1, 1)).toEqual(2)
  });

  test('减法测试', () => {
    expect(substract(1, 1)).toEqual(0)
  });
});

jest.mock('./api.ts', () => ({
  queryPersonAge: async () => 18,
  queryPersonName: async () => 'Tom Jerry',
}));


describe('mock', () => {
  test('mock 异步返回', async () => {
    const fn = jest.fn().mockResolvedValue(1);
    expect(await fn()).toEqual(1)
  });

  test('mock 模块', async () => {
    const { age, name } = await queryPersonInfo();
    expect(age).toEqual(18)
    expect(name).toEqual('Tom Jerry')
  });
});

