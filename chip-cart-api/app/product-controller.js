//controller->Model
//ProductController=>Product

const db=require('../db/models'); //index.js=>db
const Product=db.Product;

//SELECT id, title, description, categories, price, image, "createdAt", "updatedAt"
	//FROM public."Products";

exports.findAll=(req,resp)=>{
    Product.findAll()
          .then((data)=>{resp.json(data)})
          .catch((err)=>{
              resp.status(500)
                   .send({message:err.message|| " Some Error retriving People Data"})
          })

}

//SELECT id, title, description, categories, price, image, "createdAt", "updatedAt"
	//FROM public."Products" where id=?; findbypk
    exports.findByPk=(req,resp)=>{
        const id=parseInt(req.params.id);
    
        Product.findByPk(id)
              .then((data)=>{resp.json(data)})
              .catch((err)=>{
                  resp.status(500)
                       .send({message:err.message|| " Some Error retriving People Data"})
              })
    
    };
    exports.create = (req, resp) => {
		if(!req.body.title||!req.body.userid||!req.body.description||!req.body.categories||!req.body.price||!req.body.image){
			resp.status(400).send({
				message: "Content can not be empty!"
			});
			return;
		}
		const newProduct={
            userid:req.body.userid,
			title: req.body.title,
			description: req.body.description,
			categories: req.body.categories,
			price: req.body.price,
			image: req.body.image,
			createdAt:new Date(),
			updatedAt:new Date()

		}
		Product.create(newProduct)
			.then(data=>{resp.send(data);})
			.catch((err) => {
				resp.status(500).send({
					message: err.message || " Some error Creating new Product data"
				})
			})
	}

	//update Product
exports.update = (req, resp) => {
    const id = parseInt(req.params.id);

    Product.update(req.body, { where: { id: id } })
        .then(num => {
            if (num >= 1) {
            resp.send({
                message: "product with id ${id} updated successfully."
            });
            } else {
            resp.send({
                message: "Cannot update product with id=${id}. Maybe product was not found or req.body is empty!"
            });
            }
        })
        .catch((err) => {
            resp.status(500).send({
                message: err.message || " Some error retriving product data"
            })
        })
}
// DELETE
// 	WHERE <condition>;
exports.delete = (req, resp) => {
    const id = parseInt(req.params.id);
    Product.destroy({ where: { id: id } })
        .then(num => {
            if (num == 1) {
                resp.send({ message: "Product with id=${id} deleted successfully!" });
            } else {
                resp.send({ message: "Cannot delete Product with id=${id}. Maybe Product was not found!" });
            }
        })
        .catch((err) => {
            resp.status(500).send({
                message: err.message || " Could not delete product with id=" + id
            })
        })
}
    exports.findAllCategories=(req,resp)=>{
		const categories = req.params.categories;
		Product.findAll({ where: { categories: categories }})
			.then(data=>resp.json(data))
			.catch(err=>{
				resp.status(500)
					.send({message:err.message||
					`Something went wrong`})
			});
	
	};
    exports.findAllByUserid=(req,resp)=>{
        const userid = req.params.userid;
        Product.findAll({ where: { userid: userid }})
              .then((data)=>{resp.json(data)})
              .catch((err)=>{
                  resp.status(500)
                       .send({message:err.message|| " Some Error retriving product Data"})
              })
    
    };
