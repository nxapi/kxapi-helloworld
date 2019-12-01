import { d } from '@nxapi/nxapi';

export default class TestDto {
  @d.number.max(1)
  @d.number.description('ddd')
  @d.number.required()
  @d.number.error(() => '自定义错误')
  tt: number;
}
