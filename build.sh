#!/bin/bash

# only proceed script when started not by pull request (PR)
if [ $TRAVIS_PULL_REQUEST == "true" ]; then
    echo "this is PR, exiting"
    exit 0
fi

targetBranch="gh-pages"
targetRepo="https://${GH_TOKEN}@github.com/RAMP-PCAR/ramp-pcar-docs"

if [ $TRAVIS_BRANCH == "master" ]; then
    targetBranch="_master"
    targetRepo="https://${GH_TOKEN}@github.com/RAMP-PCAR/ramp-pcar-docs"
fi

if [ ! -z $TRAVIS_TAG ]; then

    # enable error reporting to the console, just in case
    set -e

    # build site with jekyll, by default to `_site' folder_
    jekyll build

    # make a folder
    # mkdir -p ../ramp-docs-dist

    #clone `gh-pages` branch of the repository using encrypted GH_TOKEN for authentication
    # need to change to our main docs repo
    git clone -b $targetBranch $targetRepo ../ramp-docs-dist

    cwd=$(pwd)
    cd ../ramp-docs-dist
    git rm -r .
    git checkout $targetBranch ./demos

    cd $cwd

    # copy generated HTML site to `gh-pages` branch
    cp -R _site/* ../ramp-docs-dist

    # commit and push generated content to `gh-pages' branch
    # since repository was cloned in write mode with token auth - we can push there
    cd ../ramp-docs-dist
    git add -A .
    git commit -a -m "RAMP Docs Travis build #$TRAVIS_BUILD_NUMBER"

    git tag -a $TRAVIS_TAG

    git push --quiet $targetRepo $targetBranch > /dev/null 2>&1 

fi