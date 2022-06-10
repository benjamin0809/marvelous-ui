import fs from 'fs'
import path from 'path'
import json from '@rollup/plugin-json'
import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import ts from 'rollup-plugin-typescript2'
// const isDev = process.env.NODE_ENV !== "production";
const isDev = false
// 公共插件配置
const plugins = [
  ts(),
  vue({
    // Dynamically inject css as a <style> tag
    css: true,
    // Explicitly convert template to render function
    compileTemplate: true,
  }),
  json(),
  nodeResolve(),
  postcss({
    // 把 css 插入到 style 中
    // inject: true,
    // 把 css 放到和js同一目录
    extract: true,
  }),
]

// 如果不是开发环境，开启压缩
isDev || plugins.push(terser())
console.log('isDev:', isDev)
// packages 文件夹路径
const root = path.resolve(__dirname, 'packages')

;(async () => {
  // 清除已有文件夹
  if (fs.existsSync(path.resolve(__dirname, 'es'))) {
    fs.rm(path.resolve(__dirname, 'es'), { recursive: true, force: true }, (res) => {
      console.log(res)
    })
  }

  if (fs.existsSync(path.resolve(__dirname, 'lib'))) {
    fs.rm(path.resolve(__dirname, 'lib'), { recursive: true, force: true }, (res) => {
      console.log(res)
    })
  }
})()

module.exports = [
  {
    input: path.resolve(root, 'index.ts'),
    output: [
      {
        exports: 'auto',
        file: path.resolve(__dirname, 'lib', 'index.js'),
        format: 'umd',
        name: 'ml',
      },
    ],
    plugins: plugins,
  },
].concat(
  fs
    .readdirSync(root)
    // 过滤，只保留文件夹
    .filter((item) => fs.statSync(path.resolve(root, item)).isDirectory())
    // 为每一个文件夹创建对应的配置
    .map((item) => {
      const pkg = require(path.resolve(root, item, 'package.json'))
      // cjs
      const outputBaseCjs = path.resolve(root, '../lib/' + item)
      // es
      const outputBaseEs = path.resolve(root, '../es/' + item)
      return {
        input: path.resolve(root, item, 'index.ts'),
        output: [
          {
            exports: 'auto',
            file: path.resolve(outputBaseCjs, 'index.js'),
            format: 'cjs',
          },
          {
            exports: 'auto',
            file: path.join(outputBaseEs, 'index.js'),
            format: 'es',
          },
        ],
        plugins: plugins,
      }
    }),
)
