const fs = require ('fs');
// const json = require ('data.json')

function loadJSON(filename = ''){
    return JSON.parse(
        fs.existsSync(filename)
        ? fs.readFileSync(filename).toString()
        : 'null'
    )
}

function saveJSON(filename='',json ='"'){
    return fs.writeFileSync(filename, JSON.stringify(json))
}

const data = loadJSON('data.json')

// ['d', 'e', 'f'].arr.forEach(element => {
//     data.files.push(element)
    
// });
data.files.push(5, ...data)

saveJSON('data.json',data)