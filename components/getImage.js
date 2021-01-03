import fs from "fs";
import fetch from "isomorphic-unfetch";

const storeImage = (name, resp) =>
  // eslint-disable-next-line no-undef
  new Promise((resolve, reject) => {
    const fileStream = fs.createWriteStream(`${process.cwd()}/images/${name}`);
    if (!resp || !resp.body) {
      reject("no body on fetch response");
    } else {
      resp.body.pipe(fileStream);
      fileStream.on("finish", () => {
        resolve();
      });
      fileStream.on("error", (err) => {
        reject(err);
      });
    }
  });

const getUnsplashImage = async (photo) => {
  const resp = await fetch(`${photo}`);
  const name = photo.split("wp-content/")[1].replace(/\//g, "_");

  await storeImage(name, resp);
  return `/images/${name}`;
};

export default getUnsplashImage;
