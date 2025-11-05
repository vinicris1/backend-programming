# backend-programming
This repository was created for a project related to backend programming.

### About
This is the backend server of the project<br />

**Objective:** <br />
The objective of this project is to create a To-Do list that has a hosted server and can be accessed from anywhere. The initial expected usage is to centralize co-workers To-Do lists, but it can be improved to a To-Do list separated by user (this is outside of the current project scope, for now! :D)<br />

**Group:** Equipe 4<br />

**Participants:** FELIPE GONÇALVES, CARLOS VINICIUS CRISTOFOLINI, GABRIEL BRAGATO ALBANAZ<br />

### Next Steps
* Execute some tests in this server infrastructure and adjust the code.
* Create a frontend to communicate with the API created in this repository.
* Upload this to an AWS EC2 instance and connect to this API via a local network. With this, the database will be centralized and could be accessed from any computer anytime

Components paths and their utilities:
```
./controllers/controllers.js - CRUD functions calls
./database/database.js - Database inicialization and initial startups
./services/services.js - CRUD SQL functions
./banco.db - SQLITE3 database
./index.js - Server inicializations
./routes.js - Mapping from API calls to SQL functions in the database
```
In this [![video](https://img.youtube.com/vi/LpwiVczVC9c&/maxresdefault.jpg)](https://www.youtube.com/watch?v=LpwiVczVC9c&) could be checked the API responses testing this code in a Windows environment: <br />
