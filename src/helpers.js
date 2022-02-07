const choice = (items) => {
    const randNum = Math.floor(Math.random() * items.length)
    return items[randNum]
}

const remove = (items, item) => {
    const deletedItem = items.splice(items.indexOf(item), 1)
    if (deletedItem.length === 0) {
        return undefined
    }
    return items
}

export {choice, remove}