const { extendDefaultPlugins } = require('svgo')

module.exports = {
  multipass: true, // boolean. false by default
  // datauri: 'enc', // 'base64', 'enc' or 'unenc'. 'base64' by default
  js2svg: {
    indent: 2, // string with spaces or number of spaces. 4 by default
    pretty: true, // boolean, false by default
  },
  plugins: extendDefaultPlugins([{
    name: 'removeAttrs',
    params: {
      elemSeparator: ':',
      preserveCurrentColor: false,
      attrs: ['fill','fill-rule']
    }
  }])
}