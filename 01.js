//屏蔽右键菜单
function caidan(){
	document.oncontextmenu = function (event){
	if(window.event){
	event = window.event;
	}try{
	var the = event.srcElement;
	if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
	return false;
	}
	return true;
	}catch (e){
	return false;
	}
	}
}
//屏蔽复制
function fuzhi(){
	document.oncopy = function (event){
	if(window.event){
	event = window.event;
	}try{
	var the = event.srcElement;
	if(!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
	return false;
	}
	return true;
	}catch (e){
	return false;
	}
	}
}
//屏蔽选中
function xuanzhong(){
	document.onselectstart = function (event){
	if(window.event){
	event = window.event;
	}try{
	var the = event.srcElement;
	if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
	return false;
	}
	return true;
	} catch (e) {
	return false;
	}
	}
}
//屏蔽F12审查元素
function yuansu(){
	document.onkeydown = function(){

    if(window.event && window.event.keyCode == 123) {
        alert("F12被禁用");
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 13) {
        window.event.keyCode = 505;
    }
    if(window.event && window.event.keyCode == 8) {
        alert(str+"\n请使用Del键进行字符的删除操作！");
        window.event.returnValue=false;
    }
	}
}
//歌曲src路径数组
/*var song_path = [
	"dslqdsm", //"images/陈慧娴 - 多少柔情多少梦.mp3",
	"ny", //"images/李翊君 - 诺言.mp3",
	"sn", //"images/陈慧娴 - 傻女.mp3",
	"px", //"images/陈慧娴 - 飘雪.mp3",
	"qqjg", //"images/陈慧娴 - 千千阕歌.mp3",
	"sqdny", //"images/陈慧娴 - 逝去的诺言.mp3",
	"rshcbxf", //"images/陈慧娴 - 人生何处不相逢.mp3",
	"yj", //"images/陈慧娴 - 夜机.mp3",
	"glb", //"images/陈慧娴 - 归来吧.mp3",
	"xfh", //"images/陈慧娴 - 雪飞花.mp3",
	"ybxyq", //"images/陈慧娴 - 月半小夜曲.mp3",
	"cqyw", //"images/陈慧娴 - 痴情意外.mp3",
	"blcda", //"images/陈慧娴 - 玻璃窗的爱.mp3",
	"gdby", //"images/陈慧娴 - 孤单背影.mp3",
	"hcg", //"images/陈慧娴 - 红茶馆.mp3",
	"twj", //"images/陈慧娴 - 跳舞街.mp3",
	"yl", //"images/陈慧娴 - 月亮.mp3",
];*/
var song_path = [
	"陈慧娴 - 多少柔情多少梦.mp3",
	"李翊君 - 诺言.mp3",
	"杨梓文祺 - 郎才女貌.mp3",
	"陈慧娴 - 傻女.mp3",
	"陈慧娴 - 飘雪.mp3",
	"陈慧娴 - 千千阕歌.mp3",
	"陈慧娴 - 逝去的诺言.mp3",
	"陈慧娴 - 人生何处不相逢.mp3",
	"陈慧娴 - 夜机.mp3",
	"陈慧娴 - 归来吧.mp3",
	"陈慧娴 - 雪飞花.mp3",
	"陈慧娴 - 月半小夜曲.mp3",
	"陈慧娴 - 痴情意外.mp3",
	"陈慧娴 - 玻璃窗的爱.mp3",
	"陈慧娴 - 孤单背影.mp3",
	"陈慧娴 - 红茶馆.mp3",
	"陈慧娴 - 跳舞街.mp3",
	"陈慧娴 - 月亮.mp3",
];	
//歌曲名称数组
var song_name = [
	"陈慧娴 - 多少柔情多少梦",
	"李翊君 - 诺言",
	"杨梓文祺 - 郎才女貌",
	"陈慧娴 - 傻女",
	"陈慧娴 - 飘雪",
	"陈慧娴 - 千千阕歌",
	"陈慧娴 - 逝去的诺言",
	"陈慧娴 - 人生何处不相逢",
	"陈慧娴 - 夜机",
	"陈慧娴 - 归来吧",
	"陈慧娴 - 雪飞花",
	"陈慧娴 - 月半小夜曲",
	"陈慧娴 - 痴情意外",
	"陈慧娴 - 玻璃窗的爱",
	"陈慧娴 - 孤单背影",
	"陈慧娴 - 红茶馆",
	"陈慧娴 - 跳舞街",
	"陈慧娴 - 月亮",
];
var wbj = [
	"input1",
	"box3",
	"sxbf1",
	"sxbf2",
	"bfzt",
	"sys",
	"xys",
	"gqlb",
	"box4",
	"box5",
	"p01",
	"p02",
	"gbbfq",
	"jsq",
	"gbwy",
	"box02",
	"wyjsq",
	"ksjs",
	"tzjs",
	"jsgl",
	"qkjs",
	"gszl",
	"gsz",
	"xiazai",
	"vo",
	"file",
	"submit",
	"iframe",
	"text",
	"uploadSongs",
	"songLab",
];
//网页元素外边距函数
function wbjhs(){
	for(var i = 0; i < wbj.length; i++){
		document.getElementById(wbj[i]).style = "margin:10px 20px 10px 0px";
	}
}
//欢迎关注影子音乐函数
function span01(){
	spanObj.innerHTML = "欢迎关注影子网页音乐！";
	setTimeout("spanObj.innerHTML = null",10000);
}
function span02(){
	spanObj.innerHTML = "歌曲已停止播放！";		
}
function span03(){
	spanObj.innerHTML = "上一首歌曲已经播放结束！";		
}
function re_play(){
	ad.currentTime = 0.0;
}
function ylg(){
	ad.volume = ad.volume - 0.2;
	spanObj.innerHTML = "正在减音量";
	if(ad.volume <= 0){
		spanObj.innerHTML = "抱歉，音量已不能再减了！";
		//setTimeout("spanObj.innerHTML = null",6000);
		return;
	}
	setTimeout("spanObj.innerHTML = null",3000);
}
function ylj(){
	ad.volume = ad.volume+0.2;
	spanObj.innerHTML = "正在加音量";
	if(ad.volume >= 1){
		spanObj.innerHTML = "抱歉，音量已不能再加了！";
		setTimeout("spanObj.innerHTML = null",6000);
		return;
	}
	setTimeout("spanObj.innerHTML = null",3000);
}
//全局变量初始化
var i = 0,
path = "audio/",
pat = "upload/",
ad, 
spanObj;
var path01 = path+song_name[i]+".mp3";
var path02 = pat+song_name[i]+".mp3";

