# Morgan_Roku

install database

run npm install in both the fornt end and back end projects 

in the back end run "node app"

in the front end run "npm run serve"

open it up on localhost:8080


# Movie Site
a clone of Netflix.

# Setup

## Back end:

`npm init -y` -> `npm i -s express` -> touch app.js and .gitignore

## front end:

(to let github track new files)
create frontend folder, touch .gitignore
write node_modules in .gitignore, when create vue, select merge

`vue create frontend`
-> manually select featuures
-> select "Router" (arrow key and space bar to select)
-> 3.x
-> n 
-> ESLint with error prevention only
-> Lint on save
-> In dedicated config files
-> n

touch src/assets/sass
touch src/assets/sass/vars.scss
`npm i -s sass-loader@7.0.0`
`npm i -s node-sass`
touch vue.config.js

## sql connect

https://www.npmjs.com/package/mysql#pooling-connections

in backend, use
`npm i -s mysql`
touch config.js
mkdir routes

## termianls
bash - Git
bash - back
bash - front

## connect front and back
in vue.config.js, add object devServer

## back end (PHP)
in folder Roku_Flashback
