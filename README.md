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

#### 1. Pre-requirements to run the application locally,
 
- You should have the docker intalled. [Click here](https://docs.docker.com/get-docker/) to check how to install docker locally.

#### 2. Once you have installed the docker and it is running, clone the repo and run the below commands in the root folder.

- ``` docker build -t intugine-assignment .``` (This will run the docker file in the project and will create the docker image accordingly)
- ``` docker run -d -p 3000:3000 intugine-assignment ``` (This will run a docker container and serve the application locally on port 3000).


 