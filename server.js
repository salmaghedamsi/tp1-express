const express =require('express');
const app = express();
const port = 3000;
app.use(express.json());

// 1. GET /about
app.get('/about', (req, res) => {
    res.json({
        applicationName:" Mon Compte rendu express",
        studentName:"Salma Ghedamsi",
        releaseVersion :"1"
    });
});

// 2. GET /api/users
const users =[
    {id:1 , name: "Nour Ben Salah", email:"nourbensalah@gmail.com"},
    {id:2,name:"ali fouali",email:"alibouali@gmail.com"},
    {id:3,name:"mohamed fateh",email:"mohamedfateh@gmail.com"}
]

// 5. GET /api/users with query parameter
app.get("/api/users", (req, res) => {

    const { name } = req.query;

    if (name) {
        const filteredUsers = users.filter(
            user => user.name.toLowerCase() === name.toLowerCase()
        );

        return res.json(filteredUsers);
    }

    res.json(users);
});

app.get('/api/users',(req,res) =>{
    res.json(users);
})

// 3. GET /api/users/:id
app.get('/api/users/:id',(req,res) =>{
    const id=Number(req.params.id);
    const user= users.find((user)=>user.id===id);
    if (!user){
        res.status(404).json({message:"user with this id not found"});
    } else {
        res.json(user);
    }
})

// 4. POST /contact
app.post('/contact',(req,res) =>{
    const {name,email,message}=req.body;
    if (!name || !email || !message){
        res.status(400).json({message:"name,email and message are required"});
    } else {
        res.json({message:"Thank you , Your message has been sent successfully"});
    }
})


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});