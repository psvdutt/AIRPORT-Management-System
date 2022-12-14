# Airport Management System

Use Case
------------
An end2end Airport Management system that can be configured for a given airport (Web interface with supporting Backend APIs), that integrates Airline Flight Schedules, Gate Assignments, Baggage Claim assignment for arriving flights.


## Technology Stack
- Frontend: ReactJS
- Backend: Express, Node.js
- Database: RDS MySQL
- REST API: Express
- Cloud: AWS EC2

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


## Feature Set of this project:
1. 3 categories of users: Normal customers, Airline employees and Airport Employees. Users to access the System with role based authentication. 
2. Retrive flight arrivals and departures and gate assignments based on time selected by user. This information can be viewed by all kind of users.
3. Gate and Baggage Claim information will be displayed in the homepage which can viewed by all kind of users.
4. Airport Employees: They can enable or disable one or more gates for maintenance.
5. Airport Employees: They can assign Baggage Carousel number to Arriving flights and the system would prevent conflicting assignments.
6. Airline Employees: Add or update the schedule of flights belonging to their airlines.
7. Implemented a scheduler for Random Gate assignment for Arriving and Departing flights. I have designed this to prevent conflicting assignments.
8. Implemented a scheduler to remove gates and baggages automatically after the flights have been departed.


## UI screenshots:

![image](https://user-images.githubusercontent.com/100327244/205581511-d9e01455-3f8c-457e-92e5-0ca5a7009d0b.png)

![image](https://user-images.githubusercontent.com/100327244/205581538-d55a2235-8676-4d89-a908-f1ab698bdcf9.png)

![image](https://user-images.githubusercontent.com/100327244/205581559-6021e887-5da9-416f-a445-8c9dd9aaf984.png)

![image](https://user-images.githubusercontent.com/100327244/205581581-5d8c7319-cafe-4ddd-973d-ac77aa57d6b7.png)

![image](https://user-images.githubusercontent.com/100327244/205581605-e7d792df-dcbf-4e4d-b814-0ae0685e380a.png)

![image](https://user-images.githubusercontent.com/100327244/205581620-c5b63663-1156-4a80-8324-5f4a187a1fa1.png)


