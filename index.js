import { log } from 'node:console'
// import { appendFile, readFile, rm, writeFile } from 'node:fs'
import {readFile,writeFile,appendFile,rm} from 'node:fs/promises'
import { dirname, join } from 'node:path'
import {fileURLToPath} from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

log(__filename);
log(__dirname);

// promise api 

// readFile(join(__dirname,'read.txt'),{
//     encoding:'utf8'
// }).then((data)=>log(data))
//   .catch(err=>log(err))


  const writeFun = async (data) => {
    try {
      await writeFile(join(__dirname, 'write.js'), data, {
        encoding: 'utf-8',
      });
      log('File written successfully!');
    } catch (err) {
      log('Error writing file:', err);
    }
  };
  writeFun(`
    const a = 'Sadesh'
    console.log(a)
    `)

// callback Api

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

// appendFile(join(__dirname,'write.js'),
// `
//  const a ="Sadesh";
//  const c= [1,2,3,4,5];

//  console.log(a);
//  console.log(c[2]);
// `
// ,{
//     encoding:'utf-8'
// },(err)=>{
//     if(err){
//         log(err)
//     }else{
//         log('data has been set sucessfully'); 
//     }
// })

// rm(join(__dirname,'write.js'),(err)=>{
//   if(err){
//     console.log(err);
    
//   }else{
//     log('remove sucessfully')
//   }
// })