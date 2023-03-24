## Task 1
### Task 1.1
#### Context of Project
Service provider Y has hired Organization X to create the UWC 2.0 information
management system in order to increase the effectiveness of rubbish collection. Task
Management will be a part of the solution.

#### Relevent Stakeholder
-  Back Office
- Collectors and janitors
- Organization X
- Service provider Y

#### Expected jobs
- Back officer
1. Have an overview of janitors and collectors, their work calendar
2. Have an overview of vehicles and their technical details (weight, capacity, fuel consumptions, etc)
3. Have an overview of all MCPs and information about their capacity. Information should be updated from MCPs every 15 minutes with the availability of at least 95% of their operating time.
4. Assign vehicles to janitors and collectors
5. Assign janitors and collectors to MCPs (task)
6. Create a route for each collector. Assigned route is optimized in term of fuel consumption and travel distance.\
7. Be able to send message to collectors and janitors

- Collectors and janitors:
1. Have an overview of their work calendar
2. Have a detail view of their task on a daily and weekly basic. All important information should  be displayed in one view (without scrolling down).
3. Be able to communicate with collectors, other janitors and back officers. The messages should be communicated in a real-time manner with delay less than 1 second.\
4. Check in / check out task every day
5. Be notified about the MCPs if they are fully loaded.


### Task 1.2
#### Functional Requirement
1. Back officers
- View calendar
- View detailed information and manage the vehicle
- Get information about the MCPs
- Assign vehicles to collectors and janitors
- Assign collectors and janitors to MCPs
- Create route for each collectors
- Communicate with collectors and janitors
2. Collector and Janitors
- Check in and check out
- View calendar
- View tasks (daily, weekly)
- Get information about the MCPs
- Communicate with other collectors, other janitors and back officers

#### Non-Functional Requirement
1. Usability requirement
- Janitors and collectors can easily use basic functions immediately
- The back officers can use after 15 minutes training.
- Interfaces in Vietnamese, with an opportunity to switch to English.
2. Performance requirement
- The system must respond in less than 30 seconds. After 30 seconds, the system will notify the user.
- Can handle real-time data.
- Allow at least 100 users access at the same time without crashing.
- The task’s status has to be updated in 5 seconds when the janitors or collectors update it.
- MCPs information must be updated every 15 minutes.
3. Space requirement
- The system can handle 500 concurrent visits without any effect on the system efficiency.
- The system should be able to handle data from at least 1000 MCPs at the
moment and 10.000 MCPs in five years.
4. Availability requirement
- Working time of the system all days of the week, from 4am to 12pm.
- The system should not be down more than 10 minutes continuously, maximum 30 minutes a day.
5. Environmental requirement
- The system runs on internet browsing.
6. Security requirement
- Password require when login
- Encryption ensure with MD5
- Ensure not leak user information
7. Operational requirements
- System data is backed up every month to prevent data loss

#### Use-case diagram for the whole system
![Use case diagram for WholeSysTem](/Picture/Task%201.2.png?raw=true)

| Use Name             | Use Case: Task Assignment     | 
| ---                  | ---                       |
| **Created By**       | QLDA Team                 |
| **Date Created**     | Sep 18, 2022              |
| **Primary Actor**    | Back Officer              |
| **Description**      | Assign task for janitors and collectors |
| **Trigger**          | Click the button “Assign Task”          |
| **Preconditions**    | PRE-1. System available <br> PRE-2. Device connects to the Internet|
| **Postconditions**   | POST-1. Successfully assigned the janitor or collectors. <br> POST-2. Notify the task to the worker <br> POST-3. Record the task to the database  |
| **Normal Flow**      |  1. Back officer chooses the assignee. <br> 2. The system checks the availability of the assignee.<br> 3. Back officer choose day of work. <br>4. The system displays the info of all vehicles. <br> 5. Back officer chooses the vehicle for the assignee. <br> 6. Back officer chooses the MCPs. <br> 7. Back officer determines routes for the assignee. <br> 8. The system checks the availability of the routes. <br> 9. Send the notification to the assigned worker.|
| **Alternative Flow** | Alternative flow 1: <br> At step 2: <br> 2.a. Back officers can view the calendar to check the availability of assignee. <br>  <br> Alternative flow 2: <br> At step 4: <br> 4.a Back officers view the information of the vehicle <br> 4.b Back officers choose the vehicle for the assignee. <br>  <br>  Alternative flow 3: <br> At step 5: <br> 6.a Back officers view the information of the MCPs <br> 6.b Back officers choose the MCPs for routing. <br>   <br> Alternative flow 4: <br> At step 4: <br> 8.a Back officers can view the map to check the availability of the route. |
| **Exceptions**       | Exception 1: <br> At step 1: <br> 2.a. Assignee is not available <br> Return to step 1 in Normal Flows        |

