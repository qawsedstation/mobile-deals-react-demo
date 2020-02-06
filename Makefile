export SHELL = /bin/bash

.DEFAULT: help
.PHONY: dist

DOCKER_PORT:=3550
DOCKER_REPOSITORY=null
DOCKER_CONTAINER_NAME=gg-mobile-deals-demo

NPMINSTALL:=$(shell type -p npm-install-changed || echo npm install)

help:
	@echo Available targets:
	@echo
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'


proxy:
	node server/proxy.js

storybooks: ## Run storybook server for development
	NODE_ENV=development ./node_modules/.bin/start-storybook -p 9001

checks: ## Run linters and analyzers
	./node_modules/.bin/eslint -c .eslintrc app

dist: ## webpack dist files
	NODE_ENV=production ./node_modules/.bin/webpack --config=webpack/config.js

clean: ## clean install
	rm -rf dist
	rm -rf node_modules

install: ## rm node_modules and npm install
	$(NPMINSTALL)

run: ## runs express in prod mode serving files form /dist (no ssr)
	NODE_ENV=production node index.js

dev: ## runs express in dev mode serving with hot replacement
	NODE_ENV=development node index.js

test: ## runs mocha tests
	NODE_ENV=test ./node_modules/.bin/mocha --recursive --compilers js:babel-register --require ./bin/mocha_setup.js app/components/modules/**/*spec.js

test-watch: ## runs mocha tests
	NODE_ENV=test ./node_modules/.bin/mocha --recursive --compilers js:babel-register --require ./bin/mocha_setup.js app/components/modules/**/*spec.js --watch


eslint: ## eslint source code
	./node_modules/.bin/eslint app

eslintfix: ## eslint source code fix
	./node_modules/.bin/eslint app --fix

docker-image: docker-clean install dist
	docker build -t ${DOCKER_REPOSITORY} .

docker-run:
	docker run --name ${DOCKER_CONTAINER_NAME} -p ${DOCKER_PORT}:3000 -d ${DOCKER_REPOSITORY}:latest

docker: docker-image docker-run
	@echo ">> Site available at http://localhost:3550:${DOCKER_PORT}"

docker-clean:
	-docker stop ${DOCKER_CONTAINER_NAME}
	-docker rm ${DOCKER_CONTAINER_NAME}
	-docker rmi ${DOCKER_REPOSITORY}

docker-push:
	docker push ${DOCKER_REPOSITORY}