//歌曲列表样式函数
function abc(){
	for(var k = 0; k < p.length; k++){
				document.getElementById(p[k]).style.display = "none";
				document.getElementById(aa[k]).style.color = "green";
				document.getElementById(smo[k]).style = "background-color:white";
			}
			document.getElementById(p[i]).style.display = "block";
			document.getElementById(aa[i]).style.color = "#ff99cc";
			document.getElementById(smo[i]).style = "background-color:#ccc";	
}
//初始化函数
function abd(){
	ad = document.getElementById("audio");
	ad.src = "audio/陈慧娴 - 多少柔情多少梦.mp3";
	
	spanObj = document.getElementById("span");
var vo = document.getElementById("vo");
var vol = document.getElementById("vol");

	ad.addEventListener("play",span01);
	ad.addEventListener("pause",span02);
	ad.addEventListener("ended",span03);
	vo.addEventListener("click",ylg);
	vol.addEventListener("click",ylj);

	ad.addEventListener("error",function(){
			ad.src = pat+song_path[i];
			ad.play();
			document.getElementById("xiazai").href = pat+song_path[i];
		},false);	
}
window.onload = init;
function init(){
	gqlb();
	//abc();
	abd();
	
	xzsj();
	sxbf();
	wbjhs();
	
	//caidan();
	fuzhi();
	xuanzhong();
	//yuansu();
}
//顺序播放函数
function sxbf(){
		var input1 = document.getElementById("input1");
			input1.value = '顺序播放';
			input1.style.color = "green";
			ad.loop = "";
			ad.onended = function(){
		i++;
		if(song_path[i]){
			//this.setAttribute("src",path+song_path[i]);
			ad.src = path+song_path[i];
			ad.play();
			document.getElementById("box5").innerHTML = song_name[i];
			document.getElementById("xiazai").href = path+song_path[i];
			document.getElementById("xiazai").download = song_name[i]+".mp3";
			abc();
		}
		else{
			//当song_path数组里元素的值为undefined时，执行以下代码
			i = -1;
			sxbf();
			ad.play();
		}
	}
}
//随机播放函数
function sjbf(){
		var input1 = document.getElementById("input1");
			input1.value = '随机播放';
			input1.style.color = "blue";
			ad.loop = "";
			ad.onended = function(){
		i = i+2;
		if(song_path[i]){
			ad.src = path+song_path[i];
			ad.play();
			document.getElementById("box5").innerHTML = song_name[i];
			document.getElementById("xiazai").href = path+song_path[i];
			document.getElementById("xiazai").download = song_name[i]+".mp3";
			abc();
		}
		else{
			i = 0;
			sxbf();
			ad.play();
		}
	}
}
//循环播放函数
function dqxh(){
			ad.loop = "loop";
		var input1 = document.getElementById("input1");
			input1.value = '单曲循环';
			input1.style.color = "red";
}
//上一首播放函数
function sys(){
				i--;
			if(song_path[i]){
				ad.src = path+song_path[i];
				ad.play();
				document.getElementById("box5").innerHTML = song_name[i];
				document.getElementById("xiazai").href = path+song_path[i];
				document.getElementById("xiazai").download = song_name[i]+".mp3";
				abc();
			}
			else{
				spanObj.innerHTML = "往上没有歌曲了，请查看歌曲列表！";
				i = 0;
			}
}
//下一首播放函数
function xys(){
				i++;
			if(song_path[i]){
				ad.src = path+song_path[i];
				ad.play();
				document.getElementById("box5").innerHTML = song_name[i];
				document.getElementById("xiazai").href = path+song_path[i];
				document.getElementById("xiazai").download = song_name[i]+".mp3";
				abc();
			}
			else{
				spanObj.innerHTML = "往下没有歌曲了，请查看歌曲列表！";
				i = song_path.length-1;
			}
}
//播放、暂停函数
function bfzt(){
	if(ad.paused){
		ad.play();
		abc();
	}else{
			ad.pause();
		}
}
//现在的日期时间函数
function xzsj()
{
	//实例：现在的日期时间信息
	var arr = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
	//创建现在的日期对象
	var today = new Date();
	var weilai = new Date("2018/2/16");
	var year = today.getFullYear();
	var month = today.getMonth()+1;
	var date = today.getDate();
	var hours = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();
	var week = today.getDay();//取值0-6
	var timer1 = today.getTime();
	var timer2 = weilai.getTime();
	var chunjie = (timer2-timer1)/1000/3600/24;
	var guonian = Math.floor(chunjie);
	//不够两位，前面补0
	month = month<10? "0"+month : month;
	date = date < 10? "0"+date  : date;
	hours = hours<10? "0"+hours : hours;
	minutes = minutes<10? "0"+minutes : minutes;
	seconds = seconds<10? "0"+seconds : seconds;
	//构造要输出的结果
	var str = hours+":"+minutes+":"+seconds;
		str += "<br>"+arr[week];
		str += "<br>"+year+"年"+month+"月"+date+"日";
		str += "<br>距离春节还有"+guonian+"天";
	document.getElementById("myclock").innerHTML=str;
	setTimeout("xzsj()",1000);
	
	var st="";
	if(hours < 6){
		st = "凌晨好！";
	}
	else if(hours < 10){
		st = "早上好！";	
	}
	else if(hours < 12){
		st = "上午好！";	
	}
	else if(hours < 14){
		st = "中午好！";	
	}
	else if(hours < 18){
		st = "下午好！";	
	}
	else if(hours < 22){
		 st = "晚上好！";	
	}
	else{
		st = "深夜好！";
	}
	
	document.getElementById("sh").innerHTML = st; 
}
//网页计算器函数
function focus_shuzi01()
{
	//获取id=result_username的对象
	var resultObj = document.getElementById("result_shuzi01")
	//写入提示信息
	resultObj.innerHTML = "请输入一个数字";
	resultObj.style.color = "gray";
	//给文本框加一个边框
	//document.form2.username.style = "border:1px solid red;background-color:f0f0f0";
	
	document.getElementById("td01").innerHTML = "";
	document.getElementById("jsjg").innerHTML = "";
}
function focus_yunsuanfu()
{
	//获取id=result_username的对象
	var resultObj = document.getElementById("result_yunsuanfu")
	//写入提示信息
	resultObj.innerHTML = "请输入 + - * / 运算符号中的一个";
	resultObj.style.color = "gray";
	//给文本框加一个边框
	//document.form2.username.style = "border:1px solid red;background-color:f0f0f0";
}
function focus_shuzi02()
{
	//获取id=result_username的对象
	var resultObj = document.getElementById("result_shuzi02")
	//写入提示信息
	resultObj.innerHTML = "请输入一个数字";
	resultObj.style.color = "gray";
	//给文本框加一个边框
	//document.form2.username.style = "border:1px solid red;background-color:f0f0f0";
}
//网页计算器函数
function jieguo(){
	var jsjg = document.getElementById("jsjg");
	var td01 = document.getElementById("td01");
	var shuzi01 = document.getElementById("shuzi01").value;
	var yunsuanfu = document.getElementById("yunsuanfu").value;
	var shuzi02 = document.getElementById("shuzi02").value;
	var sz01 = parseFloat(shuzi01);
	var sz02 = parseFloat(shuzi02);
	var jieguo;
	if(yunsuanfu == "+"){
		jieguo = sz01 + sz02;
	}
	else if(yunsuanfu == "-"){
		jieguo = sz01 - sz02;	
	}
	else if(yunsuanfu == "*"){
		jieguo = sz01 * sz02;	
	}
	else if(yunsuanfu == "/"){
		jieguo = sz01 / sz02;	
	}
	td01.style = "font-size:1.5em";
	td01.innerHTML = shuzi01 + yunsuanfu + shuzi02;
	//计算结果
	if(jieguo || jieguo == 0){
		jsjg.style = "color:green;font-size:1.5em";
		jsjg.innerHTML = jieguo;
	}else{
		jsjg.style = "color:red";
		jsjg.innerHTML = "请输入数字、运算符，不然无法进行数学运算";
	}
	document.getElementById("result_shuzi01").innerHTML = "";
	document.getElementById("result_yunsuanfu").innerHTML = "";
	document.getElementById("result_shuzi02").innerHTML = "";
	document.getElementById("shuzi01").value = "";
	document.getElementById("yunsuanfu").value = "";
	document.getElementById("shuzi02").value = "";
}
//顺序播放 显示、隐藏函数
function box3(){
	var box3 = document.getElementById("box3");
	if(box3.style.display == "block"){
		box3.style.display = "none";
	}else{
		box3.style.display = "block";
	}
}
//关闭网页函数
function cloe(){
	var body = document.getElementById("body");
	if(confirm('确定要关闭网页?')){
		//window.opener=null;
		//window.open('','_self');
		//window.close();
		document.getElementById("audio").pause();
		body.style.display = "none";
	}
}
//关闭音乐 显示、隐藏函数
function clo(){
	var box01 = document.getElementById("box01");
	var guanbi = document.getElementById("gbbfq");
	if(box01.style.display == "none"){
		box01.style.display = "block";
		guanbi.value = "关闭音乐";
	}else{
		box01.style.display = "none";
		guanbi.value = "开放音乐";
	}	
}
//网页计算器 显示、隐藏函数
function jsq(){
	document.getElementById("p01").style.display = "none";
	document.getElementById("p02").style.display = "none";
	var box03 = document.getElementById("box02");
	if(box03.style.display == "block"){
		box03.style.display = "none";
	}else{
		box03.style.display = "block";
	}
}
//网页计时器 开始计时函数
var h = 0;
var m = 0;
var s = 0;
var time = 0;
var flag = 0;
function ksjs(){
	flag++;
	if(flag > 1){
			window.clearTimeout(time);
		}
	js();
}
function js(){
		var p02 = document.getElementById("p02");
		time = window.setTimeout("js()",1000);
		s++;
		if(s == 60){
			m++;
			s = 0;
		}
		else if(m == 60){
			h++;
			m = 0;
			s = 0;
		}
		p02.innerHTML = h+"时"+m+"分"+s+"秒";
}
//网页计时器 停止计时函数
function tzjs(){
	window.clearTimeout(time);
}
//网页计时器 计时归零函数
function jsgl(){
	h = 0;
	m = 0;
	s = 0;
	window.clearTimeout(time);
	document.getElementById("p02").innerHTML = h+"时"+m+"分"+s+"秒";
}
//网页计时器 清空计时函数
function qkjs(){
	jsgl();
	document.getElementById("p02").innerHTML = "";	
}
//网页计时器 显示、隐藏函数
function wyjsq(){
	document.getElementById("box02").style.display = "none";
	var p03 = document.getElementById("p01");
	var p02 = document.getElementById("p02");
	if(p03.style.display == "block"){
		p03.style.display = "none";
		p02.style.display = "none";
	}else{
			p03.style.display = "block";
			p02.style.display = "block";
		}
}
//歌手资料函数
function gszl(){
	var p03 = document.getElementById('p03');
	if(p03.style.display == 'block'){
			p03.style.display = 'none';
		}
	else{
			p03.style.display = 'block';
		}
}
//歌曲列表函数 
var aa = ['a0','a1','a2','a3','a4','a5','a6','a7','a8','a9','a10','a11','a12','a13','a14',
'a15','a16'];
var p = ['p0','p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','p11','p12','p13','p14',
'p15','p16'];
var smo = ['s0','s1','s2','s3','s4','s5','s6','s7','s8','s9','s10','s11','s12','s13','s14',
's15','s16'];
function gqlb(){
	//变量可以追踪用户的点击次数
	var str = "";
	for(var j = 0; j < song_path.length; j++){
		str += "<div class='songMenuBox' id="+smo[j]+">";
		str += "<a class='songPlayMenu' id="+aa[j]+" onclick=yl("+j+")>"+song_name[j]+"</a><pre>";
		//给所有的div分配id
		str += "<p class='songMenu' id="+p[j]+" style='display:none'>";
		str += "<a class='songMenuButton' onclick=delSong("+j+")>删除歌曲</a>";
		str += "<a class='songMenuButton' onclick=songSort("+j+")>歌曲排序</a>";
		str += "</p>";
		str += "</div>";
	}
	document.getElementById("box6").innerHTML = str;
}
//删除歌曲函数
function delSong(g){
	delete song_name[g];
	//document.getElementById(aa[g]).style.display = "none";
	gqlb();
}
//歌曲排序函数
function songSort(g){
	
	//将数组song_name、song_path反转顺序
	song_name.reverse();
	song_path.reverse();
	gqlb();
	//document.getElementById("box5").innerHTML = song_name[0];
	//ad.src = path+song_path[g];
	//document.getElementById("xiazai").href = path+song_path[0];
	//document.getElementById("xiazai").download = song_name[0]+".mp3";
	i = -1;
	//ad.play();
}
//歌曲列表函数
function yl(g){
			//this.style.display = "none";
			ad.setAttribute("src",path+song_path[g]);
			ad.play();
			document.getElementById("box5").innerHTML = song_name[g];
			document.getElementById("xiazai").href = path+song_path[g];
			document.getElementById("xiazai").download = song_name[g]+".mp3";
			//document.getElementById(p[g]).style.display = "block";


			
			for(var k = 0; k < p.length; k++){
				document.getElementById(p[k]).style.display = "none";
				document.getElementById(aa[k]).style.color = "green";
				document.getElementById(smo[k]).style = "background-color:white";
			}
			document.getElementById(p[g]).style.display = "block";
			document.getElementById(aa[g]).style.color = "#ff99cc";
			document.getElementById(smo[g]).style = "background-color:#ccc";
			setTimeout("divYc("+g+")",60000);
			i = g;
}
function divYc(y){
	document.getElementById(p[y]).style.display = "none";	
}
//歌曲列表 显示、隐藏函数
function gqxy(){
	var box6 = document.getElementById("box6");
	if(box6.style.display == "block"){
		box6.style.display = "none";
	}else{
		box6.style.display = "block";	
	}
}
//上传歌曲 显示、隐藏函数
function upload(){
	var form = document.getElementById("form");
	if(form.style.display == "block"){
		form.style.display = "none";
	}else{
		form.style.display = "block";	
	}
}

