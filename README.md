# Pensieve full stack assignment

## Introduction

This is a full stack assignment for Pensieve. The goal is to build a simple web application that allows users to login/dignup and access the GPS devices data provided and stored in database.

## Tech stack
React, Node.js, Express, MySQL

## Remaining details will be updated later.


## How to run the application

### Prerequisites

- Node.js
- MySQL

### Steps

1. Clone the repository
2. Run `npm install` in the server, client directories
3. Create a database in MySQL and run the `init_DB.sql` file in the server directory
4. Create a `.env` file in the server directory and add the following environment variables
    - `PORT_NUMBER` 
    - `DB_HOST`
    - `USR`
    - `PASSWORD`
    - `DATABASE`
    - `DB_PORT`

5. Run `npm start` in the server directory
6. Run `npm start` in the client directory
7. Open `http://localhost:3000` in the browser

## Api Documentation
- Base Url `localhost:PORT_NUMBER`
- `get  /` Test Call Hello World
- `post  api/signup` Signup route
- `post  api/login` Login route
- `get  api/users` Results all available users
- `delete  api/user/:id` deletes user with id
- `get  api/gps` Results all available devices
- `get  api/gps/:id`  Results devices with DeviceId = id


## Functionalities
# Search
Searching in the search bar by DeviceType displays devices of that type

# Pagination
As mentioned pagination is also implimented

# Pie chart
Pie chart show the time of device at that location

## Manual Test case limitations
- Catching invalid email, password error
- Catching Unauthorised access
- Catching invalid token
- Catching server or database errors

and alerting them all.
