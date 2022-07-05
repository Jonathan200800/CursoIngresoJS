/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre;


	nombre = document.getElementById("txtIdNombre").value;

	//nombre = txtIdNombre "no recomenda, ya que es autocompletado por el ordenado"

	alert(nombre);

	document.getElementById("txtIdNombre").value = "";

}