//获取上传文件名函数
var temp, //上传文件名
tem, //上传文件类型
ext,//上传文件扩展名
index;
var flag = false; //标志
//选择文件函数
function change(){
	
	var songName = "";
	var obj = document.getElementById("file");
	var arr = ["mp3","jpg","png","gif"];
	//var tishi = document.getElementById("tishi");
	var len = obj.files.length;
	
	for (var i = 0; i < len; i++) {
			temp = obj.files[i].name;
			tem = obj.files[i].type;
			songName += temp+"<br><br>";
			
			//先找到文件扩展名前的小点
			index = temp.lastIndexOf(".");
			//取出扩展名
			ext = temp.substr(index+1);
			
			//循环数组，比较扩展名是否合法
			for(var j = 0; j < arr.length; j++){
				if(ext == arr[j]){
					flag = true;
					break; //退出循环
				}else{
					//flag = false;
					//return; //结束函数
				}		
		}
	}
	//tishi.innerHTML = "将要上传的文件是："+songName;
	//var temp = substring(startIndex[,endIndex]);
	
	document.getElementById("text").innerHTML = songName;
	document.getElementById("songBox").style.display = "block";

	if(tem != "audio/mp3"){
		document.getElementById("songLab").value = "加入图片列表";
	}
	//调用ifTemp()函数判断上传文件是否合法
	//ifTemp();
}
//确认上传函数
function ifTemp(){
	
	document.getElementById("song_box").style.display = "block";
	/*var arr = ["mp3","jpg","png","gif"];
	for(var i = 0; i < arr.length; i++){
	if(ext == arr[i]){
		flag = true;
		break;//退出循环
		}		
	}*/
	//判断用户是否选择了文件
	var obj = document.getElementById("file");
	if(obj.files.length == 0){
		document.getElementById("song_box").style.display = "none";
		alert("抱歉，你没有选择任何文件！");
		return false;
	}
	//判断flag的值
	if(flag){
		alert("上传文件合法！");
	}else
	{
		document.getElementById("song_box").style.display = "none";
		alert("抱歉，上传的文件中含有非法文件，只能上传mp3歌曲文件和图片文件！");
		return false;
	}
}

