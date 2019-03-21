const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const server = require('gulp-server-livereload');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin')

// Server function
gulp.task('server', done=>{
    gulp.src('./dist')
        .pipe(server({
            livereload: true,
            open: true,
        }));
    done();
});

// Compress pug files
gulp.task('pug', done=>{
    gulp.src('./src/index.pug')
            .pipe(pug({pretty: true}))
            .pipe(gulp.dest('./dist'));
    done();
});

// Compress sass files
gulp.task('sass', done=>{
    gulp.src('./src/styles/**/*.sass')
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(gulp.dest('./dist/assets/css'));
    done();
});

// Compress js files
gulp.task('js', done=>{
    gulp.src('./src/scripts/**/*.js')
            .pipe(concat('main.js'))
            .pipe(uglify())
            .pipe(gulp.dest('./dist/assets/js'));
    done();
});

// Compress images
gulp.task('imagemin', done=>{
    gulp.src('./src/images/**/*.*')
            .pipe(imagemin())
            .pipe(gulp.dest('dist/img'));

    done();
});

// Watch tasks
gulp.task('watch', done=>{
    gulp.watch('./src/index.pug', gulp.parallel('pug'));
    gulp.watch('./src/styles/**/*.sass', gulp.parallel('sass'));
    gulp.watch('./src/scripts/**/*.js', gulp.parallel('js'));
    gulp.watch('./src/images/**/*.*', gulp.parallel('imagemin'));

    done();
});

// Default command
gulp.task('default', gulp.series('pug', 'sass', 'js', 'imagemin', 'server', 'watch', done=>{done();}));