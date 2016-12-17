var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin');
var useref = require('gulp-useref');

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('app/dist'))
});

gulp.task('images', function(){
  return gulp.src('app/img/*.+(png|jpg|gif|svg)')
  .pipe(imagemin())
  .pipe(gulp.dest('app/dist/images'))
});

gulp.task('styles', function() {
	gulp.src('app/sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers:['> 1%'],
			cascade: false
		}))
		.pipe(gulp.dest('app/css'))
		
});
gulp.task('watch', ['styles'], function() {
	gulp.watch('app/sass/*.scss', ['styles']);
});
