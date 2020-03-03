//async-await = manera de escribir codigo asyncrono que se vea asyncrono
//Lo que requiere async await es que nuestra función devuelva una promesa

const promiseFunction = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("Hola mundo");
      } else {
        reject(new Error("Hello Error"));
      }
    }, 500);
  });

async function asyncAwait() {
  try {
    const msg = await promiseFunction();
    console.log("message", msg);
  } catch (error) {
    console.log("error", error);
  }
}

module.exports = { asyncAwait };
