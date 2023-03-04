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
          code: result.css.toString(),
          map: result.map.toString(),
        };
      }
    },
  };
}

module.exports = vitePluginSass;
