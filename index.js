import { log } from 'node:console'
import { appendFile, readFile, readFileSync, rm, writeFile, writeFileSync } from 'node:fs'
// import {readFile,writeFile,appendFile,rm, rmdir} from 'node:fs/promises'
import { dirname, join } from 'node:path'
import {fileURLToPath} from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

log(__filename);
log(__dirname);

//   const data = readFileSync(join(__dirname,"write.js"),{
//     encoding:"utf8"
//   })

//   log(data);

  writeFileSync(join(__dirname,'write.js'),`
  const v = "Sadesh"
  `)