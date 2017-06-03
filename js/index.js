var gh = 0;  //滚动条距离最上方距离

//网页窗口布局互刷新初始化和窗口大小改变事件函数
function Refresh() {  //网页刷新执行初始化页面所有布局细节
  // var gtop = document.body.scrollTop;  //滚动条距离顶部的距离
  var gtop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
  gh = gtop;  //滚动条距离最上方距离
  // var cs = document.getElementById("change_skin");
  // cs.style.width = window.screen.width*0.2+"px";  //换肤功能模块总宽度初始化
  // cs.style.left = -(window.screen.width*0.2-window.screen.width*0.2/6)-1+"px";
  // cs.style.left = -window.screen.width*0.1668+"px";
  var rt = document.getElementById("return_top");  //返回顶部按钮宽度初始化
  rt.style.width = window.screen.width*0.033+"px";
  rt.style.height = rt.style.width;
  // alert(gtop);
  if(gtop >= 140) {
    rt.style.right = "0px";
  } else {
    rt.style.right = -window.screen.width*0.033+"px";
  }
  // rt.style.right = -window.screen.width*0.033+"px";  //隐藏返回到顶部按钮
  // var bo2 = document.getElementById("button_option");
  // bo2.style.width = window.screen.width*0.2-window.screen.width*0.2/6+"px";  //换肤选择窗口初始化
  // bo2.style.height = document.body.clientHeight+"px";
  // bo2.style.height =  document.body.clientHeight+100+"px";
  // var bo1 = document.getElementById("button_open");
  // bo1.style.width = window.screen.width*0.2/6+"px";  //换肤按钮宽度初始化
  // bo1.style.height = window.screen.height*0.3+"px";  //换肤按钮高度初始化
  // bo1.style.marginTop = window.screen.height*0.25+"px";  //换肤按钮上外边距初始化
  var tm1 = document.getElementById("top_menu1");
  tm1.style.height = window.screen.height*0.055+"px";  //顶部第一个菜单高度
  if(document.body.clientWidth <= window.screen.width*0.922) {
    tm1.style.width = window.screen.width*0.922+"px";
  } else {
    tm1.style.width = "100%";
  }
  var tm1m = document.getElementById("top_menu1_middle");
  tm1m.style.width = window.screen.width*0.922+"px";  //顶部第一个菜单中间部分宽度
  for(var i = 1; i <= 14; i++) {
    var tmma = document.getElementById("tmma"+i);
    tmma.style.lineHeight = window.screen.height*0.052+"px";
    if(i >= 11) {
      tmma.style.padding = "0 "+window.screen.width*0.922*0.008+"px";
      tmma.style.lineHeight = window.screen.height*0.055+"px";
    }
    tmma.style.fontSize = window.screen.height*0.055*0.284+"px";
    tmma.style.paddingTop = window.screen.height*0.055*0.29+"px";
    tmma.style.paddingBottom = window.screen.height*0.055*0.29+"px";
    if(i <= 11) {
      var tmmsp = document.getElementById("tmmsp"+i);
      tmmsp.style.lineHeight = tm1.style.height;
      tmmsp.style.fontSize = window.screen.height*0.055*0.284+"px";
    }
  }
  var tm1mr = document.getElementById("top_menu1_middle_right");
  tm1mr.style.height = tm1.style.height;
  var tm1mru = document.getElementById("top_menu1_middle_right_info_user");
  tm1mru.style.width = window.screen.width*0.922*0.09+"px";
  var tm1mrug = document.getElementById("top_menu1_middle_right_info_usering");
  tm1mrug.style.height = "0px";
  for(var i = 1; i <= 5; i++) {
    var lit = document.getElementById("li_text"+i);
    lit.style.fontSize = window.screen.height*0.055*0.284+"px";
  }
  var tm1mrs = document.getElementById("top_menu1_middle_right_shopping");
  tm1mrs.style.width = window.screen.width*0.922*0.095+"px";
  var tm1mrsi = document.getElementById("top_menu1_middle_right_shoppinging");
  tm1mrsi.style.width = window.screen.width*0.922*0.254+"px";
  tm1mrsi.style.height = "0px";
  tm1mrs.style.marginLeft = window.screen.width*0.922*0.012+"px";
  var ssig = document.getElementById("span_shopping");
  ssig.style.lineHeight = window.screen.height*0.128+"px";
  var tm2 = document.getElementById("top_menu2");
  tm2.style.height = window.screen.height*0.13+"px";  //顶部第二个菜单高度
  if(document.body.clientWidth <= window.screen.width*0.922) {
    tm2.style.width = window.screen.width*0.922+"px";
  } else {
    tm2.style.width = "100%";
  }
  var tm2m = document.getElementById("top_menu2_middle");
  tm2m.style.width = window.screen.width*0.922+"px";  //顶部第二个菜单中间部分宽度
  var tm2mlm = document.getElementById("top_menu2_middle_leftmi");
  tm2mlm.style.width = window.screen.width*0.922*0.05+"px";
  tm2mlm.style.paddingTop = window.screen.width*0.922*0.05/4+3+"px";
  tm2mlm.style.paddingBottom = window.screen.width*0.922*0.05/5+"px";
  var tm2mlt = document.getElementById("top_menu2_middle_leftmitext");
  tm2mlt.style.height = tm2mlm.style.width;
  tm2mlt.style.lineHeight = tm2mlt.style.height;
  tm2mlt.style.fontSize = window.screen.width*0.922*0.05*0.5+"px";
  var tm2mig = document.getElementById("top_menu2_middle_imggif");
  tm2mig.style.marginTop = tm2mlm.style.paddingTop;
  var tm2mmgf = document.getElementById("top_menu2_middle_migif");
  tm2mmgf.style.height = tm2mlt.style.height;
  var tm2mmms = document.getElementById("top_menu2_middle_menus");
  tm2mmms.style.marginTop = tm2mlm.style.paddingTop;
  tm2mmms.style.height = window.screen.height*0.13*0.81+"px";
  for(var i = 1; i <= 9; i++) {
    var tm2mmmsa = document.getElementById("tmmmsa"+i);
    tm2mmmsa.style.fontSize = window.screen.height*0.13*0.16+"px";
    tm2mmmsa.style.paddingLeft = window.screen.height*0.13*0.11+"px";
    tm2mmmsa.style.paddingRight = tm2mmmsa.style.paddingLeft;
    tm2mmmsa.style.paddingTop = window.screen.height*0.13*0.22+"px";
    tm2mmmsa.style.paddingBottom =  window.screen.height*0.13*0.38+"px";
  }
  var tm2h = document.getElementById("top_menu2_hide");
  if(document.body.clientWidth <= window.screen.width*0.922) {
    tm2h.style.width = window.screen.width*0.922+"px";
  } else {
    tm2h.style.width = "100%";
  }
  tm2h.style.height = "0px";
  var tm2hm = document.getElementById("top_menu2_hide_middle");
  tm2hm.style.width = window.screen.width*0.922+"px";
  for(var i = 1; i <= 42; i++) {
    if(i != 18) {
      var u1d = document.getElementById("ultmmmsa"+i+"_d");
      u1d.style.height = window.screen.height*0.22+"px";
      var u1a2 = document.getElementById("ultmmmsa"+i+"_a2");
      u1a2.style.fontSize = window.screen.height*0.0182+"px";
      var u1p = document.getElementById("ultmmmsa"+i+"_p");
      u1p.style.paddingTop = window.screen.height*0.0104+"px";
      var u1sp = document.getElementById("ultmmmsa"+i+"_sp");
      u1sp.style.fontSize = window.screen.height*0.0156+"px";
    }
  }
  var tm2msh = document.getElementById("top_menu2_middle_search");
  tm2msh.style.height = window.screen.height*0.0651+"px";
  tm2msh.style.marginTop = window.screen.height*0.0651/2+"px";
  var input1 = document.getElementById("input1");
  input1.style.height = tm2msh.style.height;
  input1.style.border = window.screen.height*0.0013+"px solid #e0e0e0";
  // input1.style.width = window.screen.width*0.179+"px";
  input1.style.borderRight = "0px";
  input1.style.fontSize = window.screen.height*0.026+"px";
  input1.style.paddingLeft = window.screen.height*0.013+"px";
  // alert(window.screen.width);
  var input2 = document.getElementById("input2");
  input2.style.height = tm2msh.style.height;
  input2.style.border = window.screen.height*0.0013+"px solid #e0e0e0";
  // input2.style.width = window.screen.width*0.042+"px";
  input2.value = document.getElementById("foundicon1").innerText;
  input2.style.fontSize = window.screen.height*0.052+"px";
  var ip1st = document.getElementById("input1_showtext");
  ip1st.style.top = -window.screen.height*0.044+"px";
  // ip1st.style.width = window.screen.height*0.1953+"px";
  var ip1sta1 = document.getElementById("input1_showtext_a1");
  ip1sta1.style.fontSize = window.screen.height*0.0169+"px";
  var ip1sta2 = document.getElementById("input1_showtext_a2");
  ip1sta2.style.fontSize = window.screen.height*0.0169+"px";
  var tm2mshde = document.getElementById("top_menu2_middle_search_hide");
  // tm2mshde.style.width = input1.style.width;
  tm2mshde.style.height = "0px";
  tm2mshde.style.border = window.screen.height*0.0013+"px solid #FF6700";
  tm2mshde.style.borderTop = "0px";
  tm2mshde.style.borderBottom = "0px";
  // tm2mshde.style.height = window.screen.height*0.0169+"px";
  for(var i = 1; i <= 20; i++) {
    if(i <= 10) {
      var search_a = document.getElementById("search_a"+i);
      search_a.style.height = window.screen.height*0.039+"px";
    }
    var search_sp = document.getElementById("search_sp"+i);
    search_sp.style.lineHeight = window.screen.height*0.039+"px";
    if(i%2 != 0) {
      search_sp.style.fontSize = window.screen.height*0.017+"px";
    } else {
      search_sp.style.fontSize = window.screen.height*0.0156+"px";
    }
  }
  var c1 = document.getElementById("content1");  //中间第一大部分内容宽度控制
  if(document.body.clientWidth <= window.screen.width*0.922) {
    c1.style.width = window.screen.width*0.922+"px";
  } else {
    c1.style.width = "100%";
  }
  var c2 = document.getElementById("content2");  //中间第二大部分内容宽度控制
  if(document.body.clientWidth <= window.screen.width*0.922) {
    c2.style.width = window.screen.width*0.922+"px";
  } else {
    c2.style.width = "100%";
  }
  var b1 = document.getElementById("bottom1");  //底部相关信息模块一宽度控制
  if(document.body.clientWidth <= window.screen.width*0.922) {
    b1.style.width = window.screen.width*0.922+"px";
  } else {
    b1.style.width = "100%";
  }
  var b1m = document.getElementById("bottom1_middle");  //底部相关信息模块一中间宽度控制
  b1m.style.width = window.screen.width*0.922+"px";
  var b2 = document.getElementById("bottom2");  //底部相关信息模块二宽度控制
  if(document.body.clientWidth <= window.screen.width*0.922) {
    b2.style.width = window.screen.width*0.922+"px";
  } else {
    b2.style.width = "100%";
  }
  var b2m = document.getElementById("bottom2_middle");  //底部相关信息模块一中间宽度控制
  b2m.style.width = window.screen.width*0.922+"px";
  var c1m = document.getElementById("content1_middle");
  c1m.style.width = window.screen.width*0.922+"px";  //中间第一大部分内容宽度
  // alert(window.screen.width*0.922);
  var c1mio = document.getElementById("content1_middle_imginfo");
  c1mio.style.height = window.screen.height*0.665+"px";  //中间第一大部分内容中图片信息菜单高度
  var imginfo_img = document.getElementById("imginfo_img");
  imginfo_img.style.width = imginfo_img.style.width = window.screen.width*0.922*5+2+"px";
  for(var i = 1; i <= 5; i++) {
    var imginfo_img = document.getElementById("imginfo_img"+i);
    imginfo_img.style.width = window.screen.width*0.922+"px";
    imginfo_img.style.height = window.screen.height*0.665+"px";
  }
  for(var i = 1; i <= 10; i++) {
    var li = document.getElementById("c1mim_li"+i);
    li.style.height = window.screen.height*0.0612+"px";
    li.style.lineHeight = window.screen.height*0.0612+"px";
    li.style.fontSize = window.screen.height*0.01823+"px";
    var c1mimi = document.getElementById("c1mim_i"+i);
    c1mimi.style.fontSize = window.screen.height*0.026+"px";
  }
  var iimgx0 = document.getElementById("imginfo_img_xuan");
  iimgx0.style.marginTop = -window.screen.height*0.0586+"px";
  iimgx0.style.height = window.screen.height*0.026+"px";
  iimgx0.style.width = window.screen.height*0.1953+"px";
  for(var i = 1; i <= 5; i++) {
    var iimgx = document.getElementById("imginfo_img_xuan"+i);
    iimgx.style.margin = window.screen.height*0.0052+"px";
    iimgx.style.height = window.screen.height*0.01823+"px";
    iimgx.style.width = iimgx.style.height;
    iimgx.style.borderRadius = iimgx.style.height;
    iimgx.style.lineHeight = iimgx.style.height;
    iimgx.style.fontSize = window.screen.height*0.0052+"px";
    iimgx.style.border = window.screen.height*0.0052/2+"px solid #E3E3E3";
    iimgx.style.background = "rgb(137, 138, 140)";
    if(i == 1) {
      iimgx.style.borderColor = "#898A8C";
      iimgx.style.color = "#898A8C";
      iimgx.style.background = "rgba(0, 0, 0, 0)";
    }
  }
  var c1mim = document.getElementById("content1_middle_imginfo_menu");
  // c1mim.style.width = window.screen.width*0.19+"px";
  c1mim.style.marginTop = -window.screen.height*0.665+"px";
  var c1mimul = document.getElementById("content1_middle_imginfo_menu_ul");
  c1mimul.style.width = window.screen.width*0.19+"px";

  var c1mimh = document.getElementById("content1_middle_imginfo_menu_hide");
  c1mimh.style.borderTop = window.screen.height*0.0013+"px solid #E0E0E0";
  c1mimh.style.borderBottom = window.screen.height*0.00651+"px solid #E0E0E0";
  c1mimh.style.boxShadow = window.screen.height*0.0026+"px "+window.screen.height*0.0026+"px "+window.screen.height*0.05+"px rgba(0,0,0,0.5)";
  for(var i = 1; i <= 108; i++) {
    if(i == 12 || (i >= 17 && i <= 18) || (i >=33 && i <= 36) || (i >= 63 && i <= 66) || (i >= 80 && i <= 84) || (i >= 89 && i <= 90) || (i >= 95 && i <= 96) || (i >= 100 && i <= 102) || i == 108) {
      var c1mimh_li = document.getElementById("c1mimh_li"+i);
      c1mimh_li.style.height = window.screen.height*0.111+"px";
    } else {
      var c1mimh_li = document.getElementById("c1mimh_li"+i);
      c1mimh_li.style.height = window.screen.height*0.111+"px";
      c1mimh_li.style.fontSize = window.screen.height*0.01953+"px";
      var c1mimh_a = document.getElementById("c1mimh_a"+i);
      c1mimh_a.style.width = window.screen.width*0.14641+"px";
      var c1mimh_img = document.getElementById("c1mimh_img"+i);
      c1mimh_img.style.width = window.screen.width*0.0366+"px";
      c1mimh_img.style.margin = window.screen.height*0.019531+"px "+window.screen.height*0.013+"px 0px "+window.screen.height*0.026+"px";
      var c1mimh_span = document.getElementById("c1mimh_span"+i);
      c1mimh_span.style.lineHeight = window.screen.height*0.1+"px";
      var c1mimh_h4 = document.getElementById("c1mimh_h4"+i);
      c1mimh_h4.style.marginTop = window.screen.height*0.03776+"px";
      c1mimh_h4.style.marginRight = window.screen.height*0.0104+"px";
      c1mimh_h4.style.fontSize = window.screen.height*0.016927+"px";
      c1mimh_h4.style.padding = window.screen.height*0.0026+"px "+window.screen.height*0.01953+"px";
      c1mimh_h4.style.border = window.screen.height*0.0013+"px solid #F25807";
    }
    if((i >= 9 && i <= 11) || i >= 15) {
      var c1mimh_h4 = document.getElementById("c1mimh_h4"+i);
      c1mimh_h4.style.border = "0px solid #F25807";
      c1mimh_h4.style.marginTop = "0px";
      c1mimh_h4.style.marginRight = "0px";
      c1mimh_h4.style.fontSize = "0px";
      c1mimh_h4.style.padding = "0px";
      var c1mimh_a = document.getElementById("c1mimh_a"+i);
      c1mimh_a.style.width = window.screen.width*0.194729+"px";
    }
    if( i > 36) {
      var c1mimh_li = document.getElementById("c1mimh_li"+i);
      c1mimh_li.style.background = "#fff";
      var c1mimh_span = document.getElementById("c1mimh_span"+i);
      c1mimh_span.style.color = "#333333";
    }
  }
  var iimgl = document.getElementById("imginfo_img_left");
  iimgl.style.width = window.screen.width*0.03+"px";
  iimgl.style.height = window.screen.height*0.0898+"px";
  iimgl.style.marginTop = -window.screen.height*0.39+"px";
  iimgl.style.marginLeft = window.screen.width*0.19+"px";
  var iimgr = document.getElementById("imginfo_img_right");
  iimgr.style.width = window.screen.width*0.03+"px";
  iimgr.style.height = window.screen.height*0.0898+"px";
  iimgr.style.marginTop = -window.screen.height*0.39+"px";

  var c1mad = document.getElementById("content1_middle_addinfo");
  c1mad.style.marginTop = window.screen.height*0.019531+"px";
  for(var i = 1; i <= 6; i++) {
    var c1mal_td = document.getElementById("c1mal_td"+i);
    c1mal_td.style.width = window.screen.width*0.06295+"px";
    c1mal_td.style.height = window.screen.height*0.1224+"px";
    var c1mal_img = document.getElementById("c1mal_img"+i);
    c1mal_img.style.height = c1mal_td.style.height;
  }
  var c1mar = document.getElementById("content1_middle_addinfo_right");
  c1mar.style.marginTop = -window.screen.height*0.24479+"px";
  // alert(c1mad);
  for(var i = 1; i <= 3; i++) {
     var c1mar_td = document.getElementById("c1mar_td"+i);
    c1mar_td.style.width = window.screen.width*0.2441+"px";
    c1mar_td.style.height = window.screen.height*0.24479+"px";
    var c1mar_img = document.getElementById("c1mar_img"+i);
    c1mar_img.style.height = c1mar_td.style.height;
  }
  var c1msell = document.getElementById("content1_middle_sell");
  c1msell.style.marginTop = window.screen.height*0.03646+"px";
  c1msell.style.height = window.screen.height*0.5861+"px";
  var c1msellth2 = document.getElementById("content1_middle_sell_top_h2");
  c1msellth2.style.lineHeight =  window.screen.height*0.078+"px";
  c1msellth2.style.fontSize = window.screen.height*0.03125+"px";
  for(var i = 1; i <= 2; i++) {
    var c1mstopr_a = document.getElementById("c1mstopr_a"+i);
    c1mstopr_a.style.fontSize = window.screen.height*0.026+"px";
    c1mstopr_a.style.border = window.screen.height*0.0026+"px solid #E0E0E0";
  }
  var c1msbing = document.getElementById("content1_middle_sell_bottoming");
  c1msbing.style.marginLeft = "0%";
  for(var i = 1; i <= 10; i++) {
    var c1msbing_h4 = document.getElementById("c1msbing_h4"+i);
    c1msbing_h4.style.fontSize = window.screen.height*0.01823+"px";
    var c1msbing_p = document.getElementById("c1msbing_p"+i);
    c1msbing_p.style.fontSize = window.screen.height*0.015625+"px";
    var c1msbing_span = document.getElementById("c1msbing_span"+i);
    c1msbing_span.style.fontSize = window.screen.height*0.016927+"px";
  }
  var c2m = document.getElementById("content2_middle");
  c2m.style.width = window.screen.width*0.922+"px";  //中间第二大部分内容宽度
  c2m.style.paddingTop = window.screen.height*0.078+"px";
  c2m.style.paddingBottom = c2m.style.paddingTop;
  var c2mh = document.getElementById("content2_middle_hardware");  //中间第二大部分内容中硬件信息
  c2mh.style.height = window.screen.height*0.918+"px";
  var cmht1 = document.getElementById("cmht1");
  cmht1.style.fontSize = window.screen.height*0.0286+"px";
  var cmht2 = document.getElementById("cmht2");
  cmht2.style.fontSize = window.screen.height*0.021+"px";
  var cmht2 = document.getElementById("cmht3");
  cmht3.style.fontSize = window.screen.height*0.03+"px";
  for(var i = 2; i <= 9; i++) {
    var cmhct = document.getElementById("cmhct"+i);
    cmhct.style.fontSize = window.screen.height*0.017+"px";
    var cmhca = document.getElementById("cmhca"+i);
    cmhca.style.fontSize = window.screen.height*0.0195+"px";
    var cmhcp = document.getElementById("cmhcp"+i);
    cmhcp.style.fontSize = cmhct.style.fontSize;
    var money = document.getElementById("money"+i);
    money.style.fontSize = window.screen.height*0.018+"px";
  }

  var c2mc = document.getElementById("content2_middle_collocation");
  c2mc.style.height = window.screen.height*0.918+"px";
  c2mc.style.marginTop = window.screen.height*0.013+"px";
  for(var i = 1; i <= 3; i++) {
    var cmctspan = document.getElementById("cmctspan"+i);
    var cmctli4 = document.getElementById("cmctli4_"+i);
    var cmctli3 = document.getElementById("cmctli3_"+i);
    var cmctli2 = document.getElementById("cmctli2_"+i);
    var cmctli1 = document.getElementById("cmctli1_"+i);
    cmctspan.style.fontSize = window.screen.height*0.02865+"px";
    cmctli4.style.fontSize = window.screen.height*0.02+"px";
    cmctli3.style.fontSize = window.screen.height*0.02+"px";
    cmctli2.style.fontSize = window.screen.height*0.02+"px";
    cmctli1.style.fontSize = window.screen.height*0.02+"px";
    cmctli1.style.color = "#FF6700";
    cmctli1.style.borderBottom = window.screen.height*0.0033+"px solid #FF6700";
    cmctli2.style.borderBottom = "#FF6700";
    cmctli3.style.borderBottom = "#FF6700";
    cmctli4.style.borderBottom = "#FF6700";
  }
  var cmctli5 = document.getElementById("cmctli5_3");
  cmctli5.style.fontSize = window.screen.height*0.02+"px";
  cmctli5.style.borderBottom = "#FF6700";
  for(var i = 1; i <= 36; i++) {
    var threecmhct = document.getElementById("threecmhct"+i);
    threecmhct.style.fontSize = window.screen.height*0.017+"px";
    var threecmhca = document.getElementById("threecmhca"+i);
    threecmhca.style.fontSize = window.screen.height*0.0195+"px";
    var threemoney = document.getElementById("threemoney"+i);
    threemoney.style.fontSize = window.screen.height*0.018+"px";
    var threecmhcp = document.getElementById("threecmhcp"+i);
    threecmhcp.style.fontSize = window.screen.height*0.017+"px";
    var threedivhidep1 = document.getElementById("threedivhidep1_"+i);
    threedivhidep1.style.fontSize = window.screen.height*0.017+"px";
    var threedivhidep2 = document.getElementById("threedivhidep2_"+i);
    threedivhidep2.style.fontSize = window.screen.height*0.017+"px";
  }

  var c2mps = document.getElementById("content2_middle_parts");
  c2mps.style.height = window.screen.height*0.918+"px";
  c2mps.style.marginTop = window.screen.height*0.013+"px";

  
  var c2mpy = document.getElementById("content2_middle_periphery");
  c2mpy.style.height = window.screen.height*0.918+"px";
  c2mpy.style.marginTop = window.screen.height*0.013+"px";


  // cs.style.transition = "0.3s";  //事件延迟发生,实现动画效果
  // bo2.style.transition = "0.3s";
  // bo1.style.transition = "0.3s";
  rt.style.transition = "0.5s";
  // alert("fsd");



  if(!!window.ActiveXObject || "ActiveXObject" in window) { //判断是IE浏览器
    // alert("IE");
    input1.style.width = "76.6%";
    input1.style.height = window.screen.height*0.062+"px";
  }
  // if(navigator.userAgent.indexOf("Firefox") > 0) {  //判断是火狐浏览器
  //   var tmmriu = document.getElementById("top_menu1_middle_right_info_user");
  //   tmmriu.style.lineHeight = "0px";
  //   var ip1st = document.getElementById("input1_showtext");
  //   ip1st.style.top = -window.screen.height*0.048+"px";
  // }
}

