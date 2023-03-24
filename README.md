# HK221-CO3001-UWC-2.0
**Team name** QLDA\
**Task 1**  Requirement elicitation\
**Task 2**  System modelling\
**Task 3**  Architecture design\
**Task 4**  Implementation - Sprint 1\
**Date:** November 9<sup>th</sup>, 2022 (task 4)

## Members
- Nguyễn Phúc Tiến - 2014725 
- Nguyễn Minh Tiến - 2014722 
- Nguyễn Văn Thịnh - 2014603
- Nguyễn Xuân Triều - 2110610 
- Lê Viễn Du - 1912860
- Phạm Duy Quang  -  2011899
- Nguyễn Hữu Hiếu  -  201314

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
####1.2.1 Yêu cầu chức năng
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

####1.2.2 Yêu cầu phi chức năng
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

## Task 2
### Task 2.1
First, we need to determine the process steps in Task Assignment.
In task 1.3, we have drawn the Task Assignment Module by Use-case diagram.
Process steps:
Go to Task Assignment → Choose worker → Choose available day → Pick the vehicle → Choose vehicle → Choose MCP → Create route → Notify to worker.
The below activity diagram captures the business process between systems and the stakeholders in Task Assignment Module.

#### Acitivity diagram for Task Assignment Module
![Activity diagram for Task Assignment](/Picture/Task%202.1.png?raw=true)

#### Diagram description:
1. Back Officer begin Task Assignment.
2. Back Officer choose the Worker (janitor and … who available) in the Worker List
that shows off by System.
3. Back Officer pick an available day of the chosen worker from the calender show
off by System.
4. System show MCP Maps then Back Officer do 2 activities parallel that assign
MCP and Check Available Route for the Worker in the chosen day.
5. Back Officer action Done task. Then, System check all information assign/pick by
Officer. If assigned information are Incorrect in 1 field (worker, day, MCP, route),
System will require Back Officer do all activities again.
6. Otherwise, if all information are Correct, System will notify all Information in 1
notification to Back Officer and Assigned Worker. (They can watch this
notification on their devices.)
7. End

### Task 2.2
#### Conceptual solution for route planning task
Our conceptual solution will be illustrated as the following step:
1. The back officer request to the controller to create a new route
2. The controller connect to Google Map API
3. If the connection fails, it will reconnect. If the connection is successfully
connected, Google Map will request data back from the controller
4. The controller them request data from the database
5. The database responds back to the controller with the data of MCPs location and
the collector’s location.
6. Then the controller will response back to the Google Map with the data
7. The Google Map then response back to the controller with the suggested route
options
8. The controller will send the options to the back officers for them to choose
9. The back officers choose the route then the controller will respond with the chosen
route.
#### Sequence diagram for route planning task
![Sequence diagram for route planning](/Picture/Task%202.2.png?raw=true)

### Task 2.3
In the class diagram, our group decided that there are 2 interface classes in the
Task Assignment Module called AssignTask and AssigningView (InfoView interfaces are
not included in Task Assignment Module, we draw it to make the system more
comprehensive).
#### Class diagram for Task Assignment module
![Class diagram for Task Assignment module](/Picture/Task%202.3.png?raw=true)

Task Controller is the bridge between User and private elements in Task. When we create task, there are 4 elements requires: worker information, date of assignment, route information (get from Google API), vehicle information.

## Task 3
### Task 3.1 
####  Introduction
##### Three-layer Architecture

Mô hình 3-layer gồm có 3 phần chính:

- Presentation Layer (GUI) : Lớp này có nhiệm vụ chính giao tiếp với người dùng. Nó gồm các thành phần giao diện ( win form, web form,…) và thực hiện các công việc như nhập liệu, hiển thị dữ liêu, kiểm tra tính đúng đắn dữ liệu trước khi gọi lớp Business Logic Layer (BLL).
- Business Logic Layer (BLL) : Layer này phân ra 2 thành nhiệm vụ :
    + Đây là nơi đáp ứng các yêu cầu thao tác dữ liệu của GUI layer, xử lý chính nguồn dữ liệu từ Presentation Layer trước khi truyền xuống Data Access Layer và lưu xuống hệ quản trị CSDL.
    + Đây còn là nơi kiểm tra các ràng buộc, tính toàn vẹn và hợp lệ dữ liệu, thực hiện tính toán và xử lý các yêu cầu nghiệp vụ, trước khi trả kết quả về Presentation Layer.
- Data Access Layer (DAL): Lớp này có chức năng giao tiếp với hệ quản trị cơ sở dữ liệu như thực hiện các công việc liên quan đến lưu trữ và truy vấn dữ liệu (tìm kiếm, thêm, xóa, sửa,…).

