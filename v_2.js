{
    init: function(elevators, floors) {
        var elevator = new Array();  // 创建电梯序列
        for(var i=0;i<elevators.length;i++){
            elevator[i] = elevators[i];  // 创建电梯序号(0~n-1)
            elevator[i].goToFloor(0);  // 程序开始时电梯位于0层
        }
        var floor = new Array();  // 创建楼层序列
        for(i=0;i<floors.length;i++){
            floor[i] = floors[i];  // 创建楼层序号(0~n-1)
        }

        elevator[0].on("floor_button_pressed", function(floorNum) {
            // Maybe tell the elevator to go to that floor?
            elevator[0].goToFloor(floorNum);
        });
        elevator[1].on("floor_button_pressed", function(floorNum) {
            // Maybe tell the elevator to go to that floor?
            elevator[1].goToFloor(floorNum);
        });
        elevator[0].on("idle",function(){
            elevator[0].goToFloor(0);
        });
        elevator[1].on("idle",function(){
            elevator[1].goToFloor(0);
        });
    },
        update: function(dt, elevators, floors) {
            // We normally don't need to do anything here
        }
}
