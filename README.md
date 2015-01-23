# ionic-timepicker-angular
基于ionic的时间插件（支持年月日时分）

首先需要ionic环境

cd ionic-timepicker-master

ionic serve 

能够查看效果


# 依赖：
stlib/timepicker/st-timepicker.js

stlib/timepicker/st-timepicker.css

stlib/tools/timeFormat.js

# 使用方法
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

st-time ："model"

st-class ："类名"

还是无法是使用请发邮件至  songt@nbpt.cn
