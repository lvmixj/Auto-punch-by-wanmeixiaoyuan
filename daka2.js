
auto;

toast('1，自动打卡开始运行');

if (device.isScreenOn)
{   
var daka = confirm("需要打卡吗？");
if(daka)
    {
    toast("接下来进入打卡");   
    }
else
    {
    toast("朕暂时不方便打卡");
    sleep(1000);
    toast("5min后再提醒你打卡")
    sleep(240000);
    toast("1min后再叫你打卡");
    sleep(60000); 

var scriptsPath = "/sdcard/脚本/";
if(!files.exists(scriptsPath)){
    scriptsPath = "/sdcard/Scripts/";
}
engines.execScriptFile("daka2.js");
    exit();
    }
}
app.launchApp("完美校园"); //添加判定是否在该应用中
sleep(2000);
toast('2，打卡完美校园');
//id("menuTitle").className("android.widget.TextView").text("健康打卡").waitFor().click();
//id("menuTitle").className("android.widget.TextView").text("健康打卡").findOne().click();
///id("menuTitle").className("android.widget.TextView").text("健康打卡").findOne().parent().waitFor()

//如果屏幕上出现“健康打卡”四个字便点击
id("menuTitle").className("android.widget.TextView").text("健康打卡").findOne().parent().click();

//这一步是为了判定是否到了打卡界面。等待“专业/部门”这个字符串出现，当然，用户可以自行修改
className("android.widget.TextView").text("专业/部门").waitFor()
//className("android.widget.TextView").text("专业/部门").findOne().parent().parent().waitFor();
toast('3，进入打卡界面');
swipe(500,2036,500,138,300);
sleep(500);
swipe(500,2036,500,248,300);
sleep(500);
swipe(500,2036,500,58,300);
sleep(500);
swipe(500,2036,500,58,300);
sleep(500);
swipe(500,2036,500,58,300);
sleep(500);
swipe(500,2036,500,58,300);
sleep(500);
swipe(500,2036,500,58,300);
sleep(500);
click(500,2200);
toast('end，手动提交');
exit();


/*
auto;

if (device.isScreenOn)
{   
var daka = confirm("需要打卡吗？");
if(daka)
    {
    toast("接下来进入打卡");   
    }
else
    {
    toast("朕暂时不方便打卡");
    sleep(1000);
    toast("5min后再提醒你打卡")
    sleep(240000);
    toast("1min后再叫你打卡");
    sleep(60000); 

var scriptsPath = "/sdcard/脚本/";
if(!files.exists(scriptsPath)){
    scriptsPath = "/sdcard/Scripts/";
}
engines.execScriptFile("打卡.js");
    exit();
    }
}

home();
sleep(1000);
home();
sleep(1000);
click(355,1191);
sleep(9000);


swipe(500,2036,500,448,500);
sleep(500);
swipe(500,2036,500,448,500);
sleep(500);
swipe(500,2036,500,448,500);
sleep(500);
click(500,2200);
exit();





*/




