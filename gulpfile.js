const gulp = require('gulp'),
      pug = require('gulp-pug');

let pathBuild = './dist/';
let pathSrc = './src/';

gulp.task('pug', async function () {
    return gulp.src('./src/layout/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('./'))
});
