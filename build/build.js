require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var shell = require('shelljs')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

var spinner = ora('building for production...')//一种loading效果
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)

//移除之前编译生成的文件 assetsPath目录下的
shell.rm('-rf', assetsPath)
//重新创建assetsPath空文件夹用于放本次编译产生的文件
 shell.mkdir('-p',assetsPath)

//复制一些静态文件
shell.config.silent = true
shell.cp('-R', 'static/*', assetsPath)
shell.config.silent = false

//webpack编译
webpack(webpackConfig, function (err, stats) {//webpack进行编译
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({//输出编译的信息
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')
  })

