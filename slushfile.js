var gulp = require('gulp')
var install = require('gulp-install')
var conflict = require('gulp-conflict')
var rename = require('gulp-rename')
var template = require('gulp-template')
var inquirer = require('inquirer')
var cookingConfig = require('cooking-config')

gulp.task('default', function (done) {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: '项目名称：',
      default: getNameProposal()
    },
    {
      type: 'input',
      name: 'descriptionCn',
      message: '项目描述（中文）：',
      default: ''
    },
    {
      type: 'input',
      name: 'descriptionEn',
      message: '项目描述（英文，不填则不生成英文版指南）：',
      default: ''
    },
    {
      type: 'input',
      name: 'github',
      message: 'Git 仓库地址：',
      default: cookingConfig.github
    },
    {
      type: 'confirm',
      name: 'moveon',
      message: 'Continue?'
    }
  ],
  function (answers) {
    if (answers.github) {
      answers.github = answers.github.replace(/\.git$/, '')
    }
    if (!answers.moveon) {
      return done()
    }
    var filesPath = [__dirname + '/template/**']
    if (!answers.descriptionEn) {
      filesPath = filesPath.concat(`!${ __dirname }/template/.github/CONTRIBUTING_en-us.md`)
    }
    
    gulp.src(filesPath, { dot: true })
      .pipe(template(answers))
      .pipe(rename(function (file) {
        if (file.basename[0] === '_') {
          file.basename = '.' + file.basename.slice(1)
        }
      }))
      .pipe(conflict('./'))
      .pipe(gulp.dest('./'))
      .pipe(install())
      .on('end', function () {
        done()
      })
      .resume()
  })
})

function getNameProposal () {
  var path = require('path')
  try {
    return require(path.join(process.cwd(), 'package.json')).name
  } catch (e) {
    return path.basename(process.cwd())
  }
}
