# React Demo Mobile Deals App - YEAR 2016 (This code is made 4 Years Ago)
This is a demonstration application and is using:

1. Material Design
2. Mocha/Enzyme/chai for testing
3. StoryBook
4. Concept of Presentational and Container Components
5. React's inline styles
6. Docker so can be ready for production
7. 2 Environments DEV/PROD (uses same dev url for now)
8. ES6/JSX/Babel/Webpack/HotLoader/EsLint/npm
9. Node/Express.js
10. Redux, Sagas and Axios
11. Custom Material Design purple theme.
12. DEV tools press (ctrl+ h) and you can see the store.
13. Responsive Design using FlexBox
14. ImmutableJs

### Make commands

type

```
make
```

to see a list of options


Install dependencies
```
make install
```

Check for Linter Errors and Warnings in the code
```
make checks
```

Run BDD tests
```
make test
make test-watch
```

Run storyBooks to test individual UI components
```
make storybooks
```

Run the app in dev mode (run make proxy in different screen as optional to avoid CORS limitations)
Available at localhost:3000
```
make proxy
make dev
```

Run the app in production mode (execute these commands in same order)
```
make dist
make run
```

Create a Docker production app for later push to docker Hub
```
make docker
```

### Lazy react

Speed up component development using lazy-react utility:

```
./bin/lazy-react -c ModuleCategory/Module
```


### READ GUIDELINES
Please review REACT.md

### Coding standards/styles

* ES2015 syntax
* ESLint rules configuration that all developers would share http://eslint.org/
* There is a .jsbeautifyrc, please set your editor accordingly

### Git setup before cloning the repo

1. `git config --system core.ignorecase true`
2. `git config --global core.ignorecase true`
