const fs = require('fs');

const name = './database/data.json';

const saveData = (data) => {
    fs.writeFileSync(name, JSON.stringify(data));
}

const getData = () => {
    
    if( !fs.existsSync(name)){
        return null;
    }let user = JSON.parse( sessionStorage.user )

    const data = fs.readFileSync(name, {encoding: 'utf8'});

    if(data) {
        return JSON.parse(data);
    }else{
        return null;
    }
   
}

module.exports = {
    saveData,
    getData
}