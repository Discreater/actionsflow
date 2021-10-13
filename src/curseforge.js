module.exports = async function ({ helpers }) {
    try {
        const result = await helpers.axios.get("https://addons-ecs.forgesvc.net/api/v2/addon/242223/files")
        const datas = result.data;
        for (data of datas) {
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
            if (Array.isArray(data.gameVersion)) {
                data.gameVersion = data.gameVersion.join(', ');
            }
        }
        return datas;
    } catch (e) {
        helpers.log.error(e);
        return [];
    }
}