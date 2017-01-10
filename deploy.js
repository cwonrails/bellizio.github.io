const fse     = require('fs-extra');
const ghpages = require('gh-pages');
const path    = require('path');

fse.copy('./CNAME', './dist/CNAME', (error) => {
  if (error) {
    console.log(error);
  } else {
    publishApp();
  }
});

function publishApp() {
  ghpages.publish(path.join(__dirname, 'dist'), {
    branch: 'master',
    message: 'test deploy'
  }, () => {
    console.log('deploy complete');
  });
}
