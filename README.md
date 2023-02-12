# CEGOS SOFTWARE DEVELOPER TEST


## FIRST TASK

- [x] Develop an API, using PHP, that receives an encrypted comma-separated variable info in the URL.

The variable must be decrypted, separated by comma into an array and finally stored in the database.

### USEFUL INFORMATION:

*The comma-separated variable you will receive, which you must decrypt, is encrypted using Hexadecimal notation.*

*In case of any undefined variables in the array, badly-formated variables in the array or if the array doesn't contain the correct amount of variables, you must not write to the database.*

  

## SECOND TASK

- [x] Create a simple web page to display a report of the information received from your API. This report must have the possibility to apply filters and to export. You can use an existing JavaScript library or create your own HTML table and export.

USEFUL INFORMATION:

*The user must be able to filter the table by InternalClient, Client, Module, Language, Date and Mobile
The table/report must show all columns except the track column.
When exporting the table, the export must keep the same filters as the table.
You may create the web page as you like. With any type of CSS you like. It can also be just a blank page with a working table and export. It's your choice.*

  
CEGOS_CHALLENGE
```bash
├── api
│   ├── getData.php
│   ├── insertData.php
├── img
├── javascript
│   ├── index.js
├── dashboard.html
├── index.php
├── README.md
└── cegos_db.sql
```

### Steps to run application

1. Import cegos_db.sql into your DBMS.
2. Replace user name and password credencials in gerData.php and insertData.php files.
3. Open Apllication Folder in XAMPP and move CEGOS_CHALLENGE folder into htdocs folder.
4. Open http://localhost/cegos_challenge/index.php?track=434c4855423b44533b747669643030363b75733b687474703a2f2f6c6f63616c686f73743b313932303b313038303b4368726f6d653b3130342e302e302e303b66616c73653b66616c73653b57696e646f77733b31303b74727565


### Links to test application: 
   - http://localhost/cegos_challenge/index.php?track=434c4855423b44533b747669643030363b75733b687474703a2f2f6c6f63616c686f73743b313932303b313038303b4368726f6d653b3130342e302e302e303b66616c73653b66616c73653b57696e646f77733b31303b74727565
   - http://localhost/cegos_challenge/index.php?track=434c4855423b44533b6d683031373b66723b687474703a2f2f6c6f63616c686f73743b313932303b313038303b46697265666f783b3130342e302e323b66616c73653b66616c73653b57696e646f77733b31303b74727565
   - http://localhost/cegos_challenge/index.php?track=434c4855423b44533b6d66683030343b70743b687474703a2f2f6c6f63616c686f73743b313038303b3732303b5361666172693b31352e353b66616c73653b66616c73653b57696e646f77733b31303b74727565
   - http://localhost/cegos_challenge/index.php?track=434c4855423b44533b6d683134305f613b66723b687474703a2f2f6c6f63616c686f73743b313434303b3930303b5361666172693b31332e302e323b747275653b66616c73653b4d6163204f5320583b31305f31353b74727565
   - http://localhost/cegos_challenge/index.php?track=756e646566696e65643b756e646566696e65643b6d683135303b66723b687474703a2f2f6c6f63616c686f73743b313533363b3836343b4368726f6d653b3130343b66616c73653b66616c73653b57696e646f77733b31303b74727565
   - http://localhost/cegos_challenge/index.php?track=434c4855423b44533b747669643030363b75733b687474703a2f2f6c6f63616c686f73743b313932303b313038303b4368726f6d653b3130342e302e302e303b66616c73653b66616c73653b57696e646f7773
   - http://localhost/cegos_challenge/index.php?track=434c4855423b44533b6d653030323b64653b687474703a2f2f6c6f63616c686f73743b3431343b3839363b5361666172693b31342e312e323b66616c73653b747275653b694f533b31342e382e313b74727565
   - http://localhost/cegos_challenge/index.php?track=434c4855423b44533b6d733030373b69743b687474703a2f2f6c6f63616c686f73743b3431343b3839363b4368726f6d653b3130342e302e353131322e39373b66616c73653b747275653b416e64726f69643b31323b74727565

### Link to deployed application 
https://personalwebsite.popadiukmaria.dev/cegos_challenge/dashboard.html

