#!/bin/bash

# only proceed script when started not by pull request (PR)
if [ $TRAVIS_PULL_REQUEST == "true" ]; then
  echo "this is PR, exiting"
  exit 0
fi

# enable error reporting to the console
set -e

# build site with jekyll, by default to `_site' folder_
jekyll build

# cleanup
rm -rf ../ramp-docs-dist

#clone `master' branch of the repository using encrypted GH_TOKEN for authentification
git clone -b gh-pages https://${GH_TOKEN}@github.com/RAMP-PCAR/ramp-pcar-docs ../ramp-docs-dist

# copy generated HTML site to `master' branch
cp -R _site/* ../ramp-docs-dist

# commit and push generated content to `master' branch
# since repository was cloned in write mode with token auth - we can push there
cd ../ramp-docs-dist
git add -A .
git commit -a -m "Travis #$TRAVIS_BUILD_NUMBER"
git push --quiet https://${GH_TOKEN}@github.com/RAMP-PCAR/ramp-pcar-docs gh-pages > /dev/null 2>&1 