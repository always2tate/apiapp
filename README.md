学习计划一：
（已完成）1 购买阿里云香港轻量级服务器
（已完成）2 在Linux上安装Nodejs环境，部署Node应用
（未完成）3 购买域名并进行备案（阿里云香港服务器不需要备案）
（已完成）4 进行域名DNS解析
（已完成）5 使用Nginx实现简单的反向代理
（待完成）6 搭建个人博客（网页和小程序），练习ES6的基础语法

学习计划二：
1 购买树莓派电脑
2 安装配置电脑环境
3 学习Linux操作系统相关知识（命令以及简单原理）
4 学习Python基础知识以及框架
5 利用Python写一个Web应用并部署到云服务器
6 了解Python的其他应用可能性

学习计划三：
1 学习JavaScript设计模式
2 进一步学习CSS基础知识
3 学习正则表达式
4 学习React、Vue、Angular并深入相关原理部分
5 学习基础前端组件开发流程和规范，并在GitHub上提交一个开源项目
6 复习HTTP、Git等基础知识

学习计划四：
英文语法、听力、口语


----------------------------------------------------------------
笔记：
1、Linux环境下，MongoDB相关配置：
https://blog.csdn.net/yuwenruli/article/details/8529192
https://www.cnblogs.com/zhangtingzu/p/5498545.html
2、Nginx相关内容：
https://m.toutiaocdn.com/item/6809461979623719427/?app=news_article&timestamp=1587429015&req_id=2020042108301501001405108135E3BEAA&group_id=6809461979623719427

MongoDB启动命令：
/usr/local/mongodb/bin/mongod --dbpath=/usr/local/mongodb/data --logpath=/usr/local/mongodb/logs --logappend  --port=27017 --fork
---------------------------------------------------------------------

You Don't know JavaScript

1 编译原理
    1）分词/词法分析（Tokenizing/Lexing）
    2）解析/语法解析（Parsing）
        AST（Abstract Syntax Tree）
        |
        V
    3）代码生成
2 引擎（JS Engine, 负责调度编译器和作用域，执行编译器生成的可执行代码）
3 编译器
4 作用域Scope（a well-defined set of rules for storing variables in some location, and for finding those variables at a later time. We'll call that set of rules: Scope）
5 编译时期&运行时期
6 var a = 2;
7 总结：变量的赋值操作会执行两个动作，首先编译器会在当前作用域中声明一个变量（如果之前没有声明过），然后在运行时引擎会在作用域中查找该变量，如果能够找到就会对它赋值。(确定变量已声明后进行LHS)
8 LHS & RHS
9 作用域嵌套
    作用域链（全局作用域、词法作用域、当前作用域）
    作用域链查找规则（引擎从当前的执行作用域开始查找变量，如果找不到，就向上一级继续查找。当抵达最外层的全局作用域时，无论找到还是没找到，查找过程都会停止。）
    函数作用域&块作用域
    执行环境栈
10 异常
    ReferenceError和TypeError
    LHS和RHS对未声明变量的查询行为产生的结果是不一样的:RHS->ReferenceError  LHS->在全局作用域中新创建一个变量，但是这种情况仅限于正常模式（松散懒惰模式），严格模式下也会抛出ReferenceError。
    另外RHS之后，试图对一个非函数类型的值进行函数调用，或者引用null或undefined类型的值中的属性，那么引擎会抛出另外一种类型的异常，叫作TypeError。
11 词法作用域
12 词法阶段
13 书写代码时 函数声明的位置 确定标识符的位置 提供查找条件
14 遮蔽效应
15 欺骗词法 eval（修改作用域） 和 with（新建作用域）运行时
