var i = 0;
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

  $scope.adiciona = function(){
    $scope.add = {"nome": $scope.addNome.toUpperCase() , "cpf":$scope.addCpf.toUpperCase(),"cidade":$scope.addCidade.toUpperCase()}
    $scope.pessoas.push($scope.add);
    document.getElementById('formulario').classList.toggle('fade');
    document.getElementById('iconCad').classList.toggle('rotate');  
  }


    $scope.delete = function(x){
    $scope.pessoas.splice(x,1);
  }


    $scope.editar = function(){
        $scope.pessoas[$scope.id] = {"nome": $scope.EditNome.toUpperCase() , "cpf":$scope.EditCpf.toUpperCase(),"cidade":$scope.EditCidade.toUpperCase()}
        document.getElementById('editor-div').classList.toggle('fade')
    }


    $scope.aparecer = function(y){
    document.getElementById('editor-div').classList.toggle('fade')
    $scope.id = y;
    }


    $scope.salvar = function(){            
      var data = [];
      for(let i = 0;i < $scope.pessoas.length;i++){   
      
      data[i] = "\n Nome: "+ $scope.pessoas[i].nome+"\n"+"Cpf: "+ $scope.pessoas[i].cpf+"\n"+"Cidade: "+ $scope.pessoas[i].cidade+"\n";
    }

      download(data,`Relatorio_${i++}`,'txt');}
  });

  document.getElementById("iconCad").addEventListener('click',() => {
    document.getElementById('formulario').classList.toggle('fade');
    document.getElementById('iconCad').classList.toggle('rotate');
  })
  