import {Agent} from 'egg'

module.exports = (agent: Agent) => {
    agent.messenger.on('egg-ready', () => {
        const data = {pipi: true};
        agent.messenger.sendToApp('xxx_action', data);
    });
}
