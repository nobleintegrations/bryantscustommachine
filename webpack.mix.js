let mix = require('laravel-mix');
let build = require('./tasks/build.js');
var tailwindcss = require('tailwindcss');
let glob = require("glob-all");
let PurgecssPlugin = require("purgecss-webpack-plugin");

// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
//
// https://github.com/FullHuman/purgecss#extractor
class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
    }
}

mix.disableSuccessNotifications();
mix.setPublicPath('source/assets/build');
mix.webpackConfig({
    plugins: [
        build.jigsaw,
        build.browserSync(),
        build.watch(['source/**/*.md', 'source/**/*.php', 'source/**/*.scss', '!source/**/_tmp/*']),
    ]
});

mix.js('source/_assets/js/main.js', 'js')
    .sass('source/_assets/sass/main.scss', 'css')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('tailwind.js')],
    }).version();


// Only run PurgeCSS during production builds for faster development builds
// and so you still have the full set of utilities available during
// development.
// if (mix.inProduction()) {
    mix.webpackConfig({
        plugins: [
            new PurgecssPlugin({

                // Specify the locations of any files you want to scan for class names.
                paths: glob.sync([
                    path.join(__dirname, "source/**/*.blade.php"),
                    //path.join(__dirname, "resources/assets/js/**/*.vue")
                ]),
                extractors: [
                    {
                        extractor: TailwindExtractor,

                        // Specify the file extensions to include when scanning for
                        // class names.
                        extensions: ["html", "js", "php", "vue"]
                    }
                ]
            })
        ]
    });
// }
