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
