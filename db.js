const mongoose=require('mongoose')

const Schema=mongoose.Schema({
    title:String,
    description:String,
})
mongoose.connect("mongodb+srv://ryzen:ryzen@cluster0.zvnajdm.mongodb.net/todos")
const todo=mongoose.model('todos',Schema);

module.exports={
    todo
}