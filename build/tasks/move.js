'use strict';

var gulp = require('gulp');

gulp.task('move', [], function() {
  gulp.src("./googled7479385bda29208.html")
        .pipe(gulp.dest("./dist/"));
  return gulp.src("./CNAME")
        .pipe(gulp.dest("./dist/"));
});
