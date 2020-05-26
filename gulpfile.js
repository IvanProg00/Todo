const { task, src, dest, series, watch } = require("gulp");
const rollup = require("gulp-better-rollup");
const babel = require("rollup-plugin-babel");
const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const del = require("del");
const browserSync = require("browser-sync").create();
const scss = require("gulp-sass");
const uglify = require("gulp-uglify");

task("delete", () => {
	return del("dist/");
});

task("html", () => {
	return src("./src/index.html")
		.pipe(dest("dist/"))
		.pipe(browserSync.stream());
});

task("babel", () => {
	return src("./src/js/*.js")
		.pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, "umd"))
		.pipe(uglify())
		.pipe(dest("dist/js/"))
		.pipe(browserSync.stream());
});

task("scss", () => {
	return src("./src/scss/**/*.scss")
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
			baseDir: "./dist",
		},
		open: true,
	});
	watch("./src/index.html", series("html"));
	watch("./src/js/**/*.js", series("babel"));
	watch("./src/scss/**/*.scss", series("scss"));
});

task("default", series("delete", "html", "babel", "scss", "server"));
