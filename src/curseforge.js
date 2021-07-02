const curseforge = require("mc-curseforge-api");

module.exports = async function () {
    const jeca = await curseforge.getMod("242223");
    const files = await jeca.getFiles();
    return files;
}