const login = async (req,res) => {
    const {username, password } = req.body;
    if(!username || !password){
        res.status(400).json({msg: "Please provide email and password"})
    }
    res.send("Fake Login/Register/Signup Route")
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg: `Hello, Prafull E `, secret:`Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
    login, dashboard
}
