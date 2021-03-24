# HouseHub Checkout Service

> Created the checkout microservice for a vacation listing web application using React and Styled Components

## Related Projects

  - https://github.com/the-casuals/casual-checkout-service
  - https://github.com/the-casuals/photo_carousel
  - https://github.com/the-casuals/reviews
  - https://github.com/the-casuals/photo_gallery

## Table of Contents
1. [Motivation](#Demo)
1. [Demo](#Demo)
1. [Tech](#Tech)
1. [Features](#Features)
1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Motivation
> This is the checkout micro service for a property rental detail page allowing a user to browse available dates using a calendar, specify a check-in and check-out date, specify a number of guests, and receive information regarding pricing for their specifications. It is connected through a reverse proxy server to the photo gallery, user review, and similar listing carousel microservices. Together they allow users to browse and reserve different properties.
> 
## Demo
![Demonstration Gif](https://remy-sdc-images.s3-us-west-2.amazonaws.com/final_605a84ebca730300837746b2_476617.gif)
## Tech
* Front End
  * React
  * Styled Components
  * Webpack
  * Enzyme
  * Jest
* Backend
  * MongoDB
  * Express
  * Docker
  * AWS EC2

## Features
* Calendar Carousel Modal built using React and Styled Components that shows available dates and interactively highlights and makes unavailable dates based on checkin or checkout specified
* Guest Input menu for users to specify number and age of people in party
* Pricing feature outputs nightly rental price as well as additional fees to user 

## Usage

> To run webpack, change webpack config mode to development or production according to needs then run
  npm run react-dev
> To start local server run npm start
> To seed database run npm run seed

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

