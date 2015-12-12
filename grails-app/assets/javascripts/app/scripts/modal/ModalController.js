app.controller('ModalController', ['$scope', '$uibModal', '$state', function($scope, $uibModal, $state){
    $scope.dismiss = function(){
        $state.go("books")
        $scope.$dismiss()
    }

    //$scope.temp = "walaw"
    //$scope.open = function(){
    //    console.log("nag sulod")
    //    var modalInstance = $uibModal.open({
    //        animation: true,
    //        templateUrl: "modal.html",
    //        controller: "ModalInstanceController"
    //    })
    //
    //    modalInstance.result.then(function () {
    //        $scope.temp = "temp variable"
    //    })
    //}
}])
