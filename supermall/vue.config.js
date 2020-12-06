const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('./src'))
            .set('assets', resolve('./src/assets'))
            .set('components', resolve('./src/components'))
            // .set('router', resolve('./src/router'))  this.$router可以直接拿到
            // .set('store', resolve('./src/store'))   this.$store可以直接拿到
            .set('views', resolve('./src/views'))
            .set('network', resolve('./src/network'))
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require("autoprefixer")({
                        // 配置使用 autoprefixer
                        overrideBrowserslist: ["last 15 versions"]
                    }),
                    require("postcss-pxtorem")({
                        //结果为：设计稿元素尺寸/25，比如元素宽375px,最终页面会换算成 15rem 也就是1rem(文字大小)为25px
                        rootValue: 25,
                        unitPrecision: 5,
                        propList: ['*', 'font', 'font-size', '!line-height', 'letter-spacing', 'height'],
                        selectorBlackList: [],
                        replace: true,
                        mediaQuery: false,
                        minPixelValue: 0,
                        exclude: /node_modules/i,
                        exclude: /tabbar/i,
                    }),
                ]
            }
        }
    }
}