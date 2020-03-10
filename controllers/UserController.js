const User = require('./../models/user');
const Type = require('./../models/type');

exports.getAllUsers = (req, res) => {

    User
        .findAll({
            include: [{
                model: Type
            }]
        })
        .then((users) => {
            console.log(users)
            res.status(200).json({
                error: false,
                data: users
            })
        })
        .catch(err => res.status(404).json({
            error: true,
            message: 'posts not found!'
        }))

}

exports.storeUser = (req, res) => {

    let {
        name,
        email,
        password,
        typeId,
    } = req.body;

    User.create({
            name: name,
            email: email,
            password: password,
            typeId: typeId

        })
        .then((post) => res.status(201).json({
            error: false,
            data: post
        }))
        .catch((err) => res.status(400).json({
            error: true,
            message: 'Bad request  !!!'
        }))

}

exports.updateUser = (req, res) => {
    console.log(req.body)
    let {
        name: name,
        email: email,
        password: password,
        typeId: typeId,
    } = req.body;

    User.update({
            name: name,
            email: email,
            password: password,
            typeId: typeId,
        }, {
            where: {
                id: req.params.id
            }
        })
        .then((result) => {
            res.status(202).json({
                error: false,
                data: result
            })
        })
        .catch((err) => {
            res.status(400).json({
                error: true,
                message: "bad request !"
            })
        })
}




exports.showOneUser = (req, res) => {

    User.findByPk(req.params.id)
        .then(user => {
            res.status(200).json({
                error: false,
                data: user
            })
        })
        .catch(err => res.status(404).json({
            error: true,
            message: 'product not found !'
        }))
}



exports.patchUser = (req, res) => {

    User.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            res.status(200).json({
                error: false,
                data: result
            })
        })
        .catch((error) => {
            res.status(400).json({
                error: true,
                message: "Bad request"
            })
        })

}