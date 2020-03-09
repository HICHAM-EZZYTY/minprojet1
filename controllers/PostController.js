const Post = require('./../models/post');
const Category = require('./../models/category');
const User = require('./../models/user');
const Tag = require('./../models/tag');


exports.getAllPost = (req, res) => {



    Post.findAll({
            include: [{
                model: User
            }, {
                model: Category
            }]
        })
        .then((post) => {
            console.log(post)
            res.status(200).json({
                error: false,
                data: post,
            })
        })
        .catch(err => res.status(404).json({
            error: true,
            message: 'post not found!'
        }))

}

exports.storePost = (req, res) => {

    let {
        title,
        description,
        urlImage,
        categoryId,
        tagName,
        userId,
    } = req.body;

    Post.create({
            title: title,
            description: description,
            urlImage: urlImage,
            categoryId: categoryId,
            userId: userId
        })


        .then((post) => res.status(201).json({
                error: false,
                data: post,

            }),
            // Tag.create({
            //     id: tagId,
            //     name: tagName,
            // })

            Tag.create({
                name: tagName,
            })

            .then((res) => {
                PostInstance.setTags()
            })

        )
        .catch((err) => res.status(400).json({
            error: true,
            message: 'Bad request !'
        }))


}

exports.updatePost = (req, res) => {
    return res.send('modification totale')
}

exports.showOnePost = (req, res) => {

    Post.findByPk(req.params.id)
        .then(post => {
            res.status(200).json({
                error: false,
                data: post
            })
        })
        .catch(err => res.status(404).json({
            error: true,
            message: 'Post not found !'
        }))
}

exports.deletePost = (req, res) => {

    let id = req.params.id;

    Post.destroy({
            where: {
                id: id
            }
        })
        .then(() => res.status(204).json({}))
        .catch((err) => res.status(403).json({
            error: true,
            message: ' delete  Post !'
        }))
}



exports.patchPost = (req, res) => {
    return res.send('modification Post')
}