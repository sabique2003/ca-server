//importing json-server
const jsonserver=require("json-server")

const caServer=jsonserver.create()

const middleware=jsonserver.defaults()
const router=jsonserver.router('db.json')

caServer.use(middleware)
caServer.use(router)

const PORT=3000 || process.env.PORT

caServer.listen(PORT,()=>{
    console.log("server running at PORT"+PORT);
    
})