#### Use-case diagram for Task Assignment Module
![Use case diagram for Task Assignment](/Picture/Task%201.3.png?raw=true)

### 1.2 Yêu cầu chức năng và phi chức năng
#### 1.2.1 Yêu cầu chức năng
1. Back officers
- Xem và tạo lịch làm việc cho Collectors và Janitors.
- Xem thông tin chi tiết về các phương tiện (khối lượng, sức chứa, nhiên liệu tiêu thụ,...).
- Xem thông tin về sức chứa hiện tại ở các MCP.
- Lựa chọn và cung cấp phương tiện cho Collectors.
- Chỉ định các MCP làm việc cho Janitors và Collectors.
- Chỉ định tuyến đường cho mỗi Collectors và tuyến đường này phải tối ưu về đường đi cũng như nhiên liệu tiêu thụ.
- Có thể gửi tin nhắn cho Collectors \& Janitors.
2. Collector and Janitors
- Có thể theo dõi lịch trình làm việc tổng quan của mình.
- Có một cái nhìn chi tiết về các nhiệm vụ của họ hàng ngày và hàng tuần.
- Thông tin được hiển thị sao cho người dùng không cần cuộn màn hình xuống để xem.
- Giao tiếp được với nhau và với Back officers.
- Check-in và check-out các task hàng ngày.
- Nhận được thông báo khi các điểm MCP đã đầy (> 95\% dung lượng tải tối đa). 

