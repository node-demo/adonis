'use strict';

class HomeController {
  render({ request, view }){
    const id = request.input('id');
    return view.render('home',{ id });
  }
}

module.exports = HomeController;
