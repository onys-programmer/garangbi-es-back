import { Injectable } from '@nestjs/common';
import { ApiResponse } from 'src/utils/apiResponse';

@Injectable()
export class VersionService {
  getLatestVersion(): ApiResponse<{ version: string; changes: string[] }> {
    return new ApiResponse({
      version: '1.0.2',
      changes: ['띄어쓰기, 기호 채점 기준에서 제외', '문제 순서 랜덤으로 변경'],
    });
  }
}
