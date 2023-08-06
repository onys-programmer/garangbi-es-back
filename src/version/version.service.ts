import { Injectable } from '@nestjs/common';

@Injectable()
export class VersionService {
  getLatestVersion(): { version: string; changes: string[] } {
    return {
      version: '1.0.1',
      changes: [
        '띄어쓰기, 기호 틀려도 정답 처리되게',
        '문제 순서 랜덤으로 변경',
      ],
    };
  }
}
