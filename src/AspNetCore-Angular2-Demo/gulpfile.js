﻿/// <binding BeforeBuild='clean, moveAngularWebApiToLibs, moveAngularToLibs, moveRxjsToLibs, moveToLibs' AfterBuild='moveToScripts, moveToHtmlCss, moveLessToContents, moveToDatas' />
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

gulp.task('clean', function () {
    return del([paths.libTarget]);
});

gulp.task('clean', function () {
    return del([paths.scriptsTarget, paths.htmlTarget]);
});


var libsToMove = [
   paths.npmSrc + '/core-js/client/shim.min.js',
   paths.npmSrc + '/zone.js/dist/zone.js',
   paths.npmSrc + '/reflect-metadata/reflect.js',
   paths.npmSrc + '/systemjs/dist/system.src.js'

];


gulp.task('moveToLibs', function () {
    return gulp.src(libsToMove).pipe(gulp.dest(paths.libTarget));
});


var angularToMove = [
   paths.npmSrc + '/@angular/**/**/*.js'
];

gulp.task('moveAngularToLibs', function () {
    return gulp.src(angularToMove).pipe(gulp.dest(paths.libTarget + '/@angular/'));
});

var angularWebApiToMove = [
   paths.npmSrc + '/angular2-in-memory-web-api/**/**/*.js'
];

gulp.task('moveAngularWebApiToLibs', function () {
    return gulp.src(angularWebApiToMove).pipe(gulp.dest(paths.libTarget + '/angular2-in-memory-web-api/'));
});

var rxjsToMove = [
   paths.npmSrc + '/rxjs/**/**/*.js'
];

gulp.task('moveRxjsToLibs', function () {
    return gulp.src(rxjsToMove).pipe(gulp.dest(paths.libTarget + '/rxjs/'));
});



gulp.task('fonts', function () {
    return gulp.src([
        paths.npmSrc + '/font-awesome/fonts/fontawesome-webfont.*',
        paths.npmSrc + '/bootstrap/fonts/*.*'
    ])
            .pipe(gulp.dest(paths.fontTarget));
});



var dataToMove = [
    paths.appScript + '/**/**/*.json', '!/**/**/tsconfig.json'
];

gulp.task('moveToDatas', function () {
    return gulp.src(dataToMove).pipe(gulp.dest(paths.scriptsTarget));
});


var scrsToMove = [
    paths.appScript + '/**/**/*.js',
    paths.appConfig + '/systemjs.config.js'
];

gulp.task('moveToScripts', function () {
    return gulp.src(scrsToMove).pipe(gulp.dest(paths.scriptsTarget));
});

var htmlcssToMove = [
    paths.appScript + '/**/**/*.html',
    paths.appScript + '/**/**/*.css',
    paths.appScript + '/**/**/*.png',
    paths.npmSrc + '/bootstrap/dist/css/bootstrap.css'
];

gulp.task('moveToHtmlCss', function () {
    return gulp.src(htmlcssToMove).pipe(gulp.dest(paths.htmlTarget));
});

var lessToMove = [
    paths.appScript + '/**/**/*.less'
];

gulp.task('moveLessToContents', function () {
    return gulp.src(lessToMove).pipe(less()).pipe(gulp.dest(paths.htmlTarget));
});

