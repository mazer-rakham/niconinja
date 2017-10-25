var gulp = require('gulp'),
    php = require('gulp-connect-php'),
    // sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber');


var reload = browserSync.reload;
function customPlumber(errTitle) {
    return plumber({
        errorHandler: notify.onError({
            title: errTitle || "Error running Gulp",
            message: "Error: <%= error.message %>",
            sound: true
        })
    });
}
gulp.task('php', function () {
    php.server({ base: 'app/', port: 8010, keepalive: true });
});
gulp.task('browser-sync', ['php'], function () {
    browserSync.init({
        proxy: 'localhost/niconinja/',
        port: 8080,
        open: true,
        notify: false
    });
});
// gulp.task('sass', function() {
// return gulp.src('app//wp-content/themes/blankslate-child/**/*.scss') // Gets all files ending with .scss in app/scss
// .pipe(customPlumber('Error Running Sass'))
// .pipe(sass())
// .pipe(gulp.dest('app/css'))
// .pipe(browserSync.reload({
//   stream: true
// }))
// });
gulp.task('app', ['browser-sync'], function () {
    gulp.watch(['wp-content/**/*.css'], [reload]);
    gulp.watch(['wp-content/**/*.php'], [reload]);
});
