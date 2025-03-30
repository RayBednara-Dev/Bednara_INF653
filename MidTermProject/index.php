<?php

require_once("model/database.php");
require_once("model/vehicle_db.php");
require_once("model/make_db.php");
require_once("model/type_db.php");
require_once("model/class_db.php");

$type_id = filter_input(INPUT_POST, 'type_id', FILTER_VALIDATE_INT);
$class_id = filter_input(INPUT_POST, 'class_id', FILTER_VALIDATE_INT);
$make_id = filter_input(INPUT_POST, 'make_id', FILTER_VALIDATE_INT);
$sort = filter_input(INPUT_POST, 'sort', FILTER_SANITIZE_STRING);

$action = filter_input(INPUT_POST, 'action', FILTER_SANITIZE_STRING);
if (!$action)
{
    $action = filter_input(INPUT_GET, 'action', FILTER_SANITIZE_STRING);
    if(!$action)
    {
        $action = 'show_cars';
    }

}
switch($action)
{
    case 'show_cars':
        if($make_id)
        {
            $cars = get_car_by_make($make_id,$sort);
            $types = get_all_types(); 
            $makes = get_all_makes(); 
            $classes = get_all_classes(); 
            include('view/vehicle_list.php');
        } else if ($type_id)
        {
            $cars = get_car_by_type($type_id,$sort);
            $types = get_all_types(); 
            $makes = get_all_makes(); 
            $classes = get_all_classes(); 
            include('view/vehicle_list.php');
        } else if ($class_id)
        {
            $cars = get_car_by_class($class_id,$sort);
            $types = get_all_types(); 
            $makes = get_all_makes(); 
            $classes = get_all_classes(); 
            include('view/vehicle_list.php');
        } else 
        {
            $cars = get_all_cars($sort);
            $types = get_all_types(); 
            $makes = get_all_makes(); 
            $classes = get_all_classes(); 
            include('view/vehicle_list.php');
        }
        break;
        default:
            break;
    }
    