# HK222-CO3001-UWC-2.0
**Team name** NoName\
**Task 1**  Requirement elicitation\
**Task 2**  System modeling\
**Task 3**  Architecture design\
**Task 4**  Implementation - Sprint 1\
**Task 5**  Implementation - Sprint 2

## Members
- Nguyễn Phúc Tiến - 2014725 
- Nguyễn Minh Tiến - 2014722 
- Nguyễn Văn Thịnh - 2014603
- Nguyễn Xuân Triều - 2110610 
- Lê Viễn Du - 1912860
- Phạm Duy Quang  -  2011899
- Nguyễn Hữu Hiếu  -  201314

## Task 1
### 1.1 Mô tả dự án

#### Bối cảnh dự án

Xã hội ngày nay, nhân loại không ngừng phát triển. Cuộc sống đổi mới liên tục, những công việc trước kia phải sử dụng các phương pháp thủ công, thô sơ giờ đây đang dần được thay thế bằng các phương pháp hiện đại hơn, dùng máy móc, các hệ thống quản lý,… giúp nâng cao hiệu suất công việc và giảm thiểu rủi ro do lao động thủ công gây ra.

Quản lý rác thải đô thị là một trong những vấn đề quan trọng mà nhiều quốc gia trên thế giới phải đối mặt. Rác thải do con người thải ra ngày càng nhiều, tuy nhiên chưa có biện pháp xử lý triệt để lượng rác thải thải ra ngày một lớn. Ở các thành phố, khu đô thị, quản lý chất thải rắn là tốn kém và không hiệu quả.

Do đó, quản lý rác thải đô thị được coi là một trong những điểm quan trọng cần cải thiện trong Mục tiêu Phát triển bền vững (Sustainable Development Goals - SDG) mục 11: Thành phố và cộng đồng bền vững & mục 6: Nước sạch và vệ sinh.

#### Thực trạng rác thải tại TP.HCM

Theo số liệu thống kê từ trang chinhphu.vn, TP.HCM thải ra khoảng 9.500 tấn rác thải sinh hoạt mỗi ngày. Lượng rác thải khổng lồ trên chủ yếu được xử lý bằng phương pháp chôn lấp, chiếm đến 69%. Phương pháp ủ phân hữu cơ và tái chế chiếm 31%, trong đó tái chế rác thải nhựa chỉ chiếm 1%. 

TPHCM đã có chính sách hỗ trợ cho người dân phân loại rác tại nguồn. Tuy nhiên, những chính sách đã có chưa đủ độ hấp dẫn nhằm thúc đẩy người dân tự giác tham gia. Trong khi đó, cơ chế thúc đẩy xã hội hoá công tác thu gom, tái chế, xử lý chất thái rắn sinh hoạt còn thiếu, chưa thu hút được các nguồn lực đầu tư.

Vì vậy, dự án lần này là một dự án rất cần thiết, trọng điểm mà ta có thể đóng góp cho cộng đồng.

#### Vấn đề hiện tại của các bên liên quan

Quá trình thu gom rác trước đây chưa được quản lý một cách hiệu quả, dẫn tới việc thiếu hiệu quả khi hoạt động, chưa tối ưu về nhiều mặt. Ví dụ như nhân công, chi phí, phương tiện di chuyển, quãng đường di chuyển, thời gian. . . Từ đó vấn đề đặt ra là làm sao để cải thiện quá trình thu gom rác nhằm tăng cường hiệu quả, giảm thời gian, tiết kiệm được năng lượng và tiền bạc nhưng vẫn đảm bảo về vấn đề môi trường.

