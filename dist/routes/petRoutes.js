"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _PetController = require('../controllers/PetController'); var _PetController2 = _interopRequireDefault(_PetController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get('/', _PetController2.default.index);
router.get('/:id', _PetController2.default.show);
router.get('/user/:id', _loginRequired2.default, _PetController2.default.showUserPets);
router.post('/', _loginRequired2.default, _PetController2.default.create);
router.put('/:id', _loginRequired2.default, _PetController2.default.update);
router.delete('/:id', _loginRequired2.default, _PetController2.default.delete);

exports. default = router;
