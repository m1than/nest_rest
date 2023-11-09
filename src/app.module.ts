import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsersModule} from './users/users.module';
import {BooksModule} from './books/books.module';
import {AuthService} from './auth/auth.service';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [UsersModule,
        BooksModule,
        TypeOrmModule.forRoot(
            {
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'developer',
                password: 'developer',
                database: 'book_service',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
            }
        )],
    controllers: [AppController],
    providers: [AppService, AuthService],
})
export class AppModule {
}