//加入歌曲列表函数
function play_song(){
	document.getElementById("song_box").style.display = "none";
	var songName = "";
	var ind = "";
	//取到上传文件名（点之前的字符串）
	//temp = temp.substring(0,index);
	//将上传文件名加入到歌曲名数组中
	if(tem == "audio/mp3")
	{	//audios.unshift(temp+".mp3");
		var obj = document.getElementById("file");
		//var tishi = document.getElementById("tishi");
		var len = obj.files.length;
		for (var i = 0; i < len; i++) {
			songName = obj.files[i].name;
			ind = songName.lastIndexOf(".");
			songName = songName.substring(0,ind);

			song_path.unshift(songName+".mp3");
			song_name.unshift(songName);
		}
		//song_name.unshift(temp);
		ad.src = pat+songName+".mp3";
		ad.play();
		document.getElementById("box5").innerHTML = songName;
		document.getElementById("xiazai").href = pat+songName+".mp3";
		document.getElementById("xiazai").download = songName+".mp3";
		alert("上传的歌曲已成功添加到歌曲列表中，请查看歌曲列表。");
	}else
	{
		
		imageLab();
	}
	//调用歌曲列表函数以加载刚传入进去的歌曲名
	gqlb();
}

var arr_images = [];
function imageLab(){
	arr_images.unshift(temp);
	//document.getElementById("imageBox").innerHTML = 
}





	/*//取出扩展名
	ext = temp.substr(index+1);
	//取到上传文件名（点之前的字符串）
	temp = temp.substring(0,index);
	//将上传文件名加入到歌曲名数组中
	if(temp != "" && tem == "audio/mp3")
	{
		song_name.unshift(temp);
		ad.src = pat+temp+".mp3";
		ad.play();
		document.getElementById("box5").innerHTML = temp;
	}else
	{
		//setTimeout("spanObj.innerHTML = '你没有选择文件或者选择的文件非mp3类型<br>所以网页音乐无法为你播放刚选择的文件'",3000);
	}
	//调用歌曲列表函数以加载刚传入进去的歌曲名
	gqlb();*/

	