function Iphone() {  //实现换肤按键的垂直居中
  // var gtop = document.body.scrollTop;  //滚动条距离顶部的距离
  var gtop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
  gh = gtop;  //滚动条距离最上方距离
  // var bo1 = document.getElementById("button_open");
  // bo1.style.marginTop = (document.body.clientHeight-window.screen.height*0.3)/2+"px";  //利用网页可见区域高和按键高度计算上边距
  // var bo2 = document.getElementById("button_option");
  // bo2.style.height = document.body.clientHeight+"px";
  var tm1 = document.getElementById("top_menu1");  //顶部第一个菜单宽度控制
  if(document.body.clientWidth <= window.screen.width*0.922) {
    tm1.style.width = window.screen.width*0.922+"px";
  } else {
    tm1.style.width = "100%";
  }
  var tm2 = document.getElementById("top_menu2");  //顶部第二个菜单宽度控制
  if(document.body.clientWidth <= window.screen.width*0.922) {
    tm2.style.width = window.screen.width*0.922+"px";
  } else {
    tm2.style.width = "100%";
  }
  var tm2h = document.getElementById("top_menu2_hide");
  if(document.body.clientWidth <= window.screen.width*0.922) {
    tm2h.style.width = window.screen.width*0.922+"px";
  } else {
    tm2h.style.width = "100%";
  }
  var c1 = document.getElementById("content1");  //中间第一大部分内容宽度控制
  if(document.body.clientWidth <= window.screen.width*0.922) {
    c1.style.width = window.screen.width*0.922+"px";
  } else {
    c1.style.width = "100%";
  }
  var c2 = document.getElementById("content2");  //中间第二大部分内容宽度控制
  if(document.body.clientWidth <= window.screen.width*0.922) {
    c2.style.width = window.screen.width*0.922+"px";
  } else {
    c2.style.width = "100%";
  }
  var b1 = document.getElementById("bottom1");  //底部相关信息模块一宽度控制
  if(document.body.clientWidth <= window.screen.width*0.922) {
    b1.style.width = window.screen.width*0.922+"px";
  } else {
    b1.style.width = "100%";
  }
  var b2 = document.getElementById("bottom2");  //底部相关信息模块二宽度控制
  if(document.body.clientWidth <= window.screen.width*0.922) {
    b2.style.width = window.screen.width*0.922+"px";
  } else {
    b2.style.width = "100%";
  }
  // document.getElementById("button_option").innerHTML += document.body.clientHeight+"<br/>";
}
function Roll() {  //窗口滚动条滚动触发事件
  // var gtop = document.body.scrollTop;  //滚动条距离顶部的距离
  var gtop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
  var rt = document.getElementById("return_top");  //返回顶部按钮宽度初始化
  if(gtop >= 140) {
    rt.style.right = "0px";
  } else {
    rt.style.right = -window.screen.width*0.033+"px";
  }
  gh = gtop;  //滚动条距离最上方距离
}
//========================鼠标与换肤唤醒菜单按钮间的事件========================
function MouseoverBO1(e) {  //鼠标移入换肤唤醒菜单按钮事件
  // var bo1 = document.getElementById("button_open");
  // var bo2 = document.getElementById("button_option");
  bo1.style.background = "yellow";
  // var cs = document.getElementById("change_skin");
  // if(cs.style.left != "0px") {
  //   cs.style.background = "rgba(61,163,239,0.5)";
  //   cs.style.height = "100%";
  // }
  var el = e.target;
  el.style.cursor = "pointer";
}
function MouseoutBO1(e) {  //鼠标移出
  // var cs = document.getElementById("change_skin");
  // cs.style.background = "rgba(61,163,239,0)";
  // cs.style.height = "0px";
  // var bo1 = document.getElementById("button_open");
  // bo1.style.background = "rgba(255,103,0,0.3)";
  var el = e.target;
  el.style.cursor = "default";
}
function MousedownBO1(e) {  //单击事件
  // var cs = document.getElementById("change_skin");
  // // var bo2 = document.getElementById("button_option");
  // if(cs.style.left != "0px") {
  //   cs.style.left = "0px";
  // } else {
  //   cs.style.left = -(window.screen.width*0.2-window.screen.width*0.2/6)-1+"px";
  // }
}
function MouseupBO1(e) {  //鼠标松开

}
//===================返回顶部按钮功能实现==========================
function MouseoverRTP(e) {  //鼠标移入
  var el = e.target;
  el.style.background = "rgba(100,100,100,1)";
  el.style.boxShadow = "inset 0 0 10px #000";
  el.style.cursor = "pointer";
}
function MouseoutRTP(e) {  //鼠标移出
  var el = e.target;
  el.style.background = "rgba(100,100,100,0.5)";
  el.style.boxShadow = "inset 0 0 0px #000";
  el.style.cursor = "default";
}
function ReturnTop() {
  window.scrollTo(0, gh);  //滚动条置顶
  var time1 = setTimeout(ReturnTop, 10);
  if(gh <= 0) {
    clearTimeout(time1);  //清除延迟消息触发事件
  }
  gh -= 50;  //滚动条距离最上方距离(可控制滚动速度)
}

