module.exports = {
    // 部署生产环境和开发环境下的URL。
    // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
    //例如 https://www.my-app.com/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 baseUrl 为 /my-app/。
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",

    // outputDir: 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）
    outputDir: "dist",
    //用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
    assetsDir: "assets",
    //指定生成的 index.html 的输出路径  (打包之后，改变系统默认的index.html的文件名)
    // indexPath: "myIndex.html",
    //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
    filenameHashing: false,

    //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint,设置为时true，eslint-loader将发出lint错误作为警告。默认情况下，警告仅记录到终端，并且不会使编译失败。
    lintOnSave: true,
    //如果你想要在生产构建时禁用 eslint-loader，你可以用如下配置
    lintOnSave: process.env.NODE_ENV !== 'production',

    //是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。(默认false)
    runtimeCompiler: false,
    //默认情况下babel-loader忽略其中的所有文件node_modules。如果要使用Babel显式转换依赖关系，可以在此选项中列出它
    transpileDependencies:[],

    // 不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建,map就是为了方便打印错误位置。
    productionSourceMap: false,
    //在生成的HTML中配置crossorigin属性<link rel="stylesheet">和<script>标记。告诉脚本而不发送用户凭据
    crossorigin:undefined,
    //默认情况下，只有以文件结尾的文件*.module.[ext]才会被视为CSS模块。将此设置为true允许您.module放入文件名并将所有*.(css|scss|sass|less|styl(us)?)文件视为CSS模块。
    //extract true在生产中，false在开发中,是否将组件中的CSS提取到独立的CSS文件中（而不是在JavaScript中内联并动态注入,在开发模式下禁用提取CSS，因为它与CSS热重新加载不兼容
    //sourceMap是否为CSS启用源映射。将此设置为true可能会影响构建性能
    //将选项传递给与CSS相关的加载器
    css:{
        modules:false,
        extract:true,
        sourceMap:false,
        loaderOptions:{
            css: {
                // options here will be passed to css-loader
            },
            postcss: {
                // options here will be passed to postcss-loader
            }
        }
    },

    // 它支持webPack-dev-server的所有选项
    devServer: {
        host: "localhost",
        port: 8080, // 端口号
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // proxy: 'http://localhost:9000' // 配置跨域处理,只有一个代理

        // 配置多个代理
        proxy: {
            "/api": {
                target: "<url>",//目标主机
                ws: true,//代理的WebSockets
                changeOrigin: true//需要虚拟主机站点
            },
            "/api2": {
                target: "<other_url>"
            }
        },
    }
}
