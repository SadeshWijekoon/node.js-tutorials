import { log } from 'node:console'
import { appendFile, readFile, writeFile } from 'node:fs'
import { dirname, join } from 'node:path'
import {fileURLToPath} from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

log(__filename);
log(__dirname);

// readFile(join(__dirname,"read.txt"),{
//     encoding:'utf-8'
// },(err,data)=>{
//   if (err){
//     log(err)
//   }else{
//     log(data)
//   }
// })

// writeFile(join(__dirname,'write.txt'),'Sadesh Theshan Wijekoon12',{
//     encoding:'utf-8'
// },(err)=>{
//  if(err){
//    log(err)
//  }else{
//     log("File has been set ")
//  }
// })

appendFile(join(__dirname,'write.js'),
`
 const a ="Sadesh";
 const c= [1,2,3,4,5];

 console.log(a);
 console.log(c[2]);
`
,{
    encoding:'utf-8'
},(err)=>{
    if(err){
        log(err)
    }else{
        log('data has been set sucessfully'); 
    }
})