function MousedownRTP(e) {  //单击事件
  ReturnTop();  //滚动条返回到顶部函数(形成滚动动画)
}
function MouseupRTP(e) {  //鼠标松开
}
//===================顶部志银user按钮展开功能实现==========================
var ultext;
function ShowUltText() {  //用来延迟显示文字
  var ult = document.getElementById("ul_text");
  ult.style.display = "block";
}
function NoShowUltText() {
  var ult = document.getElementById("ul_text");
  ult.style.display = "none";
}
function NoShowUlt() {  //用来延迟显示文字
  var tm1mriu = document.getElementById("top_menu1_middle_right_info_user");
  tm1mriu.style.background = "";
  tm1mriu.style.cursor = "default";
  var tmma11 = document.getElementById("tmma11");
  tmma11.style.color = "";
  var tm1mrug = document.getElementById("top_menu1_middle_right_info_usering");
  tm1mrug.style.height = "0px";
  tm1mrug.style.paddingTop = "0%";
  clearTimeout(ultext);  //清除延迟消息触发事件
  ultext = setTimeout(NoShowUltText, 0);
}
function MouseoverTMRIU(e) {  //鼠标移入
  var tm1mriu = document.getElementById("top_menu1_middle_right_info_user");
  tm1mriu.style.background = "#FFFFFF";
  tm1mriu.style.cursor = "pointer";
  var tmma11 = document.getElementById("tmma11");
  tmma11.style.color = "#FF6700";
  var tm1mrug = document.getElementById("top_menu1_middle_right_info_usering");
  tm1mrug.style.height = window.screen.height*0.055*3.93+"px";
  tm1mrug.style.paddingTop = "5%";
  clearTimeout(ultext);  //清除延迟消息触发事件
  ultext = setTimeout(ShowUltText, 0);
}
function MouseoutTMRIU(e) {  //鼠标移出
  clearTimeout(ultext);  //清除延迟消息触发事件
  ultext = setTimeout(NoShowUlt, 100);
}
function MousedownTMRIU(e) {  //单击事件
}
function MouseupTMRIU(e) {  //鼠标松开
}
//===================顶部购物车按钮展开功能实现==========================
function MouseoverTMMRS(e) {  //鼠标移入
  var tmma14 = document.getElementById("tmma14");
  tmma14.style.color = "#FF6700";
  var tm1mrsi = document.getElementById("top_menu1_middle_right_shoppinging");
  tm1mrsi.style.height = window.screen.height*0.128+"px";
  var ssig = document.getElementById("span_shopping");
  ssig.style.display = "block";
  var tm1mrsc = document.getElementById("top_menu1_middle_right_shoppingcar");
  tm1mrsc.style.background = "#fff";
}
function MouseoutTMMRS(e) {  //鼠标移出
  var tmma14 = document.getElementById("tmma14");
  tmma14.style.color = "";
  var tm1mrsi = document.getElementById("top_menu1_middle_right_shoppinging");
  tm1mrsi.style.height = "0px";
  var ssig = document.getElementById("span_shopping");
  ssig.style.display = "none";
  var tm1mrsc = document.getElementById("top_menu1_middle_right_shoppingcar");
  tm1mrsc.style.background = "#424242";
  
}
function MousedownTMMRS(e) {  //单击事件
}
function MouseupTMMRS(e) {  //鼠标松开
}
//================顶部第二个菜单最左边的MI图按钮控制===============
function MouseoverTMLM(e) {  //鼠标移入
  var tm2mlt = document.getElementById("top_menu2_middle_leftmitext");
  var foundicon = document.getElementById("foundicon3");
  tm2mlt.style.fontFamily = "foundation-icons";
  tm2mlt.innerText = foundicon.innerText;
  // tm2mlt.innerText = "♚";
}
function MouseoutTMLM(e) {  //鼠标移出
  var tm2mlt = document.getElementById("top_menu2_middle_leftmitext");
  tm2mlt.style.fontFamily = "ScottSoft";
  tm2mlt.innerText = "MI";
}
//=========================打开顶部第二个菜单隐藏部分按钮功能实现====================
//-----------按钮部分------------
var lktm2h;
function ShowTMH(e) {  //用来延迟显示隐藏栏目
  var tm2hl = document.getElementById("top_menu2_hide_line");
  tm2hl.style.borderTop = window.screen.height*0.002+"px"+" solid #e0e0e0";
  var tm2h = document.getElementById("top_menu2_hide");
  tm2h.style.height = window.screen.height*0.299+"px";
  var el = e.target;
  // el.innerText += el.id[6];
  for(var i = 1; i <= 7; i++) {
    var ultmmmsa = document.getElementById("ultmmmsa"+i);
    // ultmmmsa.style.background = "#"+i+i+i;
    if(i == el.id[6]) {
      ultmmmsa.style.display = "block";
    } else {
      ultmmmsa.style.display = "none";
    }
  }
}
function NoshowTMHLT() {
  var tm2hl = document.getElementById("top_menu2_hide_line");
  tm2hl.style.borderTop = "0px solid #e0e0e0";
}
function NoShowTMH() {  //用来延迟隐藏隐藏栏目
  var tm2h = document.getElementById("top_menu2_hide");
  tm2h.style.height = "0px";
   // NoshowTMHLT();
   setTimeout(NoshowTMHLT, 300);
  // var tm2hl = document.getElementById("top_menu2_hide_line");
  // tm2hl.style.borderTop = "0px solid #e0e0e0";
  // for(var i = 1; i <= 2; i++) {
  //   var ultmmmsa = document.getElementById("ultmmmsa"+i);
  //   ultmmmsa.style.display = "none";
  // }
}
function MouseoverTMSA(e) {  //鼠标移入
  // var tm2hl = document.getElementById("top_menu2_hide_line");
  // tm2hl.style.borderTop = window.screen.height*0.002+"px"+" solid #e0e0e0";
  // tm2hl.style.borderTop = "1px solid #e0e0e0";
  clearTimeout(lktm2h);  //清除延迟消息触发事件
  var tm2h = document.getElementById("top_menu2_hide");
  if(tm2h.style.height == "0px") {
    lktm2h = setTimeout(function(){ShowTMH(e)}, 200);
  } else {
    ShowTMH(e);
  }
}
function MouseoutTMSA(e) {  //鼠标移出
  clearTimeout(lktm2h);  //清除延迟消息触发事件
  lktm2h = setTimeout(NoShowTMH, 200);
}
//--------------选择部分--------------
function MouseoverTM2H(e) {  //鼠标移入
  clearTimeout(lktm2h);
  // lktm2h = setTimeout(ShowTMH, 200);
}
function MouseoutTM2H(e) {  //鼠标移出
  clearTimeout(lktm2h);
  lktm2h = setTimeout(NoShowTMH, 200);
}
//====================右上角搜索框鼠标事件=================
var timeInputLookText, timeInputLookColor;
function MouseoverTMSF(e) {  //鼠标移入
  var input1 = document.getElementById("input1");
  var input2 = document.getElementById("input2");
  var el =  e.target;
  if(input1 != document.activeElement) {  //未获取焦点才进行此事件
    input1.style.borderColor = "#b0b0b0";
    input2.style.borderColor = "#b0b0b0";
  }
  if(el.id == "input2") {
    el.style.borderColor = "#FF6700";
    var foundicon = document.getElementById("foundicon2");
    input2.value = foundicon.innerText;
  }
  input1.style.transition = "0.3s";
  input2.style.transition = "0.3s";
  var ip1sta1 = document.getElementById("input1_showtext_a1");
  ip1sta1.style.transition = "0.3s";
  var ip1sta2 = document.getElementById("input1_showtext_a2");
  ip1sta2.style.transition = "0.3s";
}
function MouseoutTMSF(e) {  //鼠标移出
  var input1 = document.getElementById("input1");
  // alert(input1.value);
  if(input1 != document.activeElement) {
    input1.style.borderColor = "";
    var input2 = document.getElementById("input2");
    input2.style.borderColor = "";
    var foundicon = document.getElementById("foundicon1");
    input2.value = foundicon.innerText;
  }
  ok1 = true;
  ok2 = true;
}
var ok1 = true, ok2 = true;  //用来判断是否同时单击到搜索框和整个body
function MousedownIP1S(e) {  //鼠标单击搜索的输入框事件
  ok1 = false;
  var input1 = document.getElementById("input1");
  input1.style.borderColor = "#FF6700";
  // if (input1 == document.activeElement) {  //判断文本框是否已经获取焦点(是否是待输入状态)
  //     alert('已获取焦点');
  // } else {
  //     alert('未获取焦点');
  // }
  var input2 = document.getElementById("input2");
  input2.style.borderColor = "#FF6700";
  var ip1st = document.getElementById("input1_showtext");
  ip1st.style.display = "none";  /*使元素不会显示,值改为block会显示*/
  if(input1.value == "") {
    var tm2mshde = document.getElementById("top_menu2_middle_search_hide");
    if(tm2mshde.style.height != window.screen.height*0.39+"px") {
      clearTimeout(timeInputLookText);
      clearTimeout(timeInputLookColor);
    }
    tm2mshde.style.height = window.screen.height*0.39+"px";
    tm2mshde.style.borderBottom = window.screen.height*0.0013+"px solid #FF6700";
  }
  input1.style.transition = "0.3s";
  input2.style.transition = "0.3s";
  ip1st.style.transition = "0.3s";
}
function InputNoColor() {  //单独定义去除input去除颜色函数,需要延迟发生该事件
  var input1 = document.getElementById("input1");
  input1.style.borderColor = "";
  var input2 = document.getElementById("input2");
  input2.style.borderColor = "";
}
function InputLookText() {
  var input1 = document.getElementById("input1");
  if(input1.value == "") {  //搜索输入框为空才显示input1上的内容
    var ip1st = document.getElementById("input1_showtext");
    ip1st.style.display = "inline";  /*使元素会显示,值改为none会显示*/
  }
}
function MousedownBODY(e) {  //鼠标单击整个body事件(用来取消搜索框的样式)
  ok2 = false;
  if (input1 != document.activeElement && (ok1 || ok2)) {  //判断文本框是否已经获取焦点(是否是待输入状态),并且判断是否同时单击搜索框和整个body,如果同时单击到两个就不去除搜索框样式
    // InputNoColor();
    // clearTimeout(InputNoColortime);  //清除延迟消息触发事件
    var input1 = document.getElementById("input1");
    if(input1.value == "") {
      timeInputLookColor = setTimeout(InputNoColor, 400);
    } else {
      InputNoColor();
    }
    var input2 = document.getElementById("input2");
    var foundicon = document.getElementById("foundicon1");
    input2.value = foundicon.innerText;
    timeInputLookText = setTimeout(InputLookText, 500);
    // if(input1.value == "") {  //搜索输入框为空才显示input1上的内容
    //   var ip1st = document.getElementById("input1_showtext");
    //   ip1st.style.display = "inline";  /*使元素不会显示,值改为none会显示*/
    // }
    var tm2mshde = document.getElementById("top_menu2_middle_search_hide");
    tm2mshde.style.height = "0px";
    tm2mshde.style.borderBottom = "0px solid #FF6700";
  }
}
function MouseupBODY(e) {
  ok1 = true;
  ok2 = true;
}
//=======================content1_middle_imginfo中图片滚动特效和左右按键实现================================
var timeimgx;
//------------左移动键和右移动键功能实现-------------------
var iimg_mgl = 0, iimgnum = 1;  //记录当前图片的左外边距，和图片编号(第几张图片)
function ImgShow() {
  var iimg = document.getElementById("imginfo_img");
  iimg.style.opacity = "1";
  iimg.style.transition = "2s";
}
function ImgNoShow() {
  var iimg = document.getElementById("imginfo_img");
  iimg.style.opacity = "0.1";
  iimg_mgl = -window.screen.width*0.922*(iimgnum-1);
  // var c1mim = document.getElementById("content1_middle_imginfo_menu");
  // c1mim.innerHTML += iimgnum+"->"+iimg_mgl+"<br/>";
  iimg.style.marginLeft = iimg_mgl+"px";
  iimg.style.transition = "0s";
  setTimeout(ImgShow, 100);
}
function ShowIIMGX() {  //按左右移动键时同步图片右下角标码
  for(var i = 1; i <= 5; i++) {
    var iimgx = document.getElementById("imginfo_img_xuan"+i);
    if(i == iimgnum) {
      iimgx.style.borderColor = "#898A8C";
      iimgx.style.color = "#898A8C";
      iimgx.style.background = "rgba(0, 0, 0, 0)";
    } else {
      iimgx.style.borderColor = "#E3E3E3";
      iimgx.style.color = "#E3E3E3";
      iimgx.style.background = "rgb(137, 138, 140)";//"#898A8C";
    }
    iimgx.style.transition = "1s";
  }
}
function MousedownIIL(e) {  //单击左按钮
  // clearTimeout(timeimgx);  //插销自动换图函数
  var iimg = document.getElementById("imginfo_img");
  if(iimgnum == 1) {
    // iimg_mgl = -window.screen.width*0.922*4;
    iimgnum = 5;
    iimg.style.opacity = "0";
    iimg.style.transition = "1s";
    setTimeout(ImgNoShow, 300);
  } else {
    // iimg_mgl += window.screen.width*0.922;
    iimgnum--;
    iimg_mgl = -window.screen.width*0.922*(iimgnum-1);
    // var c1mim = document.getElementById("content1_middle_imginfo_menu");
    // c1mim.innerHTML += iimgnum+"->"+iimg_mgl+"<br/>";
    iimg.style.transition = "1s";
  }
  iimg.style.marginLeft = iimg_mgl+"px";
  ShowIIMGX();
}
function MousedownIIR(e) {  //单击右按钮
  var iimg = document.getElementById("imginfo_img");
  if(iimgnum == 5) {
    iimgnum = 1;
    iimg.style.opacity = "0";
    iimg.style.transition = "1s";
    setTimeout(ImgNoShow, 300);
  } else {
    iimgnum++;
    iimg_mgl = -window.screen.width*0.922*(iimgnum-1);
    // var c1mim = document.getElementById("content1_middle_imginfo_menu");
    // c1mim.innerHTML += iimgnum+"->"+iimg_mgl+"<br/>";
    iimg.style.transition = "1s";
  }
  iimg.style.marginLeft = iimg_mgl+"px";
  ShowIIMGX();
}
//-----------------图片右下角选择移动到某图片按键功能实现-----------------
function MouseoverIIMGX(e) {  //鼠标移入
  var el = e.target, cha, q;
  el.style.cursor = "pointer";  /*鼠标样式*/
  for(var i = 1; i <= 5; i++) {  //找到移动前位置的图片编号
    var iimgx = document.getElementById("imginfo_img_xuan"+i);
    if(iimgx.style.background == "rgba(0, 0, 0, 0)") {
      q = i;
    }
  }
  for(var i = 1; i <= 5; i++) {
    var iimgx = document.getElementById("imginfo_img_xuan"+i);
    if(i == el.id[16]) {
      iimgx.style.borderColor = "#898A8C";
      iimgx.style.color = "#898A8C";
      iimgx.style.background = "rgba(0, 0, 0, 0)";
      var iimg = document.getElementById("imginfo_img");
      iimgnum = i;
      cha = q-i > 0 ? q-i : i-q; //记录前一个位置的图片和将要移动到的位置的图片的编号差(如果间隔大于等于2的话就进行另一种切换图片方式)
      // alert(cha+" "+q+" "+i);
      if(cha >= 2) {  //待交换图片编号相差大于等于二实行透明交换
        iimg.style.opacity = "0";
        iimg.style.transition = "1s";
        setTimeout(ImgNoShow, 300);
      } else {
        iimg_mgl = -window.screen.width*0.922*(iimgnum-1);
        iimg.style.marginLeft = iimg_mgl+"px";
        iimg.style.transition = "1s";
      }
    } else {
      iimgx.style.borderColor = "#E3E3E3";
      iimgx.style.color = "#E3E3E3";
      iimgx.style.background = "rgb(137, 138, 140)";//"#898A8C";
      iimgx.style.transition = "1s";
    }
  }
  el.style.transition = "1s";
}
function MouseoutIIMGX(e) {  //鼠标移出
}
//---------------------图片自动移动变换功能实现--------------------
var panqh = 1;
function TimeingIMGX() {
  var iimg = document.getElementById("imginfo_img");
  if(iimgnum == 5) {
    panqh = -1;
  }
  if(iimgnum == 1) {
    panqh = 1;
  }
  iimgnum += panqh;
  iimg_mgl = -window.screen.width*0.922*(iimgnum-1);
  // var c1mim = document.getElementById("content1_middle_imginfo_menu");
  // c1mim.innerHTML += iimgnum+"->"+iimg_mgl+"<br/>";
  iimg.style.marginLeft = iimg_mgl+"px";
  iimg.style.transition = "1s";
  ShowIIMGX();
}
timeimgx = setInterval(TimeingIMGX, 5000);
//===================content1_middle_imginfo中隐藏菜单显示和消失按钮========================
var c1mimh_div_num = 0;  //记录鼠标离开前接触的是第几块隐藏菜单
//-----鼠标与左侧菜单接触功能实现---------

