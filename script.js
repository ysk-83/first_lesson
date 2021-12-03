 let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
 
 let personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     privat: false,
 };

for(let i = 0; i < 2; i++) {
    let film = prompt('Один из последних просмотренных фильмов?');
    let rank = prompt('На сколько оцените его?');
    personalMovieDB.movies[film] = +rank;
    
}

console.log(personalMovieDB);




























