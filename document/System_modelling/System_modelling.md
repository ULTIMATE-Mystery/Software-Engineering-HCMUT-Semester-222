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
