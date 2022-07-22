# Retmod
Retmod is a web development stack including
- [**R**eact](https://reactjs.org/)
- [**E**xpress](https://expressjs.com/)
- [**T**ailwindcss](https://tailwindcss.com/)
- [**Mo**ngoDB](https://www.mongodb.com/)
- [**D**ocker](https://www.docker.com/)

## Why?
I was tired having to build a web application with NextJS or similar, which are a great framework, but it was missing something I was experienced with - express. That's why I created Retmod. It combines all of that into a single application. Means no two seperate servers running.

## How does Retmod work?
### Bridge
In the root of your repository, you have a package json with scripts. This place is called the bridge, as it is the place where all processes are started from. The install command automatically installs all dependencies in the client and server directory too. Using concurrently, server and client process can run at the same time without having problems. 

### Client Process
The client process is just Webpack running in dev mode. Simple, right?

### Server Process
The server process is another concurrently instance running typescript in watch mode and nodemon. After typescript detects changes, it will compile everything to JavaScript files and then trigger nodemon to restart the server.

> ### Info
> Retmod is developed using yarn. That's why it's recommended to use yarn.
> Install yarn with the following command:
> ```bash
> npm i -g yarn
> ```

## Getting started
Just create a repository with Retmod as template. Then clone it to your local machine. Go into the directory. After doing so, install the needed dependencies:

```bash
yarn install
```

After doing so, start server and client using the bridge, the same place you installed the dependencies.

```bash
yarn dev
```

## Building
If you want to build the application for production, use Docker:

```bash
docker build -t <your-image-name> .
```

If you need to do it somewhere else, you can the install command and the build command are combined into one:

```bash
yarn docker
```

It's named docker, as it's the command docker runs to install and build.