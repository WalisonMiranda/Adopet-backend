"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Pet = require('../models/Pet'); var _Pet2 = _interopRequireDefault(_Pet);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

class PetController {
  async index(req, res) {
    const pets = await _Pet2.default.findAll({
      order: [['id', 'DESC'], [_Foto2.default, 'created_at', 'ASC']],
      include: {
        model: _Foto2.default,
        attributes: ['foto_url', 'filename'],
      },
    });
    return res.json(pets);
  }

  async create(req, res) {
    try {
      const newPet = await _Pet2.default.create(req.body);

      return res.json(newPet.dataValues);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando Id'],
        });
      }

      const pet = await _Pet2.default.findByPk(id, {
        include: {
          order: [['id', 'DESC']],
          model: _Foto2.default,
          attributes: ['foto_url', 'filename'],
        },
      });

      if (!pet) {
        return res.status(400).json({
          errors: ['O pet não existe'],
        });
      }

      return res.json(pet);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  async showUserPets(req, res) {
    try {
      const userId = req.params.id;

      const pets = await _Pet2.default.findAll({
        where: { user_id: userId },
        include: {
          model: _Foto2.default,
          attributes: ['foto_url', 'filename'],
        },
      });

      if (!pets) {
        return res.status(400).json({
          errors: ['Sem pets cadastrados'],
        });
      }

      return res.json(pets);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando Id'],
        });
      }

      const pet = await _Pet2.default.findByPk(id);

      if (!pet) {
        return res.status(400).json({
          errors: ['O pet não existe'],
        });
      }

      const petUpdated = await pet.update(req.body);

      return res.json(petUpdated);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando Id'],
        });
      }

      const pet = await _Pet2.default.findByPk(id);

      if (!pet) {
        return res.status(400).json({
          errors: ['O pet não existe'],
        });
      }

      await pet.destroy();
      return res.json({
        deleted: true,
      });
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }
}

exports. default = new PetController();