#### 1.2.2 Yêu cầu phi chức năng
1. Hiệu suất:
- Khởi động nhanh, mất ít hơn 30 giây để khởi động lại toàn bộ hệ thống.
- Hệ thống có khả năng xử lý đồng thời thông tin của ít nhất 1000 bãi tập kết rác (MCP) trong thời gian thực.
- Thông tin về tình trạng của MCPs phải được cập nhật liên tục mỗi 15 phút với 95\% lượng thông tin là khả dụng trong thời gian hoạt động.
- Trạng thái của MCPs, Tasks, Depot khi được chủ động cập nhật có độ trễ thấp hơn 5 giây.
- Chức năng giao tiếp giữa Janitors, Collectors và Back Officers có độ trễ ít hơn 1 giây.
-  Chức năng của từng thao tác có độ phản hồi ít hơn 1 giây.
2. Khả năng mở rộng:
- Hệ thống có khả năng xử lý thông tin của ít nhất 10000 bãi tập kết rác trong khoảng thời gian 5 năm.
- Hỗ trợ thêm ngôn ngữ tiếng Anh.
3. Dễ sử dụng:
- Janitors và Collectors có thể dễ dàng sử dụng ngay lập tức các chức năng cơ bản.
- Back officer có thể sử dụng sau 15 - 30 phút training.
4. Độ tin cậy:
- Thời gian bảo trì hệ thống dưới 24 giờ.
- Hệ thống có khả năng phục hồi dữ liệu nhanh trong khoảng 10 - 20 phút.
-  Hệ thống UWC 2.0 phải tương thích được với hệ thống UWC 1.0 đã có từ trước.
5. Khả năng sẵn sàng:
- Hệ thống làm việc tất cả các ngày trong tuần (từ 4am đến 12pm).
6. Bảo mật:
- Chỉ Back Officers mới có thể quản lý và thay đổi các thông tin.
- Sử dụng MD5 để mã hóa mật khẩu người dùng.
- Bảo trì hệ thống định kỳ (3 tháng/lần) để có thể hoạt động ổn định.
7. Hướng phát triển:
- Phát triển cho bên khách hàng có nhu cầu sử dụng (trả phí hàng tháng).
- Có thể sử dụng ứng dụng trên các hệ điều hành IOS và Android.
- Cung cấp các API để tương tác với các ứng dụng khác.
- Có thể phát triển phần mềm ra nhiều khu vực khác nhau.
### 1.3 Use-case diagram cho Task assignment
#### 1.3.1 Use-case diagram
![Use-case diagram](/Picture/ucDiagram.png?raw=true)
#### 1.3.2 Job Description
|No.|Use-case | Job Description|
| --- | ---| --- |
|1|Assign task for Collector|Dùng để Back officer giao nhiệm vụ cho Collectors.|
|2| Assign task for Janitor |Dùng để Back officer giao nhiệm vụ cho Janitors.|
|3 |Assign vehicle | Giao xe cho Collector.|
|4| Assign routes | Chỉ định tuyến đường đã được tính toán tối ưu cho Collector.|
|5| View map | Xem bản đồ khu vực chứa các MCP và các đường đi.|
|6 | Assign troller | Giao xe đẩy cho Janitor.|
|7 | Assign areas & Chỉ định các khu vực thu gom rác cho Janitor.|
|8 |Coordinate workers | Back officer phân phối nhân viên để làm việc.|
#### 1.3.3 Use-case scenario
##### Assign Task for Collector
|Use-case Name | Task Assignment for Collector|
|---|---|
|Actor |Back Officer, Map System, Route Calculator Map|
|Trigger|Back Officer, Map System, Route Calculator Map|
|Description| Tạo và sắp xếp lịch cho Collector. Từ đó các nhân viên sẽ nhận được các thông tin chi tiết của công việc (thời gian, phương tiện, MCP,. . . )|
|Preconditions| Người dùng đăng nhập vào tài khoản Back Officer và đang ở giao diện "Tổng quan nhiệm vụ"|
|Postconditions| POST-1: Thành công giao nhiệm vụ chi tiết công việc đến các Collector.<br>POST-2: Thông báo đến nhân viên được giao.<br>POST-3: Lưu lại task đã tạo vào database.|
|Normal flow |1. Hệ thống hiển thị các danh mục:<br>- Nhiệm vụ<br>- Bản đồ khu vực các MCP<br>2. Back officer chọn mục "Nhiệm vụ".<br>3. Back officer chọn mục "Tạo và gán công việc".<br>4. Ở mục "Loại hình nhân viên", Back officer chọn loại hình Collector.<br>5. Back officer chọn MCPs.<br>6. Back officer chỉ định tuyến đường di chuyển đến MCPs.<br>7. Back officer chọn phương tiện làm việc cho nhân viên.<br>8. Back officer chọn nhân viên để làm nhiệm vụ.<br>9. Back officer chọn ngày, giờ làm việc.<br>10. Back officer chọn xác nhận giao việc.<br>11. Hệ thống gửi thông báo đến nhân viên đã được giao nhiệm vụ và trở vềgiao diện ban đầu.
|Alternative flows| Alternative flow 1:<br>5.a. Back officers xem thông tin MCPs.<br>5.b. Back officers chọn MCPs.<br>Alternative flow 2:<br>6.a. Back officers chọn xem map để kiểm tra tính khả thi của các tuyến đường.|
|Exceptions| Exception 1: Tại bước 5, tất cả MCPs đều vượt quá giới hạn chứa (>95%).<br>Exception 2: Tại bước 8, không có collector nào sẵn sàng làm nhiệm vụ.<br>Exception 3: Tại bước 10, Back officer bấm nút hủy giao việc (CANCEL) →<br>trở về lại bước 4 ở Normal flow.|
##### Assign Task for Janitor
|Use-Case Name |Task Assignment for Janitor|
|---|---|
|Actor| Back Officer, Map System|
|Trigger| Back Officer nhấn vào danh mục "Tạo và gán công việc"|
|Description| Tạo và sắp xếp lịch cho Janitor. Từ đó các nhân viên sẽ nhận được thông tin
chi tiết của công việc (thời gian, phương tiện, MCP,. . . )|
|Preconditions| Người dùng đăng nhập vào tài khoản Back Officer và đang ở giao diện "Tổng quan nhiệm vụ"|
|Postconditions |POST-1: Thành công giao nhiệm vụ chi tiết công việc đến các Janitor.<br>POST-2: Thông báo đến nhân viên được giao.<br>POST-3: Lưu lại task đã tạo vào database.|
|Normal flow| 1. Hệ thống hiển thị các danh mục:<br>- Nhiệm vụ<br>- Xem route<br>2. Back officer chọn mục "Nhiệm vụ".<br>3. Back officer chọn mục "Tạo và gán công việc".<br>4. Ở mục "Loại hình nhân viên", Back officer chọn loại hình Janitor.<br>5. Back officer chọn MCP.<br>6. Back officer chỉ định các khu vực thu gom rác cho Janitor.<br>7. Back officer chọn nhân viên.<br>8. Back officer chọn troller làm việc cho nhân viên.<br>9. Back officer chọn ngày, giờ làm việc.<br>10. Back officer chọn xác nhận giao việc.<br>11. Hệ thống gửi thông báo đến nhân viên đã được giao nhiệm vụ và trở về
giao diện ban đầu.|
|Alternative flows| 5.a. Back officers xem thông tin các MCP.<br>5.b. Back officers chọn MCP.|
|Exceptions Exception 1: Tại bước 5, tất cả MCPs đều vượt quá giới hạn chứa (>95%).<br>Exception 2: Tại bước 7, không có nhân viên nào sẵn sàng làm việc.<br>Exception 3: Tại bước 10, Back officer bấm nút hủy giao việc (CANCEL) →trở về lại bước 4 ở Normal flow|
##### Assign vehicles
|Use-Case Name| Assign vehicle|
|---|---|
|Actor |Back Officer|
|Trigger| Back Officer nhấn chọn hộp chọn "Phương tiện"|
|Description |Back Officer thực hiện chọn phương tiện cho công việc.|
|Preconditions| Người dùng đăng nhập vào tài khoản Back Officer và đang ở giao diện "Tạo và gán công việc"|
|Postconditions| Back Officer chọn thành công phương tiện cho công việc|
|Normal flow| 1. Back Officer nhấn vào hộp chọn "Phương tiện".
<br>2. Hệ thống hiển thị ra danh sách các phương tiện có thể sử dụng.
<br>3. Back Officer chọn phương tiện phù hợp với công việc.|
|Alternative flows| None|
|Exceptions |Tại bước 2, không có phương tiện nào có thể chỉ định để làm nhiệm vụ|

