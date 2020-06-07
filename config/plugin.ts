import {EggPlugin} from 'egg';

// @ts-ignore
const plugin: EggPlugin = {
    // static: true,
    // nunjucks: {
    //   enable: true,
    //   package: 'egg-view-nunjucks',
    // },
    "egg-cors": {
        enable: true,
        package: 'egg-cors'
    }

};

export default plugin;
