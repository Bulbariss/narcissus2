import fs from "fs";
import { compressImage } from "./compressImage.js";
const request = require("request");
// const imagemin = require("imagemin");
// const imageminMozjpeg = require("imagemin-mozjpeg");
// const imageminPngquant = require("imagemin-pngquant");

async function download(url, name) {
  /* Create an empty file where we can save data */
  const path = `${process.cwd()}/public/images/${name}`;
  const file = fs.createWriteStream(path);

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
        resolve(compressImage(path));
      })
      .on("error", (error) => {
        reject(error);
      });
  }).catch((error) => {
    console.log(`Something happened: ${error}`);
  });
}

const getUnsplashImage = async (photo) => {
  const name = photo.split("wp-content/")[1].replace(/\//g, "_");

  // eslint-disable-next-line no-undef
  return Promise.all([download(photo, name)]).then(() => {
    return name;
  });
};

export default getUnsplashImage;
