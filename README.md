# Auto-punch-by-wanmeixiaoyuan
用auto.js实现完美校园的自动打卡
	1. 下载安装auto.js 给予所有必要权限 设置自启动和后台清理白名单
	2. 打开开发者模式 指针位置
		a. 打开开发者模式。设置-我的设备-全部参数-MIUI版本，连点好多下MIUI版本，直到提示已开启。其他品牌手机进行类似操作
		b. 开启指针位置。设置-更多设置-开发者选项-指针位置
	3. 获取健康打卡图标位置
		a. 进入完美校园，长按健康打卡，将应用添加到手机桌面（需要给予创建桌面图标的权限）
		b. 把“健康打卡”图标移动到桌面主屏
		c. 开启指针位置，上方X为当前指针横坐标，Y为当前指针纵坐标。手指移动到“健康打卡”图标上方，记下坐标点。
	4. 复制黏贴代码
		a. 进入auto.js，确保权限给到位
		b. 点右下角加号＋
		c. 选择文件，输入名称“打卡”
		d. 黏贴代码
		e. 修改代码，主要修改下“健康打卡”图标的坐标点
		f. 点击运行试下
		
	5. 设置定时启动或图标创建
		a. 进入auto.js点击文件“打卡”右边的三个点-更多-定时任务
		b. 进入auto.js点击文件“打卡”右边的三个点-更多-创建快捷方式，即可在桌面点击完成打卡
	6. 缺陷
		a. 该软件容易出现莫名其妙的bug
		b. 需要开屏解锁才能显示
