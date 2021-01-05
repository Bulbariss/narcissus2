var fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const imagemin = require("imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");

export const compressImage = (path) => {
  // eslint-disable-next-line no-undef
  return new Promise((resolve, reject) => {
    imagemin([path], {
      plugins: [
        imageminMozjpeg({
          quality: 72,
        }),
        imageminPngquant({
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
