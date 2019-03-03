require('@babel/register')({
    ignore: [ /(node_modules)/ ],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
    plugins: ['css-modules-transform', 'file-loader', '@loadable/babel-plugin']
});

require('./index')
