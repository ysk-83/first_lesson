'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        }
        else {
            alert('Произошла ошибка');
        }
    },
    rememberMyFilms: function () {
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
    },
    showMyDb: function () {
        if(!personalMovieDB.privat) {
            console.log(personalMovieDB);
        } else {
            console.log('Доступ запрещен!!!');
        }
    },
    writeYourGenres: function () {
        for(let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр?`);
            if(personalMovieDB.genres[i] !== null || personalMovieDB.genres[i] !== '') {
                personalMovieDB.genres.forEach(function() {
                    console.log(`Любимый жанр №${i + 1} - это ${personalMovieDB.genres[i]}`);
                });    
            } else {
                alert('Введите жанр фильма');
                i--;
            }    
        }    
    },
    toogleVisibleMyDb: function() {
        personalMovieDB.privat ? personalMovieDB.privat = false : personalMovieDB.privat = true;
    }
};































