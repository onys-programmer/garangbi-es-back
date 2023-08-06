import { Controller, Get } from '@nestjs/common';
import { VersionService } from './version.service';

@Controller('version')
export class VersionController {
  constructor(private readonly versionService: VersionService) {}

  @Get()
  getLatestVersion(): string {
    return this.versionService.getLatestVersion();
  }
}
