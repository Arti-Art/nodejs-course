// NodeJS Lesson 73. Using a helper function for navigation

const path = require('path')

// module.exports = path.dirname(process.mainModule.filename) // deprecated

module.exports = path.dirname(require.main.filename);
// require.main.filename gives us the path for the file responsible for running our application
// then we get the directory name of that file path to get the root directory of our project