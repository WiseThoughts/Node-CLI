const movieArr = [];
//Arr is short for array


class Movie {
    constructor(title="Add a Movie", actor="No Actor Input"){
        this.title = title;
        this.actor = actor;
    }
    add(){
        movieArr.push(this);
        console.log(movieArr)
    }
}

module.exports = Movie;