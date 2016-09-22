# slush-cooking-eleme-opensource
> 为开源项目生成贡献指南模板

## 开始

首先，全局安装 cooking-cli

```shell
npm install cooking-cli -g
```

然后进入你的项目目录

```shell
cooking init eleme-opensource
```

cooking 会自动下载本模板并执行。

## 使用

slush-cooking-eleme-opensource 需要你依次填入以下信息：

 - 项目名：建议使用英文
 - 项目描述（中文）：一段描述你的开源项目的文案。这段文案会出现在 CONTRIBUTING_zh-cn.md 的开头部分
 - 项目描述（英文）：上述文案的英文翻译。若不提供，则不会生成相应的 CONTRIBUTING_en-us.md
 

确认继续后，会在你的项目目录生成一个 `.github` 文件夹，里面有以下文件：
 
 - CONTRIBUTING_zh-cn.md
 - CONTRIBUTING_en-us.md（如果你填写了英文的项目描述）
 - ISSUE_TEMPLATE.md
 - PULL_REQUEST_TEMPLATE.md
 

CONTRIBUTING_zh-cn.md 和 CONTRIBUTING_en-us.md 是贡献指南，包含了项目描述、issue 规范、PR 规范和代码规范；ISSUE_TEMPLATE.md 和 PULL_REQUEST_TEMPLATE.md 则分别是 issue 模板和 PR 模板。
 
当然，如果你的项目目录原本就含有 `.github` 文件夹并且里面有上述四个文件的同名文件，你可以选择是否覆盖它们。之后，你可以自由地编辑这些文件，使它们更能体现你的项目特色。
