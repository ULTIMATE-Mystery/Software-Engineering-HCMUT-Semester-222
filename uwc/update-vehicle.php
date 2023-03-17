
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
if ($user_role != 1) {
  header('Location: task-info.php');
}

$vehicle_id = $_GET['vehicle_id'];

if(isset($_POST['update_current_vehicle'])){
    $obj_admin->update_vehicle_data($_POST, $vehicle_id);
}

if(isset($_POST['update_vehicle_status'])){

    $obj_admin->update_vehicle_status($_POST,$vehicle_id);
}



$sql = "SELECT * FROM vehicle_info WHERE vehicle_id='$vehicle_id' ";
$info = $obj_admin->manage_all_info($sql);
$row = $info->fetch(PDO::FETCH_ASSOC);
        
$page_name="Vehicle";
include("include/sidebar.php");
?>

    <div class="row">
      <div class="col-md-12">
        <div class="well well-custom">
          <ul class="nav nav-tabs nav-justified nav-tabs-custom">
            <li><a href="manage-admin.php">Quản lý</a></li>
            <li><a href="admin-manage-user.php">Nhân viên</a></li>
            <li><a href="admin-manage-vehicle.php">Phương tiện</a></li>
          </ul>
          <div class="gap"></div>

          <div class="row">
            <div class="col-md-10 col-md-offset-1">
              <div class="well">
                <h3 class="text-center bg-primary" style="padding: 7px;">Thay đổi thông tin phương tiện</h3><br>


                      <div class="row">
                        <div class="col-md-7">
                          <form class="form-horizontal" role="form" action="" method="post" autocomplete="off">                    
                            <div class="form-group">
                              <label class="control-label text-p-reset">Tên phương tiện</label>
                              <div class="col-sm-8">
                                <input type="text" value="<?php echo $row['vehicle_name']; ?>" placeholder="Enter Vehicle Name" name="v_name" list="expense" class="form-control rounded-0" id="default" required>
                              </div>
                            </div>
                      
                            <div class="form-group">
                            </div>
                            <div class="form-group">
                              <div class="col-sm-offset-4 col-sm-3">
                                <button type="submit" name="update_current_vehicle" class="btn btn-primary-custom">Thay đổi</button>
                              </div>
                            </div>
                          </form> 
                        </div>
                        
                        <div class="col-md-5">
                          <form role="form" action="" method="POST" id="vehicle_status_change">
                            <div class="form-group">
                              <label for="vehicle_status">Status</label>
                              <select name="vehicle_status" id="v_stt">
                                <option value = 0>Sẵn sàng</option>
                                <option value = 2>Không sẵn sàng</option>
                              </select>
                              <button type="submit" name="update_vehicle_status" class="btn btn-primary-custom">Xác nhận</button>
                            </div>
                          </form>
                        </div>
                      </div>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>


<?php

include("include/footer.php");

?>

<script type="text/javascript">

$('#emlpoyee_pass_btn').click(function(){
    $('#employee_pass_cng').toggle('fast');
});

</script>