import Database from "@ioc:Adonis/Lucid/Database";

export default new class UserController {
    async getUsers({ view }) {
        const users = await Database
            .query()
            .from('users')
            .select('*')

        return view.render('users', { users })
    }
}
