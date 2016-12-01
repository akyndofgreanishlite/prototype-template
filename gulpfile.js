var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var sass = require('gulp-sass');

// var plumber = require('gulp-plumber');
// var gutil = require('gulp-util');

var paths = {
  scss: '',
  css: '',
  html: ''
};

gulp.task('browser-sync', function() {
  browserSync.init(['css/*.css', 'js/*.js'], {
    server: // {
      // baseDir:
      "./"
    // },
    // proxy: {
    //   target: "localhost:8080", // can be [virtual host, sub-directory, localhost with port]
    //   ws: true // enables websockets
    // }
  });
  // gulp.watch('./styles/**/*.scss', ['sass']);
  // gulp.watch('*.html').on("change", reload);
  // gulp.watch('./js/**/*.js').on("change", reload);
});

gulp.task('sass', function() {
  return gulp.src("styles/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./"))
    .pipe(browserSync.reload({ stream: true }));
});



gulp.task('default', ['sass', 'browser-sync'], function() {
  gulp.watch('./styles/**/*.scss', ['sass']);
  gulp.watch('./*.html', browserSync.reload);
  gulp.watch('./scripts/**/*.js', browserSync.reload);
});
