var gulp = require('gulp');
var postcss = require('gulp-postcss');
var precss = require('precss');
var jade = require('gulp-jade');

gulp.task('css', function () {
  var processors = [
    precss
  ];
  return gulp.src('./assets/css/raw/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./assets/css/'));
});

// run this task by typing in gulp html in CLI
gulp.task('html', function() {
  return gulp.src('src/templates/**/*.jade')
      .pipe(jade()) // pipe to jade plugin
      .pipe(gulp.dest('src/')); // tell gulp our output folder
});

