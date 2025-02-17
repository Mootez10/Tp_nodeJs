const express = require('express');
const app = express();
app.use(express.json()); //middleware for parsing boody of request
let todos =[{id:1,title:"film l"},{id:2,title:"film2"}]
//create
app.post('/api/todos/create',(req,res)=>{
    todos.push(req.body)
    res.send(todos)
})
//getAll
app.get('/api/todos/all',(req,res)=>{
    res.send(todos)
})
//update
app.put('/api/todos/update/:id',(req,res)=>{
    const id =Number (req.params.id)
    todos = todos.map(todo=>{
        return todo.id === id ? {...todo,...req.body}:todo
    })
    res.send(todos)
})
//delete donnees statique
app.delete('/api/todos/delete/:id',(req,res)=>{
    const id =Number (req.params.id)
   todos=todos.filter(todo=>todo.id !==id)
    res.send(todos)
})
app.get('/api/todo/:id',(req,res)=>{
    const id =Number (req.params.id)
   let checkTodos=todos.find(todo=>todo.id === id)
   if(!checkTodos){
    res.status(404).send('todo not found')
   }
    res.send(todos)
})

//retourner fich html
app.get('/file',(req, res) => {
res.sendFile(__dirname+'/public/index.html');
})
app.get('/user/:id',(req,res)=>{
    const id =req.params.id;
    res.send(id)
})
app.get('/todo/all',(req,res)=>{
    const arr1 = [1, 2, 3];
    res.send(arr1)
})

// convert number
app.get('/todo/:id', (req, res) => {
    const arr1 = [1, 2, 3];
    const id = parseInt(req.params.id); 
    
    if (arr1.find(item => item === id)) {
        res.send(id.toString()); // Envoyer une réponse en chaîne de caractères
    } else {
        res.send('error');
    }
});

app.get('/', (req, res) => {
    res.send('Welcome to my server');
    res.json({success:"hello to my serve"}) //accept JSON in response 
    res.end('welcome to my serve') //execute the request and skip the other ones 

});

app.listen(5000, () => {
    console.log('Listening on port 5000');
});