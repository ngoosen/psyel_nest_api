import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const dataBaseConfig: SequelizeModuleOptions = {
  dialect: 'sqlite',
  storage: '.db/universite_demo.sqlite',
  autoLoadModels: true,
  synchronize: false,
};
