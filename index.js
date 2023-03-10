const sass = require('sass');
const path = require('path');

function vitePluginSass() {
  return {
    name: 'vite-plugin-sass',
    async transform(code, id) {
      if (path.extname(id) === ('.scss' || '.sass')) {
        const result = await new Promise((resolve, reject) => {
          sass.render({
            file: id,
            sourceMap: true,
          }, (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        });
        return {
          code: String(result.css),
          map: String(result.map),
        };
      }
    },
  };
}

module.exports = vitePluginSass;