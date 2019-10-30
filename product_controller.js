module.exports = {
    create:(res, req, next) => {
        const dbInstance = req.app.get('db');
        const { name, discripion, price, img_url} = req.body;


        dbInstance.create_product(name, discripion, price, img_url)
        .then(() => res.sendStatus(200))
        .catch(err =>{
            res.status(500).send({errorMessage: 'Oopps Something went wrong'});
            console.log(err)
        });
    },
    getOne: (req, res, next) => {
        const idInstance = req.app.get('db');
        const {id} = req.params;

        dbInstance.create_product()
        .then(products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({errorMessage: 'Oopps Something went wrong'});
            console.log(err)
        });
    },
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.read_products()
          .then(products => res.status(200).send(products))
          .catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
            console.log(err)
          });
      },
      update: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req;
    
        dbInstance.update_product([params.id, query.desc])
          .then(() => res.sendStatus(200))
          .catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
            console.log(err)
          });
    },
    delete: (res, req, next) => {
        const idInstance = req.app.get('db');
        const { id } =req.params;

        dbInstance.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch (err => {
            res.status(500).send({errorMessage: 'Oopps Something went wrong'});
            console.log(err)
        });
    }
};