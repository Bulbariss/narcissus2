var sharp = require("sharp");
var { promisify } = require("util");
var fs = require("fs");
var sizeOf = promisify(require("image-size"));
const makeDir = require("make-dir");

import { compressImage } from "../components/compressImage.js";
const convertImageToBase64 = (image) => {
  return fs.readFileSync(`${process.cwd()}${image}`, "base64");
};

const makeDirectory = (path) => {
  // eslint-disable-next-line no-undef
  return new Promise((resolve, reject) => {
    makeDir(path)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
};

const resizeImage = async (image, imageFolder, width) => {
  await makeDirectory(process.cwd() + imageFolder + "/" + width);
  const path = `${process.cwd()}${imageFolder}/${width}/${image}`;

  // eslint-disable-next-line no-undef
  return new Promise((resolve, reject) => {
    sharp(`${process.cwd()}${imageFolder}/${image}`)
      .resize({ width: width })
      .toFile(path)
      .then(() => {
        compressImage(path).then(() => {
          resolve(`${imageFolder}/${width}/${image}`);
        });
      })
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
};

const getImageAspectRatio = (image) => {
  // eslint-disable-next-line no-undef
  return new Promise((resolve, reject) => {
    sizeOf(`${process.cwd()}${image}`)
      .then((dimensions) => {
        resolve(dimensions);
      })
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
};

const getPlaceholder = async (image, imageFolder) => {
  let min = await resizeImage(image, imageFolder, 40);
  return await convertImageToBase64(min);
};

export const getFluidImage = async (image) => {
  const temp = image.split("/");
  const imageName = temp.pop();
  const imageFolder = "/public" + temp.join("/");
  let imageObj = {};
  const sizes = [320, 640, 960, 1200, 1440, 2000];
  let dimensions = await getImageAspectRatio(image);

  imageObj.aspectRatio = (dimensions.width / dimensions.height).toFixed(2);

  imageObj.placeholder =
    `data:image/${dimensions.type};base64,` +
    (await getPlaceholder(imageName, imageFolder));

  imageObj.src = `./images/${imageName}`;

  let promises = sizes.map((width) => {
    if (dimensions.width >= width) {
      return resizeImage(imageName, imageFolder, width).then(() => {
        return `./images/${width}/${imageName} ${width}w`;
      });
    }
  });

  // eslint-disable-next-line no-undef
  imageObj.srcset = await Promise.all(promises).then((results) => {
    return results.join(", ");
  });
  return imageObj;
};
