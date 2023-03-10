# Vite-Plugin-Sass
DISCLAIMER:  This plugin uses the sass package to compile Sass files to CSS, and it checks whether a file has the .scss extension before attempting to transform it. If the file is a Sass file, the plugin compiles the Sass code to CSS using sass.render() and returns the result.

To use this plugin in your Vite project, you can install it using npm or yarn:

```
npm install vite-plugin-sass --save-dev
```
Then, in your vite.config.js file, you can import the plugin and add it to the plugins array:

```javascript
const vitePluginSass = require('vite-plugin-sass');

module.exports = {
  plugins: [vitePluginSass()],
};
```
With this plugin installed and configured, you can import Sass files in your JavaScript or TypeScript code just like you would any other module:

```javascript
import './styles.scss';
```

And Vite will automatically transform the Sass code to CSS and include it in your project.