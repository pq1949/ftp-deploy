const gulp = require('gulp')
const version = require('gulp-update-version')

gulp.task('version', () => {
  gulp.src('./package.json')
    .pipe(version({type:'patch'}))
    .pipe(gulp.dest('./'))
})

// major: 1.0.0
// minor: 0.1.0
// patch: 0.0.2  default
// prerelease: 0.0.1-2
