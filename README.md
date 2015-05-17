# Matvey Andrienko’s Personal Website

This is a repository for my personal website currently located at [mavsic.ru](http://mavsic.ru).


## Build process

Initialize the project by installing npm and jspm packages:

    npm install
    jspm install

Then you can run it on a local webserver. To create a production-ready version, run:

    grunt build
    
After build is competed files from ``build/`` directory can be deployed to server.

## Sublime Text Build System

It also comes with a preconfigured Sublime Text project which includes a simple build system to run the build process.
