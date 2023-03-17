<?php
require 'authentication.php'; // admin authentication check 

// auth check
$user_id = $_SESSION['admin_id'];
$user_name = $_SESSION['name'];
$security_key = $_SESSION['security_key'];
if ($user_id == NULL || $security_key == NULL) {
    header('Location: index.php');
}

// check admin 
$user_role = $_SESSION['user_role'];
if($user_role != 1){
  header('Location: task-info.php');
}


if(isset($_GET['delete_vehicle'])){
  $vehicle_id = $_GET['vehicle_id'];

  $task_sql = "DELETE FROM vehicle_info WHERE vehicle_id = $vehicle_id";
  $delete_task = $obj_admin->db->prepare($task_sql);
  $delete_task->execute();

}

$page_name="Admin";
include("include/sidebar.php");

if(isset($_POST['add_new_vehicle'])){
  $add_vehicle = $obj_admin->add_new_vehicle($_POST);
}

?>



<!--modal for employee add-->
  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">

    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h2 class="modal-title text-center">Thêm thông tin</h2>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-12">
              <?php if(isset($error)){ ?>
                <h5 class="alert alert-danger"><?php echo $error; ?></h5>
                <?php } ?>
              <form role="form" action="" method="post" autocomplete="off">
                <div class="form-horizontal">

                  <div class="form-group">
                    <label class="control-label text-p-reset">Tên xe</label>
                    <div class="">
                      <input type="text" placeholder="Tên phương tiện" name="vehicle_name" list="expense" class="form-control input-custom" id="default" required>
                    </div>
                  </div>
                   
                  <div class="form-group">
                  </div>
                  <div class="form-group">
                    <div class="col-sm-offset-3 col-sm-3">
                      <button type="submit" name="add_new_vehicle" class="btn btn-primary btn-sm rounded-0">Thêm phương tiện</button>
                    </div>
                    <div class="col-sm-3">
                      <button type="submit" class="btn btn-default btn-sm rounded-0" data-dismiss="modal">Hủy</button>
                    </div>
                  </div>
                </div>
              </form> 
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>



<!--modal for employee add-->



    <div class="row">
      <div class="col-md-12">
        <div class="row">
            
        <div class="well well-custom">
          <?php if(isset($error)){ ?>
          <script type="text/javascript">
            $('#myModal').modal('show');
          </script>
          <?php } ?>
            <?php if($user_role == 1){ ?>
                <div class="btn-group">
                  <button class="btn btn-primary-custom btn-menu" data-toggle="modal" data-target="#myModal">Thêm phương tiện</button>
                </div>
              <?php } ?>
          <ul class="nav nav-tabs nav-justified nav-tabs-custom">
            <li><a href="manage-admin.php">Quản lý</a></li>
            <li><a href="admin-manage-user.php">Nhân viên</a></li>
            <li class="active"><a href="admin-manage-vehicle.php">Phương tiện</a></li>
          </ul>
          <div class="gap"></div>
          <div class="table-responsive">
            <table class="table table-codensed table-custom">
              <thead>
                <tr>
                  <th>Mã xe</th>
                  <th>Tên xe</th>
                  <th>Trạng thái</th>
                  <th>Chi tiết</th>
                </tr>
              </thead>
              <tbody>

              <?php 
                $sql = "SELECT * FROM `vehicle_info`;";
                $info = $obj_admin->manage_all_info($sql);
                $serial  = 1;
                $num_row = $info->rowCount();
                  if($num_row==0){
                    echo '<tr><td colspan="7">No Data found</td></tr>';
                  }
                while( $row = $info->fetch(PDO::FETCH_ASSOC) ){
              ?>
                <tr>
                  
                  <td><?php echo $row['vehicle_id']; ?></td>
                  <td><?php echo $row['vehicle_name']; ?></td>
                  <td><?php if ($row['status'] == 1) {
                // echo "In Progress <span style='color:#5bcad9;' class=' glyphicon glyphicon-refresh' >";
                echo '<small class="label label-warning px-3">Đang sử dụng</small>';
              } elseif ($row['status'] == 0) {
                echo '<small class="label label-success px-3">Sẵn sàng</small>';
                // echo "Completed <span style='color:#00af16;' class=' glyphicon glyphicon-ok' >";
              } else {
                echo '<small class="label label-default border px-3">Tạm ngưng</small>';
              } ?>
                
                </td>
                  
                  
                  <td><a title="Update Vehicle" href="update-vehicle.php?vehicle_id=<?php echo $row['vehicle_id']; ?>"><span class="glyphicon glyphicon-edit"></span></a>&nbsp;&nbsp;<a title="Delete" href="?delete_vehicle=delete_vehicle&vehicle_id=<?php echo $row['vehicle_id']; ?>"><span class="glyphicon glyphicon-trash"></span>
              </a></td>
                </tr>
                
              <?php  } ?>


                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>


<?php
if(isset($_SESSION['update_user_pass'])){

  echo '<script>alert("Password updated successfully");</script>';
  unset($_SESSION['update_user_pass']);
}
include("include/footer.php");

?>