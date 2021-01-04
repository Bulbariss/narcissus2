import fs from "fs";
const request = require("request");
// const imagemin = require("imagemin");
// const imageminMozjpeg = require("imagemin-mozjpeg");
// const imageminPngquant = require("imagemin-pngquant");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);

async function download(url, name) {
  /* Create an empty file where we can save data */
  const file = fs.createWriteStream(`${process.cwd()}/images/m/${name}`);

  /* Using Promises so that we can use the ASYNC AWAIT syntax */
  // eslint-disable-next-line no-undef
  return await new Promise((resolve, reject) => {
    request({
      /* Here you should specify the exact link to the file you are trying to download */
      uri: url,
      gzip: true,
    })
      .pipe(file)
      .on("finish", async () => {
        console.log(`${name} is finished downloading.`);
        resolve(writeImage(name));
      })
      .on("error", (error) => {
        reject(error);
      });
  }).catch((error) => {
    console.log(`Something happened: ${error}`);
  });
}

const writeImage = (name) => {
  const srcdir = `${process.cwd()}/images/m/`;
  // eslint-disable-next-line no-undef
  return new Promise((resolve, reject) => {
    require("imagemin")([srcdir + name], {
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
        writeFile(srcdir + name, file[0].data).then(() => {
          console.log(`${name} is finished compressing.`);
          resolve();
        });
      })
      .catch((error) => {
        console.log(`Something happened: ${error}`);
        reject();
      });
  });
};

const getUnsplashImage = async (photo) => {
  const name = photo.split("wp-content/")[1].replace(/\//g, "_");

  // eslint-disable-next-line no-undef
  return Promise.all([download(photo, name)]).then(() => {
    return "m/" + name;
  });
};

export default getUnsplashImage;
