import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { GraphQLModule } from '@nestjs/graphql';
@Module({
  imports: [GraphQLModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
