const gulp = require('gulp'),
  sync = require('browser-sync');

gulp.task('default', function () {
  sync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('./**/*', sync.reload());
});
