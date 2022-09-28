function random(item) {
    let idx = Math.floor(Math.random() * item.length);
    return item[idx]
}

function remove(item, items) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            items.splice(i, 1)
            return items
        }
    }
}

export { random, remove }