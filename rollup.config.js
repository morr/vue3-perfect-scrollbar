import buble from 'rollup-plugin-buble'
import { uglify } from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json'

const browser = {
  input: 'src/Scrollbar.js',
  output: {
    format: 'umd',
    name: 'Vue3PerfectScrollbar',
    file: pkg.browser
  },
  plugins: [
    buble(),
    resolve({
      browser: true, jsnext: true, main: true
    }),
    commonjs()
  ]
}

const browserMin = {
  input: 'src/Scrollbar.js',
  output: {
    format: 'umd',
    name: 'Vue3PerfectScrollbar',
    file: 'dist/vue3-perfect-scrollbar.umd.min.js'
  },
  plugins: [
    resolve({
      browser: true, jsnext: true, main: true
    }),
    commonjs(),
    buble(),
    uglify()
  ]
}

export default [
  browser,
  browserMin
]
