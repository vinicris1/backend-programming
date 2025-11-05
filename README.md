# backend-programming
Repository created for the project related to the backend programming material

This is the backend server of the project
Group: Equipe 4
Participants: FELIPE GONÇALVES, CARLOS VINICIUS CRISTOFOLINI, GABRIEL BRAGATO ALBANAZ

Next steps: <br />
-> Create a frontend to communicate with the API created in this repository <br />
-> Upload this to a AWS EC2 instance and connect in this API via a local network, with this the database will be centralized and could be acessed from any computer any time <br />

Components paths and their utilities:
```
./controllers/controllers.js - CRUD functions calls
./database/database.js - Database inicialization and initial startups
./services/services.js - CRUD SQL functions
./banco.db - SQLITE3 database
./index.js - Server inicializations
./routes.js - Mapping from API calls to SQL functions in the database
```
In this video could be checked the API responses testing this code in a Windows environment: <br />
[![Veja a Demonstração Completa no YouTube](https://img.youtube.com/vi/LpwiVczVC9c&/maxresdefault.jpg)](https://www.youtube.com/watch?v=LpwiVczVC9c&)