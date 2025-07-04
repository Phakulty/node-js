const fs = require('fs');

// readfile
// fs.readFile('./docs/blog.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })

//writefile
// fs.writeFile('./docs/blog.txt', 'hello, oyioha', () => {
//     console.log('file was written');
// });

// fs.writeFile('./docs/blog.txt1', 'hello, oyioha', () => {
//     console.log('file was written');
// });

// mkdir
if (!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('folder created');
});
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    });
}

//delete file
if (fs.existsSync('./docs/del.txt')) {
    fs.unlink('./docs/del.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    });
}