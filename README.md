# 网易云音乐HA插件

基于第三方UI修改，配合自定义的media插件实现的后台播放功能；

> custom_components：对应的HomeAssistant自定义插件目录

> 这个前端的播放器由 [maomao1996](https://github.com/maomao1996) 开发，我只是基础上进行了修改

## 如何使用

如果实在不会用或有问题，请看完先：https://www.bilibili.com/video/BV1et4y1a7RU/

> 安装

1.使用[HACS安装](https://github.com/custom-components/hacs)

在HACS里输入：https://github.com/shaonianzhentan/ha_cloud_music 即可安装成功（类型选择Integration）

2.自定义安装

将本项目custom_components里的内容，放到HA的custom_components文件夹中

> 后台插件配置

然后在configuration.yaml中配置以下内容
```yaml
media_player:
  - platform: ha_cloud_music
    api_url: （必填）网易云音乐接口请求地址（文档：https://neteasecloudmusicapi.vercel.app）
    qq_api_url: （非必填）QQ音乐接口请求地址（文档：https://github.com/Rain120/qq-music-api）
    xmly_api_url: （非必填）喜马拉雅VIP音乐解析接口
    mpd_host: MPD播放器host（如果你有的话）

```

> 注意事项（一定要配置）`当属性过多会把数据库撑爆，一定要把这个播放器过滤掉`
```yaml
# 配置日志记录，排除掉这个实体
recorder:
  exclude:
    entities:
      - media_player.yun_yin_le  
```

[完整配置文档](./docs/ "完整配置文档")

### 计划实现功能
- [ ] 控制蓝牙设备切换

## 更新说明

### V4.6
- 测试网页播放器多终端同步播放功能（未完成）
- 调整网页播放器TTS播放通道
- 解决TTS播放时进度条更新的问题
- 新增播放速度控制功能（只有内置的VLC播放器可以使用）
- 修复播放单个音乐异常的问题
- 修复TTS播放速度不正常的问题
- 当搜索结果音乐列表数量大于100时，使用数字分页
- 解决苹果手机浏览器不能使用卡片的问题
- 调整滑块样式
- 接口请求异常时发出通知
- 支持列表倒序播放
- 支持语音命令`播放(上|下|前|后)一(曲|首)`

### V4.5  [更新内容视频介绍](https://www.bilibili.com/video/BV1jX4y1u79u/)
- 修复第一次加载卡片异常问题
- 优化搜索卡片，加入音乐搜索功能
- 修复点击选项卡，无法显示内容的问题
- 音乐搜索名称在搜索时去掉前后符号
- 点击喜欢后立即更新实体
- 加入喜马拉雅音频解析接口文件：[xmly.js](./api/)
- 加入白嫖[@jsososo](https://github.com/jsososo/QQMusicApi)的尊贵QQ音乐绿钻会员接口😂
- 调整喜马拉雅接口配置名称😊（我尊贵的喜马拉雅年度会员，考虑要不要放出来给大家白嫖🙂）
- 支持缓存QQ音乐文件
- 修复不能播放局域网音乐的问题
- 喜马拉雅VIP音频不能播放时通知提醒
- 修复搜索专辑时没有封面会出现异常的问题
- 搜索时点击类别直接搜索

### V4.4
- 优化语音识别逻辑
- 增加音量识别调整
- 解决咪咕音乐接口无法搜索的问题
- 登录异常加上出现错误提示
- 增加QQ音乐歌曲搜索播放（需要配置接口）
- 加入收藏功能
- 优化卡片界面
- 更新UI界面到最新版本
- 解决卡片缓存无法更新问题
- 调整收藏逻辑
- 播放列表时调整为立即更新当前实体

### V4.3
- 支持媒体浏览器功能
- 调整卡片样式问题
- 支持缓存音乐到media目录
- 支持一键播放本地音乐
- 修复不能播放汉字名称音乐的问题
- 修复文件夹没有音乐时播放异常的问题
- 优化局域网音乐换源继续播放等待时间
- 解决HA（0.117.3）无法播放音乐的问题
- 解决在使用mysql数据库时，调用播放服务超过字段存储大小限制的问题
- 解决缓存文件时，文件名称包含特殊字符出错的问题
- 修复通知参数无效的问题

### V4.2.1
- 修复初始化不显示卡片的问题
- 添加其它播放器
- 切换播放器时音乐不中断
- 点击源播放器跳转到网页播放器
- 修复恢复音乐时回到初始进度的问题
- 修复`HA 0.115版本`样式错误的问题
- 升级依赖
- 修复初次使用时创建配置目录报错的问题
- 调整网页播放器位置
- 优化网页播放器逻辑
- 新增搜索功能
- 新增保存TTS配置功能
- 完善网页播放器
- TTS内容写入属性标题
- 专辑支持续播功能
- 支持语音“播放第几集”
- 支持语音“播放专辑凡人修仙传第几集”
- 支持语音“重新加载专辑”，解决喜马拉雅音频失效的问题
- 更换TTS缓存目录，删除清除TTS的服务
- 支持喜马拉雅VIP音频播放（需要自行配置VIP解析）
- 修复分页逻辑不一致问题
- 修复TTS播完后重新接着播放体验不好的问题
- 支持语音“播放第几首”
- 修复喜马拉雅无法搜索VIP专辑的的问题

### V4.0
- 不支持所有播放器
- 集成指定MPD播放器、VLC播放器、网页播放器
- 更换实体播放器名称
- 优化TTS功能
- 重写播放器卡片
- 卡片支持语音文本输入控制
- Docker环境中不显示VLC播放器
- 支持选择TTS声音模式
- 支持单独设置TTS音量
- 支持播放广播
- 支持重新播放操作

### V3.3
- 支持语音播放新闻
- 不支持登录、退出操作

### V3.2
- 修复MPD无法自动下一曲的问题
- 修复在状态卡面板中，无法选择源播放器的问题
- 新增网页播放器（在浏览器里播放音乐）

### V3.1
- 修复语音识别的问题
- 修复我想听林俊杰的歌时，出现图片无法加载的异常

### V3.0 
- 修复服务只能显示10首音乐的问题
- 修复TTS服务不能使用的问题
- 增加语音控制音量
- 修复图标不显示的问题
- 所有同步请求改为异步请求，避免主程序卡死
- 替换部分无效电台
- 删除节假日传感器
- 修复云音乐接口使用IP地址时无法获取登录cookie的问题

### V2.5
- 修复在0.109.4里出现请求错误的问题
- 修复手机号码账号无法登录的问题
- 新增单曲点播服务[感谢这位哥们@utick]
- 修复只显示10首音乐的问题

### V2.4
- 修复进度判断时的错误

### V2.3.9
- 修复新版MPD进度格式导致无法自动下一曲的问题
- 修复【喜马拉雅专辑】点击无法显示列表的问题

### V2.3.7
- 删除weblink依赖

### V2.3.6
- 修复使用TTS时，内容与发音人不匹配的问题
- 修复播放面板在HA的app里不能使用的问题
- 支持语音 “播放歌曲xxx”
- 解决HA 0.93版本不显示侧边栏的问题

### V2.3.5
- 把所有图片的http请求改为https
- 在配置服务中加入设置tts声音模式的设置
- 调用内置服务时会有通知消息
- 修复在HA的app里不能使用的问题

### V2.3.4
- 加入tts清除缓存服务
- tts改为本地化服务
- tts加入模式参数（1: 标准男声、2: 标准女声、3: 情感男声、4: 情感女声）

### V2.3.3
- 修复tts服务无法显示的错误

### V2.3.2
- 自动保存歌单列表（避免重启时丢失歌单列表）
- 修复重启后每次重新登录的错误

### V2.3.1
- 删除tts插件
- 删除设置播放模式
- 修复获取音乐播放地址错误的问题
- TTS服务支持内置模板格式
- 加入我的云盘功能（需要登录）

### V2.3
- 重写代码，优化代码结构
- 删除配置检查功能
- 删除部分配置
- 新增用户名和密码配置（登录后可以获取收藏歌单）
- 新增配置服务【（禁用/启用）通知、日志】
- 优化播放器的TTS服务（在播放音乐时使用TTS服务，可以暂停之后继续播放音乐）
- 下个版本删除设置播放模式服务（已经集成到了配置服务中）

### V2.2
- 删除了地图相关组件
- 删除了地图相关组件
- 删除了地图相关组件
- 删除了QQ邮箱通知服务
- 删除了QQ邮箱通知服务
- 删除了QQ邮箱通知服务
- 在FM中新增了罗胖的“罗辑思维”音频（资源截止到2020-1-7）
- 新增配置“禁用通知”功能，可选择是否启用消息提示功能

### V2.1.7.7
- 删除没有意义的frpc参数
- 删除语音组件相关功能
- 加入语音识别结果处理（与ha_voice语音小助手组件联动）
- 解决节假日在部分节日报错的问题

### V2.1.7.6
- 重新加入节假日组件
- 修复节假日组件莫名其妙的问题
- 百度地图，区域设置passive属性为true会自动隐藏（同官方地图）
- 百度地图，设备设置hidden属性为true会自动隐藏（同官方地图）
- 删除开关和灯的组件

### V2.1.7.5
- 解决load服务，分页错误的问题
- 解决load服务，喜马拉雅专辑里m4a格式无法播放的问题
- 使用load服务加载的歌单，可以进行分页播放
- 播放面板里加入播放下一页、播放上一页的操作

### V2.1.7.4
- 解决语音链接太长的问题

### V2.1.7.3
- 加入cors_allowed配置，需要先在http配置跨域，语音发送访问更快
- 加入frpc配置，完全使用官方自定义配置格式
- 代码优化，按配置加载功能

### V2.1.7.2
- 支持播放电台xxxx
- 支持播放歌单xxxx

### V2.1.7.1
- 解决语音不能关灯的问题
- 支持我想听XXX的歌
- 修复一些问题

### V2.1.7
- 加入语音控制功能
- 加入固定api_key配置（为了安全，必须使用uuid格式）
- 加入语音服务weblink组件
- 完善语音操作界面
- 修复全屏模式还能看到导航栏的问题

### V2.1.6
- 优化代码
- 加入百度地图功能

### V2.1.5（2019-11-25）
- 加入一些喜马拉雅的电台
- 加入邮箱提醒通知服务
- 加入通知内容执行功能

### V2.1.4（2019-11-23）
- 全新的查看更多面板，操作更方便
- 修复新面板的一些问题
- load服务参数修改
- load服务支持喜马拉雅专辑播放

### V2.1.3（2019-11-21）
- 加入一些电台
- 加入tts服务，语音播放后继续播放当前音乐（内置VLC播放器）
- 增加tts前后固定消息配置
- 修正tts服务，时间格式占位符的问题
- 电台列表加载服务，传入list_index会自动分页

### V2.1.2（2019-11-16）
- 解决【Anroid手机版 MPD播放器】无法自动播放下一曲的问题
- 解决不会触发其它播放器相关服务的问题
- 解决MPD播放器进度无法更新的问题
- 修正手机端样式问题
- 云音乐特色榜新增四项

### V2.1.1（2019-11-15）
- 解决接口地址使用错误的问题
- 重新整理FM电台

### V2.1（2019-11-14）
- 升级到了最新的前端页面，感谢作者 @maomao1996
- 升级到了最新的前端页面，感谢作者 @maomao1996
- 升级到了最新的前端页面，感谢作者 @maomao1996
- 重写了前端页面与HA播放器的通信逻辑
- 终于解决了 id_reuse 的错误，再也不用刷新页面了
- 终于解决了 DLNA 部分歌曲无法下一曲的问题

### V2.0.7（2019-11-12）
- 优化内置VLC播放器
- 操作响应速度更快（内置VLC播放器）
- 支持调整进度（内置VLC播放器）
- 支持静音（内置VLC播放器）
- 页面每次发送服务请求的时候，延时改为4秒
- 修改DLNA下一曲逻辑
- 加入播放模式服务（列表循环、单曲循环、列表播放、随机播放）

### V2.0.5（2019-11-04）
- 服务器被有些人恶意攻击，所以改为本地服务，需要自己本地部署安装
- 服务器被有些人恶意攻击，所以改为本地服务，需要自己本地部署安装
- 服务器被有些人恶意攻击，所以改为本地服务，需要自己本地部署安装
- 修复周杰伦的《等你下课》不能播放的问题
- 解决在搜索结果中点击播放，会出现异常的问题
- 正在播放的音乐，会有消息提示
- 解决视频搜索不能搜到电视剧的问题

### V2.0.3（2019-10-30）
- 修复kodi播放器不能自动播放下一首的问题
- 页面每次发送服务请求的时候，都执行3秒的延时
- 解决了tts语音不能播放的问题
- 新增tts插件，直接配置就能使用
- 修复内置vlc调节声音代码错误
- 解决vlc在使用tts时，语音被截断问题
- 修复刷新导致页面崩溃的问题
- 支持收听周杰伦的音乐

### V2.0.0（2019-10-29）
- 注意：因为服务不能带有“-”符号，所以名称改为下划线
- 注意：因为服务不能带有“-”符号，所以名称改为下划线
- 注意：因为服务不能带有“-”符号，所以名称改为下划线
- 新增启用随机播放模式功能
- 修复flac音乐不能播放的问题
- 新增通知功能，重要操作会有通知消息
- 新增服务，可在自动化里调用服务传入【歌单ID】和【电台ID】进行播放
- 内置VLC播放器（如果系统支持，则可以不依赖其它播放器）

### V1.0.5（2019.10.25）
- 新增配置网易用户UID的功能，不用每次都登录
- 修复连续播放进度计算的问题
- 新增播放器多个属性，支持图片封面显示

### V1.0.4（2019.10.19）
- 解决更新后页面缓存导致无法加载的问题
- 新增电视直播
- 新增视频搜索（测试功能）
- 新增视频本地播放
- 支持MPD播放器连续播放（测试功能，可能有BUG）
- 解决HomeAssistant 0.93版本中，无法添加侧边栏的问题

### V1.0.3（2019.10.14）
- 记录选中的播放器，解决每次重启服务，播放器初始化选择第一个的问题
- 解决v1.0.2里，无法读取所有播放器的问题
- 可更改侧边栏名称和图标，和显示模式（全屏显示）

### V1.0.2（2019.10.13）
- 解决DLNA播放器在没有相关属性疯狂报错的问题

### V1.0.1（2019.10.09）
- 解决反斜杠在Linux下出现错误的问题

### V1.0.0（2019.09.25）
- 将前端播放器和插件集成到一起（安装更简单）
- 解决flac无法播放不能跳到下一曲的问题
- 解决歌词显示不同步的问题
- 修复自动播放下一曲的逻辑问题
- 注释了调试日志

### V0.0.1（2019.07.06）
- 解决后台播放支持全部媒体插件的功能


# 请一定要在HomeAssistant里使用，不然没啥用，

## 关于界面相关，请查看原作者的项目，

## 我要减少这个库的大小，所以把图片都删了


## 免责声明
本站音频文件来自各网站接口，本站不会修改任何音频文件

音频版权来自各网站，本站只提供数据查询服务，不提供任何音频存储和贩卖服务

本项目仅为自己测试项目，请勿用作商业用途，请勿通过本项目下载盗版歌曲资源，否则后果自负！


## License

[MIT](https://github.com/maomao1996/Vue-mmPlayer/blob/master/LICENSE)