##### MVC Model
MVC (MVC Design Pattern) là viết tắt của Model - View - Controller. Đó là một mẫu kiến trúc, mô hình lập trình phổ biến được sử dụng để tạo cấu trúc cho nhiều trang web, ứng dụng tiên tiến.
![MVC Architecture Pattern](/Picture/MVC3.png?raw=true)

Mô hình MVC bao gồm ba thành phần thiết yếu: 


- Model: Là component trung tâm của kiểu thiết kế này. Nó trực tiếp xử lý các dữ liệu logic và các quy tắc của ứng dụng. Trong ứng dụng này, model có 1 vài chức năng cụ thể như sau: Xác thực login, cập nhật dữ liệu, tạo các thông báo, lưu trữ thông tin, kiểm tra phân công công việc,... 
- View: Định nghĩa và quyết định cách mà dữ liệu được hiển thị với người dùng. Cụ thể trong ứng dụng này là hiển thị các form login, trang lịch làm việc, trang thông tin nhân viên,... 
- Controller: Xử lý các tương tác của người dùng hay còn gọi là event (ví dụ: bấm nút, click chuột,...), truyền những event đó đến view và model trong tình huống cụ thể của ứng dụng này. Với tình huống cụ thể là ứng dụng này thì những chức năng chính của Controllers là ánh xạ các tương tác của người dùng đến các cập nhật model và chọn view phù hợp để hiển thị.   

#### Reason for our choose MVC model
Nhóm lựa chọn mô hình MVC vì các lợi ích mà mô hình này đem lại như sau:
- Tiết kiệm băng thông: Vì không sử dụng viewstate nên MVC rất nhẹ và tiết kiệm được diện tích của băng thông. Khi cần tương tác gửi và nhận dữ liệu liên tục, người dùng có thể sử dụng các ứng dụng trên web. Điều này giúp website có thể hoạt động ổn định và tốt hơn.
- Dễ dàng kiểm tra: Nhờ có MVC ta sẽ chia code thành 2 thành phần front-end và back-end riêng biệt. Do đó, ta sẽ dễ dàng hơn trong việc kiểm tra, rà soát lỗi, đảm bảo được chất lượng và độ uy tín cho phần mềm trước khi tới tay người dùng.
- Chức năng Separation of Concern: Cho phép phân tách một cách rõ ràng các thành phần model, data, giao diện hay nghiệp vụ.
- Tính kết hợp: Ta có thể thoải mái viết code trên nền tảng web khi tích hợp ở mô hình MVC để giảm tải dữ liệu server.
- Tính đơn giản: Kết cấu của mô hình MVC tương đối đơn giản và dễ dàng sử dụng ngay cả khi bạn không có chuyên môn.
#### Architectural Diagram
![Architectural Diagram](/Picture/archi_diagram.png?raw=true)
#### Plan for project
- Đối với lớp Presentation layer: Nhóm sẽ sử dụng ReactJS, một thư viện rất phổ biến của Javascript được phát triển bởi Facebook và tạo ra để xây dựng giao diện người dùng có khả năng tương tác tốt và nhanh chóng cho các ứng dụng web và di động. Nó là một thư viện mã nguồn mở, xây dựng dựa trên các component, giao diện người dùng chỉ chịu trách nhiệm cho tầng view của ứng dụng.
- Đối với lớp Application layer: Nhóm dự định sử dụng RESTful API https://restfulapi.net để xử lý các yêu cầu và thực thi xử lý nghiệp vụ (business logic). Vì đây là một kiểu kiến trúc được sử dụng rộng rãi và đã được thiết lập tốt để xây dựng các web với các ưu điểm chính như sau:
    + Giúp cho ứng dụng rõ ràng hơn.
    + REST URL đại diện cho resource chứ không phải hành động.
    + Dữ liệu được trả về với nhiều định dạng khác nhau như: xml, html, json.
    + Code đơn giản và ngắn gọn.
    + REST chú trọng vào tài nguyên của hệ thống.

![Restful API](/Picture/restfulAPI3.png?raw=true)

- Đối với lớp Data access layer: Nhóm có thể sử dụng đến Firebase, một dịch vụ lưu trữ dữ liệu NoSQL được cung cấp bởi Google. Các lý do chính mà nhóm quyết định sử dụng Firebase là:
    + Sử dụng dễ dàng: Những người dùng có thể đăng ký một tài khoản Firebase thông qua tài khoản Google. Đồng thời, người cùng cũng có thể sử dụng nền tảng này trong quá trình phát triển ứng dụng một cách đơn giản nhất. 
    + Xây dựng ứng dụng nhanh chóng mà không tốn thời gian, nhân lực để quản lý hệ thống và cơ sơ sở hạ tầng phía sau: Firebase cung cấp cho ta rất nhiều chức năng như phân tích, cơ sở dữ liệu, báo cáo hoạt động và báo cáo các sự cố lỗi để bạn có thể dễ dàng phát triển, định hướng ứng dụng của mình vào người sử dụng nhằm đem lại các trải nghiệm tốt nhất cho họ. 
    + Uy tín chất lượng đảm bảo từ Google: Firebase được Google hỗ trợ và cung cấp trên nền tảng phần cứng với quy mô rộng khắp thế giới, cho nên nhóm rất yên tâm khi lựa chọn dịch vụ này.
    + Quản lý cấu hình và trải nghiệm các ứng dụng của Firebase tập trung trong một giao diện website đơn giản, các ứng dụng này hoạt động độc lập nhưng liên kết dữ liệu phân tích chặt chẽ.
