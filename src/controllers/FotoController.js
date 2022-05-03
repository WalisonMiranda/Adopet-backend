import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');

class FotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { pet_id } = req.body;

        await Foto.create({ originalname, filename, pet_id });
        return res.json({ originalname, filename, pet_id });
      } catch (e) {
        return res.status(400).json({
          errors: ['O pet não existe'],
        });
      }
    });
  }
}

export default new FotoController();
