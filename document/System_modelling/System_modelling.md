# Task 2
## Task 2.1

### Acitivity diagram for Task Assignment Module
#### Activity diagram for Collector
![Activity diagram for Task Assignment](/Picture/Task2ActivityCollector.png?raw=true)
#### Diagram description:

#### Đối với Back Officer
* Đầu tiên Back Officer sẽ ở trạng thái Tổng quan ban đầu, tiếp đến Back Officer sẽ tiến
hành chọn Task (Tổng quan nhiệm vụ), ở đây hiển thị 2 chế độ Create Task và View Task.
* Ở task list khi ta chọn Create Task:
  * Xem được tình trạng của tất cả MCP. Mỗi MCP được thể hiện ở 3 trạng thái:
    ```cpp
    Trạng thái 1: Dưới 50% so với sức chứa tối đa
    Trạng thái 2: Trên 50% đến không lớn hơn 95% so với sức chứa tối đa
    Trạng thái 3: Trên 95% sức chứa tối đa
    ```
  * Back Officer sẽ có thể View map để xem bản đồ và chọn MCPs.
  * Tiếp đến hệ thống hiển thị các tuyến đường tuyến ưu và Back Officer tiếp tục chỉ
định tuyến đường cho công việc.
  * Sau đó hệ thống hiển thị các phương tiện có thể chọn để Back Officer tiến hành chọn
phương tiện cho công việc
  * Tiếp theo hệ thống hiển thị danh sách Collector có thể giao việc được, Back Officer
sẽ tiến hành chọn Collector phù hợp với công việc.
  * Cuối cùng Back Officer chọn thời gian cho công việc.
  * Tiếp đến ta sẽ xác nhận việc tạo task:
    ```cpp
    Nếu Back Officer nhấn “Yes” thì hệ thống sẽ thông báo đến cho Collector về chi
    tiết của task
    Nếu Back Officer nhấn “No” thì Back Officer sẽ quay về trạng thái tổng quan
    nhiệm vụ (Task)
    ```
* Ở Task nếu ta chọn View Task
  * Hệ thống sẽ hiển thị danh sách thông tin các Task dưới dạng tối giản hóa, Ta sẽ chọn
task cần xem thông tin chi tiết, nhấn vào xem chi tiết(View Detail) của ID task tương
ứng , tiếp đến có hai lựa chọn là không chỉnh sửa (No Edit) và Chỉnh sửa task (Edit
task).
  * Khi Back Officer nhấn vào Edit task:
