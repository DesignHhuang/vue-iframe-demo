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

一般都需要在需要的嵌套的网页代码中修改X-FRAME-OPTIONS来确认可以被iframe。
如果是HUE的话,还需要修改hue/desktop/core/src/desktop/templates/common_header_footer_components.mako把HUE页面置为顶层的代码注释掉。