#### Sơ lược về dự án
Dự án cần có một sự đồng bộ, thống nhất và hiệu quả trong việc quản lý, phân công, vận chuyển, thu gom rác thải...
Phạm vi dự án:
- Hệ thống hỗ trợ tương tác giữa Collectors, Janitors, Back Officers, nhân viên của công ty thông qua chức năng nhắn tin (chức năng này không hỗ trợ cho đối tượng là các hộ dân cư.
- Back Officers được phân chia theo từng Quận, Huyện, Thị xã của 1 Tỉnh/Thành phố, theo đó Janitors và Collectors sẽ hoạt động dưới sự quản lý của Back Officers tại khu vực tương ứng.
- MCPs là những địa điểm tập kết rác được chính quyền địa phương bố trí, Collectors và Janitors sẽ đến những khu vực chỉ định và thu gom rác ở những địa điểm này.
- Rác sau khi Collectors thu gom về nơi cuối cùng phải có các khu vực khác nhau để lưu giữ các loại chất thải sinh hoạt đã được phân loại, bảo đảm không để lẫn các loại chất thải đã được phân loại với nhau.
#### Đối tượng của dự án
- Công ty Y: Hỗ trợ đào tạo Back Officers, Collectors & Janitors.
- Back Officers: Tạo và sắp xếp lịch, phân phối công việc cho các Collectors và Janitors.
- Collectors: Lái xe thu gom rác từ Điểm tập kết rác (MCPs) theo một tuyến đường được Back Officers đã định sẵn.
- Janitors: Thu gom rác trong khu vực được chỉ định bằng các xe đẩy (trollers) đến Điểm tập kết rác (MCPs).
#### Nhu cầu của các bên liên quan
- Công ty Y: Cung cấp Back Officers, Collectors & Janitors đã được đào tạo để quản lý và thực hiện quy trình thu gom rác.
- Back Officers: Cập nhật thông tin về mức độ rác ở MCPs. Lên kế hoạch chỉ định phương tiện và tuyến đường cho các collectors theo từng tháng. Sắp xếp lịch làm việc của collectors và janitors hàng tuần, đồng thời mỗi ngày sẽ gửi tin nhắn về thông tin công việc cần làm cho các Collectors và Janitors.
- Collectors và Janitors: Nắm được lịch làm việc, nắm rõ nhiệm vụ, có thể liên lạc được với nhau và với Back Officers, được thông báo khi MCPs đầy rác.
#### Lợi ích về việc sử dụng UWC 2.0
- Đối với công ty hỗ trợ cung cấp dịch vụ Y.
  + Nhập và sử dụng dữ liệu hiện có của hệ thống UWC1.0.
  + Tăng cường khả năng quản lý quy trình làm việc.
- Đối với các bên liên quan trong quy trình thu gom rác:
  + Có thể giao tiếp với nhau trong thời gian thực.
  + Nhân viên sẽ nhận được thông báo khi bãi tập kết rác đầy tải.
  + Được hỗ trợ về việc chọn lựa tuyến đường và phương tiện tối ưu về sức chứa, nhiên liệu, công suất…
  + Quản lý các tác vụ dễ dàng, trực quan và chính xác hơn.

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
#### 1.2.3 Use-case diagram cho toàn bộ hệ thống
##### Use-case diagram
![Use-case diagram for the whole system](/Picture/ucDiagram.png?raw=true)
##### Job description
|No.|Use-case | Job Description|
| --- | ---| --- |
|1|View employee information|Dùng để Back officer xem thông tin của tất các nhân viên|
|2| Dùng để Back officer xem thông tin của tất các nhân viên |Dùng để Back officer xem thông tin của tất các nhân viên|
|3 |Manage vehicle | Dùng để Back officer quản lý tất cả các phương tiện.|
|4|Vehicle coordination |Dùng để Back officer điều phối phương tiện di chuyển|
|5| Manage depo |Dùng để Back officer quản lý kho bãi chứa các phương tiện.|
|6 | Assign task | Dùng để Back officer giao nhiệm vụ cho Collectors và Janitors.|
|7 | Change task status | Dùng để Back officer thay đổi trạng thái của nhiệm vụ được giao|
|8 |View task | Dùng để Back officer xem tổng quan các task đã giao.|
|9 |View Collector’s task |Dùng để xem cụ thể task của các Collector|
|10 |View Janitor’s task| Dùng để xem cụ thể task của các Janitor.|
|11|Manage MCP| Dùng để Back officer quản lý thông tin về các MCPs|
|12|Update capacity| Dùng để Back officer chủ động cập nhật thông tin về sức chứa của MCPs|
|13|Real-time communication| Dùng để gửi tin nhắn giao tiếp giữa Back officer & Janitor & Collector.|
|14|Check in |Check out Dùng để các nhân viên làm việc điểm danh|
|15|View work information| Dùng để xem thông tin làm việc|
|16|Report vehicle |Dùng để các nhân viên làm việc report lại tình trạng của xe |
|17|MCPs capacity warning |Nhân viên làm việc nhận được thông báo khi điểm MCPs đầy (> 95% dung lượng tải tối đa).|
### 1.3 Use-case diagram cho Task assignment
#### 1.3.1 Use-case diagram
![Use-case diagram](/Picture/taskAssignment.png?raw=true)
#### 1.3.2 Job Description
|No.|Use-case | Job Description|
| --- | ---| --- |
|1|Assign task for Collector|Dùng để Back officer giao nhiệm vụ cho Collectors.|
|2| Assign task for Janitor |Dùng để Back officer giao nhiệm vụ cho Janitors.|
|3 |Assign vehicle | Giao xe cho Collector.|
|4| Assign routes | Chỉ định tuyến đường đã được tính toán tối ưu cho Collector.|
|5| View map | Xem bản đồ khu vực chứa các MCP và các đường đi.|
|6 | Assign troller | Giao xe đẩy cho Janitor.|
|7 | Assign areas | Chỉ định các khu vực thu gom rác cho Janitor.|
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
|Description| Tạo và sắp xếp lịch cho Janitor. Từ đó các nhân viên sẽ nhận được thông tin chi tiết của công việc (thời gian, phương tiện, MCP,. . . )|
|Preconditions| Người dùng đăng nhập vào tài khoản Back Officer và đang ở giao diện "Tổng quan nhiệm vụ"|
|Postconditions |POST-1: Thành công giao nhiệm vụ chi tiết công việc đến các Janitor.<br>POST-2: Thông báo đến nhân viên được giao.<br>POST-3: Lưu lại task đã tạo vào database.|
|Normal flow| 1. Hệ thống hiển thị các danh mục:<br>- Nhiệm vụ<br>- Xem route<br> 2. Back officer chọn mục "Nhiệm vụ".<br>3. Back officer chọn mục "Tạo và gán công việc".<br>4. Ở mục "Loại hình nhân viên", Back officer chọn loại hình Janitor.<br>5. Back officer chọn MCP.<br>6. Back officer chỉ định các khu vực thu gom rác cho Janitor.<br>7. Back officer chọn nhân viên.<br>8. Back officer chọn troller làm việc cho nhân viên.<br>9. Back officer chọn ngày, giờ làm việc.<br>10. Back officer chọn xác nhận giao việc.<br>11. Hệ thống gửi thông báo đến nhân viên đã được giao nhiệm vụ và trở về giao diện ban đầu.|
|Alternative flows| 5.a. Back officers xem thông tin các MCP.<br>5.b. Back officers chọn MCP.|
|Exceptions| Exception 1: Tại bước 5, tất cả MCPs đều vượt quá giới hạn chứa (>95%).<br>Exception 2: Tại bước 7, không có nhân viên nào sẵn sàng làm việc.<br>Exception 3: Tại bước 10, Back officer bấm nút hủy giao việc (CANCEL) →trở về lại bước 4 ở Normal flow|
##### Assign vehicles
|Use-Case Name| Assign vehicle|
|---|---|
|Actor |Back Officer|
|Trigger| Back Officer nhấn chọn hộp chọn "Phương tiện"|
|Description |Back Officer thực hiện chọn phương tiện cho công việc.|
|Preconditions| Người dùng đăng nhập vào tài khoản Back Officer và đang ở giao diện "Tạo và gán công việc"|
|Postconditions| Back Officer chọn thành công phương tiện cho công việc|
|Normal flow| 1. Back Officer nhấn vào hộp chọn "Phương tiện".<br>2. Hệ thống hiển thị ra danh sách các phương tiện có thể sử dụng.<br>3. Back Officer chọn phương tiện phù hợp với công việc.|
|Alternative flows| None|
|Exceptions |Tại bước 2, không có phương tiện nào có thể chỉ định để làm nhiệm vụ|

##### Assign routes
|Use-Case Name |Assign routes|
|---|---|
|Actor| Back Officer, Map System , Route Calculator Map|
|Trigger| Back Officer nhấn chọn hộp chọn "ID Route"|
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


# Task 2
## 2.1. Acitivity diagram for Task Assignment Module
#### Activity diagram for Collector
![Activity diagram for Task Assignment](/Picture/Task2ActivityCollector.png?raw=true)
#### Diagram description:

#### Đối với Back Officer
* Đầu tiên Back Officer sẽ ở trạng thái Tổng quan ban đầu, tiếp đến Back Officer sẽ tiến
hành chọn Task (Tổng quan nhiệm vụ), ở đây hiển thị 2 chế độ Create Task và View Task.
* Ở task list khi ta chọn Create Task:
  * Xem được tình trạng của tất cả MCP. Mỗi MCP được thể hiện ở 3 trạng thái:
    ```cpp
    - Trạng thái 1: Dưới 50% so với sức chứa tối đa
    - Trạng thái 2: Trên 50% đến không lớn hơn 95% so với sức chứa tối đa
    - Trạng thái 3: Trên 95% sức chứa tối đa
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
    - Nếu Back Officer nhấn “Yes” thì hệ thống sẽ thông báo đến cho Collector về chi
    tiết của task
    - Nếu Back Officer nhấn “No” thì Back Officer sẽ quay về trạng thái tổng quan
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
    - Nếu Back Officer nhấn “Yes” thì hệ thống sẽ thông báo đến cho Collector về chi
    tiết của task.
    - Nếu Back Officer nhấn “No” thì Back Officer sẽ quay về trạng thái tổng quan ban
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
    - Trạng thái 1: Dưới 50% so với sức chứa tối đa
    - Trạng thái 2: Trên 50% đến không lớn hơn 95% so với sức chứa tối đa
    - Trạng thái 3: Trên 95% sức chứa tối đa
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
    - Nếu Back Officer nhấn “Yes” thì hệ thống sẽ thông báo đến cho Janitor về chi
    tiết của task
    - Nếu Back Officer nhấn “No” thì Back Officer sẽ quay về trạng thái tổng quan
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
    - Nếu Back Officer nhấn “Yes” thì hệ thống sẽ thông báo đến cho Collector về chi
    tiết của task.
    - Nếu Back Officer nhấn “No” thì Back Officer sẽ quay về trạng thái tổng quan ban
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
### 2.2. Sequence diagram for back officer to assign vehicle
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

### 2.3. Class diagram for Task Assignment module
![Class diagram for Task Assignment module](/Picture/Task2ClassDiagram.png?raw=true)
#### Diagram description
Class Diagram của nhóm được vẽ theo mô hình MVC bao gồm các tầng sau:
##### Model
Tầng Model sẽ quản lý tất cả dữ liệu cũng như việc xử lý logic liên quan đến dữ liệu. Ở tầng này ta có thể thêm, sửa, xoá, lấy dữ liệu trực tiếp.
- MCP: Model của các điểm MCP có các thuộc tính như: mcpID, capacity, status và các phương thức như:
    + getStatus(): Lấy trạng thái hiện tại của MCP.
    + getCapacity(): Lấy sức chứa của MCP.
    + updateStatus(mcpID): Cập nhật sức chứa của MCP. 
- Map: Model của Map có các thuộc tính như street kiểu vector\<string\>, mcps kiểu vector\<MCP\>. Các phương thức như:
    + displaySelectedMCPs(mpcs: MCP): hiển thi các điểm MCP đã được lựa chọn
    + getSelectedMCPs(): Lấy các điểm MCPs từ database
    + calculateDistance(street: vector\<string\>): Tính toán khoảng cách giữa các MCP
    + findBestRoute(street: vector\<string\>,mcps: vector\<MCP\>, vehicle: Vehicle): Tìm tuyến đường tốt nhất
- Route: Model tuyến đường có thuộc tính street kiểu vector\<string\> và phương thức là hàm displayRoute(): để hiển thị các tuyến đường lên bản đồ.
- BackOfficer: Model các BackOfficer có thuộc tính adminID kiểu int và name kiểu string.
- BackOfficerManageModel: Mô hình BackOffcierManageModel để BackOfficer quản lý các task. Có các thuộc tính: adminManageView, adminManageController, vehicle map. Và các phương thức:
    + updateView(): để cập nhật giao diện hiển thị
    + assignRouteForCollectors(vector\<Worker\>, route: Route, vehicle: Vehicle, date: string, hour: string, week: string): gán các tuyến đường cho các Collector.
    + assignAreaForJanitors(vector\<Worker\>, street:(vector\<string\>,date: string, hour: string, week: string): gán các khu vực thu gom rác cho các Janitor.
- Vehicle: thể hiện đối tượng là Vehicle(phương tiện) bao gồm các thuộc tính như : vehicleID: mã phương tiện, weight: trọng lượng, capacity: sức chứa,... và có các phương thức: getWeight(): lấy trọng lượng phương tiện, getCapacity(): lấy thông tin sức chứa, getFuel(): lấy thông tin nhiên liệu, getStatus(): xem tình trạng phương tiện, setStatus(status: bool): sửa đổi tình trạng phương tiện.
- VehicleList: thể hiện đối tượng là Vehicle list có chức năng hiển thị danh sách phương tiện.
- VehicleContoller: Model có chức năng kiểm soát và thay đổi các thông tin của đổi tượng Vehicle thông qua các phương thức như : updateStatus(): cập nhật tình trạng, getVehicleList(): xem danh sách phương tiện.
- Worker: thể hiện đối tượng Worker(nhân viên), có các thuộc tính : workerID: mã nhân viên, name: tên, type: loại(Janiter hay Collector), timeTable: lịch làm việc của nhân viên. Các phương thức: getName(): xem tên, getTimeTable(): xem lịch làm việc, getType(): xem loại nhân viên, showTimeTable(): hiển thi lịch làm việc, checkIn() và checkOut(): để chấm công.
- WorkerList: thể hiện danh sách tất cả các Worker.
- Collector: là lớp nhân viên Collector - nhân viên lái xe thu gom rác thải, thừa hưởng thuộc tính từ lớp Woker, đồng thời có thêm các thuộc tính đặc trưng; Route: vector\<route\> : thể hiện các tuyển đường mà Collector được giao; vechicle: Vehicle - phương tiện mà Collector đó sử dụng.
- Janitor: là lớp nhân viên Janitor - nhân viên sử dụng xe đẩy thu gom rác trong 1 khu vực, thừa hưởng thuộc tính từ lớp Woker, đồng thời có thêm các thuộc tính đặc trưng; areaWork: map - thể hiện khu vực mà Janitor đó được giao.
- TimeTable: thể hiện đối tượng bảng biểu thời gian, bao gồm các thuộc tính date (ngày), hour (giờ), week (tuần). và có các phương thức: getDate() - lọc ngày, getHour - lọc giờ, getWeek() - lọc tuần, addDate(date) thêm ngày vào bảng biểu, addHour(hour) thêm giờ vào bảng biểu. addWeek(week) thêm tuần vào bảng biểu làm việc.
##### Controller
Tầng controller là tầng trung gian để kết nối giữa tầng View và tầng Model, tầng controller dùng để kiểm soát các luồng thực thi liên quan đến việc thao tác với các dữ liệu liên quan đến tuyến đường, MCP, thông báo, người dùng, và nhiệm vụ...tầng controller sẽ gọi đến tầng Model các yêu cầu cần thực hiện từ thao tác của người dùng trên giao diện người dùng ở tầng View, cũng như trả về dữ liệu gọi từ tầng Model để tầng View tiến hành render.
- MCPController: Quản lý các chức năng, luồng thực thi liên quan MCP.
- BackOfficerManageController: : Model có chức năng quản lý các hành động của Back Officer.
##### View
Tầng view được sử dụng để kiểm soát logic toàn bộ giao diện người dùng của hệ thống, Back Officer sẽ tương tác với các như dropdowns, searchbar, button trong lúc tìm kiếm, phân công tuyến đường, phương tiện, nhân viên...
- BackOfficerManageView: Model thể hiện giao diện người dùng có các phương thức như: showWorkerList(): để hiển thị danh sách nhân viên, showWorKerInfo(): để hiện thị thông tin của nhân viên, hay showSelectWorker(): hiển thị nhân viên được chọn,...
### 2.4. Develop MVP
Nhóm sử dụng figma làm framework để vẽ UI. Workspace của nhóm: https://www.figma.com/file/kMaVVqk9uUcuh2ktasVn2Q/Untitled?node-id=103%3A878&t=ADBENGbisbK883IU-1.
![Giao diện trang chủ](/Picture/HomepageUI.png?raw=true)
## Task 3
### 3.1 Layered Architecture
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


## 3.2 Component Diagram
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
#### 4.1 Picture for the homepage

![Picture for the homepage](/Picture/Home_page.png)

### 4.2 Trong folder document chứa các folder con như: 
![Picture for document](/Picture/git-document.png) 
- Project_description: file mô tả tổng quát dự án
- Requirement_elicitation: chứa file mô tả task 1
- System_modeling: chứa file mô tả task 2
- Architecture_design:chứa file mô tả task 3

Dưới đây là ảnh mô tả đóng góp của các thành viên :
![Picture for document](/Picture/commit_history.png)
