import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PluginModule } from './plugin/plugin.module';

@Module({
  imports: [
    PluginModule.loadPlugin(
      'https://gist.githubusercontent.com/sushilm2011/b870db4f49e6d7351366f9b3c8ce4c86/raw/282311b1ff27cce24e7f842ab4ae2015de7f241d/plugin-module.js'
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
