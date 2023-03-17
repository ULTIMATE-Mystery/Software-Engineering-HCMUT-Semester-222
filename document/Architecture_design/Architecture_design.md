## Task 3
### Task 3.1 
####  Architectural approach: MVC combined with Client-Server
The architecture design that we decide to use is MVC (Model-View-Controller) pattern. 
The MVC model contains three essential components:
- Model: contains the data logic represented by database (User Database, Order Database), can be modified by the Controller.
- View: consist of the user interface where users can view data from the Model and interact with the system through Controller (end-users UI and admin UI).
- Controller: acts as the brain of the model, it processes input events (user interactions), select View to display and manipulate Model data if necessary.

#### Diagram for Architectural approach

![Diagram for architectural approach](/Picture/Task%203.1.png?raw=true)

We choose MVC model due to the following reasons:
- First, MVC models support rapid and parallel development - Our system is divided into three separate parts which can be implemented independently.
- Second, the MVC model provides multiple views - Our restaurant site must display various forms of information which can be represented by different views from the model.
- Third, the MVC model is convenient for maintenance and modification - Our system demands dynamic changes. For example, adjustments in View do not affect the Model and Controller module.
- Fourth, the MVC model supports TTD (test-driven development) – Our system contains multiple features and components. As MVC is defined and structured properly, it enhances the testability of the whole system.

#### Architectural description
Our application architecture is based on an MVC model inside a Client-Server model. 
First, on the Client-side, the users of the system such as collectors, janitors and back officers will use their phone, laptop or computer to connect to the system through the browser of their devices. Through the internet, the users will interact with the interface of the website and send their request to the server. The server side will respond to the request through a MVC architecture. Moreover, if the request needs any data, the server-side connects to the database through a database server to receive any data that the users request. On the Server-side, we use MVC design patterns to illustrate our architecture design. 
Our design will contain 3 components as below:

- Controller: manages user interaction and passes these interactions to the View and the Model. Therefore, in our application, its main functions are mapping user actions to model updates and selecting views for displaying. 
- Model: is the central component of the pattern that directly manages the data, logic and rules of the application. 
- View: defines and manages how the data is presented to the user. That is, in our application, used to display their daily tasks, vehicle information, etc.

### Task 3.2
#### Implementation diagram for Task Assignment module
The diagram contains 1 application (Client), 1 main components (Server) and 1 component for calling Google API:
- Client: contains the **Browser** which will receive the requests from **Server** or send requests to **Server**.
- Server: consists of models interacting with database, view and controller parts.
- Google API: to create routes from MCPs

![Implementation diagram for Task Assignment module](/Picture/Task%203.2.png?raw=true)

#### Diagram flow
When users assign new task. Browser requests the assign form from the Task controller. Task controller gathers info from the models and manages to make Task view display the form (and lists when requested). In the assigning process, Task view will update and display new data which are set and gotten by Task model. Finally, when MCPs are chosen, the controller will request routes from Google API for the user to pick. 
