const cf = require("./curseforge");

cf().catch(e => {
    console.log(e);
})