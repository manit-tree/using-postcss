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