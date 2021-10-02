const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);

                return;
            }

            resolve({
                ok: true,
                message: 'html.index Generated!'
            });
        });
    });
};

const copyFile = () => {
    fs.copyFile('./src/style.css', './src/style.css', err => {
        if (err) {
            reject(err);

            return;
        }
        resolve({
            ok: true,
            message: 'Style Sheet Copied!'
        });
    });
};

module.exports = {writeFile, copyFile};
