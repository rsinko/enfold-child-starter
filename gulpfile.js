const
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  babel = require('gulp-babel')
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  //browserSync = require('browser-sync').create();

// sass tasks
gulp.task('sass', () =>
  gulp.src('src/scss/style.scss')
    .pipe(postcss([autoprefixer()]))
    .pipe(sass({
      sourceComments: true,
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('enfold-child/'))
    //.pipe(browserSync.stream())
);   

// javascript tasks
gulp.task('js', () =>
  gulp.src('src/js/app.js')
  .pipe(babel({ presets: ['env'] }))
  .pipe(uglify())
  .pipe(gulp.dest('enfold-child/js/'))
);

// sass lint ftw(for better coding practices)
gulp.task('sass_lint', lintCssTask = () => {
  const gulpStylelint = require('gulp-stylelint');
  return gulp
    .src('src/scss/**/*.scss')
    .pipe(gulpStylelint({
      reporters: [
        { formatter: 'string', console: true }
      ]
    }));
});

// images optimization works with jpeg, jpg, svg, gif, png
gulp.task('images', () =>
  gulp.src('src/images/*')
    .pipe(imagemin({ verbose: true }))
    .pipe(gulp.dest('enfold-child/images/'))
);
// Just copy/paste html to distribution folder
gulp.task('php', () =>
  gulp.src('src/*.php')
    .pipe(gulp.dest('enfold-child/'))
);

// Static Server + watching html/scss/js files
gulp.task('default', ['sass', 'js', 'images', 'php'], () => {

  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/app.js', ['js']);

});
