class HomeController {
  async index(req, res) {
    res.json('Home');
  }
}

// exporta já instanciado
export default new HomeController();
