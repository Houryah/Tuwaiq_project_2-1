const router = require('express').Router()
availableController = require('../Controller/available')

.get('/',availableController.index);
router.get('/:pid',availableController.show)
router.put('/:pid/update',availableController.update)
router.delete('/:pid/delete',availableController.delete)
router.available('/create',availableController.create)
module.exports = router;