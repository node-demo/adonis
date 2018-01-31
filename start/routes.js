'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/
const Database = use('Database');

const Route = use('Route');

// Route.on('/').render('index');

Route.get('/add',async  () =>{
  const sqlObj = {
    username: 'username003',
    email: 'email003@qq.com',
    password: 'password003'
  };

  await use('Database').table('users').insert( sqlObj );
});

Route.get('/',async  () =>{
  return await Database.table('users').select('*');
});
