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

$task_id = $_GET['task_id'];



if (isset($_POST['update_task_info'])) {
	$obj_admin->update_task_info($_POST, $task_id, $user_role);
}

$page_name = "Edit Task";
include("include/sidebar.php");

$sql = "SELECT a.*, b.fullname , v.vehicle_name, r.description, r.iframe
FROM task_info a
LEFT JOIN tbl_admin b ON(a.t_user_id = b.user_id)
INNER JOin vehicle_info v ON(v.vehicle_id = a.v_id)
INNER JOin `route` r ON(r.route_id = a.route)
WHERE task_id='$task_id'";
$info = $obj_admin->manage_all_info($sql);
$row = $info->fetch(PDO::FETCH_ASSOC);

?>

<!--modal for employee add-->

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">



<div class="row">
	<div class="col-md-12">
		<div class="well well-custom">
			<div class="row">
				<div class="col-md-10 col-md-offset-1">
					<div class="well">
						<h3 class="text-center bg-primary" style="padding: 7px;">Chi tiết công việc </h3><br>

						<div class="row">
							<div class="col-md-12">

								<div class="table-responsive">
									<table class="table table-bordered table-single-product">
										<tbody>
											<tr>
												<td>Công việc</td>
												<td>
													<?php echo $row['t_title']; ?>
												</td>
											</tr>
											<tr>
												<td>Bắt đầu</td>
												<td>
													<?php echo $row['t_start_time']; ?>
												</td>
											</tr>
											<tr>
												<td>Kết thúc</td>
												<td>
													<?php echo $row['t_end_time']; ?>
												</td>
											</tr>
											<tr>
												<td>Nhân viên</td>
												<td>
													<?php echo $row['fullname']; ?>
												</td>
											</tr>
											<tr>
												<td>Phương tiện</td>
												<td>
													<?php echo $row['vehicle_name']; ?>
												</td>
											</tr>
											<tr>
												<td>Trạng thái</td>
												<td>
													<?php if ($row['status'] == 1) {
	                                                    echo '<small class="label label-warning px-3">Trong tiến trình <span class="glyphicon glyphicon-refresh" ></small>';
                                                    } elseif ($row['status'] == 2) {
	                                                    echo '<small class="label label-success px-3">Đã hoành thành <span class="glyphicon glyphicon-ok" ></small>';
                                                    } else {
	                                                    echo '<small class="label label-default border px-3">Chưa hoàn thành <span class="glyphicon glyphicon-remove" ></small>';
                                                    } ?>
												</td>
											</tr>
											<tr>
												<td>Lộ trình</td>
												<td>
													<?php echo $row['description']; ?>
												</td>
											</tr>
											<tr>
												<td>Bản đồ</td>
												<td>
													<?php echo $row['iframe']; ?>
												</td>
											</tr>
										</tbody>
									</table>
								</div>

								<div class="form-group">

									<div class="col-sm-3">
										<a title="Update Task" href="task-info.php"><span
												class="btn btn-success-custom btn-xs">Trở về</span></a>
									</div>
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