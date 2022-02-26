# Send-Email
Backend to send email Using  Nodemailer and Send Grid.

- Create a .env file in the root:
- To get email,password,host name, port number from Etheral. Go to https://ethereal.email/ and click Create Etheral Account
- For nodemailer create variables as shown below:
  ```
   HOST_NAME:YOUR ETHERAL USERNAME
   PORT_NUMBER: PORT NUMBER GIVEN BY ETHERAL
   USER: ETHERAL EMAIL ADDRESS
  PASS: eHTERAL PASSWORD
    
  ``` 
 
 - For sendgrid: Create your account from https://sendgrid.com/ and grab YOURAPIKEY and then
 ```
 SENDGRID_API_KEY=YOURAPIKEY
 ```
 
 - To run the project:
 ```
 npm install
 npm start
 ```
 
