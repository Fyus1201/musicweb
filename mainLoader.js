/**
 * Created by Fyus on 16/8/17.
 */
( function( window ) {

    "use strict";

    window.MainLoader = function PathLoader( el ) {
        this.el = el;
        // clear stroke
        // svg stroke属性，getTotalLength() 返回svg线条长度
        // stroke-dasharray  是指定画出的线段每段的长度
        // stroke-dashoffset 是指定每个小段的起始偏移量。
        this.el.style.strokeDasharray = this.el.style.strokeDashoffset = this.el.getTotalLength();

    };

    MainLoader.prototype._draw = function( val ) {
        this.el.style.strokeDashoffset = this.el.getTotalLength() * ( 1 - val );
    };

    MainLoader.prototype.setProgress = function( val, callback ) {
        this._draw(val);

        if( callback && typeof callback === "function" ) {
            // give it a time (ideally the same like the transition time) so that the last progress increment animation is still visible.
            // 设置延时，使得最后的加载进度条动画效果可见。

            setTimeout( callback, 200 );


        }else{

        }

    };

    MainLoader.prototype.setProgressFn = function( fn1 ) {
        if( typeof fn1 === "function" ) {
            fn1( this );
        }
    };

    // 添加到全局命名空间
    window.MainLoader =  MainLoader;

})( window );