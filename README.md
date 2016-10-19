# luis_adapter_service

To start either run directly with npm install && typings install && tsc
then  npm start

Or start within the defined docker container

debugging is configured in VS (just change the debug port when starting the container to 5858)

You will need the follwoing environment variables to run the service:
LuisAppId => what luis app (model) to use default is the msft example app with the cortana model
LUisSubscriptionKey => Your own subscription key from luis -> https://www.luis.ai/
