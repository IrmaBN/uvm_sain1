var url_servicio = "config.php";
$(document).ready(function(){
/*********************************************************
 * Declaración de Variables 
 *********************************************************/
	var idE; // <-- Almacenar el ID del área  seleccionado
	var ventana; // <-- Al abrir la ventana guardamos la referencia en la variable


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*      Carga inicialmente el contenido principal      *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */
	$("#contenido").load("html/principal.html");
	/* Al dar clic sobre el logo y/o el nombre direccionar a la pagina principal */
	
	$( ".inicio" ).click(function() {
		$("#contenido").load("html/principal.html");
	});
/* * * * * * * * * * * ** * * * * * * * * * 
*      Carga Inventario                       *
* * * * * * * * * * * * * * * * *  * * * * * */
	$( "#regMobiliario" ).click(function() {
		$("#contenido").load("html/regInventario.html");
	});
/* * * * * * * * * * * ** * * * * * * * * * 
*      Carga Edificio                     *
* * * * * * * * * * * * * * * * *  * * ** */
	$( "#regEdificio" ).click(function() {
		$("#contenido").load("html/regEdificio.html");
		});	
		//Evento al presionar el botn Aceptar	
	$( "#contenido" ).on("submit", "#Form_Reg", function(event){
		// Para evitar que desaparesca el formulario al presionar el botón
		event.preventDefault();
		//Para guardar los datos ingresados en las cajas de texto
		$.ajax({
			url: url_servicio, 
        	data: JSON.stringify ({
	            jsonrpc:'2.0',
	            method:'RegEdificio', //Nombre del método remoto
	            params:[$("#NomEdi").val()], //parametros que necesita el metodo remoto
	            id:"jsonrpc"
        	}),
        	
        	type:"POST",
	        dataType:"JSON", //Tipo de formato de retorno: Nuestro ws responde con JSON
	        success:  function(data) { //funcion a ejecutar al recibir los datos de respuesta
				//notificar al usuario que ya se registró la nueva festividad
					alert("El registro ha sido guardado");
				// Obteber el ID de la nueva festividad
				$("#contenido").load("html/principal.html");
			
           		
	        },
	        error: function (err)  {
	            alert ("No se pudo realizar la operación"); //si el metodo responde con un error
	        }
		});
	});		
	
/* * * * * * * * * * * ** * * * * * * * * * 
*      Carga Responsable                     *
* * * * * * * * * * * * * * * * *  * * * * * */
	$( "#regEmpleado" ).click(function() {
		$("#contenido").load("html/regResponsable.html");
	});	
/* * * * * * * * * * * ** * * * * * * * *    * 
*      Carga Área                            *
* * * * * * * * * * * * * * * * *  * * * * * */
	$( "#regArea" ).click(function() {
		$("#contenido").load("html/regArea.html");
		
	/*para llenar el combobox desde la BD*/
		$.ajax({
			url: url_servicio, 
        	data: JSON.stringify ({
	            jsonrpc:'2.0',
	            method:'combobox', 
	            params:[], 
	            id:"jsonrpc"
        	}),
        	type:"POST",
	        dataType:"JSON", 
	        success:  function(data) { 
				$("#select").html();
				var contenido = "<select>";
				$.each(data.result, function(i, item){
					var elemento = "<option value = '" + item.id_claveEdi + "'>" + item.nomEdf + "</option>";
					contenido += elemento;
				});
				contenido +="</select>";
				$("#select").html(contenido);
	        },
	        error: function (err)  {
	            alert ("No se pudo realizarbb la operación"); 
	        }
		});
	/*Evento alpresionar el boton Aceptar*/
	$( "#contenido" ).on("submit", "#Form_Reg", function(event){
		// Para evitar que desaparesca el formulario al presionar el botón
		event.preventDefault();
		//Para guardar los datos ingresados en las cajas de texto
		$.ajax({
	       	  url: url_servicio, 
               	  data: JSON.stringify ({
	            jsonrpc:'2.0',
	            method:'RegArea', //Nombre del método remoto
	            params:[$("#ClavArea").val(),$("#NomArea").val(),$("#select").val()], //parametros que necesita el metodo remoto
	            id:"jsonrpc"
        	}),
        	
        	type:"POST",
	        dataType:"JSON", //Tipo de formato de retorno: Nuestro ws responde con JSON
	        success:  function(data) { //funcion a ejecutar al recibir los datos de respuesta
				//notificar al usuario que ya se registró la nueva festividad
					alert("El registro ha sido guardado");
				// Obteber el ID de la nueva festividad
				$("#contenido").load("html/principal.html");
			
           		
	        },
	        error: function (err)  {
	            alert ("No se pudo realizar la operación"); //si el metodo responde con un error
	        }
		});
		
		
	});		
/* * * * * * * * * * * ** * * * * * * * *    * 
*      Carga Consulta                           *
* * * * * * * * * * * * * * * * *  * * * * * */
	$( "#consultar" ).click(function() {
		$("#contenido").load("html/consultar.html");
		
	});		
});
