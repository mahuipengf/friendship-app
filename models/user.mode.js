const { prisma } = require('../utils');
const { TABLE } = require('../utils/common');

const userPrisma = prisma[TABLE.USER];



module.exports = {
    async Register (params) {
        return await userPrisma.create({
            data: params
        })
    },
}