const Movie = require("./utils/index");
const yargs = require("yargs")


// using vanilla javascript input
// const app = (argvArr) =>{
//     if (input[2]==="add"){
//         const movieObj = new Movie(input[3],input[4]);
//         movieObj.add();
//     }else if (input[2]==="addMore"){
//         const movieObj = new Movie(input[3],input[4]);
//         const movie1 = new Movie(input[5],input[6]);
//         const movie2 = new Movie(input[7],input[8]);
//         const movie3 = new Movie(input[9],input[10]);
//         const movie4 = new Movie(input[11],input[12]);
//         const movie5 = new Movie(input[13],input[14]);
//         movieObj.add();
//         movie1.add();
//         movie2.add();
//         movie3.add();
//         movie4.add();
//         movie5.add();
//     }
// }
// app(process.argv)



//using Yargs to display the information
console.log(yargs.argv);

const app = () => {
	if (yargs.argv.command === "add") {
		// If add, a single movie should be added using the Movie constructor & function
		const movieObj = new Movie(yargs.argv.title, yargs.argv.actor);
		movieObj.add();
	}
	else if (yargs.argv.command === "addMore") {
		// If addMore, loop over the titles
		for (i in yargs.argv.title) {
			// Check if the actor variable is provided, but NOT given a specific value (defaulting to True)
			if (yargs.argv.actor[i] === true) {
				// If so, create the movie using the Movie constructor, passing undefined as the actor variable
				const movieObj = new Movie(yargs.argv.title[i], undefined);
				movieObj.add();
			} else {
				// otherwise, create a movie using the Movie constructor and specifying the actor via yargs.argv.actor[i]
				const movieObj = new Movie(yargs.argv.title[i], yargs.argv.actor[i]);
				movieObj.add();
			}
		}
	}
};

app();