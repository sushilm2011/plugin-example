import { DynamicModule, Module } from "@nestjs/common";
import { PluginLoaderService } from "./plugin-loader.service";

@Module({})
export class PluginModule {
  static loadPlugin(url: string): DynamicModule {
    return {
      module: PluginModule,
      providers: [
        {
          provide: 'PLUGIN_URL',
          useValue: url,
        },
        PluginLoaderService,
      ],
      exports: [PluginLoaderService],
    };
  }
}