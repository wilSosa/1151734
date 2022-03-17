function abrirVentana(){
       window.open("../index.html",'_self');
   }
   function cerrarVentana(){
    if (confirm("Seguro que quieres salir?")) 
        window.close();
    }

    function cambiarTamaño(){
        box = document.getElementsByClassName('container')[0];
        box.style.width = '180vh';
        box.style.height = '100vh';
      }
      setTimeout(function(){
        changeSize();
      }, 2000);