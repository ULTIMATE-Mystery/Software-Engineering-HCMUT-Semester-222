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
#### Đối với Back Officer
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
#### Đối với Collector
* Khi có thông báo về task được gửi đến từ hệ thống thì Collector sẽ thực hiện xác nhận
đã nhận task (Check in task) và bắt đầu thực hiện công việc. Khi Collector đang làm việc
thì trạng thái gửi về Back Officer là In Progress. Sau khi đã hoàn thành công việc (task
done) thì Collector sẽ xác nhận hoàn thành task (Check out task) để Back Officer xác nhận
Collector đã hoàn thành task (task completed).
* Nếu không có thông báo về task thì Collector sẽ không phải làm việc.
