/**
 * 与app交互的方法
 */
window.jx_common_app = {
	callApp : function(opration,data){
		if($("#jx-app-hidden-div").size() > 0){
			$("#jx-app-hidden-div").remove();
		}
		$("body").append("<div id=\"jx-app-hidden-div\" style=\"display:none;\"></div>")
		var hidden = document.getElementById("jx-app-hidden-div");
		var iframe = document.createElement("iframe");
		iframe.src = "yimay://app?content={\"TYPE\":\"JIUXIU\",\"OPERATION\":\""+opration+"\",\"DATA\":"+data+"}";
		iframe.style.display = "none";
		hidden.appendChild(iframe);
		return false;
	},
	openApp : function(){
		window.location.href = "yimay://app";
	},
	openAppShop : function(shopId,shopName){
		shopName = encodeURIComponent(shopName);
		var operation = "SHOP_HOME_PAGE";
		var data = "{\"id\":\""+shopId+"\",\"name\":\""+shopName+"\"}";
		var _self = this;
		_self.callApp(operation,data);
		//window.location.href="yimay://app?content={\"TYPE\":\"JIUXIU\",\"OPERATION\":\"SHOP_HOME_PAGE\",\"DATA\":{\"id\":\""+shopId+"\",\"name\":\""+shopName+"\"}}";
	},
	openAppItemDetail : function(itemId,itemType,title){
		title = encodeURIComponent(title);
		var operation = "";
		var data = "{\"id\":\""+itemId+"\",\"title\":\""+title+"\"}";
		//跟团游
		if(itemType == "TOUR_LINE"){
			operation = "PACKAGE_TOUR_DETAIL";
			//window.location.href="yimay://app?content={\"TYPE\":\"JIUXIU\",\"OPERATION\":\"PACKAGE_TOUR_DETAIL\",\"DATA\":{\"id\":\""+itemId+"\",\"title\":\""+title+"\"}}";
			//return false;
		}
		//周边游
		else if(itemType == "ARROUND_FUN"){
			operation = "AROUND_FUN_DETAIL";
			//window.location.href="yimay://app?content={\"TYPE\":\"JIUXIU\",\"OPERATION\":\"AROUND_FUN_DETAIL\",\"DATA\":{\"id\":\""+itemId+"\",\"title\":\""+title+"\"}}";
			//return false;
		}
		//同城玩乐
		else if(itemType == "CITY_ACTIVITY"){
			operation = "CITY_ACTIVITY_DETAIL";
			//window.location.href="yimay://app?content={\"TYPE\":\"JIUXIU\",\"OPERATION\":\"CITY_ACTIVITY_DETAIL\",\"DATA\":{\"id\":\""+itemId+"\",\"title\":\""+title+"\"}}";
			//return false;
		}
		//自由行
		else if(itemType == "FREE_LINE"){
			operation = "FREE_TOUR_DETAIL";
			//window.location.href="yimay://app?content={\"TYPE\":\"JIUXIU\",\"OPERATION\":\"FREE_TOUR_DETAIL\",\"DATA\":{\"id\":\""+itemId+"\",\"title\":\""+title+"\"}}";
			//return false;
		}
		//酒店
		else if(itemType == "HOTEL"){
			operation = "HOTEL";
			//window.location.href="yimay://app?content={\"TYPE\":\"JIUXIU\",\"OPERATION\":\"HOTEL\",\"DATA\":{\"id\":\""+itemId+"\",\"name\":\""+title+"\"}}";
			//return false;
		}
		//境外自由行：FREE_TOUR_ABOARD_DETAIL
		else if(itemType == "FREE_TOUR_ABOARD_DETAIL"){
			operation = "FREE_TOUR_ABOARD_DETAIL";
		}
		//境外跟团游：PACKAGE_TOUR_ABOARD_DETAIL
		else if(itemType == "PACKAGE_TOUR_ABOARD_DETAIL"){
			operation = "PACKAGE_TOUR_ABOARD_DETAIL";
		}
		//积分商城商品详情
		else if(itemType == "INTEGRAL_MALL_DETAIL"){
			operation = "VIEW_INTEGRAL_MALL_DETAIL";
			data = "{\"id\":\""+itemId+"\"}";
		}
		//美食
		else if(itemType == "JIUXIU_BUY_DETAIL"){
			operation = "JIUXIU_BUY_DETAIL";
		}
		else{
			alert("暂不支持类型:"+itemType);
			return false;
		}
		var _self = this;
		_self.callApp(operation,data);
	},
	openAppShare : function(shareTitle,shareContent,shareImageUrl,shareWebPage,shareWay){
		shareTitle = encodeURIComponent(shareTitle);
		shareContent = encodeURIComponent(shareContent);
		shareImageUrl = encodeURIComponent(shareImageUrl);
		shareWebPage = encodeURIComponent(shareWebPage);
		if(!shareWay || shareWay == null || shareWay == ""){
			shareWay = "-1";
		}
		if(shareWay != "-1" //全部
			&& shareWay != "1" //微信
			&& shareWay != "2" //微信朋友圈
			&& shareWay != "3" //QQ
			&& shareWay != "4" //Weibo
			&& shareWay != "5" //达人圈
			){
			alert("暂不支持分享类型");
			return false;
		}
		var operation = "WEB_SHARE";
		var data = '{"shareTitle":"'+shareTitle+'","shareContent":"'+shareContent+'","shareImageUrl":"'+shareImageUrl+'","shareWebPage":"'+shareWebPage+'","shareWay":"'+shareWay+'"}';
		var _self = this;
		_self.callApp(operation,data);
		//window.location.href ='yimay://app?content={"TYPE":"JIUXIU","OPERATION":"WEB_SHARE","DATA":{"shareTitle":"'+shareTitle+'","shareContent":"'+shareContent+'","shareImageUrl":"'+shareImageUrl+'","shareWebPage":"'+shareWebPage+'","shareWay":"'+shareWay+'"}}';
	},
	openAppLogin:function(){
		var operation = "LOGIN";
		var data = '{}';
		var _self = this;
		_self.callApp(operation,data);
		//window.location.href="yimay://app?content={\"TYPE\":\"JIUXIU\",\"OPERATION\":\"LOGIN\",\"DATA\":{}}";
		return false;
	},
	openAppTopic:function(topicName){
		topicName = encodeURIComponent(topicName);
		var operation = "VIEW_TOPIC_DETAIL";
		var data = "{\"topicName\":\""+topicName+"\"}";
		var _self = this;
		_self.callApp(operation,data);
		//window.location.href="yimay://app?content={\"TYPE\":\"JIUXIU\",\"OPERATION\":\"VIEW_TOPIC_DETAIL\",\"DATA\":{\"topicName\":\""+topicName+"\"}}";
	},
	openAppBack:function() {
		var _self = this;
		_self.closeWindow();
	},
	openAppConsult:function(id) {
		var operation = "VIEW_CONSULTING_SERVICE_DETAIL";
		var data = "{\"id\":\""+id+"\"}";
		var _self = this;
		_self.callApp(operation,data);
		//window.location.href="yimay://app?content={\"TYPE\":\"JIUXIU\",\"OPERATION\":\"VIEW_CONSULTING_SERVICE_DETAIL\",\"DATA\":{\"id\":\""+id+"\"}}";
		return false;
	},
	openAppDarenPage:function(id,option,title) {
		var operation = "MASTER_DETAIL";
		var data = "{\"id\":\""+id+"\",\"option\":\""+option+"\",\"title\":\""+title+"\"}";
		var _self = this;
		_self.callApp(operation,data);
		//window.location.href="yimay://app?content={\"TYPE\":\"JIUXIU\",\"OPERATION\":\"MASTER_DETAIL\",\"DATA\":{\"id\":\""+id+"\",\"option\":\""+option+"\",\"title\":\""+title+"\"}}";
		return false;
	},
	openAppMall:function(){
		var operation = "VIEW_INTEGRAL_MALL";
		var data = "{}";
		var _self = this;
		_self.callApp(operation,data);
		//window.location.href="yimay://app?content={\"TYPE\":\"JIUXIU\",\"OPERATION\":\"VIEW_INTEGRAL_MALL\",\"DATA\":{}}";
		return false;
	},
	openH5Mall:function(){
		var operation = "WEB_INTEGRAL_MALL";
		var data = "{}";
		var _self = this;
		_self.callApp(operation,data);
		//window.location.href="yimay://app?content={\"TYPE\":\"JIUXIU\",\"OPERATION\":\"VIEW_INTEGRAL_MALL\",\"DATA\":{}}";
		return false;
	},
	openAppTaskList:function(){
		var operation = "VIEW_INTEGRAL_TASK_LIST";
		var data = "{}";
		var _self = this;
		_self.callApp(operation,data);
		//window.location.href="yimay://app?content={\"TYPE\":\"JIUXIU\",\"OPERATION\":\"VIEW_INTEGRAL_TASK_LIST\",\"DATA\":{}}";
		return false;
	},
	closeWindow:function(){
		var operation = "CLOSE_WINDOW";
		var data = "{}";
		var _self = this;
		_self.callApp(operation,data);
		//window.location.href="yimay://app?content={\"TYPE\":\"JIUXIU\",\"OPERATION\":\"CLOSE_WINDOW\",\"DATA\":{}}";
		return false;
	},
	openAppTitle:function(title){
		title = encodeURIComponent(title);
		var operation = "WEBVIEW_TITLE";
		var data = "{\"title\":\""+title+"\"}";
		var _self = this;
		_self.callApp(operation,data);
		return false;
	},
	//积分明细
	openAppJiFenDetail:function(){
		var operation = "VIEW_INTEGRAL_DETAIL";
		var data = "{}";
		var _self = this;
		_self.callApp(operation,data);
		return false;
	},
	//积分任务列表
	openAppJiFenTaskList : function(){
		var operation = "VIEW_INTEGRAL_TASK_LIST";
		var data = "{}";
		var _self = this;
		_self.callApp(operation,data);
		return false;
	},
	//打开app中内嵌的H5页面
	openAppWeb:function(_url){
		var _self = this;
		var operation = "OPEN_WEB";
		var data = "{\"link\":\""+_url+"\",\"isCleanCookie\":\""+false+"\"}";
		_self.callApp(operation,data);
	},
	// app打开所有版本的商城
	openAllMall : function () {
		var _self = this, 
		versionCode = jx_common.getAppVersionCode();
		if(!versionCode){
			_self.openAppMall();
			return false;
		}
		versionCode = versionCode.substr(0,3);
		if(versionCode == "200"){
		           window.location.href="http://"+document.domain+"/view/mall/index.html";
		           return false;
		}
	          if(versionCode== "210" || versionCode== "215"){
	           	_self.openH5Mall();
	        		return false;
	           }
	}
}
