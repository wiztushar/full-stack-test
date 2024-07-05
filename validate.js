const zod=require('zod')

const createTodo=zod.object({
    title:zod.string().min(1,'title is required'),
    description:zod.string().min(1,'description is required'),
})
const updateTodo=zod.object({
    id:zod.string(),
    title:zod.string(),
})

module.exports={
    createTodo,
    updateTodo
}