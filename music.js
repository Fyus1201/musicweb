var stats = new Stats();
stats.setMode(1); // 0: fps, 1: ms

// Align top-left
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";

//document.body.appendChild( stats.domElement );

setInterval( function () {

    stats.begin();

    // your code goes here

    stats.end();

}, 1000 / 60 );



(function (window, jQuery) {
    jQuery(document).ready(function ($) {

        $(".music").fullpage({

            scrollingSpeed: 1000,
            easing: "easeInOutSine",
            css3: true,
            resize: true,
            navigation: true,
            navigationTooltips:["第一页","第二页","第三页","第四页","第五页"],
            scrollOverflow: true,
            sectionsColor: ["#000000", "#f9f8f2", "#fffefb", "#f9f8f2", "#b4b4b4"],

            anchors: ["page1", "page2", "page3", "page4", "page5"],
            /*渲染后*/
            afterRender: function () {
                //防止第一页加载未渲染好时 出现第二页内容
                $(".second .starmoon").css("display", "block");

                /*窗口变化*/
                $(window).resize(function () {
                    $.fn.fullpage.reBuild();
                });
            },
            /*构造后*/
            afterReBuild: function () {

            },

            /*上到下*/
            afterLoad: function(anchorLink, index){
                if(index == 1){


                }
                if(index == 2){

                }
                if(index == 3){

                }
                if(index == 4){

                }
                if($(".ip-header").is(":hidden") === false){
                    $.fn.fullpage.moveTo(1);
                }

            },
            /*下到上*/
            onLeave: function(index, nextIndex, direction){
                if(index == "1"){

                }
                if(index == "2"){

                }
                if(index == "3"){

                }
                if(index == "4"){
                    //$(".section3").find("p").fadeOut(2000);
                    //wSnum=window.clearInterval(stime);
                }
                if (nextIndex == 1 || nextIndex == 5) {
                    $("#fp-nav").hide();
                } else {
                    $("#fp-nav").show();
                }
                if (nextIndex == 3){

                }

            }
        });
        //触摸和点击事件
        $(".scroll").on("touchstart, click", function() {
            //向下滚动
            $.fn.fullpage.moveSectionDown();
        });

        $(".button").on("touchstart, click", function() {
            function logout(){
                if (confirm("是否前往新窗口")){
                    window.open("https://github.com/Fyus1201/music");
                }
            }
            logout();

        });
        $(".star").on("touchstart, click", function() {
            $.fn.fullpage.moveTo(1);
        });

        //记录鼠标进入时的坐标
        var enterX = 0, enterY = 0;
        var winW = $(window).width(), winH = $(window).height();
        /*  视差部分*/
        var originf2bW = 0, originf2bH = 0;
        var originf3bW = 0, originf3bH = 0;
        var ingHW = $(".section5 .background5 img").width();

        var na =0;
        switch(window.orientation) {
            case 0:
                na = 1;
                break;
            case 90:
                na = 2;
                break;
            case -90:
                na = 3;
                break;
            case 180:
                na = 4;
                break;
        }

        var supportsOrientationChange = "onorientationchange" in window,
            orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
        // 监听事件
        window.addEventListener(orientationEvent, function() {

            switch(window.orientation) {
                case 0:
                    na = 1;
                    break;
                case 90:
                    na = 2;
                    break;
                case -90:
                    na = 3;
                    break;
                case 180:
                    na = 4;
                    break;
            }
        }, false);

        window.addEventListener("deviceorientation", function(event) {
            switch(na) {
                case 1:
                    originf2bW = (Math.abs(event.gamma)>90?Math.abs(event.gamma)/event.gamma:event.gamma/90)*(ingHW-winW)/2;
                    originf2bH = (Math.abs(event.beta)>90?Math.abs(event.beta)/event.beta:event.beta/90)*(ingHW-winH)/2;
                    break;
                case 2:
                    originf2bH = (Math.abs(event.gamma)>90?Math.abs(event.gamma)/event.gamma:event.gamma/90)*(ingHW-winW)/2;
                    originf2bW = (Math.abs(event.beta)>90?Math.abs(event.beta)/event.beta:event.beta/90)*(ingHW-winH)/2;
                    break;
                case 3:
                    originf2bH = -(Math.abs(event.gamma)>90?Math.abs(event.gamma)/event.gamma:event.gamma/90)*(ingHW-winW)/2;
                    originf2bW = -(Math.abs(event.beta)>90?Math.abs(event.beta)/event.beta:event.beta/90)*(ingHW-winH)/2;
                    break;
                case 4:
                    originf2bW = -(Math.abs(event.gamma)>90?Math.abs(event.gamma)/event.gamma:event.gamma/90)*(ingHW-winW)/2;
                    originf2bH = -(Math.abs(event.beta)>90?Math.abs(event.beta)/event.beta:event.beta/90)*(ingHW-winH)/2;
                    break;
            }

        }, false);

        $(".section5 .div5")
            .mouseenter(function (e) {
                enterX = e.clientX;
                enterY = e.clientY;
            })
            .mousemove(function (e) {
                enterX = e.clientX;
                enterY = e.clientY;
                moveB1()
            })
            .mouseleave(function (e) {
                //originf2bW = 0;
                //originf2bH = 0;

            });

        var moveB1 = function (){
            //console.log(enterY);
            originf2bH = (enterY/winH-0.5)*(winH-ingHW);
            originf2bW = (enterX/winW-0.5)*(winW-ingHW);
        };
        //窗口变化事件

        function moveImg(){

            winH = $(window).height();
            winW = $(window).width();
            if(winW > winH){
                $(".section5 .background5 img").css({
                    width: winW*1.1 + "px"
                });
            }else{
                $(".section5 .background5 img").css({
                    width: winH*1.1 + "px"
                });
            }
            ingHW = $(".section5 .background5 img").width();

        }
        moveImg();

        $(window).resize(function() {

            moveImg();
        });

        var wSlide;
        var wSpage;

        //iphone图片滚动
        var num = 0;
        //帧动画
        function snum(){
            //var self = this;
            if(num < 50){
                document.b1.src ="http://o8yhyhsyd.bkt.clouddn.com/Unknown-" +num+ ".jpeg";
                num++;
            }else{
                num = 0;
                document.b1.src ="http://o8yhyhsyd.bkt.clouddn.com/Unknown-" +num+ ".jpeg";
            }

            if(originf2bH !== originf3bH || originf2bW !== originf3bW ){

                if((originf2bH - originf3bH) !== 0){
                    originf3bH += (originf2bH - originf3bH)*.1
                }
                if((originf2bW - originf3bW) !== 0){
                    originf3bW += (originf2bW - originf3bW)*.1
                }
                origin(originf3bW,originf3bH);

            }

        }

        var origin = function (originX,originY){
            $(".section5 .background5 img").css({

                top: (winH-ingHW)/2+originY + "px",
                left: (winW-ingHW)/2+originX + "px"

            });
        };
        origin(0,0);

        var spage = {
            pagenew: 0,// 定义变量
            num: 0,//数量
            tp:$( ".image_photos ul li" ),

            spage: function() {
                var self = this;
                var len = self.tp.length;// 获取图片的数量

                self.tp.eq(self.pagenew).css( "opacity", 1 );

                //迭代
                self.tp.each(function(index,element){

                    if(index == self.pagenew){

                    }else{
                        $(this).css( "opacity", 0 );
                    }
                    $(this).removeClass( "inout" );// 切换图片
                    $(this).removeClass( "fllash" );// 切换图片

                });   // 设置全部的图片透明度为0
                pageolder = self.pagenew;
                function fun(){
                    //切换动画
                    self.tp.eq(pageolder).addClass("inout");
                    self.tp.eq(self.pagenew).addClass("fllash");
                     }

                if( self.pagenew == len - 1 ){
                    self.pagenew = 0;  // 把page设置成0 又重新开始播放动画
                    fun();
                } else {// 继续执行下一张
                    self.pagenew++;
                    fun();
                }
            }
        };

        //图片滚动
        var slider = {
            index: 0,
            len: 189,
            el: $(".iphoneScroll-wrap"),
            slide: function() {
                var self = this;
                var left = ++self.index * 189;
                self.el.animate({left: -left + "px"}, 550, function() {
                    if (self.index == 4) {
                        self.index = 0;
                        self.el.css("left", 0);
                    }
                });
            }
        };

        $(".iphoneScroll-wrap").hover(
            function () {
                $(this).addClass("hover");
                wSlide = window.clearInterval(wSlide);
            },
            function () {
                $(this).removeClass("hover");
                wSlide = setInterval(function() {
                    slider.slide();
                }, 4000);
            }
        );

        //转轮动画
        wSlide = setInterval(function() {
            slider.slide();
        }, 4000);
        //首页动画
        wSpage = setInterval(function() {
            spage.spage();
        }, 11000);

        var fps = 50;
        var now;
        var then = Date.now();
        var interval = 4000/fps;
        var delta;
        window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

        function tick() {
            if(window.requestAnimationFrame) {
                requestAnimationFrame(tick);
                now = Date.now();
                delta = now - then;
                if (delta > interval) {
                    // 这里不能简单then=now，否则还会出现上边简单做法的细微时间差问题。例如fps=10，每帧100ms，而现在每16ms（60fps）执行一次draw。16*7=112>100，需要7次才实际绘制一次。这个情况下，实际10帧需要112*10=1120ms>1000ms才绘制完成。
                    then = now - (delta % interval);
                    snum(); // ... Code for Drawing the Frame ...
                }
            }
            else {
                setTimeout(tick, interval);
                snum();
            }
        }
        tick();
    });
})(window, jQuery);





