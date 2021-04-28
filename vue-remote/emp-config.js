const withVue2 = require("@efox/emp-vue2");
const path = require("path");
const ProjectRootPath = path.resolve("./");
const { getConfig } = require(path.join(ProjectRootPath, "./src/config"));
module.exports = withVue2(({ config, env, empEnv }) => {
  const confEnv = env === "production" ? "prod" : "dev";
  const conf = getConfig(empEnv || confEnv);
  const port = conf.port;
  const publicPath = conf.publicPath;
  // 设置项目URL
  config.output.publicPath(publicPath);
  // 设置项目端口
  config.devServer.port(port);
  config.plugin("mf").tap((args) => {
    args[0] = {
      ...args[0],
      ...{
        name: "empVueProject",
        remotes: {},
        library: { type: "var", name: "projectName" },
        exposes: {
          // 别名：组件的路径
          "./Content": "./src/components/Content", // 暴露了这个组件
        },
        shared: ["vue/dist/vue.esm.js"],
        // 被远程引入的文件名，// 比如这个项目，对外暴露的文件为http://localhost:8006/emp.js
        filename: "emp.js",
      },
    };
    return args;
  });

  // 配置 index.html
  config.plugin("html").tap((args) => {
    args[0] = {
      ...args[0],
      ...{
        // head 的 title
        title: "EMP Vue2 Components",
        // 远程调用项目的文件链接
        // 远程调用项目的文件链接，这里该应用加载了另外一个端口应用的微前端入口文件，这样该应用就可以美滋滋得使用其他应用的资源啦
        files: {},
      },
    };
    return args;
  });
});
