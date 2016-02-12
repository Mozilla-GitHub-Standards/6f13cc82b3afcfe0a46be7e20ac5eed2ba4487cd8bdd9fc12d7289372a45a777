'use strict';

var gulp = require('gulp'),
      sass = require('gulp-sass'),
      scssLint = require('gulp-scss-lint'),
      concat = require('gulp-concat'),
      rename = require('gulp-rename'),
      uglify = require('gulp-uglify'),
      cssnano = require('gulp-cssnano'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('gulp-autoprefixer'),
      jshint = require('gulp-jshint'),
      jshintStylish = require('jshint-stylish'),
      scssLintStylish = require('gulp-scss-lint-stylish'),
      compass = require('gulp-compass');


//Runs our default gulp tasks (watches, lints and minifies the JS, SCSS and CSS).
gulp.task('default', function() {
  gulp.watch('js/**/*.js', ['jshint']);
  gulp.watch('js/**/*.js', ['build-js']);
  gulp.watch('scss/**/*.scss', ['compass']);
});

gulp.task('compass', function() {
  gulp.src('scss/**/*.scss')
  //Use compass to compile the CSS.
    .pipe(compass({
      config_file: './config.rb',
      css: 'css',
      sass: 'scss'
    }))
    //Concatenate all files into one CSS file.
    .pipe(concat('netgain.css'))
    //Nanofy it down into a minified version and rename.
    .pipe(cssnano())
    .pipe(rename('netgain.min.css'))
    .pipe(gulp.dest('./css/'));
});

//Lint our SCSS using rules in .scss-lint.yml.
gulp.task('scss-lint', function() {
  return gulp.src('scss/**/*.scss')
    .pipe( scssLint({ customReport: scssLintStylish }) );
});

// Lint and hint the JS.
gulp.task('jshint', function() {
  return gulp.src('js/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// Concatenate and uglify the JS.
gulp.task('build-js', function(){
  return gulp.src('js/scripts/*.js')
    .pipe(concat('netgain.js'))
    .pipe(gulp.dest('js'))
    .pipe(rename('netgain.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});
