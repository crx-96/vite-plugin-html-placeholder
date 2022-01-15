# vite-plugin-html-placeholder

一个vite的插件，用来替换html文件中的字符串

# 使用

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8"/>
    <link rel="icon" href="/static/image/favicon.png"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>
        <!-- 占位符的写法 -->
        <!= TITLE =!>
    </title>
</head>

<body>
<div id="root"></div>
<script type="module" src="/src/main.tsx"></script>
</body>

</html>
```

```js
import {HtmlReplacePlugin} from "vite-plugin-html-placeholder";
import {defineConfig} from 'vite';

export default defineConfig({
    plugins: [
        HtmlReplacePlugin({
            title: "标题",
        })
    ]
})
```