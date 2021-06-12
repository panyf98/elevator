{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // 初始化一台电梯

        // 当电梯无任务时
        elevator.on("idle", function() {
            // 遍历每一个楼层
            elevator.goToFloor(0);
            elevator.goToFloor(1);
            elevator.goToFloor(2);
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
