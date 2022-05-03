"use strict";Object.defineProperty(exports, "__esModule", {value: true});class HomeController {
  async index(req, res) {
    res.json('Home');
  }
}

// exporta já instanciado
exports. default = new HomeController();
