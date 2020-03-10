import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./users.entity";
import { Repository } from "typeorm";
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

export class UsersService extends TypeOrmCrudService<User>{
  constructor(@InjectRepository(User) usersRepository: Repository<User>){
    super(usersRepository);
  }
}