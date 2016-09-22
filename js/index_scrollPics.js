//滚动广告
var len = $(".num > li").length;
var index = 0;  //图片序号
var adTimer;
$(".num li").mouseover(function() {
    index = $(".num li").index(this);  //获取鼠标悬浮 li 的index
    showImg(index);
}).eq(0).mouseover();
//滑入停止动画，滑出开始动画.
$('#scrollPics').hover(function() {
    clearInterval(adTimer);
}, function() {
    adTimer = setInterval(function() {
        showImg(index)
        index++;
        if (index == len) {       //最后一张图片之后，转到第一张
            index = 0;
        }
    }, 3000);
}).trigger("mouseleave");
function showImg(index) {
    var adWidth = $("#scrollPics").width();
    $(".slider").stop(true, false).animate({
        "left": -adWidth* index + "px"    //改变 marginLeft 属性的值达到轮播的效果
    }, 1000);
    $(".num li").removeClass("on")
        .eq(index).addClass("on");
}