var sy_channel = 8201 ;
//get: console.log(SY.channel.des);
var SY ={};
var LOCAL ={};
SY.load = function () {
  var channels ={
    //ios
    8101:{
      des:'IOS:App Store',
    },
    //local android
    8201:{
      des:'AZ:官方网站',
    },
    8202:{
      des:'AZ:应用宝',
    },
    //outSite android
    8301:{
      des:'AZ:Google市场',
    },
  };
  SY.channel = channels[sy_channel];
  SY.version={
    'android':20171229,
    'androidVersionName':'1.5.2',
    'ios':1.5
  },
 SY.hardware = 0;
};

SY.init =function () {
  try {
    SY.load();
  }catch (error){}
};

SY.init();

/*涓嬭浇App*/
function openDown_new(){
    //IOS
    if(g_api.app_os == 2){
		window.setTimeout(function(){
			window.location.href = g_api.app_down;
		}, 1800);
        $('#ios_pomst').css('display','block');
    }else{
		window.location.href = g_api.app_down;
	}
}

/*andrio 鎵撳紑app*/
function openApp_andrio_auto(url){
    /*鏂板缓涓€涓猧frame,iframe鐨勫湴鍧€鎸囧悜app_open*/
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", url);
    iframe.setAttribute("style","display: none; border: 0px; width: 0px; height: 0px;");
    document.body.appendChild(iframe);
    window.setTimeout(function(){
        document.body.removeChild(iframe);
		dataBuriedPoint('portal_h5ym_auto_faild');
        //disPage()
    }, 2000);
}

/*andrio 鎵撳紑app*/
function openApp_andrio(url){
    /*鏂板缓涓€涓猧frame,iframe鐨勫湴鍧€鎸囧悜app_open*/
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", url);
    iframe.setAttribute("style","display: none; border: 0px; width: 0px; height: 0px;");
    document.body.appendChild(iframe);
    window.setTimeout(function(){
        document.body.removeChild(iframe);
        //disPage()
    }, 2000);
}

/*20161220寮€缃戣姹�*/
function openNet(dflag,mac){
    var city = g_api.city;
    console.log(city);

    /*寮€缃戣姹傛垚鍔熼噸鏂板甫鍙傛暟鍒锋柊椤甸潰*/
    function toWeb(){
        window.location = "index.php?mac="+g_api.mac+"&t="+g_api.t+"&pflag=1&dflag="+g_api.dflag;
    }

    /*寮€缃戝け璐�*/
    function errback(errordata){
        showPrompt();
    }

    /*璇锋眰鎴愬姛*/
    function opennet_callback(data) {
        console.log(data.code);
        if(data.code != 100) {
            /*寮€缃戜笉鎴愬姛*/
            errback(data.codemsg);
            return;
        }
        /*寮€缃戞垚鍔�*/
        toWeb();
    }
    $.ajax({
        url: 'https://sgv-netcon.wifi8.com/api/portal/net',
        type: "POST",
        data: {umac:g_api.mac,ttype:dflag,ostype:g_api.app_os},
        timeout: 5000,
        dataType: "json",
        success: opennet_callback,
        error: function (jqXHR, textStatus, errorThrown) {
            errback({"code": 999, "textStatus": textStatus, "errorThrown": errorThrown});
        }
    })
}

/*ios鎵撳紑app*/
function openApp_new(url){
    /*ios绯荤粺safari涓�*/
    function customClickEvent() {
        var clickEvt;
        if(window.CustomEvent) { /*鑷畾涔変簨浠禖ustomEvent*/
            clickEvt = new window.CustomEvent('click', {
                canBubble: true,
                cancelable: true
            });
        }else {
            clickEvt = document.createEvent('Event');
            clickEvt.initEvent('click', true, true);
        }
        return clickEvt;
    }
	window.setTimeout(function(){
		var openSchemeLink = document.getElementById('openSchemeLink');
		if(!openSchemeLink) {
			openSchemeLink = document.createElement('a');
			openSchemeLink.id = 'openSchemeLink';
			openSchemeLink.style.display = 'none';
			document.body.appendChild(openSchemeLink);
		}
		openSchemeLink.href = url;
		/*鎵цclick*/
		openSchemeLink.dispatchEvent(customClickEvent());
	}, 1300);
}
//鏁版嵁鍩嬬偣
function dataBuriedPoint(mn){
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var data = {'mac':g_api.mac,'ua':userAgent,'mn':mn,'area':g_api.city,'clientip':g_api.ip,'clienttime':g_api.t,'os':g_api.app_os};
    $.ajax({
        url: 'http://log.sh.wifi8.com:9876/portalmk',
        type: "POST",
        data:{pt:JSON.stringify(data)},
        timeout: 5000,
        async:true,
        success:function(result){

        },
    })
}
var mn = '';
if(g_api.pflag == 1){/*杩涘叆A2椤甸潰*/
    if(g_api.dflag == 0){/*鎵撳紑app骞惰繘琛屽€掕鏃�*/
        mn = 'portal_h5dk';
        dataBuriedPoint(mn);
        openApp_new(g_api.app_open);
    }else{/*鎵撳紑涓媔os涓嬭浇*/
        mn = 'portal_h5xz';
        dataBuriedPoint(mn);
        openDown_new();
    }
    $('#open-btn').on('click',function(){
        mn = 'portal_h5dk';
        dataBuriedPoint(mn);
        openApp_new(g_api.app_open);
    });
    $('#download-btn').on('click',function(){
        mn = 'portal_h5xz';
        dataBuriedPoint(mn);
        openDown_new();
    });
}else{
    $('#open-btn').on('click',function(){
        if(g_api.app_os==2){/*ios*/
            g_api.dflag = 0;
            openNet(g_api.dflag, g_api.mac);
        }else{
            mn = 'portal_h5dk';
            dataBuriedPoint(mn);
            openApp_andrio(g_api.app_open);
        }
    });
    $('#download-btn').on('click',function(){
        var mn = 'portal_h5xz';
        if(g_api.app_os==2){
            g_api.dflag = 1;
            openNet(g_api.dflag, g_api.mac);
        }else{
            dataBuriedPoint(mn);
            openDown_new();
        }
    })
}