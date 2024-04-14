const fs = require("fs");
const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());

app.get("/create",(request,response) => {
    var timestamp =new Date();
    var filename =timestamp.getDate()+"-"+timestamp.getHours()+timestamp.getMinutes()+timestamp.getSeconds();
    fs.writeFile(`${filename}.txt`, `${timestamp}`,()=>{
        console.log("File Creation Done Successfully")
    });
    response.json({message:`${filename}.txt File Created`,
    filename:`${fiename}.txt`,
})
    
        
    })

    app.get("/read",function(req,res){
        var txt_files=[];
        fs.readdir(_dirname, function(err ,files){
            if (err) {
                return console.log('unable toscan directory:' + err);
            }

            files.forEach(function(file) {
                if(file.endsWith(".txt")){
                    txt_files.push(file);
                }
            });
            res.json({
                file_names:txt_files
                
            })
        });
    })




app.listen(process.env.port||3000 ,() => {
    console.log("App listening at port 3000");
})