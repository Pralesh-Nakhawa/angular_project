const db = require('../db/models');//index.js=>db
const OrderDetail = db.OrderDetail;
// 1. select * from users => findAll
exports.findAll = (req, resp) => {
	OrderDetail.findAll()
		.then(data => resp.json(data))
		.catch(err => {
			resp.status(500)
				.send({
					message: err.message ||
						`Something went wrong`
				})
		});

};
// 2. seelct * from users where id=?=>findByPK
exports.findByPk = (req, resp) => {
	const id = parseInt(req.params.id);
	OrderDetail.findByPk(id)
		.then(data => resp.json(data))
		.catch(err => {
			resp.status(500)
				.send({
					message: err.message ||
						`Something went wrong`
				})
		});
};
//insert into people (firstName,lastName,createdAt,updatedAt)
// values(?,?,?,?)
exports.create = (req, resp) => {
	if (!req.body.orderid || !req.body.cartid || !req.body.productid) {
		resp.status(400).send({
			message: "Content can not be empty!"
		});
		return;
	}

	const newUsers = {
		orderid: req.body.orderid,
		cartid: req.body.cartid,
		productid: req.body.productid,

		createdAt: new Date(),
		updatedAt: new Date()
	}
	OrderDetail.create(newUsers)
		.then(data => { resp.send(data); })
		.catch((err) => {
			resp.status(500).send({
				message: err.message || " Some error Creating new Person data"
			})
		})
}
//update people set firstName=?, lastName=? where id=?
exports.update = (req, resp) => {
	const id = req.params.id;

	OrderDetail.update(req.body, { where: { id: id } })
		.then(num => {
			if (num == 1) {
				resp.send({
					message: `People with id ${id} updated successfully.`
				});
			} else {
				resp.send({
					message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
				});
			}
		})
		.catch((err) => {
			resp.status(500).send({
				message: err.message || " Some error retriving People data"
			})
		})
}
//delete from people where id=?
exports.delete = (req, resp) => {
	const id = req.params.id;
	OrderDetail.destroy({ where: { id: id } })
		.then(num => {
			if (num == 1) {
				resp.send({ message: `User with id=${id} deleted successfully!` });
			} else {
				resp.send({ message: `Cannot delete Person with id=${id}. Maybe User was not found!` });
			}
		})
		.catch((err) => {
			resp.status(500).send({
				message: err.message || " Could not delete User with id=" + id
			})
		})
}
