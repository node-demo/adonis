'use strict';

class HomeController {
  render({ request, view }){
    // GET URL params -> id
    const id = request.input('id');

    // render view -> home.edge
    return view.render('home',{ id });
  }
}

module.exports = HomeController;
