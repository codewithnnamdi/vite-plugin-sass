const sass = require('sass');
const path = require('path');

function vitePluginSass() {
  return {
    name: 'vite-plugin-sass',
    async transform(code, id) {
      if (path.extname(id) === ('.scss' || '.sass')) {
        const result = await sass.render({ data: code });
        return {
          code: result.css.toString(),
          map: result.map.toString(),
        };
      }
    },
  };
}

module.exports = vitePluginSass;