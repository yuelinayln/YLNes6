import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('serve',(cb)=>{
    if(!args.watch) return cb();
    var server=liveserver.new([
        '--harmony','server/bin/www'
    ])
    server.start(); // 启动服务器
    //js ejs改变的监听
    gulp.watch(['server/public/**/*.js','server/view/**/*.ejs'],function(file){
        server.notify.apple(server,[file]);
    })
    //需要重新服务器
    gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
        server.start.bind(server())
    })
})