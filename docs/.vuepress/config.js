const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');
const headConf = require('./config/headsConf.js');
const watchConf = require('./config/watchFiles.js')
const sidebarConf = require('./config/sidebarConf.js')

module.exports = {
    title: '我的博客',
    description: '记录点滴成长',
    head: headConf,
    plugins: pluginConf,
    extraWatchFiles:watchConf,
    serviceWorker: true,
    themeConfig: {
        nav: navConf,
        sidebar:sidebarConf,
        // sidebar: 'auto',
        lastUpdated: 'Last Updated',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '编辑文档！',
        displayAllHeaders: false, //显示所有页面的标题链接
        activeHeaderLinks: false, // 当用户滚动页面，查看不同部分时，嵌套的标题链接和 URL 中的哈希值会随之更新,默认值：true
    },
}