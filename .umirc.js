import { defineConfig } from 'umi';
const { resolve } = require('path');

export default defineConfig({
  hash: false,
  targets: { ie: 11 },
  dva: { 
    immer: true
  },
  ignoreMomentLocale: true,

  mountElementId: "root",

  nodeModulesTransform: {
    type: 'none',
  },
  
  alias: {
    antd: resolve(__dirname, './node_modules/antd'),
    node_modules: resolve(__dirname, './node_modules'),
    components: resolve(__dirname, './src/components'),
    packageJson: resolve(__dirname, './package.json')
  }

})
