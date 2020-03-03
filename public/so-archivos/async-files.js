const fs = require("fs");

const file = process.argv[2];

if (!file) {
  throw new Error("Debes indicar el archivo que quieres leer");
}

const content = fs.readFile(file, function(err, content) {
  if (err) {
    return console.log(err);
  }

  const lines = content.toString().split("\n").length;
  console.log(lines);
});


/*

const fs = require("fs");

fs.mkdir("platzi/escuela-js/node", { recursive: true }, err => {
  if (err) {
    return console.log(err);
  }
});

const fs = require("fs");

fs.copyFile("naranja.txt", "limon.txt", err => {
  if (err) {
    console.log(err);
  }

  console.log("naranja.txt fue copiado como limon.txt");
});
const fs = require("fs");

const files = fs.readdir(__dirname, (err, files) => {
  if (err) {
    return console.log(err);
  }

  console.log(files);
});
*/