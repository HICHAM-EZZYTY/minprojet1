const express = require('express');
const app = express();

<<<<<<< HEAD

//import routes

const categories = require('./routes/categories')


=======
//import routes

const users = require('./routes/users');
const types = require('./routes/types');

const path = require('path');
>>>>>>> 3e0548121373c12d086f1018c3c680bac2bda614
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

<<<<<<< HEAD
=======

const cors = require('cors');

app.use(cors());




>>>>>>> 3e0548121373c12d086f1018c3c680bac2bda614
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

<<<<<<< HEAD
=======

// app.use('/categories', categories)
// app.use('/comments', comments)
// app.use('/posts', posts)
// app.use('/tags', tags)
// app.use('/types', types)


// app.use('/users', users)
app.use('/types', types)


>>>>>>> 3e0548121373c12d086f1018c3c680bac2bda614


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

<<<<<<< HEAD
=======

>>>>>>> 3e0548121373c12d086f1018c3c680bac2bda614
connection.sync()
    .then(result => {

        app.listen(5000, () => console.log('Server ON'))

<<<<<<< HEAD


=======
>>>>>>> 3e0548121373c12d086f1018c3c680bac2bda614
    })
    .catch((err) => {
        console.log('error: ', err)
    })