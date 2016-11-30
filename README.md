# luis_adapter_service

This project is a subset of https://github.com/schwamster/docStack

## State

[![CircleCI](https://circleci.com/gh/schwamster/luis_adapter_service.svg?style=shield&circle-token)](https://circleci.com/gh/schwamster/luis_adapter_service)
[![Docker Automated buil](https://img.shields.io/docker/automated/jrottenberg/ffmpeg.svg)](https://hub.docker.com/r/schwamster/luis_adapter_service/)

## Getting started

To start either run directly with npm install && typings install && tsc
then  npm start

Or start within the defined docker container

debugging is configured in VS (just change the debug port when starting the container to 5858)

You will need the follwoing environment variables to run the service:
LuisAppId => what luis app (model) to use default is the msft example app with the cortana model
LUisSubscriptionKey => Your own subscription key from luis -> https://www.luis.ai/
