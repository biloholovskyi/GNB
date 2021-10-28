const gulp = require('gulp');
const {init, reload, stream} = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const webpack = require('webpack-stream');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const pug = require('gulp-pug');

const webConfig = {
  mode: 'production',
  output: {
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
};

gulp.task('pug', function () {
  return gulp.src('app/pug/pages/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('app/build'));
})

gulp.task('default', function() {
  init({
        server: {
            baseDir: "./app"
        }
    });
    gulp.watch("app/pug/**/*.pug", function () {
        return gulp.src('app/pug/pages/*.pug')
            .pipe(pug({
                pretty: true
            }))
            .pipe(gulp.dest('app/'))
            .pipe(reload({stream: true}));
    });
    gulp.watch("app/sass/**/*.scss", function () {
        return gulp.src("app/sass/**/*.scss")
          .pipe(sass())
          .pipe(autoprefixer({
            overrideBrowserslist: ['> 0.1%'],
            cascade: false
          }))
          .pipe(cleanCSS({
            level: 2
          }))
          .pipe(gulp.dest("app/css"))
          .pipe(stream());
    });
    gulp.watch("app/js/**/*.js", function () {
      return gulp.src("app/js/index.js")
        .pipe(webpack(webConfig))
        .pipe(gulp.dest("app/buildjs"))
        .pipe(stream());
    });
});