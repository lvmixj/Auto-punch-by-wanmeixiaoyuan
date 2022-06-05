auto;

toast('开始自动打卡脚本运行');

if (device.isScreenOn)
{   
}
app.launchApp("完美校园"); //开启完美校园
sleep(2000);
toast('已开启完美校园APP');

//对没有改密码的提示点取消
if(id("dialog_oppotion").exists()){
  id("dialog_oppotion").findOne().click();
  }

//id("menuTitle").className("android.widget.TextView").text("健康打卡").findOne().click();
//查找并点击“健康打卡”的图标
id("menuTitle").className("android.widget.TextView").text("健康打卡").findOne().parent().click();
//id("menuTitle").className("android.widget.TextView").text("健康打卡").waitFor()
//如果有“专业/部门”这说明达到了打卡界面
className("android.widget.TextView").text("专业/部门").waitFor();
//className("android.widget.TextView").text("专业/部门").findOne().parent().parent().waitFor();
toast('进入打卡界面，模拟滑动');
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
swipe(500,2036,500,58,300);
sleep(500);
swipe(500,2036,500,58,300);
sleep(500);
click(500,2200);//点击提交信息
sleep(700);
click(766,1836);//这里点击确认提交的，根据实际情况修改点击坐标
toast('打卡结束');
sleep(500);
home();
sleep(500);
home();
exit();
