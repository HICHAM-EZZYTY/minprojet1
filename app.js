const express = require('express');
const app = express();


//import routes
// const users = require('./routes/users');
// const categories = require('./routes/categories')
const comments = require('./routes/comments')
// const posts = require('./routes/posts')
// const tags = require('./routes/tags')
// const types = require('./routes/types')


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

//Usage of routes
 //app.use('/categories', categories)
app.use('/comments',comments)
// app.use(posts)
// app.use(tags)
// app.use(types)
// app.use(users)





// Relation between comment and post table
// Comment.belongsTo(Post)  
// Post.hasMany(Comment)

// Relation between Post and Category table
// Post.belongsTo(Category)
// Category.hasMany(Post)


// Relation between Comment and USER table
// Comment.belongsTo(User)
// User.hasMany(Comment)

// Relation between Post and USER table
// Post.belongsTo(User)
// User.hasMany(Post)

// Relation between post and tag table
// Post.hasMany(Tag)
// Tag.hasMany(Post)


// Relation between user and type table


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

Post.belongsToMany(Tag, { through: 'Post_Tag' })
Tag.belongsToMany(Post, { through: 'Post_Tag' })
// app.use(express.static(path.join(__dirname, 'public')))



// support json encoded bodies





// app.use(users)




// app.use('/create-course', (req, res, next) => {
//    res.send('<form action="/course" method="post"><input name="title"><button type="submit">Add course</button></form>')
// });

// app.use('/course', (req, res, next) => {
//     console.log(req)
//     res.send('<h1>store course</h1>')
//  });


//  app.use('/', (req, res) => {
//     res.send('<h1>List courses</h1>')
// })





// connection.sync({force:true}) Make database drop tables after adding relations

connection.sync({ force: true })
    .then(result => {

        app.listen(5000, () => console.log('Server ON'))

        User.create({
            name: "anas",
            email: "anas@mai.com",
            password: "AHAHAH"
        })
        Category.create({
            title: "ahmed",
            active: true,
        })
        Comment.create({
            commentaire: "Commenatie",
            active: true,
        })
        Post.create({
            title: "hahhaha",
            urlImage: "zzzzzzzzzzzzzzzzzzzzzz",
            description: "frrrrrrrrrr",
            active: true,
        })

        Tag.create({
            name: "kacch",
            active: true,
        })
        Type.create({
            name: "kakakaka",
            active: true,
        })
    })
    .catch((err) => {
        console.log('error: ', err)
    })