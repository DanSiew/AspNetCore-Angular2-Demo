/// <binding BeforeBuild='clean, moveToLibs, moveAngularToLibs, moveAngularWebApiToLibs, moveRxjsToLibs' AfterBuild='moveToScripts' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');

var paths = {
    npmSrc: "./node_modules/",
    libTarget: "./wwwroot/libs/",
    appConfig: "./app-config/",
    appScript: "./appScripts/",
    scriptsTarget: "./wwwroot/appScripts/",
    htmlTarget: "./wwwroot/contents/"
};

gulp.task('clean', function () {
    return del([paths.scriptsTarget, paths.libTarget]);
});


var libsToMove = [
   //paths.npmSrc + '/jquery/dist/jquery.js',

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


var scrsToMove = [
   paths.appScript + '/**/**/*.js',
   paths.appConfig + '/systemjs.config.js'
];

gulp.task('moveToScripts', function () {
    return gulp.src(scrsToMove).pipe(gulp.dest(paths.scriptsTarget));
});
