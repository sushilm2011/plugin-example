import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PluginLoaderService } from './plugin/plugin-loader.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly pluginLoaderService: PluginLoaderService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('load')
  async loadPlugin() {
    const plugin = await this.pluginLoaderService.loadPlugin();
    const data = plugin.hello();
    return data;
  }
}
