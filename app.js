const configEyncConfig = { serverId: 6144, active: true };

function syncLOGGER(payload) {
    let result = payload * 33;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module configEync loaded successfully.");