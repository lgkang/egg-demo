import {Controller} from 'egg';

export default class HomeController extends Controller {
    public async index() {
        const {ctx} = this;
        ctx.body = await ctx.service.test.sayHi('egg');
    }

    public async uploadFile() {
        const {ctx} = this;
        console.log(ctx.request)
        const file = ctx.request.files;
        console.log(file)
        ctx.body = {
            data: file
        }
    }
}
