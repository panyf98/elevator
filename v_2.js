{
    // 当电梯内楼层按钮被按下时，前往该楼层。电梯无任务时，回到楼层0。
    // 适用于关卡challenge #4 ~ #7
    
    init: function(elevators, floors) {
        var elevator = new Array();  // 创建电梯序列
        for(var i=0;i<elevators.length;i++){
            elevator[i] = elevators[i];  // 创建电梯序号(0~n-1)
            elevator[i].goToFloor(0);  // 程序开始时电梯位于0层
        }

        elevator[0].on("floor_button_pressed", function(floorNum) {
            // 当电梯0中的楼层按钮被按下，则前往该楼层
            elevator[0].goToFloor(floorNum);
        });
        elevator[1].on("floor_button_pressed", function(floorNum) {
            // 当电梯1中的楼层按钮被按下，则前往该楼层
            elevator[1].goToFloor(floorNum);
        });
        elevator[0].on("idle",function(){
            // 当电梯0无任务时，回到楼层0
            elevator[0].goToFloor(0);
        });
        elevator[1].on("idle",function(){
            // 当电梯1无任务时，回到楼层0
            elevator[1].goToFloor(0);
        });
    },
        update: function(dt, elevators, floors) {
            // We normally don't need to do anything here
        }
}
