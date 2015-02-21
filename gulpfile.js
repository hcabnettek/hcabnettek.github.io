var gulp = require('gulp'),
  minifyCSS = require('gulp-minify-css');

gulp.task('style', function(){
  return gulp
    .src('css/style.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('assets'));
})
