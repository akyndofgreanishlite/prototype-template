var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
});
gulp.task('sass', function() {
  return gulp.src('/styles/**/*.scss')
    .pipe(plumber(function(error) {
        gutil.log(gutil.colors.red(error.message));
        this.emit('end');
    }))
    .pipe(sass())
    .pipe(gulp.dest('/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});
gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('/styles/**/*.scss', ['sass']);
    gulp.watch('/*.html', browserSync.reload);
    gulp.watch('/scripts/**/*.js', browserSync.reload);
});