![Firebase](/Picture/firebase.png?raw=true)
#### Modules
Hệ thống UWC 2.0 gồm 5 modules, cụ thể là:
Module Authentication:
- Input: 1 user X.
- Output: Xác định user X có account hay chưa, danh sách các chức năng user X có thể thực hiện trong hệ thống (nếu có), vai trò của user X trong hệ thống (Back Officer, Janitor, Collector).
- Functions:
    + loginEmployee(username, password): Chức năng này giúp user đăng nhập vào hệ thống thông qua username và password.
    + authEmployee(req, res): Hàm xác thực người dùng. Nếu người dùng đã tồn tại, trả về id kèm quyền của nhân viên tương ứng trong database.
    + logout(userID): Giúp một user đã đăng nhập có thể thoát khỏi hệ thống hoặc có thể đăng xuất một user ra khỏi hệ thống khi họ tắt ứng dụng.

Module Communication:
- Input: 2 user, mỗi user có thể là Back Officer, Janitor hoặc Collector.
- Output: Chịu trách nhiệm tương tác qua lại giữa các User bao gồm cả Back Officer, Janitor và Collector.
- Functions: 
    + send_message(receiver, message): Hàm giúp user gửi tin nhắn (văn bản, hình ảnh, video, âm thanh,...) đến người nhận, do đó user có thể trao đổi thông tin với các user khác.
    + receive_message(sender, message): Hàm giúp user nhận tin nhắn (văn bản, hình ảnh, video, âm thanh,...) từ người gửi, do đó user có thể trao đổi thông tin với các user khác.

Module Task Assignment:
- Input: 1 User (dành cho Back Officer).
- Output: Xác định task cho Collector/Janitor dựa trên tính toán của hệ thống và cung cấp các thông tin cần thiết cho công việc tạo task.
- Functions: Tương ứng như trong Class Diagram Of Task Assignment, các hàm sẽ được hiện thực trong module Task Assignment bao gồm các hàm trong: BackOfficerManageView, BackOfficerManageModel, BackOfficerManageController,…

Module Monitoring (View):
- Input:  1 User (Back Officer, Collector, Janitor).
- Output: Hiển thị những thông tin cần thiết phục vụ cho công việc của họ:
    + Back Officer: Các task đã giao và tiến trình hoàn thành. Thông tin về các Collector và Janitors.
    + Collector: Thông báo về task được giao, xem lịch làm việc, mô tả công việc (tuyến đường, phương tiện).
    + Janitor: Thông báo về task được giao, xem lịch làm việc, mô tả công việc (khu vực thu gom, MCP sẽ đưa rác về, trollers được bàn giao).
- Functions: 
    + Back Officer
        * getBackOfficerName(backOfficerID): Chức năng lấy tên của Back Officer theo id.
        * getAllCallendarDetail(): Chức năng lấy thông tin của lịch hiển thị toàn bộ task mà Back Officer đó quản lý.
        * getListCollector(): Chức năng lấy danh sách tất cả các Collector đang khả dụng.
        * getListJanitor(): Chức năng lấy danh sách tất cả các Janitor đang khả dụng.
    + Collector/Janitor
        * getEmployeeName(employeeID): Chức năng lấy tên của nhân viên theo id.
        * getCallendarDetail(employeeID): Chức năng lấy thông tin về lịch làm việc của nhân viên theo id.
        * getTaskDetail(taskID): Chức năng lấy thông tin chi tiết về task của nhân viên theo id.

Module Management:
- Input:  Back Officer.
- Output: Cho phép Back Officer nắm thông tin về nhân viên (collectors, janitors), các MCP, phương tiện (vehicles, trollers).
    + Back Officer: Các task đã giao và tiến trình hoàn thành. Thông tin về các Collector và Janitors.
    + Collector: Thông báo về task được giao, xem lịch làm việc, mô tả công việc (tuyến đường, phương tiện).
    + Janitor: Thông báo về task được giao, xem lịch làm việc, mô tả công việc (khu vực thu gom, MCP sẽ đưa rác về, trollers được bàn giao).
