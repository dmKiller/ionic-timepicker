/**
 * Time 2015-01-16
 * Email songt@nbpt.cn
 * Author Songt
 */


angular.module("st.timepicker", [])
    .directive('stTimepicker', function ($ionicPopup) {
        return{
            restrict: 'EA',
            scope: {
                time: "=stTime",      //变量
                cla: "@stClass"
            },
            transclude: true,
            template:
                '<div>' +
                    '<button type="button" class="{{cla}}" ng-click="chooseTime(time)">{{time}}</button>' +
                '</div>',
            link: function (scope, elem, attr) {
                //console.log("scope1");
                //console.log(scope);

                scope._time = {};
                scope.chooseTime = function (obj) {
                    var timeDate = new Date().getStDate(obj);
                    var _time = {};
                    _time._year = timeDate.getFullYear();
                    _time._month = timeDate.getMonth()+1;
                    _time._day = timeDate.getDate();
                    _time._hour = timeDate.getHours();
                    scope._time= _time;
                    //console.log(scope);

                    $ionicPopup.show({
                        templateUrl: 'timePicker.tpl.html',
                        title: '<strong>请选择</strong>',
                        subTitle: '',
                        scope: scope,
                        buttons: [
                            { text: '取消' },
                            {
                                text: '确认',
                                type: 'button-positive',
                                onTap: function (e) {
                                    scope.time = getTime();
                                }
                            }
                        ]
                    })
                }

                function getTime(){
                    var time = scope._time._year + "-" + scope._time._month + "-" + scope._time._day + " " +
                        scope._time._hour +":00";
                    return new Date().getStDate(time).Format("YYYY-MM-DD hh:00");;
                };
                function adjustTime(){
                    var time = scope._time._year + "-" + scope._time._month + "-" + "01";
                    time = new Date().getStDate(time);
                    var maxDay = new Date().MaxDayOfDate(time);
                    if(maxDay < scope._time._day){
                        scope._time._day = maxDay;
                    }
                };
                scope.plusYear = function () {
                    scope._time._year++;
                    scope._time._year >2100? scope._time._year=2100:scope._time._year;
                    adjustTime();
                };
                scope.minusYear = function () {
                    scope._time._year--;
                    scope._time._year <1900? scope._time._year=1900:scope._time._year;
                    adjustTime();
                };
                scope.plusMonth = function () {
                    scope._time._month++;
                    scope._time._month >12? scope._time._month=12:scope._time._month;
                    adjustTime();
                };
                scope.minusMonth = function () {
                    scope._time._month--;
                    scope._time._month <1? scope._time._month=1:scope._time._month;
                    adjustTime();
                };
                scope.plusDay = function () {
                    scope._time._day++;
                    scope._time._day >31? scope._time._day=31:scope._time._day;
                    adjustTime();
                };
                scope.minusDay = function () {
                    scope._time._day--;
                    scope._time._day <1? scope._time._day=1:scope._time._day;
                    adjustTime();
                };
                scope.plusHour = function () {
                    scope._time._hour++;
                    scope._time._hour >24? scope._time._hour=24:scope._time._hour;
                    adjustTime();
                };
                scope.minusHour = function () {
                    scope._time._hour--;
                    scope._time._hour <0? scope._time._hour=0:scope._time._hour;
                    adjustTime();
                };
            }
        }
    })

    //id = timePicker.tpl.html
    .directive('stTimepickerTemplate', function () {
        return{
            restrict: 'EA',
            template:
            '<script id="timePicker.tpl.html" type="text/ng-template">' +
                '<div class="timePickerChildDiv">' +
                '<div class="row">' +
                '<div class="col">' +
                '<p class="timePickerDes">年</p>' +
                '<button class="button button-clear button-small button-dark timePickerArrows" ng-click="plusYear()">' +
                '<i class="icon ion-chevron-up"></i></button>' +
                '<p class="timePickerBoxText">{{_time._year}}</p>' +
                '<button class="button button-clear button-small button-dark timePickerArrows pt15" ng-click="minusYear()">' +
                '<i class="icon ion-chevron-down"></i></button>' +
                '</div>' +
                '<div class="col">' +
                '<p class="timePickerDes">月</p>' +
                '<button class="button button-clear button-small button-dark timePickerArrows" ng-click="plusMonth()">' +
                '<i class="icon ion-chevron-up"></i></button>' +
                '<p class="timePickerBoxText">{{_time._month}}</p>' +
                '<button class="button button-clear button-small button-dark timePickerArrows pt15" ng-click="minusMonth()">' +
                '<i class="icon ion-chevron-down"></i></button>' +
                '</div>' +
                '<div class="col">' +
                '<p class="timePickerDes">日</p>' +
                '<button class="button button-clear button-small button-dark timePickerArrows" ng-click="plusDay()">' +
                '<i class="icon ion-chevron-up"></i></button>' +
                '<p class="timePickerBoxText">{{_time._day}}</p>' +
                '<button class="button button-clear button-small button-dark timePickerArrows pt15" ng-click="minusDay()">' +
                '<i class="icon ion-chevron-down"></i></button>' +
                '</div>' +
                '<div class="col">' +
                '<p class="timePickerDes">时</p>' +
                '<button class="button button-clear button-small button-dark timePickerArrows" ng-click="plusHour()">' +
                '<i class="icon ion-chevron-up"></i></button>' +
                '<p class="timePickerBoxText">{{_time._hour}}</p>' +
                '<button class="button button-clear button-small button-dark timePickerArrows pt15" ng-click="minusHour()">' +
                '<i class="icon ion-chevron-down"></i></button>' +
                '</div>' +
                '</div>' +
                '</div>' +
            '</script>',
            link: function (scope, elem, attr) {
                //console.log("scope2");
                //console.log(scope);
                return ;
            }
        }
    });
