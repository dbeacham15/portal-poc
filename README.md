# Portal POC

The is a simple Proof of concept for a Design System Portal. It makes use of many different ways of writing React Components and constructing applications.  There are some base level things such as: 
* React Router
* Redux Store
* Isomorphic React/Express

Some of the methods explored: 

* Styled Components
* Inline Styles
* Markdown / Config.yml dynamic generation

## Usage Instructions
Currently the POC uses a simple express implementation for running the client as well as providing an API for the client to hit for parsing yaml/markdown files. In order to get the application up and running, follow the instructions below.

```js
git clone git@github.com:dbeacham15/portal-poc.git

cd portal-poc

yarn

cd client

yarn

cd ../

// Start the Project  Uses concurrently to run the server and client hot reload at the same time
yarn dev
```
