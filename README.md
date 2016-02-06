# Matvey Andrienko’s Personal Website

This is a repository for my personal website currently located at [mavsic.ru](http://mavsic.ru).


## Build process

Initialize the project by installing npm and jspm packages:

    npm install
    jspm install

Then you can run it on a local webserver. There's also a Grunt task to do that:

    grunt debug

That way you can preview your changes without rebuilding the whole site.

To create a bundled production-ready version, run:

    grunt build
    
After build is competed files from ``build/`` directory can be deployed to server.
