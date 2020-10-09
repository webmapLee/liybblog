const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');
const headConf = require('./config/headsConf.js');
const watchConf = require('./config/watchFiles.js')

module.exports = {
    title: '开发手册',
    description: '李艳斌的开发手册',
    head: headConf,
    plugins: pluginConf,
    extraWatchFiles:watchConf,
    base:'liybblog',
    serviceWorker: true,
    themeConfig: {
        nav: navConf,
        // sidebar:{
        //     '/blogs/react/':[{title:'a',path:'a'},{title:'b',path:'b'}]
        // },
        lastUpdated: 'Last Updated',
        editLinks: true,
        editLinkText: '编辑文档！',
        // displayAllHeaders: true,
        activeHeaderLinks: false, // 当用户滚动页面，查看不同部分时，嵌套的标题链接和 URL 中的哈希值会随之更新,默认值：true
    },
}