function MouseoverC1MIML(e) {  //鼠标移入
  var iimgl = document.getElementById("imginfo_img_left");
  iimgl.style.display = "none";
  var el = e.target;
  console.log(el.id);
  // var c1mimh = document.getElementById("content1_middle_imginfo_menu_hide");
  // c1mimh.style.display = "block";
  if(el.id == "c1mim_li10") {
    // alert(el.id);
    c1mimh_div_num = 10;
  } else {
    c1mimh_div_num = el.id[8];
  }
  for(var i = 1; i <= 10; i++) {
    var c1mimh_div = document.getElementById("c1mimh_div"+i);
    if(el.id == "c1mim_li"+i || el.id == "c1mim_span"+i || el.id == "c1mim_i"+i) {
      c1mimh_div.style.marginLeft = "0px";
      // console.log(c1mimh_div.id);
      // c1mimh_div.style.display = "block";
    } else {
      c1mimh_div.style.marginLeft = "-7000px";
      // c1mimh_div.style.display = "none";
    }
  }
}
function MouseoutC1MIML(e) {  //鼠标移出
  var iimgl = document.getElementById("imginfo_img_left");
  iimgl.style.display = "block";
  var el = e.target;
  for(var i = 1; i <= 10; i++) {
    var c1mimh_div = document.getElementById("c1mimh_div"+i);
    c1mimh_div.style.marginLeft = "-7000px";
    // c1mimh_div.style.display = "none";
  }
}
//-----鼠标与隐藏菜单接触功能实现---------
function MouseoverC1MIMH(e) {  //鼠标移入
  var iimgl = document.getElementById("imginfo_img_left");
  iimgl.style.display = "none";
  var el = e.target;
  // console.log(el.id);
  var c1mimh_div = document.getElementById("c1mimh_div"+c1mimh_div_num);
  c1mimh_div.style.marginLeft = "0px";
  var c1mim_li = document.getElementById("c1mim_li"+c1mimh_div_num);
  c1mim_li.style.background = "#FF6700";
}
function MouseoutC1MIMH(e) {  //鼠标移出
  var iimgl = document.getElementById("imginfo_img_left");
  iimgl.style.display = "block";
  var el = e.target;
  var c1mimh_div = document.getElementById("c1mimh_div"+c1mimh_div_num);
  c1mimh_div.style.marginLeft = "-7000px";
  var c1mim_li = document.getElementById("c1mim_li"+c1mimh_div_num);
  c1mim_li.style.background = "";
}
//========================小米明星单品栏目图片轮播效果实现==========================
var timectra;
function MouseoverCTRA(e) {  //鼠标移入
  var el =  e.target;
  var c1msbing = document.getElementById("content1_middle_sell_bottoming");
  // alert(c1msbing.style.marginLeft);
  el.style.cursor = "crosshair";  //鼠标样式
  if((el.id[10] == 1 && c1msbing.style.marginLeft != "0%") || (el.id[10] == 2 && c1msbing.style.marginLeft != "-100%")) {
    el.style.color = "#FF6600";
    el.style.cursor = "pointer";  //鼠标样式
    el.style.background = "#E0E0E0";
    el.style.zIndex = "1";
    el.style.transform = "scale(1.2)";
  }
}
function MouseoutCTRA(e) {  //鼠标移出
  var el =  e.target;
  el.style.background = "#fff";
  el.style.zIndex = "0";
  el.style.transform = "scale(1)";
  var c1mstopr_a1 = document.getElementById("c1mstopr_a1");
  var c1mstopr_a2 = document.getElementById("c1mstopr_a2");
  var c1msbing = document.getElementById("content1_middle_sell_bottoming");
  // alert(el.style.color);
  if(el.style.color == "rgb(255, 102, 0)") {
    el.style.color = "#B0B0B0";
  }
}
function MousedownCTRA(e) {  //鼠标单击
  var el =  e.target;
  var c1msbing = document.getElementById("content1_middle_sell_bottoming");
  var c1mstopr_a1 = document.getElementById("c1mstopr_a1");
  var c1mstopr_a2 = document.getElementById("c1mstopr_a2");
  el.style.color = "#E0E0E0";
  el.style.background = "#fff";
  el.style.transform = "scale(1)";
  el.style.cursor = "crosshair";  //鼠标样式
  if(el.id[10] == 2) {
    c1msbing.style.marginLeft = "-100%";
    c1mstopr_a1.style.color = "#B0B0B0";
  } else {
    c1msbing.style.marginLeft = "0%";
    c1mstopr_a2.style.color = "#B0B0B0";
  }
}
function MouseupCTRA(e) {  //鼠标松开
}
function GoingCTRA() {
  var c1msbing = document.getElementById("content1_middle_sell_bottoming");
  var c1mstopr_a1 = document.getElementById("c1mstopr_a1");
  var c1mstopr_a2 = document.getElementById("c1mstopr_a2");
  if(c1msbing.style.marginLeft == "0%") {
    c1msbing.style.marginLeft = "-100%";
    c1mstopr_a2.style.color = "#B0B0B0";
    c1mstopr_a2.style.color = "#E0E0E0";
    c1mstopr_a2.style.background = "#fff";
    c1mstopr_a2.style.transform = "scale(1)";
    c1mstopr_a2.style.cursor = "crosshair";  //鼠标样式
    c1mstopr_a1.style.color = "#B0B0B0";
  } else {
    c1msbing.style.marginLeft = "0%";
    c1mstopr_a1.style.color = "#B0B0B0";
    c1mstopr_a1.style.color = "#B0B0B0";
    c1mstopr_a1.style.color = "#E0E0E0";
    c1mstopr_a1.style.background = "#fff";
    c1mstopr_a1.style.transform = "scale(1)";
    c1mstopr_a1.style.cursor = "crosshair";  //鼠标样式
    c1mstopr_a2.style.color = "#B0B0B0";
  }
}
timectra = setInterval(GoingCTRA, 4000);
//=============中间第二大部分内容中所有div隐藏内容上移功能===================
function MouseoverDIVHIDE(n) {
  var divhide = document.getElementById("divhide"+n);
  divhide.style.marginTop = "-23%";
  divhide.style.opacity = "1";
}
function MouseoutDIVHIDE(n) {
  var divhide = document.getElementById("divhide"+n);
  divhide.style.marginTop = "10%";
  divhide.style.opacity = "0";
}
//================中间第二大部分内容中搭配信息栏切换功能====================
function MouseoverCMCT(n) {
  // alert(n);
  for(var i = 1; i <= 4; i++) {
    var cmcc = document.getElementById("content2_middle_collocation_content"+i);
    var cmctli = document.getElementById("cmctli"+i+"_1");
    if(i == n) {
      cmcc.style.display = "block";
      cmctli.style.color = "#FF6700";
      cmctli.style.borderBottom = "solid";
    } else {
      cmcc.style.display = "none";
      cmctli.style.color = "#000";
      cmctli.style.borderBottom = "0px";
    }
  }
}
function MouseoverCMCTT(n) {
  for(var i = 1; i <= 4; i++) {
    var cmcc = document.getElementById("content2_middle_parts"+i);
    var cmctli = document.getElementById("cmctli"+i+"_2");
    if(i == n) {
      cmcc.style.display = "block";
      cmctli.style.color = "#FF6700";
      cmctli.style.borderBottom = "solid";
    } else {
      cmcc.style.display = "none";
      cmctli.style.color = "#000";
      cmctli.style.borderBottom = "0px";
    }
  }
}
function MouseoverCMCTTT(n) {
  for(var i = 1; i <= 5; i++) {
    var cmcc = document.getElementById("content2_middle_periphery"+i);
    var cmctli = document.getElementById("cmctli"+i+"_3");
    if(i == n) {
      cmcc.style.display = "block";
      cmctli.style.color = "#FF6700";
      cmctli.style.borderBottom = "solid";
    } else {
      cmcc.style.display = "none";
      cmctli.style.color = "#000";
      cmctli.style.borderBottom = "0px";
    }
  }
}





window.onload = Refresh;  //页面刷新执行Refresh()函数
window.onresize = Iphone;  //窗口大小改变触发事件
window.onscroll = Roll;  //窗口滚动条滚动事件