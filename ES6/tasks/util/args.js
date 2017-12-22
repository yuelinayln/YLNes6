import yargs from 'yargs';
const args=yargs
    .option('production',{
        boolean:true,
        default:false,
        describe:'first scripts'
    })
//是否需要监听开发环境中修改的文件
    .option('watch',{
        boolean:true,
        default:false,
        describe:'watch all files'
    })
//是否需要详细输出命令行执行的日志
    .option('verbose',{
        boolean:true,
        default:false,
        describe:'log'
    })
//处理映射？？
.option('sourcemaps',{
    describe:'force the creation of sourcemaps'
})
//设置服务器端口
    .option('port',{
        string:true,
        default:8080,
        describe:'server port'
    })
//表示对输入的命令行的内容以字符串进行解析
    .argv
