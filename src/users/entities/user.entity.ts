// user.entity.ts
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import * as bcrypt from 'bcrypt';
import {Book} from '../../books/entities/book.entity'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Book, (book) => book.user)
    books: Book[];

    async validatePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }
}

