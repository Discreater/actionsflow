
module.exports = async function ({ helpers }) {
    const result = await helpers.axios.get("https://addons-ecs.forgesvc.net/api/v2/addon/242223/files")
    const data = Object.assign({}, result.data);
    switch (data.releaseType) {
        case 1:
            data.releaseTypeStr = 'Release';
            break;
        case 2:
            data.releaseTypeStr = 'Beta';
            break;
        case 3: 
            data.releaseTypeStr = 'Alpha';
            break;
        default:
            data.releaseTypeStr = `Unknow: ${data.releaseType}`;
            break;
    }
    data.gameVersion = data.gameVersion.join(', ');
    return data;
}