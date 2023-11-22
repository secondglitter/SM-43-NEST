import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { GroupModule } from './group/group.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriasModule } from './categorias/categorias.module';
import { HistoriaModule } from './historia/historia.module';
import { PersonajesModule } from './personajes/personajes.module';
import { LogrosModule } from './logros/logros.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'bdsm43',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  UsersModule,
  GroupModule,
  CategoriasModule,
  HistoriaModule,
  PersonajesModule,
  LogrosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
