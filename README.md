# patientDirect-backend

## About
  -patientDirect-backend is intended for handling user-provider relationship within patientDirect-frontend. Providers are able to manage templates which may be utilized to update patient encounter histories that are only able to be viewed through authorized routes.

### Description
  - DB has 6 tables.
  - Providers are allowed to signup and login
  - Providers Authorized routes include:
    - Create, Update, and Delete History of Present Illness (HPI) templates
    - Update Review of Systems (ROS) templates
    - Get Encounter/Patient information including History
  - Patients are allowed to:
    - Check in
    - Update HPI and ROS

### ERD

  ![erd](./src/db/patientDirect_ERD.png)

### Routes

  - Header
    - Authorization is sent as `Bearer` token
    - Content-Type: application/json


##### User routes

| Purpose | Request Type | Route | body | Authorization |
| --- | --- | --- | --- | --- |
| user signup | `post` | https://patient-direct-backend.herokuapp.com/api/users/signup |  {first_name, last_name, email, password} | - |
| user login | `post` | https://patient-direct-backend.herokuapp.com/api/users/login  | {email, password} | required |
| verify token | `get` | https://patient-direct-backend.herokuapp.com/api/users/verify  | - | required |

##### Encounter routes

| Purpose | Request Type | Route | body | Authorization |
| --- | --- | --- | --- | --- |
| get all encounters | `get` | https://patient-direct-backend.herokuapp.com/api/encounters | - | required |
| get encounters by date | `get` | https://patient-direct-backend.herokuapp.com/api/encounters/:date | - | required |
| get one encounter | `get` | https://patient-direct-backend.herokuapp.com/api/encounters/:date/:encounter_id | - | required |

##### Template routes

| Purpose | Request Type | Route | body | Authorization |
| --- | --- | --- | --- | --- |
| get CC list (cc from Hpi Templates)| `get` | https://patient-direct-backend.herokuapp.com/api/templates/:doctor_id/hpi | - | - |
| get HPI template | `get` | https://patient-direct-backend.herokuapp.com/api/templates/:doctor_id/hpi/:cc | - | - |
| get ROS template | `get` | https://patient-direct-backend.herokuapp.com/api/templates/:doctor_id/ros | - | - |
| update HPI template | `patch` | https://patient-direct-backend.herokuapp.com/api/templates/:doctor_id/hpi/:cc | { template:{} } | required |
| update ROS template | `patch` | https://patient-direct-backend.herokuapp.com/api/templates/:doctor_id/ros | { template:{} } | required |
| create Hpi template | `post` | https://patient-direct-backend.herokuapp.com/api/templates/:doctor_id/hpi | { cc, doctor_id, template:{} } | required |
| delete Hpi template | `delete` | https://patient-direct-backend.herokuapp.com/api/templates/:doctor_id/hpi/:cc | - | required |

##### Patients routes

| Purpose | Request Type | Route | body | Authorization |
| --- | --- | --- | --- | --- |
| check in | `patch` | https://patient-direct-backend.herokuapp.com/api/patients/:first_name/:last_name/:dob/:today | - | - |
| update patient history | `patch` | https://patient-direct-backend.herokuapp.com/api/patients/:patient_id/encounters/:encounter_id | { hx:{} } | - |
| get full encounter information | `get` | https://patient-direct-backend.herokuapp.com/api/patients/:patient_id/encounters/:encounter_id | - | (will be secured) |

#### Testing with Postman:

