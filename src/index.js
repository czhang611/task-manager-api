const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT;

const multer = require('multer');
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    }, 
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload a word document'));
        // if (!file.originalname.endsWith('.pdf')) {
            // return cb(new Error('Please upload a PDF'));
        }

        cb(undefined, true);

        // cb(new Error('File must be a PDF'));
        // cb(undefined, true);
        // cb(undefined, false);
    }
})

// const errorMiddleware = (req, res, next) => {
//     throw new Error ('From my middleware')
// }
// app.post('/upload', errorMiddleware, (req, res) => {

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send();
}, (error, req, res, next) => {
    res.status(400).send ({ error: error.message});
})




// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled.');
//     } else {
//         next();
//     }
// })

// app.use((req, res, next) => {
//         res.status(503).send('Site is currently under maintenance. Please come back later.');
// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () =>{
    console.log('Server is up on port ' + port);
})

// const Task = require('./models/task');
// const User = require('./models/user');

// const main = async () => {
//     // const task = await Task.findById('5f4833b88b9044974c544594');
//     // await task.populate('owner').execPopulate();
//     // console.log(task.owner);
//     const user = await User.findById('5f483285883298a444325c15');
//     await user.populate('tasks').execPopulate();
//     console.log(user.tasks);
// }

// main();

// const pet = {
//     name: 'Hal'
// }

// pet.toJSON = function () {
//     // console.log(this);
//     // return this;
//     return {};
// }

// console.log(JSON.stringify(pet));

// const jwt = require ('jsonwebtoken');

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days'});
//     console.log(token);

//     const data = jwt.verify(token, 'thisismynewcourse');
//     console.log(data);
// }

// myFunction();