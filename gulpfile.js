// gulpfile.js
var gulp = require('gulp');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
 
var paths = {
  scripts: ['app/js/**/*.coffee', '!app/external/**/*.coffee']
};
 
// Web�T�[�o�̋@�\�ł�
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
    }));
});
 
// �X�N���v�g�̌����Ɣz�u���s���Ă��܂�
gulp.task('scripts', function() {
  return gulp.src([
    './bower_components/angular/angular.min.js',
    './bower_components/onsenui/js/onsenui_all.min.js'
  ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./javascripts/'));
});
 
// �t�@�C���̕ύX���Ď����Ă��܂��i����͎g���Ă��܂���j
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
});
 
gulp.task('default', ['webserver', 'scripts', 'watch']);
