var rule = {
  title: "NY影院",
  host: "https://www.nycvod.com",
  homeUrl: "https://nycvod.com/vodshow/30-----------.html",
  class_name: "电视剧&短剧&电影",
  class_url: "2&50&1",
  detailUrl: "/voddetail/fyid.html",
  推荐: ".public-list-box;a&&title;.lazy&&data-src;.public-list-prb&&Text;a&&href",
  double: false,
//   searchUrl: "/index.php/ajax/suggest?mid=1&wd=**",
  searchable: 0,
  quickSearch: 0,
  headers: { "User-Agent": "MOBILE_UA" },
  filterable: 1, //是否启用分类筛选,
  filter_url:
    "/vodshow/{{fl.cateId}}-{{fl.area}}-{{fl.by}}-{{fl.class}}-----fypage---.html",
  filter: {
    1: [
      {
        key: "cateId",
        name: "类型",
        value: [
          { n: "全部", v: "1" },
          { n: "动作片", v: "9" },
          { n: "喜剧片", v: "10" },
          { n: "奇幻片", v: "11" },
          { n: "科幻片", v: "12" },
          { n: "恐怖片", v: "22" },
          { n: "惊悚片", v: "27" },
          { n: "悬疑片", v: "23" },
          { n: "爱情片", v: "21" },
          { n: "战争片", v: "20" },
          { n: "剧情片", v: "6" },
          { n: "网络电影", v: "24" },
          { n: "犯罪片", v: "26" },
          { n: "灾难片", v: "7" },
          { n: "动画电影", v: "25" },
          { n: "冒险片", v: "28" },
          { n: "纪录片", v: "29" },
          { n: "歌舞片", v: "45" },
          { n: "经典片", v: "46" },
        ],
      },
      {
        key: "area",
        name: "地区",
        value: [
            { n: "全部", v: "全部" },
            { n: "中国大陆", v: "中国大陆" },
            { n: "中国香港", v: "中国香港" },
            { n: "中国台湾", v: "中国台湾" },
            { n: "韩国", v: "韩国" },
            { n: "日本", v: "日本" },
            { n: "美国", v: "美国" },
            { n: "泰国", v: "泰国" },
            { n: "英国", v: "英国" },
            { n: "新加坡", v: "新加坡" },
            { n: "马来西亚", v: "马来西亚" },
            { n: "菲律宾", v: "菲律宾" },
            { n: "澳大利亚", v: "澳大利亚" },
            { n: "波兰", v: "波兰" },
            { n: "荷兰", v: "荷兰" },
            { n: "印度", v: "印度" },
            { n: "印度尼西亚", v: "印度尼西亚" },
            { n: "西班牙", v: "西班牙" },
            { n: "墨西哥", v: "墨西哥" },
            { n: "法国", v: "法国" },
            { n: "德国", v: "德国" },
            { n: "意大利", v: "意大利" },
            { n: "其他", v: "其他" }
        ],
      },
      {
        key: "by",
        name: "排序",
        value: [
          { n: "默认", v: "" },
          { n: "按时间", v: "time" },
          { n: "按人气", v: "hits" },
          { n: "按评分", v: "score" },
        ],
      },
      {
        key: "class",
        name: "类型",
        value: [
            { n: "全部", v: "全部" }  
        ],
      }
    ],
    2: [
      {
        key: "cateId",
        name: "类型",
        value: [
          { n: "全部", v: "2" },
          { n: "国产剧", v: "30" },
          { n: "欧美剧", v: "47" },
          { n: "日韩剧", v: "18" },
          { n: "港台剧", v: "16" },
          { n: "新马泰剧", v: "14" },
          { n: "其他剧", v: "13" },
        ],
      },
      {
        key: "area",
        name: "地区",
        value: [
            { n: "全部", v: "全部" },
            { n: "中国大陆", v: "中国大陆" },
            { n: "中国香港", v: "中国香港" },
            { n: "中国台湾", v: "中国台湾" },
            { n: "韩国", v: "韩国" },
            { n: "日本", v: "日本" },
            { n: "美国", v: "美国" },
            { n: "泰国", v: "泰国" },
            { n: "英国", v: "英国" },
            { n: "新加坡", v: "新加坡" },
            { n: "马来西亚", v: "马来西亚" },
            { n: "菲律宾", v: "菲律宾" },
            { n: "澳大利亚", v: "澳大利亚" },
            { n: "波兰", v: "波兰" },
            { n: "荷兰", v: "荷兰" },
            { n: "印度", v: "印度" },
            { n: "印度尼西亚", v: "印度尼西亚" },
            { n: "西班牙", v: "西班牙" },
            { n: "墨西哥", v: "墨西哥" },
            { n: "法国", v: "法国" },
            { n: "德国", v: "德国" },
            { n: "意大利", v: "意大利" },
            { n: "其他", v: "其他" }
        ],
      },
      {
        key: "by",
        name: "排序",
        value: [
          { n: "默认", v: "" },
          { n: "按时间", v: "time" },
          { n: "按人气", v: "hits" },
          { n: "按评分", v: "score" },
        ],
      }
    ],
    50: [
      {
        key: "class",
        name: "类型",
        value: [
            { n: "全部", v: "全部" },
            { n: "逆袭", v: "逆袭" },
            { n: "重生", v: "重生" },
            { n: "甜宠", v: "甜宠" },
            { n: "穿越", v: "穿越" },
            { n: "虐恋", v: "虐恋" },
            { n: "古装", v: "古装" },
            { n: "复仇", v: "复仇" },
            { n: "强者", v: "强者" },
            { n: "悬疑", v: "悬疑" },
            { n: "神豪", v: "神豪" },
            { n: "萌宝", v: "萌宝" }
        ],
      } 
    ]
  },
//   filter_def: {
//       2: { cateId: "2" },
//       50: { cateId: "50" },
//       1: { cateId: "1" },
//   },
  一级: 'js:let body=input.split("#")[1];let t=Math.round(new Date/1e3).toString();let key=md5("DS"+t+"DCC147D11943AF75");let url=input.split("#")[0];body=body+"&time="+t+"&key="+key;print(body);fetch_params.body=body;let html=post(url,fetch_params);let data=JSON.parse(html);VODS=data.list.map(function(it){it.vod_pic=urljoin2(input.split("/i")[0],it.vod_pic);return it});',
  二级: {
    title: ".slide-info-title&&Text;.slide-info:eq(3)--strong&&Text",
    img: ".detail-pic&&data-original",
    desc: ".fraction&&Text;.slide-info-remarks:eq(1)&&Text;.slide-info-remarks:eq(2)&&Text;.slide-info:eq(2)--strong&&Text;.slide-info:eq(1)--strong&&Text",
    content: "#height_limit&&Text",
    tabs: ".anthology.wow.fadeInUp.animated&&.swiper-wrapper&&a",
    tab_text: ".swiper-slide&&Text",
    lists: ".anthology-list-box:eq(#id) li",
  },
  搜索: "json:list;name;pic;;id",
};
