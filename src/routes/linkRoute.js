const LinkController = require('../controller/linkController');
module.exports = (app) => {
   app.post('/usuario', LinkController.post);
   app.put('/usuario/:id', LinkController.put);
   app.delete('/usuario/:id', LinkController.delete);
   app.get('/usuario', LinkController.get);
   app.get('/usuario/:id', LinkController.getById);
}