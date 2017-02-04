var gulp = require('gulp');
var jshint = require('gulp-jshint')
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

var src = './scss/*.scss';
var partials = './scss/partials/*.scss'
var dest = 'css';

gulp.task('sass', function () {

    gulp.src('scss/*.scss').pipe(sass())
    .pipe(gulp.dest('css'))
    /*remove commented out line below when using this task*/
    .pipe(browserSync.reload({stream: true}));
});



gulp.task('watch', function () {

    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch(src, ['sass']);
    gulp.watch(partials, ['sass']);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/*.js').on('change', browserSync.reload);
    /*comment out if reloading browser on css change is not required*/
    /*gulp.watch('./css/*.css').on('change', browserSync.reload);*/

});

gulp.task('jshint', function () {
    return gulp.src('js/main.js')
        .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
