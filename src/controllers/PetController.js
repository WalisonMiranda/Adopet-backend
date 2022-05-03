import Pet from '../models/Pet';
import Foto from '../models/Foto';

class PetController {
  async index(req, res) {
    const pets = await Pet.findAll({
      order: [['id', 'DESC'], [Foto, 'created_at', 'ASC']],
      include: {
        model: Foto,
        attributes: ['foto_url', 'filename'],
      },
    });
    return res.json(pets);
  }

  async create(req, res) {
    try {
      const newPet = await Pet.create(req.body);

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

      const pet = await Pet.findByPk(id, {
        include: {
          order: [['id', 'DESC']],
          model: Foto,
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

      const pets = await Pet.findAll({
        where: { user_id: userId },
        include: {
          model: Foto,
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

      const pet = await Pet.findByPk(id);

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

      const pet = await Pet.findByPk(id);

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

export default new PetController();
