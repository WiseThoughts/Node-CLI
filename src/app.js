const Movie = require("./utils/index");

const input = process.argv;


if (input[2]==="add"){
    const movieObj = new Movie(input[3],input[4]);
    movieObj.add();
}