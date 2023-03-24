# Task 3
## Task 3.1 
###  Introduction
#### Three-layer Architecture

Mô hình 3-layer gồm có 3 phần chính:

- Presentation Layer (GUI) : Lớp này có nhiệm vụ chính giao tiếp với người dùng. Nó gồm các thành phần giao diện ( win form, web form,…) và thực hiện các công việc như nhập liệu, hiển thị dữ liêu, kiểm tra tính đúng đắn dữ liệu trước khi gọi lớp Business Logic Layer (BLL).
- Business Logic Layer (BLL) : Layer này phân ra 2 thành nhiệm vụ :
    + Đây là nơi đáp ứng các yêu cầu thao tác dữ liệu của GUI layer, xử lý chính nguồn dữ liệu từ Presentation Layer trước khi truyền xuống Data Access Layer và lưu xuống hệ quản trị CSDL.
    + Đây còn là nơi kiểm tra các ràng buộc, tính toàn vẹn và hợp lệ dữ liệu, thực hiện tính toán và xử lý các yêu cầu nghiệp vụ, trước khi trả kết quả về Presentation Layer.
- Data Access Layer (DAL): Lớp này có chức năng giao tiếp với hệ quản trị cơ sở dữ liệu như thực hiện các công việc liên quan đến lưu trữ và truy vấn dữ liệu (tìm kiếm, thêm, xóa, sửa,…).

#### MVC Model
MVC (MVC Design Pattern) là viết tắt của Model - View - Controller. Đó là một mẫu kiến trúc, mô hình lập trình phổ biến được sử dụng để tạo cấu trúc cho nhiều trang web, ứng dụng tiên tiến.
![MVC Architecture Pattern](/Picture/MVC3.png?raw=true)

Mô hình MVC bao gồm ba thành phần thiết yếu: 


- Model: Là component trung tâm của kiểu thiết kế này. Nó trực tiếp xử lý các dữ liệu logic và các quy tắc của ứng dụng. Trong ứng dụng này, model có 1 vài chức năng cụ thể như sau: Xác thực login, cập nhật dữ liệu, tạo các thông báo, lưu trữ thông tin, kiểm tra phân công công việc,... 
- View: Định nghĩa và quyết định cách mà dữ liệu được hiển thị với người dùng. Cụ thể trong ứng dụng này là hiển thị các form login, trang lịch làm việc, trang thông tin nhân viên,... 
- Controller: Xử lý các tương tác của người dùng hay còn gọi là event (ví dụ: bấm nút, click chuột,...), truyền những event đó đến view và model trong tình huống cụ thể của ứng dụng này. Với tình huống cụ thể là ứng dụng này thì những chức năng chính của Controllers là ánh xạ các tương tác của người dùng đến các cập nhật model và chọn view phù hợp để hiển thị.   

### Reason for our choose MVC model
Nhóm lựa chọn mô hình MVC vì các lợi ích mà mô hình này đem lại như sau:
- Tiết kiệm băng thông: Vì không sử dụng viewstate nên MVC rất nhẹ và tiết kiệm được diện tích của băng thông. Khi cần tương tác gửi và nhận dữ liệu liên tục, người dùng có thể sử dụng các ứng dụng trên web. Điều này giúp website có thể hoạt động ổn định và tốt hơn.
- Dễ dàng kiểm tra: Nhờ có MVC ta sẽ chia code thành 2 thành phần front-end và back-end riêng biệt. Do đó, ta sẽ dễ dàng hơn trong việc kiểm tra, rà soát lỗi, đảm bảo được chất lượng và độ uy tín cho phần mềm trước khi tới tay người dùng.
- Chức năng Separation of Concern: Cho phép phân tách một cách rõ ràng các thành phần model, data, giao diện hay nghiệp vụ.
- Tính kết hợp: Ta có thể thoải mái viết code trên nền tảng web khi tích hợp ở mô hình MVC để giảm tải dữ liệu server.
- Tính đơn giản: Kết cấu của mô hình MVC tương đối đơn giản và dễ dàng sử dụng ngay cả khi bạn không có chuyên môn.
### Architectural Diagram
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
### Modules
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
