//funcion para leer el archivo
function leerArchivo(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
      return;
    }
    var lector = new FileReader();
    lector.onload = function(e) {
      var contenido = e.target.result;
      mostrarContenido(contenido);
    };
    lector.readAsText(archivo);
  }
  //funcion para mostrar lo que acaba de leer
  function mostrarContenido(contenido) {
    
    var elemento = document.getElementById('archivotxt');
    // formulario.innerHTML = "<input type=\"submit\" name=\"bote\" value=\"Analizar\"/><br>"+"</form>";
    //elemento.innerHTML =elemento.innerHTML+  "<input type=\"submit\" name=\"bote\" value=\"Analizar\"/><br>"+"</form>"+contenido;
    elemento.innerHTML =contenido;
  document.getElementById('getButton').style.display = 'inline';
  }
  //para poder ver
  document.getElementById('fileinput')
    .addEventListener('change', leerArchivo, false);