##### Assign routes
|Use-Case Name |Assign routes|
|---|---|
|Actor| Back Officer, Map System , Route Calculator Map|
|Trigger| Back Officer nhấn chọn hộp chọn "ID Route"||
|Description |Back Officer thực hiện chỉ định tuyến đường cho công việc|
|Preconditions| Người dùng đăng nhập vào tài khoản Back Officer và đang ở giao diện "Tạo và gán công việc"|
|Postconditions| Back Officer chỉ định thành công Route cho công việc|
|Normal flow |1. Back officer nhấn vào ô chọn MCPs.<br>2. Hệ thống hiển ra danh sách các MCP.<br>3. Back officer chọn MCPs phù hợp cho công việc.<br>4. Back Officer nhấn vào ô chọn ID Route.<br>5. Hệ thống hiển thị các Route đã được tính toán tối ưu.<br>6. Back officer chọn ID Route phù hợp với công việc.|
|Alternative flows |5.a. Back officer có thể nhấn nút View map để xem bản đồ chứa route và MCPs đã chọn|
|Exceptions| None|

##### View Map

|Use-Case Name| View Map|
|---|---|
|Actor| Back Officer, Map System|
|Trigger| Back Officer nhấn vào hộp chọn “Xem Route”|
|Description| Hiển thị bản đồ thời gian thực, trên bản đồ hiển thị MCPs, các route trong khu vực được chọn|
|Preconditions| Người dùng đăng nhập vào tài khoản Back Officer và đang ở trong giao diện "Tổng quan nhiệm vụ"|
|Postconditions| Back Officer xem được bản đồ, xem được các route và các MCP trong khu vực hiển thị|
|Normal flow| 1. Hệ thống hiển thị danh sách các ID Route.<br>2. Back Officer nhấn chọn "Show map" tương ứng với tên "ID Route" muốn xem thông tin.<br>3. Hệ thống hiển thị bản đồ chứa các MCP và các Route. |
|Alternative flows| 3.a Back Officer nhấn nút mũi tên ("<-") để kết thúc xem map và quay về giao diện "Xem Route".|
|Exceptions |None|

