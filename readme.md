# To start the project locally.

## Pre requisites - Packages
```
npm install --global yarn

```

Open 3 terminal Windows and run the following commands in each of them.
## Client needs 1 Terminal
Go to the root directory of the project and run the following command
```bash
cd client
yarn install
yarn dev
```   

This will start the client side of the project. 

If you want to test in production , go to the file  `.env.development` in `client` and change  `NEXT_PUBLIC_ENVIRONMENT=production`

## Server needs 2 Terminal


Go to the root directory of the project and run the following command

```bash
cd server/functions
yarn install
yarn dev
```    
This will start the server and **firebase emulators**. You can see all the emulators in http://localhost:4000 

Open new terminal and  Go to the root directory of the project and run the following command:
```bash
cd server/functions
yarn dev:functions
```

This will look for functions changes and recompile for each save on backend.

## Deployment in Production
Go to the root directory of the project and run the following command

```bash
cd server/function
yarn deploy
```

Make sure of linting mistakes. If console throws lint errors use the command to the respective folders `client` or `server`

```bash
yarn lint --fix
```
to automatically fix linting errors.