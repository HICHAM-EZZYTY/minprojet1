const express = require('express');
const app = express();


//import routes

const categories = require('./routes/categories')


const bodyParser = require('body-parser');


const cors = require('cors');

app.use(cors());




app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json({
    type: 'application/*+json'
}))
app.use(bodyParser.raw({
    type: 'application/vnd.custom-type'
}))
app.use(bodyParser.text({
    type: 'text/html'
}))

//Connection with MySQL
const connection = require('./config/database');

//Models
const Category = require('./models/category');
const Comment = require('./models/comment');
const Post = require('./models/post');
const Tag = require('./models/tag');
const Type = require('./models/type')
const User = require('./models/user');

app.use('/categories', categories)



User.belongsTo(Type)
Type.hasMany(User)

Post.belongsTo(Category)
Post.belongsTo(User)

Category.hasMany(Post)
User.hasMany(Post)



Comment.belongsTo(User)
Comment.belongsTo(Post)


Post.hasMany(Comment)
User.hasMany(Comment)

Post.belongsToMany(Tag, {
    through: 'Post_Tag'
})
Tag.belongsToMany(Post, {
    through: 'Post_Tag'
})

connection.sync()
    .then(result => {

        app.listen(5000, () => console.log('Server ON'))



    })
    .catch((err) => {
        console.log('error: ', err)
    })