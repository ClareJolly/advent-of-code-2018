import fs from 'fs'

const fileToString = (filepath) => {
  return fs.readFileSync(filepath, 'utf-8')
}

export default fileToString
