const movieArray = [];

class Movie {
    constructor(Title, actor="No Actor Input"){
        this.Title = Title;
        this.actor = actor;
    }
    add(){
        movieArray.push(this);
        console.log(movieArray)
    }
}

module.export = Movie;