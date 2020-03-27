// 组件演示路由
const TabNav = r => require.ensure([], () => r(require('@/components/tab-nav/demo.vue')), 'tabsNav')
const ProcessCircle = r => require.ensure([], () => r(require('@/components/process-circle/demo.vue')), 'ProcessCircle')
const IndexList = r => require.ensure([], () => r(require('@/components/index-list/demo.vue')), 'CountryAreaCode')
const Swiper = r => require.ensure([], () => r(require('@/components/swiper/demo.vue')), 'Swiper')
const Overlay = r => require.ensure([], () => r(require('@/components/overlay/demo.vue')), 'Overlay')
const Dialog = r => require.ensure([], () => r(require('@/components/dialog/demo.vue')), 'Dialog')
const Audio = r => require.ensure([], () => r(require('@/components/audio/demo.vue')), 'Audio')
const Grade = r => require.ensure([], () => r(require('@/components/grade/demo.vue')), 'Grade')

const QNUploader = r => require.ensure([], () => r(require('@/components/qiniuUpload/index.vue')), 'QNUploader')
const MKAudio = r => require.ensure([], () => r(require('@/components/mkAudio/index.vue')), 'MKAudio')
const Toast = r => require.ensure([], () => r(require('@/components/toast/demo.vue')), 'Toast')
const MessageBox = r => require.ensure([], () => r(require('@/components/message-box/demo.vue')), 'MessageBox')
const NumberScroll = r => require.ensure([], () => r(require('@/components/number-scroll/demo.vue')), 'NumberScroll')

const basePath = ''

export default [{
        path: `/qiniu-uploader`,
        name: 'QNUploader',
        component: QNUploader,
        meta: {
            title: '七牛上传控件',
            icon: 'icon-shangchuan',
            keepAlive: true
        }
    },
    {
        path: `/toast`,
        name: 'Toast',
        component: Toast,
        meta: {
            title: 'Toast 提示',
            icon: 'icon-tishi',
            keepAlive: true
        }
    },
    {
        path: '/message-box',
        name: 'MessageBox',
        component: MessageBox,
        meta: {
            title: 'MessageBox 对话框',
            icon: 'icon-alert',
            keepAlive: false
        }
    },
    {
        path: `/tab-nav`,
        name: 'TabNav',
        component: TabNav,
        meta: {
            title: 'Tab标签切换',
            icon: 'icon-tab', //iconfont图标
            keepAlive: true
        }
    },
    {
        path: `/index-list`,
        name: 'IndexList',
        component: IndexList,
        meta: {
            title: '楼层导航选择',
            icon: 'icon-diququhao',
            keepAlive: true
        }
    },
    {
        path: `/process-circle`,
        name: 'ProcessCircle',
        component: ProcessCircle,
        meta: {
            title: '进度圈',
            icon: 'icon-jinduquan',
            keepAlive: true
        },
        isPro: process.env.VUE_APP_ISPRO
    },
    {
        path: `/swiper`,
        name: 'Swiper',
        component: Swiper,
        meta: {
            title: 'Swiper 轮播组件',
            icon: 'icon-lunbo',
            keepAlive: true
        },
        isPro: process.env.VUE_APP_ISPRO
    },
    {
        path: `/overlay`,
        name: 'Overlay',
        component: Overlay,
        meta: {
            title: 'Overlay 浮层',
            icon: 'icon-fuceng',
            keepAlive: true
        },
        isPro: process.env.VUE_APP_ISPRO
    },
    {
        path: `/dialog`,
        name: 'Dialog',
        component: Dialog,
        meta: {
            title: 'Dialog 弹出框',
            icon: 'icon-danchukuang',
            keepAlive: true
        },
        isPro: process.env.VUE_APP_ISPRO
    },
    {
        path: `/audio`,
        name: 'Audio',
        component: Audio,
        meta: {
            title: '音频播放',
            icon: 'icon-yinpin',
            keepAlive: true
        },
        isPro: process.env.VUE_APP_ISPRO
    },
    {
        path: `/mkAudio`,
        name: 'MKAudio',
        component: MKAudio,
        meta: {
            title: '音频播放器',
            icon: 'icon-bofangqi',
            keepAlive: false
        },
        isPro: process.env.VUE_APP_ISPRO
    },
    {
        path: `/grade`,
        name: 'Grade',
        component: Grade,
        meta: {
            title: '星级评分',
            icon: 'icon-xingjipingfen',
            keepAlive: false
        }
    },
    {
        path: '/number-scroll',
        name: 'NumberScroll',
        component: NumberScroll,
        meta: {
            title: '数字卷轴',
            icon: 'icon-daohang',
            keepAlive: false
        }
    }
]