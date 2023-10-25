import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class AdminSeeder extends BaseSeeder {
  public async run() {
    const existingAdmin = await User.query().where('email', 'admin@admin.adm').first();

    if (!existingAdmin) {
      await User.createMany([{
        email: 'admin@admin.adm',
        password: 'admin123qwe',
      }]);
    } else {
      console.log('Admin already exists');
    }
  }
}