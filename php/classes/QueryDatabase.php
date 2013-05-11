<?php
class QueryDatabase
{
	protected $_db;
	protected $_result;
	public $results;
	
	public function __construct()
	{
		$_db = new mysqli('localhost:8888', 'root' ,'root', 'extjs');
		
		if ($_db->connect_error) {
			die('Connection Error (' . $_db->connect_errno . ') ' . $_db->connect_error);
		}
		
		return $_db;
	}

	public function __destruct()
	{
		$_db = $this->__construct();
		$_db->close();
		
		return $this;
	}
	
	public function getResults($params)
{
    $_db = $this->openConnection();

    $_result = $_db->query("SELECT id, name, address, state FROM owners") or die('Connect Error (' . $_db->connect_errno . ') ' . $_db->connect_error);

    $results = array();

    while ($row = $_result->fetch_assoc()) {
        array_push($results, $row);
    }

    $this->closeConnection($_db);

    return $results;
}
	
}