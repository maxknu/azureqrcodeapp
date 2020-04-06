# Node.js QR Code Generator, hosted on Azure App Service

This sample demonstrates how to create a QR Code image generator which returns a PNG image using node js. Using nodes basic app and qr-image NPM library.

## DEMO
https://qrcodeapp20.azurewebsites.net/?size=5&text=www.bing.com&token=jkasjhdasgj764ghjdfg7964hjdv78  

## Requirements
- Node JS v10+ nodejs.org with NPM dependency manager or Yarn
- Can be hosted on any webserver with node js support

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/maxknu/azureqrcodeapp

# 2. Enter your newly-cloned folder azureqrcodeapp
cd azureqrcodeapp

# 3. Install dependencies. 
npm install

# 4. Create .env file inside the root folder with SECRET_TOKEN, can be any string and number
SECRET_TOKEN=yoursupersecrettokencodefromenv

# 5. Run npm command to start
npm run start

# 5. Navigate to
http://localhost:3000

# 6. Try generating a code , navigate to
http://localhost:1337/?size=6&text=www.bing.com&token=yoursupersecrettokencodefromenv
```

## For deployment on Azure free App Service
Use tutorial from docs.microsoft to deploy to Azure App Service
[App Service Web Get Started Nodejs](https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-nodejs)