Back Officer sẽ chỉnh sửa những mục cần thiết trong Task và cuối cùng ta sẽ xác nhận
việc chỉnh sửa Task
    ```cpp
    Nếu Back Officer nhấn “Yes” thì hệ thống sẽ thông báo đến cho Collector về chi
    tiết của task.
    Nếu Back Officer nhấn “No” thì Back Officer sẽ quay về trạng thái tổng quan ban
    đầu (task list).
    ```
  * Khi Back Officer nhấn vào "No Edit" hệ thống trở về tổng quan nhiệm vụ (Task
#### Đối với Collector
* Khi có thông báo về task được gửi đến từ hệ thống thì Collector sẽ thực hiện xác nhận
đã nhận task (Check in task) và bắt đầu thực hiện công việc. Khi Collector đang làm việc
thì trạng thái gửi về Back Officer là In Progress. Sau khi đã hoàn thành công việc (task
done) thì Collector sẽ xác nhận hoàn thành task (Check out task) để Back Officer xác nhận
Collector đã hoàn thành task (task completed).
* Nếu không có thông báo về task thì Collector sẽ không phải làm việc.

#### Activity diagram for Janitor    
![Activity diagram for Task Assignment](/Picture/Task2ActivityJanitor.png?raw=true)
#### Diagram description:
### Đối với Back Officer
* Đầu tiên Back Officer sẽ ở trạng thái Tổng quan ban đầu, tiếp đến Back Officer sẽ tiến
hành chọn Task (Tổng quan nhiệm vụ), ở đây hiển thị 2 chế độ Create Task và View Task.
* Ở task list khi ta chọn Create Task:
  * Xem được tình trạng của tất cả MCP. Mỗi MCP được thể hiện ở 3 trạng thái:
    ```cpp
    Trạng thái 1: Dưới 50% so với sức chứa tối đa
    Trạng thái 2: Trên 50% đến không lớn hơn 95% so với sức chứa tối đa
    Trạng thái 3: Trên 95% sức chứa tối đa
    ```
  * Back Officer sẽ có thể View map để xem bản đồ và chọn MCPs.
  * Tiếp đến hệ thống hiển thị các area trên bản đồ, Back Officer tiếp tục chỉ định các
khu vực cho Janitor.
  * Sau đó hệ thống hiển thị các troller có thể chọn để Back Officer tiến hành chọn troller
cho công việc
  * Tiếp theo hệ thống hiển thị danh sách Janitor có thể giao việc được, Back Officer sẽ
tiến hành chọn Janitor phù hợp với công việc.
  * Cuối cùng Back Officer chọn thời gian cho công việc.
  * Tiếp đến ta sẽ xác nhận việc tạo task:
    ```cpp
    Nếu Back Officer nhấn “Yes” thì hệ thống sẽ thông báo đến cho Janitor về chi
    tiết của task
    Nếu Back Officer nhấn “No” thì Back Officer sẽ quay về trạng thái tổng quan
    nhiệm vụ (Task)
    ```
* Ở Task nếu ta chọn View Task
  * Hệ thống sẽ hiển thị danh sách thông tin các Task dưới dạng tối giản hóa, Ta sẽ chọn
task cần xem thông tin chi tiết, nhấn vào xem chi tiết (View Detail) của ID task tương
ứng , tiếp đến có hai lựa chọn là không chỉnh sửa (No Edit) và Chỉnh sửa task (Edit
task).
  * Khi Back Officer nhấn vào Edit task:
Back Officer sẽ chỉnh sửa những mục cần thiết trong Task và cuối cùng ta sẽ xác nhận
việc chỉnh sửa Task
    ```cpp
    Nếu Back Officer nhấn “Yes” thì hệ thống sẽ thông báo đến cho Collector về chi
    tiết của task.
    Nếu Back Officer nhấn “No” thì Back Officer sẽ quay về trạng thái tổng quan ban
    đầu (task list).
    ```
  * Khi Back Officer nhấn vào "No Edit" hệ thống trở về tổng quan nhiệm vụ (Task)
Đối với Janitor
* Khi có thông báo về task được gửi đến từ hệ thống thì Collector sẽ thực hiện xác nhận
đã nhận task (Check in task) và bắt đầu thực hiện công việc. Khi Janitor đang làm việc
thì trạng thái gửi về Back Officer là In Progress. Sau khi đã hoàn thành công việc (task
done) thì Janitor sẽ xác nhận hoàn thành task (Check out task) để Back Officer xác nhận
Janitor đã hoàn thành task (task completed).
* Nếu không có thông báo về task thì Janitor sẽ không phải làm việc.
### Task 2.2
#### Sequence diagram for back officer to assign vehicle
![Sequence diagram for route planning](/Picture/Task2Seq.png?raw=true)
#### Mô tả
1. Đầu tiên Back Officer chọn ngày muốn giao xe.
2. Controller gửi 2 yêu cầu song song (parallel) đến Model để nhận danh sách các phương
tiện và nhân viên có thể giao được cho ngày đó.
3. Nếu không có phương tiện hoặc nhân viên nào khả dụng, Model sẽ trả về thông báo "Không
có phương tiện hoặc công nhân khả dụng" cho Controller và Controller sẽ gửi thông báo
"Chọn ngày khác" tới View. View hiển thị thông báo này cho Back Officer.
4. Nếu cả 2 phương tiện và nhân viên đều có sẵn, Controller sẽ gửi danh sách các phương
tiện có đang có sẵn đến View, View sẽ hiển thị danh sách đó cho Back Officer. Từ đó Back
Officer có thể chọn một phương tiện từ danh sách.
5. Back Officer nhấn nút “Confirm” để xác nhận đã chọn xe.
6. Tiếp theo Controller gửi danh sách nhân viên có sẵn đến View. Back Officer chọn một
nhân viên từ danh sách.
7. Back Officer nhấp vào nút "Assign" để giao xe với ngày, phương tiện và nhân viên đã được
chọn.
8. View gửi ngày, phương tiện và nhân viên được chỉ định tới Model để lưu trữ vào database.
9. Sau khi lưu thành công, View sẽ hiển thị thông báo "Đã giao thành công tới Back officer"
### Task 2.3
#### Class diagram for Task Assignment module
![Class diagram for Task Assignment module](/Picture/Task2ClassDiagram.png?raw=true)
#### Diagram description
Class Diagram của nhóm được vẽ theo mô hình MVC bao gồm các tầng sau:
#### Model
Tầng Model sẽ quản lý tất cả dữ liệu cũng như việc xử lý logic liên quan đến dữ liệu. Ở tầng này ta có thể thêm, sửa, xoá, lấy dữ liệu trực tiếp.
- MCP: Model của các điểm MCP có các thuộc tính như: mcpID, capacity, status và các phương thức như:
    + getStatus(): Lấy trạng thái hiện tại của MCP.
    + getCapacity(): Lấy sức chứa của MCP.
    + updateStatus(mcpID): Cập nhật sức chứa của MCP. 
- Map: Model của Map có các thuộc tính như street kiểu vector<string>, mcps kiểu vector<MCP>. Các phương thức như:
    + displaySelectedMCPs(mpcs: MCP): hiển thi các điểm MCP đã được lựa chọn
    + getSelectedMCPs(): Lấy các điểm MCPs từ database
    + calculateDistance(street: vector<string>): Tính toán khoảng cách giữa các MCP
    + findBestRoute(street: vector<string>,mcps: vector<MCP>, vehicle: Vehicle): Tìm tuyến đường tốt nhất
- Route: Model tuyến đường có thuộc tính street kiểu vector<string> và phương thức là hàm displayRoute(): để hiển thị các tuyến đường lên bản đồ.
- BackOfficer: Model các BackOfficer có thuộc tính adminID kiểu int và name kiểu string.
- BackOfficerManageModel: Mô hình BackOffcierManageModel để BackOfficer quản lý các task. Có các thuộc tính: adminManageView, adminManageController, vehicle map. Và các phương thức:
    + updateView(): để cập nhật giao diện hiển thị
    + assignRouteForCollectors(vector<Worker>, route: Route, vehicle: Vehicle, date: string, hour: string, week: string): gán các tuyến đường cho các Collector.
    + assignAreaForJanitors(vector<Worker>, street:(vector<string>,date: string, hour: string, week: string): gán các khu vực thu gom rác cho các Janitor.
- Vehicle: thể hiện đối tượng là Vehicle(phương tiện) bao gồm các thuộc tính như : vehicleID: mã phương tiện, weight: trọng lượng, capacity: sức chứa,... và có các phương thức: getWeight(): lấy trọng lượng phương tiện, getCapacity(): lấy thông tin sức chứa, getFuel(): lấy thông tin nhiên liệu, getStatus(): xem tình trạng phương tiện, setStatus(status: bool): sửa đổi tình trạng phương tiện.
- VehicleList: thể hiện đối tượng là Vehicle list có chức năng hiển thị danh sách phương tiện.
- VehicleContoller: Model có chức năng kiểm soát và thay đổi các thông tin của đổi tượng Vehicle thông qua các phương thức như : updateStatus(): cập nhật tình trạng, getVehicleList(): xem danh sách phương tiện.
- Worker: thể hiện đối tượng Worker(nhân viên), có các thuộc tính : workerID: mã nhân viên, name: tên, type: loại(Janiter hay Collector), timeTable: lịch làm việc của nhân viên. Các phương thức: getName(): xem tên, getTimeTable(): xem lịch làm việc, getType(): xem loại nhân viên, showTimeTable(): hiển thi lịch làm việc, checkIn() và checkOut(): để chấm công.
- WorkerList: thể hiện danh sách tất cả các Worker
- Collector: là lớp nhân viên Collector - nhân viên lái xe thu gom rác thải, thừa hưởng thuộc tính từ lớp Woker, đồng thời có thêm các thuộc tính đặc trưng; Route: vector<route> : thể hiện các tuyển đường mà Collector được giao; vechicle: Vehicle - phương tiện mà Collector đó sử dụng.
- Janitor: là lớp nhân viên Janitor - nhân viên sử dụng xe đẩy thu gom rác trong 1 khu vực, thừa hưởng thuộc tính từ lớp Woker, đồng thời có thêm các thuộc tính đặc trưng; areaWork: map - thể hiện khu vực mà Janitor đó được giao.
- TimeTable: thể hiện đối tượng bảng biểu thời gian, bao gồm các thuộc tính date (ngày), hour (giờ), week (tuần). và có các phương thức: getDate() - lọc ngày, getHour - lọc giờ, getWeek() - lọc tuần, addDate(date) thêm ngày vào bảng biểu, addHour(hour) thêm giờ vào bảng biểu. addWeek(week) thêm tuần vào bảng biểu làm việc.
#### Controller
Tầng controller là tầng trung gian để kết nối giữa tầng View và tầng Model, tầng controller dùng để kiểm soát các luồng thực thi liên quan đến việc thao tác với các dữ liệu liên quan đến tuyến đường, MCP, thông báo, người dùng, và nhiệm vụ...tầng controller sẽ gọi đến tầng Model các yêu cầu cần thực hiện từ thao tác của người dùng trên giao diện người dùng ở tầng View, cũng như trả về dữ liệu gọi từ tầng Model để tầng View tiến hành render.
- MCPController: Quản lý các chức năng, luồng thực thi liên quan MCP.
- BackOfficerManageController: : Model có chức năng quản lý các hành động của Back Officer.
#### View
Tầng view được sử dụng để kiểm soát logic toàn bộ giao diện người dùng của hệ thống, Back Officer sẽ tương tác với các như dropdowns, searchbar, button trong lúc tìm kiếm, phân công tuyến đường, phương tiện, nhân viên...
- BackOfficerManageView: Model thể hiện giao diện người dùng có các phương thức như: showWorkerList(): để hiển thị danh sách nhân viên, showWorKerInfo(): để hiện thị thông tin của nhân viên, hay showSelectWorker(): hiển thị nhân viên được chọn,...
