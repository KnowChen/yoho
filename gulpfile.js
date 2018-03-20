// 引入包
var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var uglify   = require('gulp-uglify');
var concat   = require('gulp-concat');
var connect  = require('gulp-connect');
var sass     = require('gulp-ruby-sass');

// task命令：新建任务
/*gulp.task('minifyCss', function () {
	// src命令：指定操作的文件
	return gulp.src('./src/style/*.css').pipe(cleanCss()).pipe(concat('all.css')).pipe(gulp.dest('./dist/style/'));
});*/

// 操作Sass
gulp.task('sass', function () {
	return sass('./src/scss/*.scss', {
		style: 'expanded'
	}).pipe(gulp.dest('./dist/style/'))
});

// 压缩JS
gulp.task('minifyJs', function () {
	return gulp.src('./src/js/*.js').pipe(gulp.dest('./dist/js/'));
});


// 新建刷新任务
gulp.task('reload', ['sass', 'minifyJs'], function () {
	return gulp.src('./src/index.html').pipe(connect.reload());
});


// 新建默认的任务
gulp.task('default', ['sass', 'minifyJs'], function () {
	// 开启服务器
	connect.server({
		livereload: true
	});

	// 监听命令
	gulp.watch(['./src/scss/*.scss', './src/js/*.js'], ['reload']);
});