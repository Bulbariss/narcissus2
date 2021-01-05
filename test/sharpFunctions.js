var sharp = require("sharp");
var { promisify } = require("util");
var fs = require("fs");
var sizeOf = promisify(require("image-size"));
const makeDir = require("make-dir");
const compressImage = require("../components/compressImage.js");
const convertImageToBase64 = (image) => {
  return fs.readFileSync(`${process.cwd()}${image}`, "base64");
};

const resizeImage = (image, width) => {
  makeDir(process.cwd() + "/" + width);
  const path = `${process.cwd()}/${width}${image}`;

  // eslint-disable-next-line no-undef
  return new Promise((resolve, reject) => {
    sharp(`${process.cwd()}${image}`)
      .resize({ width: width })
      .toFile(path)
      .then(() => {
        compressImage(path).then(() => {
          resolve(`/${width}${image}`);
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
const getPlaceholder = async (image) => {
  let min = await resizeImage(image, 40);
  // let placeholder = await convertImageToBase64(`${process.cwd()}/2.jpg`);
  return await convertImageToBase64(min);
};
const getFluidImage = async (image) => {
  let imageObj = {};
  const sizes = [320, 640, 960, 1200, 1440, 2000];
  let dimensions = await getImageAspectRatio(image);
  imageObj.aspectRatio = (dimensions.width / dimensions.height).toFixed(2);
  imageObj.placeholder = await getPlaceholder(image);
  imageObj.src = image;
  let promises = sizes.map((width) => {
    if (dimensions.width >= width) {
      return resizeImage(image, width).then((i) => {
        return `${i} ${width}w`;
      });
    }
  });
  // eslint-disable-next-line no-undef
  imageObj.srcset = await Promise.all(promises).then((results) => {
    console.log(results);
    return results.join(", ");
  });
  console.log(imageObj);
  // return await resizeImage(`${process.cwd()}/123.jpg`, 40);
};
// const getFluidImage2 = async () => {
//   let a = await getFluidImage();
//   console.log(a);
// };
getFluidImage("/123.jpg");
// export const getFluidImage = async (photo) => {
//   const name = photo.split("wp-content/")[1].replace(/\//g, "_");
//   const sizes = [320, 640, 960, 1200, 1440, 2000];
// eslint-disable-next-line no-undef
//   return Promise.all([download(photo, name)]).then(() => {
//     return "m/" + name;
//   });
// };
