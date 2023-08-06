import { Injectable } from '@nestjs/common';

@Injectable()
export class VersionService {
  getLatestVersion(): { version: string } {
    return { version: '1.0.1' };
  }
}