{
	"info": {
		"_postman_id": "ab14f780-793a-4168-b257-93910cc55ba5",
		"name": "patientDirect",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "sign up - works",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\"first_name\":\"chris\",\n\"last_name\":\"peterson\",\n\"email\":\"crpete123456@gmail.com\",\n\"password\":\"123456\"\n}"
				},
				"url": {
					"raw": "http://localhost:3200/api/users/signup",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3200",
					"path": [
						"api",
						"users",
						"signup"
					]
				}
			},
			"response": []
		},
		{
			"name": "login - works",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\"email\":\"crpete23@gmail.com\",\n\"password\":\"password\"\n}"
				},
				"url": {
					"raw": "http://localhost:3200/api/users/login",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3200",
					"path": [
						"api",
						"users",
						"login"
					]
				}
			},
			"response": []
		},
		{
			"name": "getPatients_forDoc - works",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjF9LCJpYXQiOjE1MzY4NjY5MzgsImV4cCI6MTUzNzczMDkzOH0.fkKOcoeuvFhC_xKS33czS4fJuCHfXndRHh_PEC8HgHk",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"body": {},
				"url": {
					"raw": "http://localhost:3200/api/patients/",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3200",
					"path": [
						"api",
						"patients",
						""
					]
				}
			},
			"response": []
		},
		{
			"name": "getEncounters - works",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjF9LCJpYXQiOjE1Mzg0MTE3OTEsImV4cCI6MTUzOTI3NTc5MX0.OPVbSjZItsCkguJrEh7U6d5POWT__knyDocE2JzcFo8",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"body": {},
				"url": {
					"raw": "http://localhost:3200/api/patients/1/encounters",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3200",
					"path": [
						"api",
						"patients",
						"1",
						"encounters"
					]
				}
			},
			"response": []
		},
		{
			"name": "getEncounter - works",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjF9LCJpYXQiOjE1MzY4NjY5MzgsImV4cCI6MTUzNzczMDkzOH0.fkKOcoeuvFhC_xKS33czS4fJuCHfXndRHh_PEC8HgHk",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"body": {},
				"url": {
					"raw": "http://localhost:3200/api/patients/1/encounters/1",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3200",
					"path": [
						"api",
						"patients",
						"1",
						"encounters",
						"1"
					]
				}
			},
			"response": []
		},
		{
			"name": "createPatient - works",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjF9LCJpYXQiOjE1MzY3OTQ1NTIsImV4cCI6MTUzNzY1ODU1Mn0.V5cH-FPLZrRPJLnUsj6H_QX0Ib8-6YWcWk93FRDdyk4",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"first_name\":\"Bob\",\n  \"last_name\":\"D\",\n  \"dob\":\"01/01/2001\",\n  \"sex\":\"female\"\n}"
				},
				"url": {
					"raw": "http://localhost:3200/api/patients/",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3200",
					"path": [
						"api",
						"patients",
						""
					]
				}
			},
			"response": []
		},
		{
			"name": "updatePatient - works",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjF9LCJpYXQiOjE1MzY3OTQ1NTIsImV4cCI6MTUzNzY1ODU1Mn0.V5cH-FPLZrRPJLnUsj6H_QX0Ib8-6YWcWk93FRDdyk4",
							"type": "string"
						}
					]
				},
				"method": "PATCH",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "            {\n                \"first_name\": \"Joey\",\n                \"last_name\": \"Bobby\",\n                \"dob\": \"01/01/2011\"\n            }"
				},
				"url": {
					"raw": "http://localhost:3200/api/patients/4",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3200",
					"path": [
						"api",
						"patients",
						"4"
					]
				}
			},
			"response": []
		},
		{
			"name": "deletePatient - works",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjF9LCJpYXQiOjE1MzY3OTQ1NTIsImV4cCI6MTUzNzY1ODU1Mn0.V5cH-FPLZrRPJLnUsj6H_QX0Ib8-6YWcWk93FRDdyk4",
							"type": "string"
						}
					]
				},
				"method": "DELETE",
				"header": [],
				"body": {},
				"url": {
					"raw": "http://localhost:3200/api/patients/4",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3200",
					"path": [
						"api",
						"patients",
						"4"
					]
				}
			},
			"response": []
		},
		{
			"name": "addPtToDoc - works",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjF9LCJpYXQiOjE1MzY3OTQ1NTIsImV4cCI6MTUzNzY1ODU1Mn0.V5cH-FPLZrRPJLnUsj6H_QX0Ib8-6YWcWk93FRDdyk4",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"doctor_id\":\"2\"\n}"
				},
				"url": {
					"raw": "http://localhost:3200/api/patients/5",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3200",
					"path": [
						"api",
						"patients",
						"5"
					]
				}
			},
			"response": []
		},
		{
			"name": "createEncounter - works",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjF9LCJpYXQiOjE1MzY3OTQ1NTIsImV4cCI6MTUzNzY1ODU1Mn0.V5cH-FPLZrRPJLnUsj6H_QX0Ib8-6YWcWk93FRDdyk4",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"date\":\"09/13/2018\",\n\t\"time\":\"10:00AM\"\n}"
				},
				"url": {
					"raw": "http://localhost:3200/api/patients/1/encounters",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3200",
					"path": [
						"api",
						"patients",
						"1",
						"encounters"
					]
				}
			},
			"response": []
		},
		{
			"name": "updateEncounter - works",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjF9LCJpYXQiOjE1Mzg0MTE3OTEsImV4cCI6MTUzOTI3NTc5MX0.OPVbSjZItsCkguJrEh7U6d5POWT__knyDocE2JzcFo8",
							"type": "string"
						}
					]
				},
				"method": "PATCH",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"date\":\"2018/10/02\",\n\t\"time\":\"9:30 am\",\n\t\"hx\": {\n\t\t\"hpi\": {}\n\t}\n}"
				},
				"url": {
					"raw": "http://localhost:3200/api/patients/1/encounters/1",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3200",
					"path": [
						"api",
						"patients",
						"1",
						"encounters",
						"1"
					]
				}
			},
			"response": []
		},
		{
			"name": "deleteEncounter - works",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjF9LCJpYXQiOjE1MzY3OTQ1NTIsImV4cCI6MTUzNzY1ODU1Mn0.V5cH-FPLZrRPJLnUsj6H_QX0Ib8-6YWcWk93FRDdyk4",
							"type": "string"
						}
					]
				},
				"method": "DELETE",
				"header": [],
				"body": {},
				"url": {
					"raw": "http://localhost:3200/api/patients/1/encounters/3",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3200",
					"path": [
						"api",
						"patients",
						"1",
						"encounters",
						"3"
					]
				}
			},
			"response": []
		},
		{
			"name": "verify - works",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjF9LCJpYXQiOjE1MzcyMDQwOTQsImV4cCI6MTUzODA2ODA5NH0.YV1G9tFFuB96onQsvIdB9n0kIX5ScoLLyQPMT5Vm1Vk",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"body": {},
				"url": {
					"raw": "http://localhost:3200/api/users/verify",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3200",
					"path": [
						"api",
						"users",
						"verify"
					]
				}
			},
			"response": []
		},
		{
			"name": "getAllEncounters(for signed in doc) - works",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjF9LCJpYXQiOjE1MzcyMzA0NTUsImV4cCI6MTUzODA5NDQ1NX0.Vcbe22VseRvvRyVerzdlSWSEyJbzBCUBc4NPF6059OU",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"body": {},
				"url": {
					"raw": "http://localhost:3200/api/encounters",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3200",
					"path": [
						"api",
						"encounters"
					]
				}
			},
			"response": []
		},
		{
			"name": "getAllEncountersByDate(for signed in doc) - works",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjF9LCJpYXQiOjE1MzcyMzA0NTUsImV4cCI6MTUzODA5NDQ1NX0.Vcbe22VseRvvRyVerzdlSWSEyJbzBCUBc4NPF6059OU",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"body": {},
				"url": {
					"raw": "http://localhost:3200/api/encounters/20180919/",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3200",
					"path": [
						"api",
						"encounters",
						"20180919",
						""
					]
				}
			},
			"response": []
		},
		{
			"name": "checkIn",
			"request": {
				"method": "PATCH",
				"header": [],
				"body": {},
				"url": {
					"raw": "http://localhost:3200/api/patients/Chris/Peterson/19920412/20181002",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3200",
					"path": [
						"api",
						"patients",
						"Chris",
						"Peterson",
						"19920412",
						"20181002"
					]
				}
			},
			"response": []
		},
		{
			"name": "getHpiTemplate -- works",
			"request": {
				"method": "GET",
				"header": [],
				"body": {},
				"url": {
					"raw": "http://localhost:3200/api/templates/1/hpi/chest pain",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3200",
					"path": [
						"api",
						"templates",
						"1",
						"hpi",
						"chest pain"
					]
				}
			},
			"response": []
		},
		{
			"name": "getHpiTemplateCCs",
			"request": {
				"method": "GET",
				"header": [],
				"body": {},
				"url": {
					"raw": "http://localhost:3200/api/templates/1/hpi",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3200",
					"path": [
						"api",
						"templates",
						"1",
						"hpi"
					]
				}
			},
			"response": []
		},
		{
			"name": "getRosTemplate",
			"request": {
				"method": "GET",
				"header": [],
				"body": {},
				"url": {
					"raw": "http://localhost:3200/api/templates/1/ros",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3200",
					"path": [
						"api",
						"templates",
						"1",
						"ros"
					]
				}
			},
			"response": []
		},
		{
			"name": "createHpiTemplate - works",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjF9LCJpYXQiOjE1Mzg0MTM4NzUsImV4cCI6MTUzOTI3Nzg3NX0.8lPDcdFwQmSNfJFWZ5f-imx8zJN6Be5iubbeUyCzPdg",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"cc\": \"headache\", \"doctor_id\": 1, \"template\": {\n  \"quality\": {\n    \"type\": \"radio\",\n    \"choices\": [\"sharp\", \"dull\", \"pressure\", \"ache\"],\n    \"label\": \"What quality best describes your abdominal pain?\",\n    \"other\": true\n  }\n}\n}"
				},
				"url": {
					"raw": "http://localhost:3200/api/templates/1/hpi",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3200",
					"path": [
						"api",
						"templates",
						"1",
						"hpi"
					]
				}
			},
			"response": []
		},
		{
			"name": "createRosTemplate - works",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjF9LCJpYXQiOjE1MzgwODA5OTcsImV4cCI6MTUzODk0NDk5N30.OVyE0I-gdzT8yWWE8ekC5CguERXXMxvcQtq9OVLLxu4",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\"doctor_id\": 3, \"template\":\n          {\n        }\n        }"
				},
				"url": {
					"raw": "http://localhost:3200/api/templates/1/ros",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3200",
					"path": [
						"api",
						"templates",
						"1",
						"ros"
					]
				}
			},
			"response": []
		},
		{
			"name": "updateHpiTemplate - works",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjF9LCJpYXQiOjE1MzgwODA5OTcsImV4cCI6MTUzODk0NDk5N30.OVyE0I-gdzT8yWWE8ekC5CguERXXMxvcQtq9OVLLxu4",
							"type": "string"
						}
					]
				},
				"method": "PATCH",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\"template\": {\n        \"quality\": {\n            \"type\": \"radio\",\n            \"choices\": [\n                \"sharp\",\n                \"dull\",\n                \"pressure\",\n                \"ache\"\n            ],\n            \"label\": \"What quality best describes your chest pain?\",\n            \"other\": true\n        },\n        \"timing\": {\n            \"type\": \"radio\",\n            \"choices\": [\n                \"constant\",\n                \"intermittent\",\n                \"waxing and waning\"\n            ],\n            \"label\": \"What is the frequency/ timing of your chest pain?\",\n            \"other\": true\n        },\n        \"severity\": {\n            \"type\": \"radio\",\n            \"choices\": [\n                \"1\",\n                \"2\",\n                \"3\",\n                \"4\",\n                \"5\",\n                \"6\",\n                \"7\",\n                \"8\",\n                \"9\",\n                \"10\"\n            ],\n            \"label\": \"What is the severity of your chest pain?\",\n            \"other\": false\n        },\n        \"duration\": {\n            \"type\": \"radio\",\n            \"choices\": [\n                \"less than a minute\",\n                \"several minutes\",\n                \"one hour\",\n                \"several hours\",\n                \"one day\",\n                \"several days\",\n                \"several weeks\",\n                \"several months\"\n            ],\n            \"label\": \"When symptoms are present, how long do they usually last?\",\n            \"other\": true\n        },\n        \"location\": {\n            \"type\": \"radio\",\n            \"choices\": [\n                \"central chest\",\n                \"left chest\",\n                \"right chest\",\n                \"left shoulder/arm\",\n                \"right shoulder/arm\"\n            ],\n            \"label\": \"What is the location of your chest pain?\",\n            \"other\": true\n        },\n        \"alleviatingFactors\": {\n            \"type\": \"check\",\n            \"choices\": [\n                \"nitroglycerin\",\n                \"rest\",\n                \"stretching or massaging the area\",\n                \"exertion\",\n                \"pain medications\"\n            ],\n            \"label\": \"What, if anything, makes your symptoms better? (select all that apply)\"\n        },\n        \"exacerbatingFactors\": {\n            \"type\": \"check\",\n            \"choices\": [\n                \"movement\",\n                \"exertion\",\n                \"deep breathing\",\n                \"eating/drinking\"\n            ],\n            \"label\": \"What, if anything, induces or makes your symptoms worse? (select all that apply)\"\n        },\n        \"associatedSx\": {\n            \"type\": \"check\",\n            \"choices\": [\n                \"shortness of breath\",\n                \"diaphoresis (sweating)\",\n                \"nausea\",\n                \"vomitting\",\n                \"fatigue\",\n                \"dizziness/light headedness\"\n            ],\n            \"label\": \"Have you experienced any other symptoms that you feel are related to your chest pain? (select all that apply)\"\n        },\n        \"context\": {\n            \"type\": \"write\",\n            \"label\": \"Briefly describe the context of your chest pain\"\n        }\n    }\n}"
				},
				"url": {
					"raw": "http://localhost:3200/api/templates/1/hpi/chest pain",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3200",
					"path": [
						"api",
						"templates",
						"1",
						"hpi",
						"chest pain"
					]
				}
			},
			"response": []
		},
		{
			"name": "updateRosTemplate",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjF9LCJpYXQiOjE1MzgwODA5OTcsImV4cCI6MTUzODk0NDk5N30.OVyE0I-gdzT8yWWE8ekC5CguERXXMxvcQtq9OVLLxu4",
							"type": "string"
						}
					]
				},
				"method": "PATCH",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"template\": {\n        \"constitutional\": {\n            \"fatigue\": false,\n            \"fever\": false,\n            \"unintentionalWeightLoss\": false\n        },\n        \"eyes\": {\n            \"eyePain\": false,\n            \"blurryVision\": false\n        },\n        \"ENT\": {\n            \"soreThroat\": false,\n            \"epistaxis\": false\n        },\n        \"Cardiovascular\": {\n            \"cp\": false,\n            \"palpitations\": false,\n            \"dyspnea\": false\n        },\n        \"Respiratory\": {\n            \"sob\": false,\n            \"cough\": false\n        },\n        \"GI\": {\n            \"nausea\": false,\n            \"vomiting\": false,\n            \"hematochezia\": false,\n            \"melena\": false\n        },\n        \"GU\": {\n            \"hematuria\": false\n        },\n        \"Musc\": {\n            \"musclePain\": false,\n            \"jointPain\": false\n        },\n        \"Neuro\": {\n            \"hxCVA\": false,\n            \"hxTIA\": false,\n            \"headache\": false,\n            \"lightheadedness\": false\n        },\n        \"Endocrine\": {\n            \"dm\": false\n        },\n        \"Hematologic\": {\n            \"anticoagulants\": false\n        }\n    }\n}"
				},
				"url": {
					"raw": "http://localhost:3200/api/templates/1/ros",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3200",
					"path": [
						"api",
						"templates",
						"1",
						"ros"
					]
				}
			},
			"response": []
		}
	]
}

## Installation

1. Fork and/or Clone this repository

1. `npm install`

1. `mv .env.sample .env`

1. `createdb patient-direct-backend_dev && createdb patient-direct-backend_test`
