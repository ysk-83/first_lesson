'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && numberOfFilms <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
    }
    else {
        alert('Произошла ошибка');
    }
}
detectPersonalLevel();


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let film = prompt('Один из последних просмотренных фильмов?');
        let rank = prompt('На сколько оцените его?');
    
        if(film != null && rank != null && film != '' && rank != '' && film.length < 50) {
            personalMovieDB.movies[film] = +rank;
        } else {
            alert('Введите название фильма и оценку');
            i--;
        }
    }
}
rememberMyFilms();

function showMyDb() {
    if(!personalMovieDB.privat) {
        console.log(personalMovieDB);
    } else {
        console.log('yeee!');
    }
}
showMyDb();

function writeYourGenres() {
    for(let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
    }
}
writeYourGenres();

console.log(personalMovieDB);




























