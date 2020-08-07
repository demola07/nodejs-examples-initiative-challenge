# Node.js Examples Initiative Challenge

> **The Node.js Examples Initiative is looking for a qualified mentee to join the initiative.**

## This challenge will test your ability to:

1. Write code in Node.js beyond "Hello World"
2. Write tests
3. Use Bent to fetched data from an API and serve JSON data
4. Use Handlebars to serve template files
5. Add the license to `package.json` and include the license
6. Follow guidelines and instructions

## Requirements:

- Use the API [here](https://nodejs.org/dist/index.json)
- Use bent for all requests
- Licensed as MIT
  - In Package.json
  - License file included

## The Challenge

### Use Express.js to create three (3) routes that consume an API in the following ways:

- Routes

  1. `GET - /dependencies`

     This will retrieve all dependencies from the package.json and render them using handlebars.

     #### Example Response

     ```
     bent - ^7.3.7
     express - ^4.17.1
     hbs - ^4.1.1
     semver - ^7.3.2
     ```

  2. `GET - /minimum-secure`

     This will return the minimum secure version for each release line

     - This will require the use of the semver module

     #### Example Response

     ```
        "v0": {
            "version": "v0.12.17",
            "date": "2016-10-18",
            "files": [],
            "npm": "2.15.1",
            "v8": "3.28.71.19",
            "uv": "1.6.1",
            "zlib": "1.2.8",
            "openssl": "1.0.1u",
            "modules": "14",
            "lts": false,
            "security": true
        },
        "v4": {
            "version": "v4.9.0",
            "date": "2018-03-28",
            "files": [],
            "npm": "2.15.11",
            "v8": "4.5.103.53",
            "uv": "1.9.1",
            "zlib": "1.2.11",
            "openssl": "1.0.2o",
            "modules": "46",
            "lts": "Argon",
            "security": true
        } ...

     ```

  3. `GET - /latest-releases`

     This will return the latest release version in each release line

     #### Example Response

     ```
     "v14": {
         "version": "v14.7.0",
         "date": "2020-07-29",
         "files": [],
         "npm": "6.14.7",
         "v8": "8.4.371.19",
         "uv": "1.38.1",
         "zlib": "1.2.11",
         "openssl": "1.1.1g",
         "modules": "83",
         "lts": false,
         "security": false
     },
     "v13": {
         "version": "v13.14.0",
         "date": "2020-04-28",
         "files": [],
         "npm": "6.14.4",
         "v8": "7.9.317.25",
         "uv": "1.37.0",
         "zlib": "1.2.11",
         "openssl": "1.1.1g",
         "modules": "79",
         "lts": false,
         "security": false
     } ...

     ```

* Tests

  - Each of the above endpoints should have its own test, and each test must be passing like the example below

  ```
  # should get dependencies
    ok 1 should contain bent
    ok 2 should contain express
    ok 3 should contain hbs
  # should get minimum secure versions
    ok 4 v0 version should match
    ok 5 v4 version should match
  # should get latest-releases
    ok 6 v14 version should match
    ok 7 v13 version should match
  ```

### Instructions:

How to attempt this challenge

1. Create a new repo in your account and note the git url
2. Clone this repo
3. Solve the challenge
4. Set your new repo as the origin: `git remote set-url origin ${your repo url}`
5. Push your solution to your repo
