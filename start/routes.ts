/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import AdminsController from 'App/Controllers/Http/AdminsController'
import TodoController from 'App/Controllers/Http/TodosController'
import UserController from 'App/Controllers/Http/UsersController'

Route.get('/', async ({ view }) => {
  return view.render('login')
})

Route.get('/dashboard', async ({ view }) => {
  return view.render('main')
})

Route.put('/edit/:id', AdminsController.editUser)

Route.put('/edit/status/:id', AdminsController.editUserStatus)

Route.delete('/delete/:id', AdminsController.deleteUser)

Route.get('/users', UserController.getUsers)

Route.get('/todos', TodoController.getTodos)