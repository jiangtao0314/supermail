function setRem() {

    // 375 默认大小25px; 375px = 15rem ;每个元素px基础上/15
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

    //得到html的Dom元素
    let htmlDom = document.getElementsByTagName('html')[0];
    //设置根元素字体大小  375/15 = 25px
    htmlDom.style.fontSize = htmlWidth / 15 + 'px';
}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function() {
    setRem()
}