sleep(2000);

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
engines.execScriptFile("息屏打卡2.js");
    exit();
    }
}

sleep(500);
home();
sleep(1000);
home();
sleep(1000);
click(355,1191);
sleep(7500);


swipe(500,2036,500,448,500);
sleep(200);
swipe(500,2036,500,448,500);
sleep(200);
swipe(500,2036,500,448,500);
sleep(200);
click(500,2200);
sleep(1000)
//click(800,1800);

toast("我要退出了");
//sleep(300);
//home();
//sleep(300);
//click(545,1733);
exit();
