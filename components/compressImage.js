var fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);

export const compressImage = (path) => {
  // eslint-disable-next-line no-undef
  return new Promise((resolve, reject) => {
    require("imagemin")([path], {
      plugins: [
        require("imagemin-mozjpeg")({
          quality: 70,
        }),
        require("imagemin-pngquant")({
          speed: 4,
          quality: [0.6, 0.8],
        }),
      ],
    })
      .then((file) => {
        writeFile(path, file[0].data).then(() => {
          resolve();
        });
      })
      .catch((error) => {
        console.log(`Something happened: ${error}`);
        reject();
      });
  });
};
