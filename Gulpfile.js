var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    changed     = require('gulp-changed')
    imagemin    = require('gulp-imagemin'),
    stripDebug  = require('gulp-strip-debug'),
    minifyCSS   = require('gulp-minify-css'),
    minifyHTML  = require('gulp-minify-html'),
    browserify  = require('gulp-browserify');

gulp.task('js', function (){
  gulp.src('js/main.js')
    .pipe(browserify())
    .pipe(uglify({ compress: true }))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('css', function (){
  gulp.src('css/**/*.css')
    .pipe(minifyCSS({keepSpecialComments:'*', keepBreaks:'*'}))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('images', function (){
  gulp.src('images/**/*')
    .pipe(changed('./public/images'))
    .pipe(imagemin())
    .pipe(gulp.dest('./public/images'));
  });

gulp.task('html', function (){
  gulp.src('./*.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./public'));
  });

gulp.task('fonts', function (){
  gulp.src('./fonts/**')
    .pipe(gulp.dest('./public/fonts'));
  });

gulp.task('data', function (){
  gulp.src('./data.json')
    .pipe(gulp.dest('./public'));
  });

gulp.task('default', ['js', 'css', 'images', 'html', 'fonts', 'data']);