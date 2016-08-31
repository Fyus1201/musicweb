/**
 * Created by Fyus on 16/8/29.
 */

//js状态判断
var loader =  new MainLoader(document.getElementById( "ip-loader-circle" )) ;
var simulationFn = function(instance) {

    var progress = 0;
    var olderProgress = 0;
    var	interval = setInterval( function() {
        progress = Math.min( progress + Math.random() * 0.1, 1 );

        if( progress > 0.7 ) {
            if($(".ip-header").is(":hidden") === false){
                if(progress === 1){
                    olderProgress = progress;
                    //取原值加随机值  与  1 之间的最小值
                    instance.setProgress( olderProgress );
                    clearInterval( interval );
                    $(".music").show();
                    $(".ip-name").addClass("ip-headermax");
                    $(".ip-loader").addClass("ip-headermax");

                    $(".ip-header").animate({"opacity":0}, 1500, function() {
                        $(".ip-header").hide();
                    });


                }else{
                    olderProgress = progress;
                    //取原值加随机值  与  1 之间的最小值
                    instance.setProgress( olderProgress );
                    //绘制进度
                }
            }else{
                progress = olderProgress;
                //取原值加随机值  与  1 之间的最小值
                instance.setProgress( olderProgress );
                //绘制进度
            }
        }else{
            olderProgress = progress;
            //取原值加随机值  与  1 之间的最小值
            instance.setProgress( olderProgress );
            //绘制进度
        }
    } ,150);
};

(function() {
    loader.setProgressFn( simulationFn );

    document.onreadystatechange = subSomething;//当页面加载状态改变的时候执行这个方法.
    function subSomething() {
        //alert(document.readyState)
        if(document.readyState == "complete"){ //当页面加载状态

        }else{

        }
    }
}());