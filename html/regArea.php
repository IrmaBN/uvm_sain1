<div>
	

	<div>
		<h2>Registrar Área</h2>
	</div>
		
	<form action="" method="post" id="Form_Reg" class="pad_left2">
		<article class="col4" id="Form">
			<table>
				<tr>
					<td>
						<label>Clave:</label><br />
					</td>
					<td>
						<input class="input" type="text" required="required" placeholder="Etiqueta"  id="ClavArea">
					</td>
				</tr>
				<tr>
					<td>
						<label>Nombre:</label><br />
					</td>
					<td>
						<input class="input" type="text" required="required" placeholder="Etiqueta"  id="NomArea">
					</td>
				</tr>
				<tr>
					<td>
						<label>Edificio:</label><br />
					</td>
					<td>
						<form method="post">
							<select name='edificio'>
								<script>
								<?php 
								include'../funciones.php';
							    combobox();	
								llenar();
								
								function llenar(){
								foreach($rows as $row){									
									echo '<option value="'.$row['id_claveEdi'].'">'.$row['nomEdf'].'</option>';	
								}
								};
								?>	
								</script>							
							</select>
						</form>
					</td>
					
				</tr>
				<tr>
					<td colspan="2"> 
						<input class="submit" type="submit" value="Aceptar" id="guarAre" align="right"/>
					</td>
				</tr>
				
		   </table>
		   
		</article>
	</form>
	
</div>