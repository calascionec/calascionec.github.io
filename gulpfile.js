const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const siteRoot = '_site';
const child = require('child_process');
const gutil = require('gulp-util');

gulp.task('jekyll', () => {
    const jekyll = child.spawn('jekyll', ['build',
        '--watch',
        '--incremental',
        '--drafts'
    ]);

    const jekyllLogger = (buffer) => {
        buffer.toString()
            .split(/\n/)
            .forEach((message) => gutil.log('Jekyll: ' + message));
    };

    jekyll.stdout.on('data', jekyllLogger);
    jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('sass', function() {
    return gulp.src('public/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/dist'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('serve', function() {
    browserSync.init({
        files: [siteRoot + '/**'],
        port: 4000,
        server: {
            baseDir: siteRoot
        },
    });

    gulp.watch('public/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'jekyll', 'serve']);