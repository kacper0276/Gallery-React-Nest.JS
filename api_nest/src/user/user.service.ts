import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/dtos/users.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async register(dataLogin) {
    const salt = bcrypt.genSaltSync(10);

    const { login } = dataLogin.dataLogin,
      { password } = dataLogin.dataLogin,
      { sec_password } = dataLogin.dataLogin;
    const hash = bcrypt.hashSync(password, salt);

    const userData = {
      login: login,
      password: hash,
    };

    const user = await this.userRepository.findBy({
      login: login,
    });

    if (user.length > 0) {
      return { message: 'Użytkownik o podanym loginie istnieje' };
    } else if (password !== sec_password) {
      return { message: 'Hasła nie są takie same!! ' };
    } else {
      await this.userRepository.save(userData);
      return { message: 'Dodano użytkownika!!' };
    }
  }

  async login(dataLogin) {
    const { login } = dataLogin.dataLogin,
      { password } = dataLogin.dataLogin;

    const user = await this.userRepository.findBy({
      login: login,
    });

    if (user.length > 0) {
      const comparePassword = await bcrypt.compare(password, user[0].password);
      if (comparePassword === true) {
        return { user: user[0].login };
      } else {
        return { message: 'Zły login lub hasło' };
      }
    } else {
      return { message: 'Zły login lub hasło' };
    }
  }
}
