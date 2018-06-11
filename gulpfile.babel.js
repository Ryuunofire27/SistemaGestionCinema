import gulp from 'gulp';
import babel from 'gulp-babel';
import pug from 'gulp-pug';
import browserSync from 'browser-sync';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import cssnano from 'cssnano';
import imagemin from 'gulp-imagemin';

const server = browserSync.create();

const postCSSPlugins = [
	cssnano({
		autoprefixer: {
			add: true
		}
	})
];

gulp.task('es6', ()=>{
	gulp.src('./dev/js/*.js')
		.pipe(babel({
			"presets": [
				"env",
			]
		}))
		.pipe(gulp.dest('./public/js'));
});

gulp.task('img', () => {
	gulp.src('./dev/img/*.*')
		.pipe(imagemin({
			interlaced: true,
			progressive: true,
			optimizationLevel: 5,
			svgoPlugins: [{removeViewBox: true}]
		}))
		.pipe(gulp.dest('./public/img'));
});

gulp.task('sass', ()=>{
	gulp.src('./dev/scss/*.scss')
		.pipe(sass())
		.pipe(postcss(postCSSPlugins))
		.pipe(gulp.dest('./public/css'))
		.pipe(server.stream({match: '**/*.css'}));
});

gulp.task('pug', ()=>{
	gulp.src('./dev/pug/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('./public'))
});

gulp.task('default', ()=>{
	server.init({
		server: {
			baseDir: './public'
		}
	});
	gulp.run('pug', 'sass', 'img', 'es6');
	gulp.watch('./dev/js/*.js', ['es6', server.reload]);
	gulp.watch('./dev/pug/**/*.pug', ['pug', server.reload]);
	gulp.watch('./dev/scss/**/*.scss', ['sass']);
	gulp.watch('./dev/img/*.*',['img', server.reload]);
});