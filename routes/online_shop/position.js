const express = require('express');
const passport = require('passport');
const router = express.Router();
const controller = require('../../controllers/online_shop/position');

router.get('/:categoryId', passport.authenticate('jwt', {session: false}), controller.getByCategoryId);
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove);
router.post('/', passport.authenticate('jwt', {session: false}), controller.create);
router.patch('/:id', passport.authenticate('jwt', {session: false}), controller.update);

module.exports = router;
