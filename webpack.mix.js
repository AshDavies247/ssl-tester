const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts("resources/js/app.ts", "public/js")
    .vue({ version: 3 })
    .postCss("resources/css/app.css", "public/css", [require("tailwindcss")]);

mix.browserSync({
    proxy: "ssl-tester.test",
    files: [
        "app/**/*.php",
        "cms/views/**/*.blade.php",
        "resources/views/**/*.php",
        `public/**/*.(js|css)`,
    ],
});

if (mix.inProduction()) {
    mix.version();
}
