angular.module('famousAngularStarter').controller('MainCtrl', function ($scope, $famous) {
  var Transitionable = $famous['famous/transitions/Transitionable'];
  var Timer = $famous['famous/utilities/Timer'];

  $scope.spinner = {
    speed: 35
  };
  $scope.rotateY = new Transitionable(0);

  //run function on every tick of the Famo.us engine
  Timer.every(function(){
    var adjustedSpeed = parseFloat($scope.spinner.speed) / 1200;
    $scope.rotateY.set($scope.rotateY.get() + adjustedSpeed);
  }, 1);
});    


// grid layout function
angular.module('famousAngularStarter')
  .controller('DemoController', function ($scope, $famous) {
    var Engine = $famous['famous/core/Engine'];
    var EventHandler = $famous['famous/core/EventHandler'];

    $scope.enginePipe = new EventHandler();
    Engine.pipe($scope.enginePipe);

    $scope.gridElements = [];

    for(var i = 0; i < 8; i++) {
      $scope.gridElements.push({
        backgroundColor: "hsl(" + (i * 360 / 8) + ", 100%, 50%)"
      });
    }

    $scope.enginePipe.on('click', function(){
      $scope.changeDimensions();

      if(!$scope.$$phase) $scope.$apply();
    });

    $scope.gridLayoutOptions = {
      dimensions: [4 , 2],
      transition: {
        curve: 'spring',
        duration: 1000
      }
    };

    var toggle = false;

    $scope.changeDimensions = function () {
        console.log($scope.gridLayoutOptions.dimensions)
    };

  });
