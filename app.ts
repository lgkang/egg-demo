module.exports = app => {
    app.messenger.on('xxx_action', (data: Object) => {
        console.log(data)
    });
};
