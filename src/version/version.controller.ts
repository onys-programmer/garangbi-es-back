import { Controller, Get } from '@nestjs/common';
import { VersionService } from './version.service';
import { ApiResponse } from '../utils/apiResponse';

@Controller('version')
export class VersionController {
  constructor(private readonly versionService: VersionService) {}

  @Get()
  getLatestVersion(): ApiResponse<{ version: string; changes: string[] }> {
    return this.versionService.getLatestVersion();
  }
}
