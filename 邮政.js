var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    loop: true,
    speed: 1000,
    autoplay: {
        autoplayDisableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
$(function () {
    let luaytab = $('.layui-tab-content')
    for (let i = 0; i < luaytab.length; i++) {
        luaytab[i].style.display = 'none'
    }
    luaytab[0].style.display = 'block'


    let righttab = $('.concat_tabNr')
    for (let i = 0; i < righttab.length; i++) {
        righttab[0].style.display = 'block'
    }
})

function ullifun(index) {
    let luaytab = $('.layui-tab-content')
    for (let i = 0; i < luaytab.length; i++) {
        luaytab[i].style.display = 'none'
    }
    luaytab[index].style.display = 'block'

}

let $article = $('#article');
$('.ant-tabs-tab').on('mousemove', function () {
    //删除选中的样式
    $('.ant-tabs-tab').removeClass("ant-tabs-tab-active")
    //线条移动
    $article.css({
        "transform": "translate3d(" + $(this).attr('data-index') * 154 + "px, 0px, 0px)"
    });
    //选中tab样式
    this.classList.add("ant-tabs-tab-active")
});
function righttabfun(index) {
    let righttab = $('.concat_tabNr')
    for (let i = 0; i < righttab.length; i++) {
        righttab[i].style.display = 'none'
    }
    righttab[index].style.display = 'block'
}

var myChart = echarts.init(document.getElementById('buttom_map'));
var option = {
    tooltip: {
//                    show: false //不显示提示标签
        formatter: '{b}', //提示标签格式
        backgroundColor:"#fff",//提示标签背景颜色
        textStyle:{color:"#000"} //提示标签字体颜色
    },
    series: [{
        type: 'map',
        mapType: 'china',
        label: {
            normal: {
                show: true,//显示省份标签
                textStyle:{color:"#006D46"}//省份标签字体颜色
            },    
            emphasis: {//对应的鼠标悬浮效果
                show: true,
                textStyle:{color:"#006D46"}
            } 
        },
        itemStyle: {
            normal: {
                borderWidth: .5,//区域边框宽度
                borderColor: '#ffffff',//区域边框颜色
                areaColor:"#82b87a",//区域颜色
            },
            emphasis: {
                borderWidth: .5,
                borderColor: '#4b0082',
                areaColor:"#fff11c",
            }
        },
        data:[
            {name:'北京', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("北京")},
            {name:'天津', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("天津")},
            {name:'河北', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("河北")},
            {name:'山西', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("山西")},
            {name:'内蒙古', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("内蒙古")},
            {name:'辽宁', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("辽宁")},
            {name:'吉林', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("吉林")},
            {name:'黑龙江', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("黑龙江")},
            {name:'上海', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("上海")},
            {name:'江苏', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("江苏")},
            {name:'浙江', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("浙江")},
            {name:'安徽', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("安徽")},
            {name:'福建', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("福建")},
            {name:'江西', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("江西")},
            {name:'山东', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("山东")},
            {name:'河南', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("河南")},
            {name:'湖北', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("湖北")},
            {name:'湖南', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("湖南")},
            {name:'广东', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("广东")},
            {name:'广西', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("广西")},
            {name:'海南', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("海南")},
            {name:'重庆', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("重庆")},
            {name:'四川', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("四川")},
            {name:'贵州', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("贵州")},
            {name:'云南', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("云南")},
            {name:'西藏', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("西藏")},
            {name:'陕西', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("陕西")},
            {name:'甘肃', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("甘肃")},
            {name:'青海', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("青海")},
            {name:'宁夏', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("宁夏")},
            {name:'新疆', url:'/html1/folder/181312/9531-1.htm?prov='+encodeURI("新疆")}
        ]
    }],
};

myChart.setOption(option);
myChart.on('mouseover', function (params) {
    var dataIndex = params.dataIndex;
    console.log(params);
});
myChart.on('click', function(param){
    console.log(param.data.url);
    var hreff = param.data.url;
    location.href = hreff;
})
option && myChart.setOption(option);
