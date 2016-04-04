/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var ts = require('gulp-typescript');

var paths = {
    npmSrc: "./node_modules/",
    libTarget: "./wwwroot/libs/",
    appConfig: "./app-config/",
    appScript: "./appScripts/",
    scriptsTarget: "./wwwroot/appScripts/",
    htmlTarget: "./wwwroot/contents/"
};

var libsToMove = [
   paths.npmSrc + '/jquery/dist/jquery.js',
   paths.npmSrc + '/angular2/bundles/angular2-polyfills.js',
   paths.npmSrc + '/es6-shim/es6-shim.js',
   paths.npmSrc + '/es6-promise/dist/es6-promise.js',
   paths.npmSrc + '/systemjs/dist/system.js',
   paths.npmSrc + '/systemjs/dist/system-polyfills.js',
   paths.npmSrc + '/rxjs/bundles/Rx.js',
   paths.npmSrc + '/angular2/es6/dev/src/testing/shims_for_IE.js',
   paths.npmSrc + '/reflect-metadata/reflect.js',
   paths.npmSrc + '/angular2/bundles/angular2.dev.js',
   paths.npmSrc + '/angular2/bundles/http.dev.js',
   paths.npmSrc + '/angular2/bundles/router.dev.js'
];


gulp.task('moveToLibs', function () {
    return gulp.src(libsToMove).pipe(gulp.dest(paths.libTarget));
});



gulp.task('buildTypescripts', function () {
    return gulp.src([
        'node_modules/angular2/typings/browser.d.ts',
        paths.appScript + '/**/*.ts'])
		.pipe(ts({
		    noImplicitAny: true,
		    "emitDecoratorMetadata": true,
		    "experimentalDecorators": true,
		    out: '*.js'
		}))
		.pipe(gulp.dest(paths.scriptsTarget));
});


var scrsToMove = [
   paths.appScript + '/**/**/*.js',
   paths.appConfig + '/config.js'
];

gulp.task('moveToScripts', function () {
    return gulp.src(scrsToMove).pipe(gulp.dest(paths.scriptsTarget));
});
