const path = require('path');
const fs = require('fs');
const request = require('request');


const dataFile = path.join(__dirname, './data.json');
const articlesPath = path.join(__dirname, './popular-articles.json')


request('https://reddit.com/r/popular.json', (err, res, body) => {

    if (err) console.log(err);

    //console.log(res)

    JSON.parse(body).data.children.forEach(item => {
        console.log(item.data.title)
    });

    fs.writeFile(dataFile, res.body, err => {
        if (err) console.log(err);
    });

});



request('https://reddit.com/r/popular.json', (err, res, body) => {

    if (err) console.log(err);
    //console.log(res)

    let currentArr = [];

    JSON.parse(body).data.children.forEach(item => {
        const currentArticle = {
            title: item.data.title,
            name: item.data.name,
            url: item.data.url
        }
        currentArr.push(currentArticle);
    });

    const data = JSON.stringify(currentArr)

    fs.writeFileSync(articlesPath, data)
});




