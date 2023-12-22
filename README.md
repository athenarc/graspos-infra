# GraspOS Infrastructure Website Documentation

This website is built using [Docusaurus 2](https://docusaurus.io/); please check [here](https://docusaurus.io/docs/installation#requirements) the requirements to run the project.


## Local installation and development

From https://docusaurus.io/docs/installation#requirements 
> Node.js version 16.14 or above (which can be checked by running node -v) 

Clone the repository:
```
git clone https://github.com/athenarc/graspos-infra.git
```
NOTE: please use git branches for introducing new changes.

Install the required packages:
```
npm install
```

Start a local development server (opens in a new browser window). 
```
npm run start
```
NOTE: most changes are reflected live without having to restart the server.


Before issuing a Pull Request, please ensure that the following command runs successfully:
```
npm run build
```
NOTE: This command generates the static content into the `build` directory. 
Then this output directory is issued to deploy the documentation website.

## Deployment using Docker

### Development

Build docker container for development and run on port 3000:
```
docker build --target development -t docs:dev .
sudo docker run -d -p 3000:3000 docs:dev
```

### Production

Build docker container for production and run on port 80:
```
docker build -t docs:latest .
docker run -d -p 80:80 docs:latest
```