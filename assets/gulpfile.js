var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('scss', function() {
	gulp.src('scss/style.scss')
		.pipe(
			sass({
				outputStyle: 'nested'
			}).on('error', function(e) {
				console.error(e);
			})
		)
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(gulp.dest('css'));
});

gulp.task('default', ['scss']);

gulp.task('watch', function() {
	gulp.watch('scss/*.scss', ['scss']);
});
