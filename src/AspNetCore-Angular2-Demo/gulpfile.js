/// <binding BeforeBuild='01-cleanLib, 02-clean' AfterBuild='03-moveToLibs, 04-moveAngularToLibs, 05-moveAngularWebApiToLibs, 06-moveRxjsToLibs, 07-movelodashToLibs, 08-moveToScripts, 09-moveToHtmlCss, 10-fonts, 11-moveToDatas, 12-moveLessToContents' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');
var less = require('gulp-less');

var paths = {
    npmSrc: "./node_modules/",
    appConfig: "./app-config/",
    appScript: "./appScripts/",
    scriptsTarget: "./wwwroot/appScripts/",
    htmlTarget: "./wwwroot/contents/",
    libTarget: "./wwwroot/libs/",
    fontTarget: "./wwwroot/fonts/"
};

gulp.task('01-cleanLib', function () {
    return del([paths.libTarget]);
});

gulp.task('02-clean', function () {
    return del([paths.scriptsTarget, paths.htmlTarget]);
});


var libsToMove = [
   paths.npmSrc + '/core-js/client/shim.min.js',
   paths.npmSrc + '/zone.js/dist/zone.js',
   paths.npmSrc + '/reflect-metadata/reflect.js',
   paths.npmSrc + '/systemjs/dist/system.src.js',
    paths.npmSrc + '/lodash/lodash.js'

];


gulp.task('03-moveToLibs', function () {
    return gulp.src(libsToMove).pipe(gulp.dest(paths.libTarget));
});


var angularToMove = [
   paths.npmSrc + '/@angular/**/**/*.js'
];

gulp.task('04-moveAngularToLibs', function () {
    return gulp.src(angularToMove).pipe(gulp.dest(paths.libTarget + '/@angular/'));
});

var angularWebApiToMove = [
   paths.npmSrc + '/angular2-in-memory-web-api/**/**/*.js'
];

gulp.task('05-moveAngularWebApiToLibs', function () {
    return gulp.src(angularWebApiToMove).pipe(gulp.dest(paths.libTarget + '/angular2-in-memory-web-api/'));
});

var rxjsToMove = [
   paths.npmSrc + '/rxjs/**/**/*.js'
];

gulp.task('06-moveRxjsToLibs', function () {
    return gulp.src(rxjsToMove).pipe(gulp.dest(paths.libTarget + '/rxjs/'));
});

var lodashToMove = [
   paths.npmSrc + '/lodash/**/**/*.js'
];

gulp.task('07-movelodashToLibs', function () {
    return gulp.src(rxjsToMove).pipe(gulp.dest(paths.libTarget + '/lodash/'));
});


var scrsToMove = [
    paths.appConfig + '/system-config.js'
];

gulp.task('08-moveToScripts', function () {
    return gulp.src(scrsToMove).pipe(gulp.dest(paths.scriptsTarget));
});

var htmlcssToMove = [
    paths.appScript + '/**/**/*.html',
    paths.appScript + '/**/**/*.css',
    paths.appScript + '/**/**/*.png',
    paths.npmSrc + '/bootstrap/dist/css/bootstrap.css'
];

gulp.task('09-moveToHtmlCss', function () {
    return gulp.src(htmlcssToMove).pipe(gulp.dest(paths.htmlTarget));
});

gulp.task('10-fonts', function () {
    return gulp.src([
        paths.npmSrc + '/font-awesome/fonts/fontawesome-webfont.*',
        paths.npmSrc + '/bootstrap/fonts/*.*'
    ])
            .pipe(gulp.dest(paths.fontTarget));
});

var dataToMove = [
    paths.appScript + '/**/**/*.json', '!/**/**/tsconfig.json'
];

gulp.task('11-moveToDatas', function () {
    return gulp.src(dataToMove).pipe(gulp.dest(paths.scriptsTarget));
});

var lessToMove = [
    paths.appScript + '/**/**/*.less'
];

gulp.task('12-moveLessToContents', function () {
    return gulp.src(lessToMove).pipe(less()).pipe(gulp.dest(paths.htmlTarget));
});

