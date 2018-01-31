'use strict';

const Database = use('Database');

const Route = use('Route');

// Demo1
Route.on('/').render('welcome');

// Demo2
Route.get('/query',async  cxt =>{
  return `hello ${cxt.request.input('name')}`;
});

// Demo3 app\Controllers\Http\HomeController.js
Route.get('/control','HomeController.render');

/*------------------------Extend----------------------*/

// Demo4
Route.get('/add',async  () =>{
  const sqlObj = {
    username: 'username001',
    email: 'email001@qq.com',
    password: 'password001'
  };

  await use('Database').table('users').insert( sqlObj );
});

// Demo5
Route.get('/list',async  () =>{
  return await Database.table('users').select('*');
});
