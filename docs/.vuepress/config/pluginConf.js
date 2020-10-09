const moment = require('moment');
// const secretKeyConf = require('./secretKeyConf.js');

moment.locale("zh-cn")

module.exports = {
    //
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
            message: "发现新发布内容.",
            buttonText: "刷新"
        }
    },
    '@vuepress/back-to-top': true,
    // '@vuepress/google-analytics': {
    //     'ga': secretKeyConf.ga
    // },
    '@vuepress/medium-zoom': {
        selector: 'img.zoom-custom-imgs',
        options: {
            margin: 16
        }
    },
    '@vuepress/last-updated': {
        // transformer: (timestamp) => moment(timestamp).format('LLLL')
        transformer: (timestamp, lang) => {
            // 不要忘了安装 moment
            const moment = require('moment')
            moment.locale(lang)
            return moment(timestamp).fromNow()
        }
    },
    'vuepress-plugin-auto-sidebar': {
        collapsable: true, // 折叠
        titleMap: {
            openlayers: "openlayers介绍",
        },
    }
}