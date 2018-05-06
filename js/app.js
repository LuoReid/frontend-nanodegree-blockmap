const initialPlace = [
  { name: "上海市杨浦区控江二村小学", location: { lat: 31.293081, lng: 121.53479 } },
  { name: "上海市杨浦区二联小学", location: { lat: 31.288539, lng: 121.534044 } },
  { name: "上海理工大学附属小学", location: { lat: 31.297665, lng: 121.546882 } },
  { name: "上海市杨浦区水丰路小学", location: { lat: 31.293352, lng: 121.544921 } },
  { name: "上海杨浦区民办畅想艺术幼稚园", location: { lat: 31.278707, lng: 121.54453 } },
  { name: "上海市民星中学", location: { lat: 31.319376, lng: 121.543878 } },
  { name: "上海市鞍山初级中学", location: { lat: 31.276409, lng: 121.513887 } },
  { name: "上海市惠民中学", location: { lat: 31.264273, lng: 121.531842 } },
  { name: "上海市辽阳中学", location: { lat: 31.270121, lng: 121.53974 } },
  { name: "上海市新大桥中学", location: { lat: 31.275733, lng: 121.538078 } },
  { name: "上海市杨浦区教师进修学院附属中学", location: { lat: 31.277553, lng: 121.526426 } },
  { name: "上海市三门中学", location: { lat: 31.313451, lng: 121.49944 } },
  { name: "上海市包头中学", location: { lat: 31.329074, lng: 121.544269 } },
  { name: "上海市思源中学", location: { lat: 31.325432, lng: 121.540838 } },
  { name: "上海市杨浦区内江路第二小学", location: { lat: 31.290712, lng: 121.549901 } },
  { name: "上海市杨浦区中原路小学", location: { lat: 31.333291, lng: 121.541453 } },
  { name: "上海市杨浦区开鲁新村第二小学", location: { lat: 31.333707, lng: 121.535799 } },
  { name: "上海同济大学实验学校", location: { lat: 31.30943, lng: 121.499022 } },
  { name: "上海市杨浦区控江二村小学分校", location: { lat: 31.280086, lng: 121.542856 } },
  { name: "复旦大学附属中学", location: { lat: 31.296729, lng: 121.51278 } },
  { name: "上海市铁岭中学", location: { lat: 31.284675, lng: 121.516006 } },
  { name: "上海民办杨浦实验学校", location: { lat: 31.331136, lng: 121.547832 } },
  { name: "上海市鞍山实验中学", location: { lat: 31.311994, lng: 121.547414 } },
  { name: "上海市十五中学", location: { lat: 31.25976, lng: 121.535372 } },
  { name: "上海市市东实验学校", location: { lat: 31.264047, lng: 121.523272 } },
  { name: "上海市杨浦区许昌路第五小学", location: { lat: 31.278176, lng: 121.518903 } },
  { name: "上海市昆明学校", location: { lat: 31.275935, lng: 121.516871 } },
  { name: "上海市民办阳浦小学", location: { lat: 31.272448, lng: 121.542325 } },
  { name: "上海市杨浦区翔殷路小学", location: { lat: 31.313022, lng: 121.543703 } },
  { name: "上海市杨浦区打虎山路第一小学", location: { lat: 31.279726, lng: 121.513565 } },
  { name: "上海市东辽阳中学", location: { lat: 31.279543, lng: 121.557584 } },
  { name: "上海民办兰生复旦中学", location: { lat: 31.321227, lng: 121.532489 } },
  { name: "上海市杨浦区内江路小学", location: { lat: 31.288438, lng: 121.556032 } },
  { name: "上海民办打一外国语小学", location: { lat: 31.282305, lng: 121.522549 } },
  { name: "上海市杨浦高级中学", location: { lat: 31.282286, lng: 121.509498 } },
  { name: "上海市控江中学", location: { lat: 31.285658, lng: 121.539767 } },
  { name: "上海交通大学附属中学", location: { lat: 31.32592, lng: 121.49601 } },
  { name: "上海财经大学附属中学", location: { lat: 31.27314, lng: 121.552523 } },
  { name: "上海市中原中学", location: { lat: 31.333134, lng: 121.537681 } },
  { name: "上海市杨浦区职业技术学校", location: { lat: 31.283273, lng: 121.526522 } },
  { name: "上海市杨浦区政立路第二小学", location: { lat: 31.313458, lng: 121.51394 } },
  { name: "上海市二十五中学", location: { lat: 31.281394, lng: 121.5514 } },
  { name: "上海市杨浦区回民小学", location: { lat: 31.305103, lng: 121.540045 } },
  { name: "上海市杨浦区风帆初级职业学校", location: { lat: 31.291529, lng: 121.551883 } },
  { name: "上海市同济第二初级中学", location: { lat: 31.314844, lng: 121.523585 } },
  { name: "上海市控江初级中学", location: { lat: 31.292189, lng: 121.539297 } },
  { name: "上海同济大学附属存志学校", location: { lat: 31.276457, lng: 121.520579 } },
  { name: "上海民办杨浦凯慧初级中学", location: { lat: 31.277625, lng: 121.511679 } },
  { name: "上海市杨浦区市光二村幼儿园", location: { lat: 31.322527, lng: 121.547415 } },
  { name: "上海市杨浦区白城路幼儿园", location: { lat: 31.33062, lng: 121.550063 } },
  { name: "上海市杨浦区凤南新村幼儿园", location: { lat: 31.281194, lng: 121.531754 } },
  { name: "上海控江中学附属民办学校", location: { lat: 31.270637, lng: 121.527777 } },
  { name: "上海市体育学院附属中学", location: { lat: 31.290324, lng: 121.557867 } },
  { name: "上海市黄兴学校", location: { lat: 31.290716, lng: 121.530182 } },
  { name: "上海市育鹰学校", location: { lat: 31.296588, lng: 121.523953 } },
  { name: "上海外国语大学附属双语学校", location: { lat: 31.286722, lng: 121.533697 } },
  { name: "上海市杨浦区凤城新村小学", location: { lat: 31.289091, lng: 121.523919 } },
  { name: "上海市杨浦区扬帆学校", location: { lat: 31.297521, lng: 121.543663 } },
  { name: "上海市国和中学", location: { lat: 31.327194, lng: 121.538272 } },
  { name: "上海市复旦实验中学", location: { lat: 31.310446, lng: 121.543422 } },
  { name: "上海市杨浦区佳木斯路幼儿园", location: { lat: 31.306732, lng: 121.549576 } },
  { name: "上海市杨浦区国和一村幼儿园", location: { lat: 31.322225, lng: 121.536297 } },
  { name: "上海市杨浦区锦西幼儿园", location: { lat: 31.282939, lng: 121.516386 } },
  { name: "上海市杨浦区爱国幼儿园", location: { lat: 31.282663, lng: 121.560376 } },
  { name: "上海市杨浦区长岭路幼儿园", location: { lat: 31.286466, lng: 121.524048 } },
  { name: "上海市杨浦区许昌路幼儿园", location: { lat: 31.276277, lng: 121.524186 } },
  { name: "中国福利会幼儿园", location: { lat: 31.332341, lng: 121.518044 } },
  { name: "上海市杨浦区本溪艺术幼儿园", location: { lat: 31.280608, lng: 121.563824 } },
  { name: "上海市杨浦区松花新村第一幼儿园", location: { lat: 31.301566, lng: 121.549542 } },
  { name: "上海市杨浦区教师进修学院附属幼儿园", location: { lat: 31.286384, lng: 121.518868 } },
  { name: "上海市杨浦区国和二村幼稚园", location: { lat: 31.325695, lng: 121.537823 } },
  { name: "上海市杨浦区民星幼稚园", location: { lat: 31.319727, lng: 121.546865 } },
  { name: "复旦大学附设幼儿园", location: { lat: 31.300188, lng: 121.510646 } },
  { name: "同济大学幼儿园", location: { lat: 31.289452, lng: 121.51777 } },
  { name: "上海杨浦区国和托儿所", location: { lat: 31.325695, lng: 121.537823 } },
  { name: "上海杨浦区实验托儿所", location: { lat: 31.296607, lng: 121.539811 } },
  { name: "上海杨浦区延吉托儿所", location: { lat: 31.297707, lng: 121.544652 } },
  { name: "上海市杨浦区市光托儿所", location: { lat: 31.317145, lng: 121.523047 } },
  { name: "上海杨浦区霍兰托儿所", location: { lat: 31.27137, lng: 121.533598 } },
  { name: "上海杨浦区隆昌托儿所", location: { lat: 31.276984, lng: 121.552898 } },
  { name: "上海杨浦区民办科技幼稚园", location: { lat: 31.271633, lng: 121.519398 } },
  { name: "上海杨浦区延吉紫罗兰幼儿园", location: { lat: 31.287093, lng: 121.534146 } },
  { name: "上海杨浦区小蝌蚪音乐园", location: { lat: 31.322607, lng: 121.534288 } },
  { name: "上海市杨浦区杨浦小学", location: { lat: 31.306996, lng: 121.532304 } },
  { name: "复旦大学第二附属中学", location: { lat: 31.296874, lng: 121.511568 } },
  { name: "上海民办沪东外国语学校", location: { lat: 31.286335, lng: 121.503616 } },
  { name: "上海市杨浦区平凉路第四小学", location: { lat: 31.284975, lng: 121.563211 } },
  { name: "上海市市光学校", location: { lat: 31.316672, lng: 121.520999 } },
  { name: "上海市杨浦区怀德路第一小学", location: { lat: 31.260807, lng: 121.531529 } },
  { name: "上海市杨浦区市东小学", location: { lat: 31.263689, lng: 121.524756 } },
  { name: "上海市杨浦区齐齐哈尔路第一小学分校", location: { lat: 31.271861, lng: 121.523682 } },
  { name: "上海市杨浦区复旦科技园小学", location: { lat: 31.33848, lng: 121.529416 } },
  { name: "上海市杨浦区杭州路第一小学", location: { lat: 31.266098, lng: 121.54059 } },
  { name: "上海市杨浦区政立路小学", location: { lat: 31.313954, lng: 121.499987 } },
  { name: "上海市杨浦区五角场小学", location: { lat: 31.305981, lng: 121.519432 } },
  { name: "上海体院学院附属中学附属小学", location: { lat: 31.319372, lng: 121.524934 } },
  { name: "上海市杨浦区六一小学", location: { lat: 31.311131, lng: 121.528136 } },
  { name: "上海市杨浦区中原路小学分校", location: { lat: 31.343738, lng: 121.534757 } },
  { name: "上海市第二师范学校附属小学", location: { lat: 31.282018, lng: 121.50607 } },
  { name: "同济大学第一附属中学", location: { lat: 31.341657, lng: 121.525696 } },
  { name: "上海市杨浦区杨浦小学分校", location: { lat: 31.27395, lng: 121.535577 } },
  { name: "上海杨浦区博英双语幼稚园", location: { lat: 31.290557, lng: 121.528529 } },
  { name: "上海杨浦区童画艺术幼儿园", location: { lat: 31.323085, lng: 121.546689 } },
  { name: "上海市杨浦区国和小学", location: { lat: 31.327146, lng: 121.535775 } },
  { name: "上海市杨浦区建设小学", location: { lat: 31.272143, lng: 121.550451 } },
  { name: "上海市杨浦区水丰路小学分校", location: { lat: 31.295008, lng: 121.537157 } },
  { name: "上海市同济中学", location: { lat: 31.314022, lng: 121.528716 } },
  { name: "上海市民办上实剑桥外国语中学", location: { lat: 31.30121, lng: 121.550105 } },
  { name: "上海市杨浦区齐齐哈尔路第一小学", location: { lat: 31.269028, lng: 121.533303 } },
  { name: "上海理工大学附属中学", location: { lat: 31.292244, lng: 121.545648 } },
  { name: "上海市同济初级中学", location: { lat: 31.307814, lng: 121.516995 } },
  { name: "上海市杨浦区市光新村第一小学", location: { lat: 31.323311, lng: 121.542448 } },
  { name: "上海市杨浦区同济小学", location: { lat: 31.290083, lng: 121.515874 } },
  { name: "上海市杨浦区民星路小学", location: { lat: 31.319082, lng: 121.547133 } },
  { name: "上海市杨浦初级中学", location: { lat: 31.273434, lng: 121.520729 } },
  { name: "上海音乐学院实验学校", location: { lat: 31.33369, lng: 121.518883 } },
  { name: "上海市杨浦区平凉路第三小学", location: { lat: 31.281202, lng: 121.557523 } },
  { name: "上海民办交大飞达初级中学", location: { lat: 31.321146, lng: 121.501646 } },
  { name: "上海市杨浦区工农新村小学", location: { lat: 31.328191, lng: 121.540145 } },
  { name: "上海市辛灵中学", location: { lat: 31.276026, lng: 121.556699 } },
  { name: "中国人民解放军空军上海示范幼儿园", location: { lat: 31.295292, lng: 121.521906 } },
  { name: "上海市杨浦区翔殷幼稚园", location: { lat: 31.307106, lng: 121.533198 } },
  { name: "上海市杨浦区控江幼儿园", location: { lat: 31.293007, lng: 121.53657 } },
  { name: "上海市杨浦区五角场幼稚园", location: { lat: 31.308478, lng: 121.513952 } },
  { name: "上海市杨浦区国定路幼儿园", location: { lat: 31.312736, lng: 121.511218 } },
  { name: "上海市杨浦区殷行路幼儿园", location: { lat: 31.333952, lng: 121.548831 } },
  { name: "上海市杨浦区水丰路幼儿园", location: { lat: 31.295141, lng: 121.545108 } },
  { name: "上海市杨浦区开鲁路幼儿园", location: { lat: 31.332957, lng: 121.542637 } },
  { name: "上海市杨浦区向阳幼儿园", location: { lat: 31.275488, lng: 121.537575 } },
  { name: "上海市杨浦区鞍山幼稚园", location: { lat: 31.293808, lng: 121.55585 } },
  { name: "上海理工大学附属初级中学", location: { lat: 31.297863, lng: 121.551984 } },
  { name: "上海市杨浦区本溪路幼儿园", location: { lat: 31.278767, lng: 121.522112 } },
  { name: "上海市杨浦区延吉幼儿园", location: { lat: 31.301693, lng: 121.540649 } },
  { name: "上海市现代音乐职业学校", location: { lat: 31.283273, lng: 121.526522 } },
  { name: "上海市杨浦区苗苗托儿所", location: { lat: 31.288357, lng: 121.524405 } },
  { name: "上海市杨浦区中原路托儿所", location: { lat: 31.333258, lng: 121.541612 } },
  { name: "上海杨浦区睿柏幼儿园", location: { lat: 31.338673, lng: 121.51822 } },
  { name: "上海市杨浦区国定托儿所", location: { lat: 31.312594, lng: 121.511253 } },
  { name: "上海市杨浦区铁岭路托儿所", location: { lat: 31.281459, lng: 121.525011 } },
  { name: "上海市杨浦区第二艺术幼儿园", location: { lat: 31.329407, lng: 121.548587 } },
  { name: "上海市杨浦区市东幼儿园", location: { lat: 31.263331, lng: 121.526739 } },
  { name: "上海市杨浦区内江新村幼儿园", location: { lat: 31.289875, lng: 121.546315 } },
  { name: "上海市杨浦区市光一村幼稚园", location: { lat: 31.322906, lng: 121.541677 } },
  { name: "上海市杨浦区打虎山路幼儿园", location: { lat: 31.282339, lng: 121.510337 } },
  { name: "上海市杨浦区龙江幼儿园", location: { lat: 31.260703, lng: 121.535033 } },
  { name: "上海市杨浦区政通路幼儿园", location: { lat: 31.310261, lng: 121.523794 } },
  { name: "上海市杨浦区明园村幼儿园", location: { lat: 31.268242, lng: 121.527273 } },
  { name: "上海市杨浦区五联幼儿园", location: { lat: 31.287894, lng: 121.53902 } },
  { name: "上海市杨浦区新乐幼稚园", location: { lat: 31.264405, lng: 121.54311 } },
  { name: "上海市杨浦区三门路幼儿园", location: { lat: 31.315409, lng: 121.498739 } },
  { name: "上海市杨浦区阳光幼稚园", location: { lat: 31.34215, lng: 121.533155 } },
  { name: "上海市杨浦区黑山路幼儿园", location: { lat: 31.312919, lng: 121.529661 } },
  { name: "上海市杨浦区许昌路第二幼儿园", location: { lat: 31.277134, lng: 121.517984 } },
  { name: "上海儿童世界杨浦幼儿园", location: { lat: 31.295821, lng: 121.541546 } },
  { name: "上海杨浦区时代幼儿园", location: { lat: 31.334503, lng: 121.520428 } },
  { name: "上海杨浦区平凉托儿所", location: { lat: 31.25952, lng: 121.53169 } },
  { name: "中国人民解放军南京政治学院上海分院幼儿园", location: { lat: 31.302524, lng: 121.523421 } },
  { name: "上海市杨浦区中原路幼稚园", location: { lat: 31.32949, lng: 121.540156 } },
  { name: "上海杨浦区幼华科技幼稚园", location: { lat: 31.290929, lng: 121.549711 } },
  { name: "上海杨浦区民办波波嘟双语幼稚园", location: { lat: 31.3176, lng: 121.54766 } },
  { name: "上海杨浦区博申幼稚园", location: { lat: 31.271241, lng: 121.515249 } },
  { name: "上海市杨浦区新跃双语幼稚园", location: { lat: 31.274296, lng: 121.550051 } },
  { name: "上海市杨浦区控江四村幼稚园", location: { lat: 31.29032, lng: 121.531446 } },
  { name: "上海杨浦区民办格林双阳幼稚园", location: { lat: 31.285092, lng: 121.537393 } },
  { name: "上海杨浦区民办乐又靓幼儿园", location: { lat: 31.270692, lng: 121.532276 } },
  { name: "上海杨浦区民办三之三双语幼稚园", location: { lat: 31.304985, lng: 121.497403 } },
  { name: "上海杨浦区大地幼儿园", location: { lat: 31.329004, lng: 121.536145 } },
  { name: "上海杨浦区贝贝幼稚园", location: { lat: 31.311218, lng: 121.494864 } },
  { name: "上海杨浦区民办小世界双语幼稚园", location: { lat: 31.332887, lng: 121.537553 } },
  { name: "上海杨浦区民办沪东双语幼稚园", location: { lat: 31.283374, lng: 121.504268 } },
  { name: "上海杨浦区萌芽幼儿园", location: { lat: 31.296014, lng: 121.524725 } },
  { name: "上海杨浦区民办爱德双语艺术幼稚园", location: { lat: 31.291948, lng: 121.543577 } },
  { name: "上海杨浦区凯琴双语数码幼稚园", location: { lat: 31.298632, lng: 121.553717 } },
  { name: "上海市杨浦区民治路幼稚园", location: { lat: 31.300087, lng: 121.558285 } },
  { name: "上海市杨浦区黎平路幼儿园", location: { lat: 31.283879, lng: 121.564461 } },
  { name: "上海市杨浦区嫩江路幼儿园", location: { lat: 31.319632, lng: 121.53722 } },
  { name: "上海市杨浦区友谊新村幼儿园", location: { lat: 31.284222, lng: 121.542107 } },
  { name: "上海杨浦区双辽托儿所", location: { lat: 31.276873, lng: 121.523129 } },
  { name: "上海市杨浦区民京路幼稚园", location: { lat: 31.326351, lng: 121.525552 } },
  { name: "上海市杨浦区杭州路第二幼儿园", location: { lat: 31.274342, lng: 121.554386 } },
  { name: "上海杨浦区民办爱绿幼儿园", location: { lat: 31.321945, lng: 121.529351 } },
  { name: "复旦大学附属小学", location: { lat: 31.298098, lng: 121.51252 } },
  { name: "上海市杨浦区长白二村小学分校", location: { lat: 31.305686, lng: 121.548169 } },
  { name: "上海市建设初级中学", location: { lat: 31.269883, lng: 121.546559 } },
  { name: "上海市延吉第二初级中学", location: { lat: 31.289102, lng: 121.551306 } },
  { name: "上海市杨浦区开鲁新村第一小学", location: { lat: 31.330535, lng: 121.536071 } },
  { name: "上海市少云中学", location: { lat: 31.299306, lng: 121.525492 } },
  { name: "上海市杨浦区教师进修学院实验小学", location: { lat: 31.281968, lng: 121.531311 } }
];

