# INTUGINE ASSIGNMENT 
 
---
 
Welcome to INTUGINE ASSIGNMENT UI repo. This repository uses [React](https://react.dev/) as front-end/UI.
 
### Getting Started
 
---
### Steps to run the application locally.

#### 1. Prerequirements to run the application locally,
 
- You should have node and npm installed. [Click here](https://nodejs.org/en) to check how to install node locally.

#### 2. Once you have installed the node and npm, clone the repo and run the below commands in the root folder.

- ``` npm i ``` (This will intall the project dependencies)
- ``` npm start ``` (This will start the local server and server the application on port 3000).


### Steps to run the application in a docker container.

 #### 1. Prerequirements to run the application locally,
 
- You should have the docker intalled. [Click here](https://docs.docker.com/get-docker/) to check how to install docker locally.

#### 2. Once you have installed the docker and it is running, clone the repo and run the below commands in the root folder.

- ``` docker build -t intugine-assignment .``` (This will run the docker file in the project and will create the docker image accordingly)
- ``` docker run -d -p 3000:3000 intugine-assignment ``` (This will run a docker container and serve the application locally on port 3000).


 
### Things Achieved in the Project as per the shared requirement
 
---
 
1. Replicate the Design. --> ==Done==
2. Calculate the counter values from the sample data. --> ==Done==
3. Calculate the TAT Status based on the following --> ==Done==
a. Ontime - If the etaDays is lesser than or equal to the time taken for trip to run.
(TripEndTime will be empty in case of not delivered, calculate based on lastPingTime for these cases) --> ==Done==
b. Delayed - If the etaDays is grater than the time taken for trip to run.--> ==Done==
c. Others - If eta days is 0/negative.--> ==Done==
4. Table View --> ==Done==
a. Table columns are sortable --> ==Done==
b. On selecting different status counters show trips of the selected status. --> ==Done==
c. Delivered counter will be selected by default. --> ==Done==
5. Add Trip Form --> ==Done==
a. On submission of the form add the trip to the sample data[2] that you are storing. --> ==Done==
b. Add validations to the form. --> ==Done==
6. Edit Trip Form. --> ==Done==
a. Trip status can be updated in this form. --> ==Done==
b. Status flow would be Booked -> In Transit -> Reached Destination -> Delivered. This will update currenStatus and currentStatusCode. --> ==Done==
c. Status Time field will update lastPingTime and if the trip has been delivered then update the tripEndTime as well. --> ==Done==
 

### Things I have implemented as per my understanding as it wasn't clear in the requirement document
 
---
 
 1. The update status will only be displayed if user selects only one trip, as it wasn't clear in the document whether user should be able to update multiple trips or not toghether.
 2. I have disabled the trips with the status Delivered as there is no further status to update after the trip is delivered.
 3. In the Add Trip modal, I have provided the unique default Id as the Id should always be unique and made the Trip Id field disabled as user shouldn't be able to add the same Ids.
 4. In the Add Trip, Phone Number length should always be 10 digits.
 . 
 ---


> Note:Please reach out to me in  case of any questions or concerns.