- Functions: 
    + Nhân viên
        * check_in(userID): Giúp tổ chức chấm công cho nhân viên và nhân viên xác nhận bắt đầu thực hiện công việc được giao -> lưu lại thời gian check in.
        * check_out(userID): Cho phép nhân viên xác nhận hoàn thành xong công việc được giao.
        * registerEmployee(username, password): Chức năng đăng ký người dùng mới.
        * getEmployeeProfile(EmployeID): Chức năng xem thông tin của nhân viên.
        * updateEmployeeProfile(EmployeID, detail): Chức năng gửi dữ liệu cho database để cập nhật thông tin của nhân viên.
        * deleteEmployeeProfile(EmployeID): Chức năng xóa thông tin của một nhân viên.

    + MCPs:
        * getMCPsMap(): Lấy thông tin bản đồ các MCPs.
        * getMCPsInfo(MCP\_ID): Chức năng lấy thông tin của MCP (vị trí, trạng thái rác hiện tại).
        * updateMCPsState(MCP\_ID, state): Chức năng chỉnh sửa trạng thái của MCP.
        * deleteMCPs(MCP\_ID): Chức năng xóa thông tin về một MCP nào đó.
        * getCapacityByID(mcpID): Hàm lấy thông tin sức chứa của MCP cụ thể.
        * getInUseByID(mcpID): Hàm lấy thông tin phần đã sử dụng của MCP cụ thể.

    + Vehicle:
        * getVehiclesInfo(VehiclesID): Chức năng lấy thông tin của phương tiện (vị trí đang đỗ, trạng thái phân công, capacity, lượng xăng tiêu thụ).
        * updateVehicleState(VehiclesID, detail): Chức năng cập nhật trạng thái sử dụng của phương tiện khi được gán cho một nhân viên nào đó hoặc nhân viên đó hoàn thành xong nhiệm vụ và đưa xe về depot.
        * deleteVehicle(VehiclesID): Chức năng xóa thông tin về một phương tiện khỏi hệ thống.
        * addVehicles(detail): Chức năng thêm thông tin về một phương tiện mới vào hệ thống.


## Task 3.2
### Component Diagram

![Component Diagram](/Picture/ComponentDiagram.png?raw=true)

### Description of Component Diagram

Hệ thống gồm 3 Components chính: nhóm View, nhóm Controller, nhóm Model
- Nhóm View chứa component *Back officer Interface* bao gồm:
    + Component *Route View* dành cho Back Offices xem và chọn tuyến đường
    + Component *Task Manager View*  gồm các giao diện để back officer tạo task dành cho Collector (Assign Task Collector View), Janitor (Assign Task Janitor View) và Task View.

- Nhóm Controller:
    + Component *Assign Task for Controller Controller* khối điều khiển tạo công việc cho Collector
    + Component *Assign Task for  JanitorController* khối điều khiển tạo công việc cho Janitor
    + Component *Task Controller*, khối điều khiển task, sử dụng để cung cấp chỉnh sửa và cập nhật task.

- Nhóm Model:
    + Component *Collector*
        * Cung cấp interface Request Collector list cho component Assign Task Collector View trong nhóm View.
        * Yêu cầu  interface Update Collector từ  Assign Task Collector Controller trong nhóm Controller.
    + Component *Janitor* 
        * Cung cấp interface Request Janitor  list cho component Assign Task Collector View trong nhóm View.
        * Yêu cầu  interface Update Janitor từ  Assign Task Janitor Controller trong nhóm Controller.
    + Component *MCP*
        * Cung cấp interface Request MCP List cho component   Assign Task Collector View và  Assign Task Janitor View trong nhóm View. 
        *  Yêu cầu   Update MCP từ component Assign Task Collector Controller trong nhóm Controller.
    + Component *Vehicle*
        * Cung cấp interface Request Vehicle List cho Assign Task Collector View và Request troller list cho Assgin Task Janitor View trong nhóm View.
        *  Yêu cầu  interface Update Vehicle  từ  Assign Task Collector Controller  và Assign Task Janitor Controller trong nhóm Controller.
    + Component *Route*
        * Cung cấp Request  Route List cho  Assign Task Collector View,  Assgin Task Janitor View và Route View trong nhóm View.
        *  Yêu cầu interface  Update Route từ   Assign Task Collector Controller  và Assign Task Janitor Controller trong nhóm Controller.
    + Component *Task*
        * Cung cấp interface Request Task list cho component Task View trong nhóm View.
        *  Yêu cầu interface Update Task từ Assign Task Collector Controller, Assign Task Janitor Controller và Task Controller  trong nhóm Controller.

## Task 4
#### Picture for the interface

![Picture for the interface](/Picture/Task%204.3.png?raw=true)
