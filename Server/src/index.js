const http = require('http');

const data = require('./utils/data');
const PORT = 3001;


http.createServer((req,res)=>{
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    
        const {url} = req
        console.log(url);

        try {
            if(url.includes('/rickandmorty/character')){
                const id = url.split('/').at(-1)
                console.log(id);
                const personaje = data.find((pers) => pers.id == id)
                console.log(personaje);
                res.writeHead(200,{'Content-type':'application/json'})
                res.end(JSON.stringify(personaje))
    
            }
            
        } catch (error) {
            throw new Error(error)
        }

       

    // const id = parseInt(req.url.replace(/[^0-9]+/g, ""));

    // if(req.url.includes('/rickandmorty/character')){
    //     fs.readFile('./utils/data.js',(err,data)=>{
    //         // console.log(data);
    //         res.writeHead(200,{'Content-Type':'application/javascript'})
    //         res.end(data)
            
    //     })
    // }

}).listen(PORT,'localhost')

