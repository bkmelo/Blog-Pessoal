import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Postagem} from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Pernambucana#25',
    database: 'db_blogpessoal',
    entities:[Postagem],
    synchronize: true,

  }),

PostagemModule,

],

  controllers: [],
  providers: [],
})
export class AppModule {}
