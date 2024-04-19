const userModel = require('../models/user.mode');


async function initUser ({ username, password }) {
    const data = await userModel.Register({ username, password });

    return data;
}


module.exports = {
    initUser,
}