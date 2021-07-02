
module.exports = async function ({ helpers }) {
    const result = await helpers.axios.get("https://addons-ecs.forgesvc.net/api/v2/addon/242223/files")
    return result.data;
}