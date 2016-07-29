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
 
// Webサーバの機能です
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
    }));
});
 
// スクリプトの結合と配置を行っています
gulp.task('scripts', function() {
  return gulp.src([
    './bower_components/angular/angular.min.js',
    './bower_components/onsenui/js/onsenui_all.min.js',
    './node_modules/smoothie/smoothie.js'
  ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./javascripts/'));
});
 
// ファイルの変更を監視しています（今回は使っていません）
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
});
 
gulp.task('default', ['webserver', 'scripts', 'watch']);
