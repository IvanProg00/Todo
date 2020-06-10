const { task, src, dest, series, watch } = require("gulp");
const rollup = require("gulp-better-rollup");
const rollupBabel = require("rollup-plugin-babel");
const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const babel = require("gulp-babel");
const del = require("del");
const browserSync = require("browser-sync").create();
const scss = require("gulp-sass");

task("delete", () => {
	return del("dist/");
});

task("html", () => {
	return src("./src/index.html").pipe(dest("dist/")).pipe(browserSync.stream());
});

task("babel", () => {
	return src("./src/js/*.js")
		.pipe(rollup({ plugins: [rollupBabel(), resolve(), commonjs()] }, "umd"))
		.pipe(
			babel({
				presets: ["@babel/preset-env"],
				compact: true,
			})
		)
		.pipe(dest("dist/js/"))
		.pipe(browserSync.stream());
});

task("fonts", () => {
	return src("./src/fonts/**/*.{ttf,woff}").pipe(dest("dist/fonts/"));
});

task("scss", () => {
	return src("./src/scss/style.scss")
		.pipe(
			scss({
				outputStyle: "compressed",
			})
		)
		.pipe(dest("dist/css/"))
		.pipe(browserSync.stream());
});

task("server", () => {
	browserSync.init({
		server: {
			baseDir: "dist/",
		},
		open: true,
	});
	watch("./src/index.html", series("html"));
	watch("./src/js/**/*.js", series("babel"));
	watch("./src/scss/**/*.scss", series("scss"));
});

task("default", series("delete", "html", "babel", "fonts", "scss", "server"));
