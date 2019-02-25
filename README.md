## Installation

``` bash
# clone the repo
$ git clone https://github.com/minhtuanchannhan/react-admin-template.git my-project

# go into app's directory
$ cd my-project

# install app's dependencies
$ npm install || yarn install
```

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

### Basic usage

``` bash
# dev server  with hot reload at http://localhost:3000
$ npm start || yanr start
```

Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files.

### Example components
Check `src/components/Example` directory to get more example components. You can create routes to check with component you want to use.

### Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
# build for production with minification
$ npm run build || yarn build
```

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
react-admin-template
├── public/          #static files
│   ├── assets/      #assets
│   └── index.html   #html temlpate
│
├── src/             #project root
│   ├── components/  #components source
│   ├── config/      #config project
│   ├── routes/      #routes config
│   ├── services/    #services config
│   ├── styles/      #styles
│   ├── index.js
│
└── package.json
```
