<!DOCTYPE html>
<html lang="en">
<head>
  <title>UWC 2.0</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="./assets/css/bootstrap.min.css">
  <link rel="stylesheet" href="./assets/css/bootstrap.theme.min.css">
  <link rel="stylesheet" href="./assets/bootstrap-datepicker/css/datepicker.css">
  <link rel="stylesheet" href="./assets/bootstrap-datepicker/css/datepicker-custom.css">
  <link rel="stylesheet" href="./assets/css/custom.css">
  <script src="./assets/js/jquery.min.js"></script>
  <script src="./assets/js/bootstrap.min.js"></script>
  <script src="./assets/js/custom.js"></script>
  <script src="./assets/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
  <script src="./assets/bootstrap-datepicker/js/datepicker-custom.js"></script>
  <script type="text/javascript">
    
    /* delete function confirmation  */
    function check_delete() {
      var check = confirm('Are you sure you want to delete this?');
        if (check) {
         
            return true;
        } else {
            return false;
      }
    }
  </script>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5">
    <link rel="apple-touch-icon" sizes="57x57" href="./favicons/trash.png" height="57" width="57">
    <link rel="apple-touch-icon" sizes="60x60" href="./favicons/trash.png" height="60" width="60">
    <link rel="apple-touch-icon" sizes="72x72" href="./favicons/trash.png" height="72" width="72">
    <link rel="apple-touch-icon" sizes="76x76" href="./favicons/trash.png" height="76" width="76">
    <link rel="apple-touch-icon" sizes="114x114" href="./favicons/trash.png" height="114" width="114">
    <link rel="apple-touch-icon" sizes="120x120" href="./favicons/trash.png" height="120" width="120">
    <link rel="apple-touch-icon" sizes="144x144" href="./favicons/trash.png" height="144" width="144">
    <link rel="apple-touch-icon" sizes="152x152" href="./favicons/trash.png" height="152" width="152">
    <link rel="apple-touch-icon" sizes="180x180" href="./favicons/trash.png" height="180" width="180">
    <link rel="icon" type="image/png" href="./favicons/trash.png" sizes="32x32">
    <link rel="icon" type="image/png" href="./favicons/trash.png" sizes="194x194">
    <link rel="icon" type="image/png" href="./favicons/trash.png" sizes="96x96">
    <link rel="icon" type="image/png" href="./favicons/trash.png" sizes="192x192">
    <link rel="icon" type="image/png" href="./favicons/trash.png" sizes="16x16">
    <link rel="manifest" href="./favicons/manifest.json">
    <meta name="msapplication-TileImage" content="./favicons/trash.png">
    <meta name="msapplication-config" content="./favicons/browserconfig.xml">
    <meta name="theme-color" content="#66BB6A">
    <link rel="canonical" href="./">
</head>
<body>

<nav class="navbar  sidebar navbar-fixed-top" role="navigation" style="background-color:#e7fff2 ">
    <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-sidebar-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="task-info.php"><span style="color: #5bcad9; font-weight: bold;">UWC 2.0</span></a>
    </div>

    <?php
    $user_role = $_SESSION['user_role'];
     if($user_role == 1){
    ?>
      <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-nav-custom">
        <li <?php if($page_name == "Task_Info" ){echo "class=\"active\"";} ?>><a href="task-info.php">Quản lý công việc<span style="font-size:16px; color:#5bcad9;" class="pull-right hidden-xs showopacity glyphicon glyphicon-tasks" ></span></a></li>
        <!--li <?php if($page_name == "Attendance" ){echo "class=\"active\"";} ?>><a href="attendance-info.php">Attendance <span style="font-size:16px; color:#5bcad9;" class="pull-right hidden-xs showopacity glyphicon glyphicon-calendar"></span></a></li-->
        <li <?php if($page_name == "Admin" ){echo "class=\"active\"";} ?>><a href="manage-admin.php">Quản trị<span style="font-size:16px; color:#5bcad9;" class="pull-right hidden-xs showopacity glyphicon glyphicon-user"></span></a></li>
        <!-- <li <?php if($page_name == "Daily-Task-Report" ){echo "class=\"active\"";} ?>><a href="daily-task-report.php">Báo cáo công việc<span style="font-size:16px; color:#5bcad9;" class="pull-right hidden-xs showopacity glyphicon glyphicon-file"></span></a></li> -->
        <!--li <?php if($page_name == "Daily-Attennce-Report" ){echo "class=\"active\"";} ?>><a href="daily-attendance-report.php">Attendance Report<span style="font-size:16px; color:#5bcad9;" class="pull-right hidden-xs showopacity glyphicon glyphicon-file"></span></a></li>
        <li ><a href="?logout=logout">Logout<span style="font-size:16px; color:#5bcad9;" class="pull-right hidden-xs showopacity glyphicon glyphicon-log-out"></span></a></li-->
      </ul>
    </div>
    <?php 
     }else if($user_role == 2){

      ?>
          <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-nav-custom">
        <li <?php if($page_name == "Task_Info" ){echo "class=\"active\"";} ?>><a href="task-info.php">Task Mangement<span style="font-size:16px; color:#5bcad9;" class="pull-right hidden-xs showopacity glyphicon glyphicon-tasks"></span></a></li>
        <!--li <?php if($page_name == "Attendance" ){echo "class=\"active\"";} ?>><a href="attendance-info.php">Attendance <span style="font-size:16px; color:#5bcad9;" class="pull-right hidden-xs showopacity glyphicon glyphicon-calendar"></span></a></li-->
        <li ><a href="?logout=logout">Logout<span style="font-size:16px; color:#5bcad9;" class="pull-right hidden-xs showopacity glyphicon glyphicon-log-out"></span></a></li>
      </ul>
    </div>

      <?php

     }else{
       header('Location: index.php');
     }

    ?>
    


  </div>
</nav>



<div class="main">