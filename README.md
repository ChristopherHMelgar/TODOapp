# Screenshot
![](docs/screenshot.png)

# TODOapp
This app allows you to create, edit, delete and mark a task as completed.

Create or log in with your user.
Write the name and description of your task, click on create, and you will have your task in the list.
The data is persistence host in MongoDb Atlas. (see the note)

## This proyect was generate with:

* [Angular CLI](https://github.com/angular/angular-cli) 9.0.7 

* [NodeJs](https://github.com/nodejs/node) 10.16.3

* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## Setup client

* Development server

  Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

* Build

  Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a   production build.

## Setup server

  Run `npm run dev` for a dev server in port 3000.
  
## Note
  
You need add .env file like this

<pre><code> 
  DATABASE_URL={YOU_DATABASE_URL}
  SECRET_KEY={YOU_SECRET_KEY_FOR_JWT}
</pre></code>
