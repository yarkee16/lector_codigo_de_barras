var lector= angular.module('lectorQR.controllers',['ionic','ngCordova'])
lector.controller('controlador1',function($scope, $cordovaBarcodeScanner){
  $scope.leercodigo = function(){
    $cordovaBarcodeScanner.scan().then(function(imagen){
      $scope.codigo=imagen.text
    },function(error){
      alert("Ocurrio un error: "+error);
    });
  }
});
