var rule = {
    title: 'NY影院',
    host: 'https://www.nycvod.com',
    homeUrl:'https://nycvod.com/vodshow/30-----------.html',
    url: '/index.php/api/vod#type=fyfilter&page=fypage',
    class_name:'电影&电视剧&短剧&纪录片',
    class_url:'1&2&50&29',
    detailUrl:'/voddetail/fyid.html',
    推荐:'.public-list-box;a&&title;.lazy&&data-src;.public-list-prb&&Text;a&&href',
    double: false,
    searchUrl: '/index.php/ajax/suggest?mid=1&wd=**',
    searchable: 2,
    quickSearch: 0,
    headers:{'User-Agent':'MOBILE_UA'},
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.cateId}}',
    filter:{
        "1":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"1"},{"n":"动作片","v":"9"},{"n":"喜剧片","v":"10"},{"n":"奇幻片","v":"11"},{"n":"科幻片","v":"12"},{"n":"恐怖片","v":"22"},{"n":"惊悚片","v":"27"},{"n":"悬疑片","v":"23"},{"n":"爱情片","v":"21"},{"n":"战争片","v":"20"},{"n":"剧情片","v":"6"},{"n":"网络电影","v":"24"},{"n":"犯罪片","v":"26"},{"n":"伦理片","v":"8"},{"n":"灾难片","v":"7"},{"n":"动画电影","v":"25"},{"n":"冒险片","v":"28"},{"n":"同性片","v":"44"},{"n":"纪录片","v":"29"},{"n":"歌舞片","v":"45"},{"n":"经典片","v":"46"}]}],
        "2":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"2"},{"n":"国产剧","v":"30"},{"n":"欧美剧","v":"47"},{"n":"日韩剧","v":"18"},{"n":"港台剧","v":"16"},{"n":"新马泰剧","v":"14"},{"n":"其他剧","v":"13"}]}],
        "3":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"3"},{"n":"国产综艺","v":"31"},{"n":"日韩综艺","v":"32"},{"n":"欧美综艺","v":"34"},{"n":"港台综艺","v":"35"},{"n":"其他综艺","v":"37"}]}],
        "4":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"4"},{"n":"日韩动漫","v":"38"},{"n":"国产动漫","v":"39"},{"n":"欧美动漫","v":"40"},{"n":"港台动漫","v":"42"},{"n":"其他动漫","v":"43"}]}]
    },
    filter_def:{
        1:{cateId:'1'},
        2:{cateId:'2'},
        3:{cateId:'3'},
        4:{cateId:'4'},
        5:{cateId:'5'}
    },
    一级:'js:let body=input.split("#")[1];let t=Math.round(new Date/1e3).toString();let key=md5("DS"+t+"DCC147D11943AF75");let url=input.split("#")[0];body=body+"&time="+t+"&key="+key;print(body);fetch_params.body=body;let html=post(url,fetch_params);let data=JSON.parse(html);VODS=data.list.map(function(it){it.vod_pic=urljoin2(input.split("/i")[0],it.vod_pic);return it});',
    二级:{
        "title":".slide-info-title&&Text;.slide-info:eq(3)--strong&&Text",
        "img":".detail-pic&&data-original",
        "desc":".fraction&&Text;.slide-info-remarks:eq(1)&&Text;.slide-info-remarks:eq(2)&&Text;.slide-info:eq(2)--strong&&Text;.slide-info:eq(1)--strong&&Text",
        "content":"#height_limit&&Text",
        "tabs":".anthology.wow.fadeInUp.animated&&.swiper-wrapper&&a",
        "tab_text":".swiper-slide&&Text",
        "lists":".anthology-list-box:eq(#id) li"
    },
    搜索:'json:list;name;pic;;id',
}