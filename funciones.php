<?php

	//Clases a utilizar
	use Zend\Loader\StandardAutoloader;
	use Zend\Db\Adapter\Adapter;
	use Zend\Db\Adapter\Driver\ResultInterface;
	use Zend\Db\ResultSet\ResultSet;
	
	//Cargar el archivo paarq eu funcione el ZendFramework2
	require_once dirname(__DIR__) . '/Zend/library/Zend/Loader/StandardAutoloader.php';
	$loader = new StandardAutoloader(array('autoregister_zf'=>TRUE));
	$loader ->register();
	
	//incluir la clase modelo
	require_once('edificio.php');

	//Clase para manejar los meotdos y la BD
	class funciones{
		private $db; //variable para manipular la bd
		private $configDB;
		
		function __construct(){//Se inicializa el Adapter
			$this->configDB=array(
				'driver'  => 'Mysqli',
				'host'    => '127.0.0.1',
				'username'=> 'root',
				'password'=> '',
				'dbname'  => 'bd_sain',
				'driver_options' => array(
				PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8')				
			);
				
			$this->db =new Adapter($this->configDB);
		}
		
		
		//debolver todo la lista de Edificio
		function DatosEdificio($idEdificio) {
			$sql="SELECT * FROM edificio WHERE id_claveEdi = $idEdificio LIMIT 1";
			$result=$this->db->query($sql)->execute();
			
			return $result->current();
		}	
		
		/*-------------------------------*
		 *-----Registrar Edificio--------*
		 * ------------------------------*/
		 
		 /**
		  * Registrar un edificio con los datos proporcionados
		  * 
		  * @param string
		  * return Edificio
		  */
		  //@retirn idEdificio
		 function RegEdificio ($nEdificio){
		 	$sql="INSERT INTO edificio(nomEdf)
		 	VALUES('$nEdificio')";
			$this->db->query($sql, Adapter::QUERY_MODE_EXECUTE);
			$idEdificio = $this->db->getDriver()->getLastGeneratedValue();
			
			return $this->DatosEdificio($idEdificio);
		 }
        /*-------------------------------*
		 *-----Registrar Área--------*
		 * ------------------------------*/
		 //*LLENAR EL COMBOBOX*//
	     function combobox()
		 {
			 $sql='SELECT * FROM edificio';
			 $this->db->query($sql)->execute();
			 $rows=$this->fetchAll();
		 return rows;
		 }	
		 
		 //debolver todo la lista de Areas
		function DatosArea($idArea) {
			$sql="SELECT * FROM area WHERE id_claveArea = $idArea LIMIT 1";
			$result=$this->db->query($sql)->execute();
			
			return $result->current();
		}	
		
		/*-------------------------------*
		 *-----Registrar Área--------*
		 * ------------------------------*/
		 
		 /**
		  * Registrar una área con los datos proporcionados
		  * 
		  * @param string
		  * return Área
		  */
		  //@retirn idArea
		 function RegArea ($idArea,$nArea){
		 	$sql="INSERT INTO area(id_claveArea, nomArea, id_claveEdi)
		 	VALUES('$nEdificio')";
			$this->db->query($sql, Adapter::QUERY_MODE_EXECUTE);
			$idEdificio = $this->db->getDriver()->getLastGeneratedValue();
			
			return $this->DatosEdificio($idEdificio);
		 }	
	}
?>