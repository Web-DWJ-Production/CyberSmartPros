var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var runSequence = require('run-sequence');
var del = require('del');

var gulpSequence = require('gulp-sequence');
var gfi = require("gulp-file-insert");
var merge = require('merge-stream');

var config = {
  src: {
    appJs:[		
      'app/assets/js/config/*.js',
      'app/assets/js/components/*.js',
      'app/assets/js/directives/*.js',
      'app/assets/js/services/*.js'
    ],
    appLess: [
      'app/assets/less/*.less'
    ],
    appImgs: [
      'app/assets/images/**'
    ],
    libsJs: [
      'app/assets/libs/jquery/dist/jquery.min.js',
      'app/assets/libs/bootstrap/dist/js/bootstrap.min.js',
      'app/assets/libs/angular/angular.min.js',
      'app/assets/libs/angular-sanitize/angular-sanitize.min.js',
      'app/assets/libs/angular-material/angular-material.min.js',
      'app/assets/libs/angular-animate/angular-animate.min.js',
      'app/assets/libs/angular-aria/angular-aria.min.js',
      'app/assets/libs/angular-messages/angular-messages.min.js',      
      'app/assets/libs/angular-bootstrap/ui-bootstrap.min.js',
      'app/assets/libs/angular-bootstrap/ui-bootstrap-tpls.js',
      'app/assets/libs/angular-ui-carousel/dist/ui-carousel.min.js',
      'app/assets/libs/jquery-smooth-scroll/jquery.smooth-scroll.min.js'
    ],
    libsCSS: [
      'app/assets/libs/angular-material/angular-material.min.css',
      'app/assets/libs/bootstrap/dist/css/bootstrap.min.css',
      'app/assets/libs/font-awesome/css/font-awesome.min.css',
      'app/assets/libs/animate.css/animate.min.css',
      'app/assets/libs/angular-bootstrap/ui-bootstrap-csp.css',
      'app/assets/libs/angular-ui-carousel/dist/ui-carousel.min.css'
    ],
    libsFonts: [
      'app/assets/libs/font-awesome/fonts/**',
      'app/assets/libs/bootstrap/fonts/**'
    ],
    htmlFiles: [
        {'filename': 'index', 'locationname':'home.html'},
        {'filename': 'aboutus', 'locationname':'aboutus.html'},
        {'filename': 'executiveTeam', 'locationname':'executiveTeam.html'}
    ],
    htmlLocation: "app/views/"
  },
  dest:{
    appJs:'public/js',
    appCSS:'public/css',
    appFonts:'public/fonts',
    appImgs: 'public/images',
    base: 'public'
  }
};


gulp.task('clean', function () {
  return del([config.dest.base+'/*']);
});
gulp.task('app-js', function(){
  // Bundle all JS files into one files
  return gulp.src(config.src.appJs)
      .pipe(concat('bundle.js'))
      .pipe(gulp.dest(config.dest.appJs));
});

gulp.task('app-less', function(){
  // Build all Less files into one min CSS
  return gulp.src(config.src.appLess)
      .pipe(concat('styles.min.css'))
      .pipe(less())
      .pipe(minifyCSS())
      .pipe(gulp.dest(config.dest.appCSS));
});

gulp.task('app-imgs', function(){
  // Move all images into one the public fonts folder
  return gulp.src(config.src.appImgs)
      .pipe(gulp.dest(config.dest.appImgs));
});

gulp.task('lib-js', function(){
  // Bundle all JS Library files into one files
  return gulp.src(config.src.libsJs)
      .pipe(concat('libs.min.js'))
      .pipe(gulp.dest(config.dest.appJs));
});
gulp.task('lib-css', function(){
  // Bundle all JS Library files into one files
  return gulp.src(config.src.libsCSS)
      .pipe(concat('libs.min.css'))
      .pipe(gulp.dest(config.dest.appCSS));
});

gulp.task('lib-fonts', function(){
  // Move all fonts files into one the public fonts folder
  return gulp.src(config.src.libsFonts)
      .pipe(gulp.dest(config.dest.appFonts));
});

gulp.task('build-html', function(){
    //var fileMap = config.src.htmlFiles;
    
    var tasks = config.src.htmlFiles.map(function(fileObj){
      console.log("Building File: " + fileObj.filename);
      return gulp.src(config.src.htmlLocation + 'shared/_layout.html')
                .pipe(gfi({"/* INSERT BODY */": config.src.htmlLocation + fileObj.locationname  }))
                .pipe(rename(function(path){ path.basename = fileObj.filename; }))
                .pipe(gulp.dest(config.dest.base));      
    });
    
    return merge(tasks);
});
gulp.task('all', gulpSequence('clean', ['lib-fonts', 'lib-css', 'lib-js', 'app-imgs', 'app-js', 'app-less'], 'build-html'));