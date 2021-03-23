const fs = require('fs');
const path = require('path');

const filePath = path.join(path.dirname(require.main.filename), 'data', 'wishes.json');

module.exports = class Wish {
    constructor(wish, price){
        this.title = wish;
        this.price = price;
    }

    saveWish(){
        fs.readFile(filePath, (error, fileContent) => {
            let wishes = [];

            if(!error){
                wishes = JSON.parse(fileContent);
            } else {
                console.log(error);
            }

            wishes.push(this);
            fs.writeFile(filePath, JSON.stringify(wishes), (error) => {
                console.log(error);
            });
        });
    }

    static fetchWishes(callBack){
        fs.readFile(filePath, (error, fileContent) => {
            if(error){
                callBack([]);
            }

            callBack(JSON.parse(fileContent));
        });
    }

    static deleteWish(wishItem){
        fs.readFile(filePath, (error, fileContent) =>{
            let wishes = [];
            if(!error){
                wishes = JSON.parse(fileContent);
            }

            for(let i = 0; i < wishes.length; i++){
                if(wishes[i].wish === wishItem){
                    wishes.splice(i, 1);
                    break;
                }
            }

            fs.writeFile(filePath, JSON.stringify(wishes), (error) =>{
                console.log(error);
            });
        });
    }
}