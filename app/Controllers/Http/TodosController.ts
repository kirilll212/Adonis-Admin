import Database from "@ioc:Adonis/Lucid/Database"

export default new class TodoController {
    async getTodos({ view }) {
        const todos = await Database
            .query()
            .from('todos')
            .select('*')

        return view.render('todos', { todos })
    }
}