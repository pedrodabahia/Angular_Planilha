var i = 0;
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('inicialize').style.display = "block";
})
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  
  
  
  function download(data, filename, type) {
        const file = new Blob([data], {type: type});

        if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(file, filename);
            return}

              const a = document.createElement("a");
              const url = URL.createObjectURL(file);
  
              a.href = url;
              a.download = filename;
                
              document.body.appendChild(a);
                
              a.click();
                
              setTimeout(function() {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);  
                },0);}  






  $scope.pessoas = []
  $scope.table1 = "Table-1"
  $scope.table2 = "Tabela-2"
  $scope.table3 = "Tabela-3"

  $scope.inicializador = function(){
    $scope.table1 = $scope.editTable1.toUpperCase();
    $scope.table2 = $scope.editTable2.toUpperCase();
    $scope.table3 = $scope.editTable3.toUpperCase();
    document.getElementsByName('input-column1')[0].placeholder = $scope.editTable1.toUpperCase();
    document.getElementsByName('input-column1')[1].placeholder = $scope.editTable1.toUpperCase();
    document.getElementsByName('input-column2')[0].placeholder = $scope.editTable2.toUpperCase();
    document.getElementsByName('input-column2')[1].placeholder = $scope.editTable2.toUpperCase();
    document.getElementsByName('input-column3')[0].placeholder = $scope.editTable3.toUpperCase();
    document.getElementsByName('input-column3')[1].placeholder = $scope.editTable3.toUpperCase();
    document.getElementById('inicialize').style.display = "none";
  }


  $scope.adiciona = function(){
    var elemento1 = $scope.table1;
    var elemento2 = $scope.table2;
    var elemento3 = $scope.table3;
    $scope.add = { elemento1 : $scope.addValor1.toUpperCase() , elemento2 : $scope.addValor2.toUpperCase(),elemento3 : $scope.addValor3.toUpperCase()}
    $scope.pessoas.push($scope.add);
    document.getElementById('formulario').classList.toggle('fade');
    document.getElementById('iconCad').classList.toggle('rotate');  
    $scope.addValor1 = ""
    $scope.addValor2 = ""
    $scope.addValor3 = ""
  }


    $scope.delete = function(x){
    $scope.pessoas.splice(x,1);
  }


    $scope.editar = function(){
        $scope.pessoas[$scope.id] = {elemento1 : $scope.EditValor1.toUpperCase() , elemento2 :$scope.EditValor2.toUpperCase(),elemento3 :$scope.EditValor3.toUpperCase()}
        document.getElementById('editor-div').classList.toggle('fade');
        $scope.EditValor1 = ""
        $scope.EditValor2 = ""
        $scope.EditValor3 = ""
    
    }


    $scope.aparecer = function(y){
    document.getElementById('editor-div').classList.toggle('fade')
    $scope.id = y;
    }


    $scope.salvar = function(){            
      var data = [];
      for(let i = 0;i < $scope.pessoas.length;i++){   
      
     data[i] = `\n ${$scope.table1}: `+ $scope.pessoas[i].elemento1+"\n"+` ${$scope.table2}: `+ $scope.pessoas[i].elemento2 +"\n"+`${$scope.table3}: `+ $scope.pessoas[i].elemento3 +"\n";
    }

      download(data,`TableGenerator_${i++}`,'txt');}
  });

  document.getElementById("iconCad").addEventListener('click',() => {
    document.getElementById('formulario').classList.toggle('fade');
    document.getElementById('iconCad').classList.toggle('rotate');
  })
  document.getElementById("close-edit").addEventListener('click',() => {
    document.getElementById('editor-div').classList.toggle('fade');
  })