let map, infoWindow;

var Place = function(data) {
  this.location = ko.observable(data.location);
  this.name = ko.observable(data.name);
}

var ViewModel = function() {
  let self = this;
  let placeList = initialPlace; //ko.observableArray([]);


  self.searchPlace = ko.observable('');

  self.searchedPlace = ko.computed(function() {
    let place = self.searchPlace();
    if (place != '') {
      return placeList.filter(function(p) {
        return p.name.indexOf(place) != -1;
      });
    } else {
      return placeList;
    }
    /*if (place == '1') {
      return placeList[1];
    } else if (place == '2') {
      return placeList[2];
    } else {
      return placeList;
    }*/
  });

  self.click = function(e) {
    console.log(e);
  }

}

function openWindow(marker) {
  infoWindow.setContent(marker.name);
  infoWindow.open(map, marker);
}



function initMap() {
  map = new google.maps.Map(document.querySelector(".map"), {
    center: initialPlace[0].location,
    zoom: 13
  });

  infoWindow = new google.maps.InfoWindow();
  initialPlace.forEach(p => {
    let marker = new google.maps.Marker({
      position: p.location,
      map: map,
      name: p.name,
      title: p.name
    });
    marker.addListener('click', function() {
      openWindow(marker);
    });
  });
  ko.applyBindings(new ViewModel());
}