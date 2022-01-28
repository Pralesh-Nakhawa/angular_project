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
    
    }
