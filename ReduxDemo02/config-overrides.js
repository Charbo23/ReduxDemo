const { override, fixBabelImports } = require('customize-cra');
 module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: 'css', // `style: true` 会加载 less 文件
   }),
);