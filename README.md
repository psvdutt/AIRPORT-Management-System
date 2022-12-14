# team-project-team-15
team-project-team-15 created by GitHub Classroom

Use Case
------------
Implement an end2end Airport Management system that can be configured for a given airport (Web interface or Mobile app interface with supporting Backend APIs), that integrates Airline Flight Schedules, Gate Assignments, Baggage Claim assignment for arriving flights.

## Team members:
 - Lalitha Ramya
 - Sai Vamsi Dutt Patibandla
 - Abhighna Kapilavai
 - Sourya Jammula

## Contributions:
- The entire Frontend has been equally divided and done by "Sourya" and "Lalitha "
- The entire Backend has been equally divided and done by "Vamsi " and "sourya "
- The architecture of the project and database design has been discussed with the entire team and finalized.
- Scrum leadership is done by "Abhighna"
- Other than that, Design diagrams has been done by "Abhighna"
- Entire Documentation has been done by "Abhighna"
- Cloud deployment has been done by "Abhighna" 
- UI wireframes has been taken care by "Abhighna"

## Scrum Task Board
### <a href="https://github.com/orgs/gopinathsjsu/projects/46/views/1">Project Board</a>
### <a href="https://docs.google.com/spreadsheets/d/1weY_GHhofU0jSJJvLD5lhG5FmmLjOBSH/edit?usp=share_link&ouid=100184353065011251171&rtpof=true&sd=true">Sprint Task Board & Burndown Chart</a>

## Project Journals
### <a href="https://docs.google.com/document/d/1cpyHVhgdqCCyZ_bRKQo0pA0WiOWOcQ3n/edit?usp=share_link&ouid=100184353065011251171&rtpof=true&sd=true">Entire Team Project Journal</a>

## Technology Stack
- Frontend: ReactJS
- Backend: Express, Node.js
- Database: RDS MySQL
- REST API: Express
- Cloud: AWS EC2

## XP values
###### Communication 
* We had weekly scrum calls over zoom to discuss the tasks and progress. 
* We communicated important updates regarding the project over whatsapp and gmail.
###### Feedback 
* We constantly had mid-week meetings to check the work that was done and gave constructive feedback if required. 
* We also conducted Sprint restrospective at the end of the week to discuss what went well, what could be improved.
###### Respect 
* We conducted our meetings, discussion professionally having respect towards each other.
* We values everyone's opinion in the project and setup a meeting to discuss whenever there is a conflict of opinion. 

## Architecture Diagram
![image](https://user-images.githubusercontent.com/100327244/205541570-c73a389d-c6b0-40d7-a613-b7bedfa472c7.png)

## DB Design
![image](https://user-images.githubusercontent.com/100327244/205581050-8497a1c5-cef7-4b89-a00b-b96936f572ba.png)

## Use Case Diagram
![image](https://user-images.githubusercontent.com/100327244/205581086-28bbe35a-327d-4867-b67b-6d3f93d9baa7.png)

## Component diagram
![image](https://user-images.githubusercontent.com/100327244/205581101-981a3a8a-aee3-411f-8c91-621b7fbafa4e.png)

## Deployment diagram
![image](https://user-images.githubusercontent.com/100327244/205541945-97b78fc9-9897-4b6a-a1fc-fbd911dc6fab.png)


## UI Wireframes
![image](https://user-images.githubusercontent.com/100327244/205582391-cd915c7f-d0f7-4f68-9226-67fc12cebe85.png)

![image](https://user-images.githubusercontent.com/100327244/205582405-97f3e1a4-2bc7-4a4c-b90c-4968d073f19f.png)

![image](https://user-images.githubusercontent.com/100327244/205582415-4b1f9ff0-df57-47c1-8cac-5ce747e13e1a.png)



## Scrum
- We used two-week sprints with scrum calls every week.

## Design Decision

- For Backend:
NodeJs:  Node.js can easily be used as a server-side proxy, handling a large number of simultaneous connections in a non-blocking manner. It's particularly useful for proxying different services with varying response times or gathering data from multiple sources.

- For Frontend: 
React : We used React to simplify ui/ux development by creating application components. We were able to improve code maintainability and refactoring by dividing entire pages into different components.

- For Database:
Amazon RDS: We chose RDS because it is simple to set up and use, and it provides excellent support for database synchronization, associations, transactions, and migrations while reducing development time and preventing SQL injections. 

## Feature Set of our project:
1. 3 categories of users: Normal customers, Airline employees and Airport Employees. Users to access the System with role based authentication. 
2. Retrive flight arrivals and departures and gate assignments based on time selected by user. This information can be viewed by all kind of users.
3. Gate and Baggage Claim information will be displayed in the homepage which can viewed by all kind of users.
4. Airport Employees: They can enable or disable one or more gates for maintenance.
5. Airport Employees: They can assign Baggage Carousel number to Arriving flights and the system would prevent conflicting assignments.
6. Airline Employees: Add or update the schedule of flights belonging to their airlines.
7. Implemented a scheduler for Random Gate assignment for Arriving and Departing flights. We have designed this to prevent conflicting assignments.
8. Implemented a scheduler to remove gates and baggages automatically after the flights have been departed.


## Our Project UI screenshots:
![image](https://user-images.githubusercontent.com/100327244/205581483-cde0acbf-5d11-42e3-bfb1-93451618518b.png)

![image](https://user-images.githubusercontent.com/100327244/205581511-d9e01455-3f8c-457e-92e5-0ca5a7009d0b.png)

![image](https://user-images.githubusercontent.com/100327244/205581538-d55a2235-8676-4d89-a908-f1ab698bdcf9.png)

![image](https://user-images.githubusercontent.com/100327244/205581559-6021e887-5da9-416f-a445-8c9dd9aaf984.png)

![image](https://user-images.githubusercontent.com/100327244/205581581-5d8c7319-cafe-4ddd-973d-ac77aa57d6b7.png)

![image](https://user-images.githubusercontent.com/100327244/205581605-e7d792df-dcbf-4e4d-b814-0ae0685e380a.png)

![image](https://user-images.githubusercontent.com/100327244/205581620-c5b63663-1156-4a80-8324-5f4a187a1fa1.png)

![image](https://user-images.githubusercontent.com/100327244/205581643-68b53714-8d65-4d3e-b8aa-9d110b530886.png)


