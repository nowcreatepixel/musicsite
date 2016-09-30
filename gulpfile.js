var gulp = require('gulp');
var jshint = require('gulp-jshint')
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

var src = './scss/*.scss';
var dest = 'css';

gulp.task('sass', function () {
    gulp.src('scss/*.scss').pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream: true}));  
});



gulp.task('watch', function () {

    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch(src, ['sass']);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/*.js').on('change', browserSync.reload);
    /*comment out if reloading browser on sass change is not required*/
    gulp.watch('./scss/*.scss').on('change', browserSync.reload);
    
});

gulp.task('jshint', function () {
    return gulp.src('js/main.js')
        .pipe(jshint())
    .pipe(jshint.reporter('default'));
});