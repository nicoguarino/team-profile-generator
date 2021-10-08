const fs = require('fs');

//dynamically creates index.html file in dist folder
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

// copies script.css file over to dist folder
const copyFile = () => {
	return new Promise((resolve, reject) =>{
		fs.copyFile('./src/style.css', './dist/style.css', err => {
			if (err) {
					reject(err);

					return;
			}
			resolve({
					ok: true,
					message: 'Style Sheet Copied!'
			});
		});
	});
};

module.exports = {writeFile, copyFile};
