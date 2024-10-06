function getIndexFromName(name) {
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i].toLowerCase() === name.toLowerCase()) {
            return i;
        }
    }
    return null;
}