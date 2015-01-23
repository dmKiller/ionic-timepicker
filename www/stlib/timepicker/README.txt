本时间插件基于ionic开发



使用方法  并且依赖库 timeFormat.js（位于stlib/tools/timeFormat.js）

[model]
注入'st.timepicker'


[controller]

$scope.time = {};
$scope.time.starttime = new Date().Format("YYYY-MM-DD HH:00");
$scope.time.endtime = new Date().Format("YYYY-MM-DD HH:00");




[html]

<div st-timepicker st-time="time.starttime" st-class="button button-calm"></div>
<div st-timepicker st-time="time.endtime" st-class="button button-balanced"></div>

<div st-timepicker-template></div>

st-time  "model"
st-class "类"

还是无法是使用请发邮件至  songt@nbpt.cn