/**
 * 常用JS变量:
 * agentEvent = 代理模式下自动点击模块
 * acEvent= 无障碍模式下自动点击模块
 * device = 设备信息模块
 * file = 文件处理模块
 * http = HTTP网络请求模块
 * shell = shell命令模块
 * thread= 多线程模块
 * image = 图色查找模块
 * utils= 工具类模块
 * global = 全局快捷方式模块
 * 常用java变量：
 *  context : Android的Context对象
 *  javaLoader : java的类加载器对象
 * 导入Java类或者包：
 *  importClass(类名) = 导入java类
 *      例如: importClass(java.io.File) 导入java的 File 类
 *  importPackage(包名) =导入java包名下的所有类
 *      例如: importPackage(java.util) 导入java.util下的类
 *
 */

function main() {
    //开始再这里编写代码了！！
    toast("开始执行闲鱼脚本！");
    utils.openAppByName("com.taobao.idlefish");  //开打咸鱼
    sleep(5000);


    var mainActivity ={
        "action":"android.intent.action.VIEW",
        "className":"com.taobao.fleamarket.home.activity.MainActivity",
        "pkg":"com.taobao.idlefish"

    };
    var x = utils.openActivity(mainActivity);

    //============跳到主界面==============
    sleep(3000);

    toast("进入我的");
    var selector_my = text("我的");
    if (click(selector_my)) {
        toast("进入我的！");
    }
    sleep(3000);

     //=======跳到我的=======

    var selector_qucaliang = textMatch("我发布的.*");
    if (click(selector_qucaliang)) {
        toast("进入我发布的！");
    }
    sleep(6000);
    var button_caliang=desc("擦亮").getNodeInfo(5000);;


    toast(button_caliang.length);
    logd("结果："+button_caliang);


}

main();