##### Coordinate worker
|Use-Case Name| Coordinate worker|
|---|---|
|Actor |Back Officer|
|Trigger| Back Officer nhấn vào hộp chọn “Nhân viên”|
|Description |Back Officer chỉ định nhân viên cho công việc|
|Preconditions |Người dùng đăng nhập vào tài khoản Back Officer và đang ở giao diện "Tạo và gán công việc"|
|Postconditions| Back Officer chỉ định thành công nhân viên cho công việc|
|Normal flow| 1. Back Officer nhấn vào mục "Nhân viên"<br>2. Hệ thống hiển thị danh sách các Nhân viên có thể giao việc được<br>3. Back Officer chỉ định nhân viên cho công việc thành công|
|Alternative flows| None|
|Exceptions| Tại bước 2, không có nhân viên nào sẵn sàng để giao nhiệm vụ.|

##### Assign troller
|Use-Case Name |Assign Troller|
|---|---|
|Actor |Back Officer|
|Trigger Back Officer |nhấn chọn hộp chọn "Phương Tiện"|
|Description| Back Officer chỉ định Troller cho Janitor|
|Preconditions|Người dùng đăng nhập vào tài khoản Back Officer và đang ở giao diện "Tạo và gán công việc"|
|Postconditions| Back Officer chỉ định thành công Troller cho Janitor|
|Normal flow| 1. Back Officer nhấn vào mục "Phương tiện"<br>2. Hệ thống hiển thị danh sách các troller có thể sử dụng<br>3. Back Officer chọn Troller cho Janitor.|
|Alternative flows| None|
|Exceptions |Tại bước 2, Không còn troller nào có thể sử dụng|

##### Assign areas
|Use-Case Name| Assign areas|
|---|---|
|Actor |Back Officer, Map System|
|Trigger |Back Officer nhấn chọn hộp chọn "Area"|
|Description |Back Officer chỉ định các khu vực cho Janitor thu thập rác.|
|Preconditions| Người dùng đăng nhập vào tài khoản Back Officer và đang ở giao diện "Tạo và gán công việc"|
|Postconditions |Back Officer chỉ định thành công các khu vực cho công việc|
|Normal flow| 1. Back officer nhấn vào ô chọn MCP<br>2. Hệ thống hiển ra danh sách các MCP.<br>3. Back officer chọn MCP phù hợp cho công việc.<br>4. Back Officer nhấn vào ô chọn Area.<br>5. Hệ thống hiển thị các Area.<br>6. Back officer chọn các Area phù hợp với công việc.|
|Alternative flows |None|
|Exceptions| None|
