# rosannas-kids-api

# BACKEND Restaurant Passport ***https://foodie-passport.herokuapp.com/***

## Register User
***POST https://foodie-passport.herokuapp.com/rrp/auth/register***

**Requirements to register:**
- first Name
- last name
- email
- password

**Example sending a request to register a new user**

  *     {   
            "fName" : "Shannon",
            "lName" : "Reed",
            "email": " shannon@gmail.com
            "password" : "thisisagoodone"
        }

### Users Schema

| Fields     	| Data Type        	| Constraints                                         	|
|------------	|------------------	|-----------------------------------------------------	|
| id         	| integer:unsigned: | auto-increments: primary key: created by database: 	|
| fName 	    | string           	| required                                            	|
| lName 	    | string           	| required                                            	|                            
| email      	| string           	| required: unique:                                    	|
| password   	| string           	| required                                            	|



## Logs user in
***POST https://foodie-passport.herokuapp.com/rrp/auth/login***
**Returns login token when user logs in**

**Requirements to login:**
- existing email
- password

**Example sending a request to login**

  *     {   
            "email" : "shannon@gmail.com",
            "password" : "thisisagoodone"
        }

#ENDPOINTS

| Methods 	| Endpoints                         | Description                                      	|
|---------	|----------------------------------	|--------------------------------------------------	|
| POST    	| /rpp/auth/register               	| registers a new user                             	|
| POST    	| /rpp/auth/login                  	| logs in a user                                   	|
| GET     	| /rpp/users                       	| gets all users                                  	|
| GET     	| /rpp/users/id                    	| gets a user by user id                          	|
| PUT     	| /rpp/users/id                    	| updates a user infomation                         |




##CITIES
***GET all cities https://foodie-passport.herokuapp.com/rrp/cities***
***GET cities by id https://foodie-passport.herokuapp.com/rrp/cities/5***

##### ENDPOINTS

| Methods 	| Endpoints                         | Description                                      	|
|---------	|----------------------------------	|--------------------------------------------------	|
| GET     	| /rpp/cities                       | gets all cities                                  	|
| GET     	| /rpp/cities/id                    | gets a cities by city id                        	|

  *      [
            {
              "id": 1,
              "name": "Los Angeles",
              "state": "California"
            },
            {
              "id": 2,
              "name": "San Diego",
              "state": "California"
            },
            {
              "id": 3,
              "name": "San Jose",
              "state": "California"
            }
          ]



##RESTAURANTS
***GET all restaurants https://foodie-passport.herokuapp.com/rrp/restaurants***
**Returns a array of restaurants**
*     [
        {
          "id": 1,
          "name": "Searsucker",
          "address": "2259 SouthMount Blvd La Jolla CA 92037",
          "phone_number": 555555555,
          "city_id": 1
        },
        {
          "id": 2,
          "name": "P.F. Chang's",
          "address": "2259 SouthMount Blvd La Jolla CA 92037",
          "phone_number": 555555555,
          "city_id": 1
        },
        ]

***GET restaurants by id https://foodie-passport.herokuapp.com/rrp/restaurants/5***
***GET restaurants by id https://foodie-passport.herokuapp.com/rrp/restaurants/city/5***

##### ENDPOINTS

| Methods 	| Endpoints                         | Description                                      	|
|---------	|----------------------------------	|--------------------------------------------------	|
| GET     	| /rpp/restaurants                  | gets all restaurants                              |
| GET     	| /rpp/restaurants/id               | gets a restaurant by restaurant id                |
| GET     	| /rpp/restaurants/city/id          | gets a restaurant by city id                      |


