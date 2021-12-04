let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

if (numberOfFilms < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
    alert('Вы классический зритель');
} else if (numberOfFilms > 30) {
    alert('Вы киноман');
}
else {
    alert('Произошла ошибка');
}

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

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

console.log(personalMovieDB);




























