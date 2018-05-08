let initialPlace = [
  { name: "上海市杨浦区控江二村小学", location: { lat: 31.293081, lng: 121.53479 } },
  { name: "上海市杨浦区二联小学", location: { lat: 31.288539, lng: 121.534044 } },
  { name: "上海理工大学附属小学", location: { lat: 31.297665, lng: 121.546882 } },
  { name: "上海市杨浦区水丰路小学", location: { lat: 31.293352, lng: 121.544921 } },
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
  { name: "上海理工大学附属初级中学", location: { lat: 31.297863, lng: 121.551984 } },
  { name: "上海市现代音乐职业学校", location: { lat: 31.283273, lng: 121.526522 } },
  { name: "复旦大学附属小学", location: { lat: 31.298098, lng: 121.51252 } },
  { name: "上海市杨浦区长白二村小学分校", location: { lat: 31.305686, lng: 121.548169 } },
  { name: "上海市建设初级中学", location: { lat: 31.269883, lng: 121.546559 } },
  { name: "上海市延吉第二初级中学", location: { lat: 31.289102, lng: 121.551306 } },
  { name: "上海市杨浦区开鲁新村第一小学", location: { lat: 31.330535, lng: 121.536071 } },
  { name: "上海市少云中学", location: { lat: 31.299306, lng: 121.525492 } },
  { name: "上海市杨浦区教师进修学院实验小学", location: { lat: 31.281968, lng: 121.531311 } }
];

let map, infoWindow, weather = '';

var ViewModel = function() {
  let self = this;

  let placeList = initialPlace.slice(); //ko.observableArray([]);

  self.searchPlace = ko.observable('');

  self.searchedPlace = ko.computed(function() {
    //清除绑定
    initialPlace.forEach(p => p.marker.setMap(null));

    let place = self.searchPlace();
    if (place != '') {
      placeList = initialPlace.filter(function(p) {
        return p.name.indexOf(place) != -1;
      });
    } else {
      placeList = initialPlace.slice();
    }
    //绑定标记到地图
    placeList.forEach(p => p.marker.setMap(map));
    return placeList;
  });

  self.click = function(e) {
    google.maps.event.trigger(e.marker, 'click');
  }
}

function openWindow(marker) {
  //获取天气,不能根据动态经纬度去取天气，粒度太细小的经纬度取不到天气数据
  //https://free-api.heweather.com/s6/weather/now?location=${marker.position.lat},${marker.position.lng}&key=eb9dbe5f3b704ceda31b3a917568df5e
  fetch(`https://free-api.heweather.com/s6/weather/now?location=31.293081,121.53479&key=eb9dbe5f3b704ceda31b3a917568df5e`)
    .then(res => res.json())
    .then(function(data) {
      let wea = data.HeWeather6[0].now;
      weather = `天气： ${wea.cond_txt} ${wea.tmp}℃ ${wea.wind_dir}${wea.wind_sc}级`;
    })
    .catch(function(err) {
      weather = '获取天气超时 :(';
      console.log(weather);
    });

  //http://api.weatherunlocked.com/api/current/${marker.position.lat},${marker.position.lng}?lang=CN&app_id=e5a6e7bc&app_key=04594a470555d883f8c3dc0147f57c0c
  /*fetch(`http://api.weatherunlocked.com/api/current/39.93,116.43?lang=CN&app_id=e5a6e7bc&app_key=04594a470555d883f8c3dc0147f57c0c`)
    .then(res => res.json())
    .then(function(data) {
      weather = data.wx_desc;
    })
    .catch(function(err) {
      weather = '获取天气超时 :(';
      console.log(err);
    });*/

  _openInfoWindow(marker);
}

//打开信息窗口
function _openInfoWindow(marker) {
  let message = `${marker.name} <br> ${weather}`;
  infoWindow.setContent(message);
  console.log(message);
  infoWindow.open(marker.map, marker);
  marker.setAnimation(google.maps.Animation.BOUNCE);
  setTimeout(function() {
    marker.setAnimation(null);
  }, 1000);
}

//初始化地图
function initMap() {
  map = new google.maps.Map(document.querySelector(".map"), {
    center: initialPlace[0].location,
    zoom: 13
  });

  infoWindow = new google.maps.InfoWindow();

  //生成所有的标记，并存放到地点上面
  initialPlace.forEach(p => {
    let marker = new google.maps.Marker({
      position: p.location,
      map: null,
      name: p.name,
      title: p.name
    });
    marker.addListener('click', function() {
      openWindow(marker);
    });
    p.marker = marker;
  });

  //初始化ViewModel
  ko.applyBindings(new ViewModel());
}