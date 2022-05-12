# SERVER

## Quick start

### Database

Install ```docker``` and  ```docker-compose``` then maybe you have to pull the docker image, so run:

```bash
docker pull mongo
```

then, to run the container do:

```bash
docker-compose up
```
and you should be ready to go.

__NOTE:__ The db will run on localhost:27017

### Server

Install ```nodejs``` and then the following dependeces:

```bash
npm i tsc mongoose
```

then to compile, from the root directory do:

```bash
tsc
```

and to run the server do:

```bash
npm start
```

__NOTE:__ The server will run on [localhost:8080](http://localhost:8080)
### Swagger (optional)

To run swagger pull and run the container with:

```bash
docker pull swaggerapi/swagger-editor
docker run -p 8081:8080 swaggerapi/swagger-editor
```
__NOTE:__ Swagger editor will run on [localhost:8081](http://localhost:8081)

