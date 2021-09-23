### 项目启动
```
npm install
npm run dev
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 目的
本来是想自己自己搭建一个后台管理页面的框架自己用，
但是考虑到自己搞的可能功能不全或者存在各种bug，构建的一些基础的东西，后续可能会继续构建
- 请求封装
- 跨域配置
- 登录页面
- 左侧栏导航缩放
- 动态导航(不太完善)


![在这里插入图片描述](https://img-blog.csdnimg.cn/8d28d5ad5e214959bedca28476dfdad0.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA6IeqJuWmgg==,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/c5d86b9896474bea9b0557a61d53653b.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA6IeqJuWmgg==,size_20,color_FFFFFF,t_70,g_se,x_16)



大佬有写好的,可以参考参考：
预览效果: http://panjiachen.github.io/vue-admin-template
代码: https://github.com/PanJiaChen/vue-admin-template.git


### 创建一个仓库
- 1、git init //执行了这个命令之后你会发现当前目录下多了一个 .git 文件夹，说明该目录已经是受git控制的文件了
- 2、git add . //将当前目录提交到缓冲区
- 3、git commit -m "修改" //注释说明
- 4、git branch -M main   //创建分支
- 5、git remote add origin https://github.com/klz-icon/test.git  //将本地的仓库关联到GitHub
- 6、git pull origin 分支名(main)  //上传github之前pull一下
- 7、git push -u origin main  //提交到你的仓库


### 生成并部署SSH key公钥
 ssh-keygen -t rsa -C "xxxxx@xxxxx.com"

### (所有命令都在 Git Bash 中运行)
- $ git                           查看 git 的相关命令 (git --help)
- $ git --version                 查看 git 的版本
- $ git config                    查看 git config 的相关命令
- $ git pull origin develop       从远程(origin) 的 develop 分支拉取代码


### 添加文件到仓库
- $ git add <file>              如: git add readme.txt
- $ git commit -m "description"     如: git commit -m "add readme.txt"
- $ git push origin master

### 参考博客
https://blog.csdn.net/zhuan_long/article/details/109739485