module.exports = (app)=>{
    app.get("/",(req,res)=>{
        res.json({ status: "API Online", mensagem: "Bem-vindo à API de Notícias" });
    })

}
