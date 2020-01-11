# {{projectName}}

### Install Instructions

- after project is created, run `npm i`
- run `npm start` (this has to be done before `npm i -g` because it creates /bin)
- run `npm i -g`
- cli is now available

### Run

`npm start` - to start webpack watchers and the bundling process  
`npm run test` - to start up unit tests  

### Directory structure

- `apis` - houses all files related to using apis. example: axios config files or a library intended to utilize the github api
- `commands` - houses all the files for the commands of this cli. each file should represent a single command and its functionality.
- `lib` - is where you will store all libraries (other than api libraries) used in this project. example: a library of custom errors to throw
- `types` - contains types information used by TypeScript.
- `utils` - is where you should store all utility scripts for this project. utilities are files/scripts/pieces of functionality that do not fit into any of the other directories listed above. example: config.ts (exising file) is a simple script used for retrieving the config file for this project.
