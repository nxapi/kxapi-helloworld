import TestReq from './req/test-req';
import TestDto from './dto/test-dto';
import { d } from '@nxapi/nxapi';
import { BaseController } from '@nxapi/kxapi';
import BaseResponse from './dto/base-response';
@d.controller.path('/v1')
export default class TestController extends BaseController {
  @d.function.description('ddddddd')
  @d.function.get('/hello')
  public ggg(req: string, rr: number): BaseResponse<TestDto> {
    this.service.test3Service.test();
    return null;
  }
  @d.function.post('post')
  public hhh(req: TestReq): TestDto {
    return new TestDto();
  }
}
