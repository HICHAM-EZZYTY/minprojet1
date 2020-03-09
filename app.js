const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//import routes
// const users=require('./routes/user');

const cors = require('cors');



//Connection with MySQL
const connection = require('./config/database');

//Models

const User = require('./models/user');

const app = express();
app.use(cors());

// app.use(express.static(path.join(__dirname, 'public')))

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

connection.sync()
    .then(result => {

        app.listen(5000, () => console.log('Server ON'))

        // User.create({
        //     name: "anas",
        //     email: "anas@mai.com",
        //     password: "AHAHAH"
        // })


    })
    .catch((err) => {
        console.log('error: ', err)
    })