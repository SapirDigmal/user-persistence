const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

const user1 = [{key: "Date", value: "2016-05-02"},
    {key: "Name", value: "Sapir"},
    {key: "Address", value: "Tel-Aviv, Israel"}];
const users = {
    users: [user1,user1,user1,user1]
}

app.use(cors())
app.use(express.json())
app.get("/user", (req, res) => {
        return res.json(users)
})

app.post("/user",(req, res) => {
    users.users.push(req.body.user)
    res.json(req.body)
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})