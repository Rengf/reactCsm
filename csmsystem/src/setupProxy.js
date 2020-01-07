const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy("/user/*", {
            target: "http://localhost:3001",
            changeOrigin: true
        })
    )
    app.use(
        proxy(
            "/api/*", {
                target: "http://localhost:3001",
                changeOrigin: true
            }
        )
    );
    app.use(
        proxy(
            "/add/*", {
                target: "http://localhost:3001",
                changeOrigin: true
            }
        )
    );
    app.use(
        proxy(
            "/search/*", {
                target: "http://localhost:3001",
                changeOrigin: true
            }
        )
    );
    app.use(
        proxy(
            "/delete/*", {
                target: "http://localhost:3001",
                changeOrigin: true
            }
        )
    );
    app.use(
        proxy(
            "/update/*", {
                target: "http://localhost:3001",
                changeOrigin: true
            }
        )
    );
    // app.use(
    //     proxy(
    //         "/admin/*", {
    //             target: "http://localhost:3001",
    //             changeOrigin: true
    //         })
    // );
};