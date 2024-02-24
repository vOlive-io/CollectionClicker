// watch-css.js
const { exec } = require('child_process');

// Watch SCSS and Tailwind CSS changes
exec('nodemon --watch "scss/**/*.scss" --exec "bun run buildcss"', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(stdout);
});
