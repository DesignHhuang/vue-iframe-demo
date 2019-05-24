# vue-iframe-demo
vue的第三方网站嵌套
## 支持直接在public目录下的appdata.json中配置网站地址，如下：
```
{
    "urlpath": [
        {
            "path": "ambari",
            "childpath": "myhttps/www.ihuanglimin.com",
            "name": "Ambari",
            "title": "Ambari",
            "icon": "documentation"
        },
        {
            "path": "hue",
            "childpath": "myhttp/www.iopenhec.com",
            "name": "Hue",
            "title": "Hue",
            "icon": "documentation"
        },
        {
            "path": "myiframe",
            "childpath": "myhttps/cn.aliyun.com/",
            "name": "myiframe",
            "title": "测试第三方",
            "icon": "documentation"
        }
    ]
}
```
## 使用
```
npm install
```

```
npm run dev
```
