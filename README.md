# Using Postcss

Mini project for learning how to use Postcss

### Setup

```bash
$ npm install
```

### Build CSS

```bash
$ npm run build-css
```

### package.json

```json
{
  "name": "using-postcss",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "build-css": "npx postcss input.css > output.css"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "postcss-cli": "^11.0.0",
    "postcss-scss": "^4.0.9",
    "postcss-import": "^16.1.0",
    "postcss-lightningcss": "^1.0.1",
    "postcss-sprites": "^4.2.1"
  }
}
```

### postcss.config.js

```javascript
module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-sprites'),
        require('postcss-lightningcss')({
            browsers: ">=.25%",
            lightningcssOptions: {
                minify: false,
                sourceMap: true
            }
        })
    ]
}
```
