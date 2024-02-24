const chokidar = require('chokidar');
const { exec } = require('child_process');

// Watch SCSS and Tailwind CSS changes
const watcher = chokidar.watch('scss/**/*.scss', { ignoreInitial: true });

watcher.on('all', (event, path) => {
    console.log(`${path} has been ${event}`);
    buildCss();
});

function buildCss() {
    exec('bun buildscss && bun buildtailwindcss', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(stdout);
    });
}

// Initial build
buildCss();
