import { Injectable } from '@nestjs/common';

@Injectable()
export class VersionService {
  getLatestVersion(): string {
    return '1.0.1';
  }
}
