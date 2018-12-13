// Write your solution in this file!
const driver = {}

const updateDriverWithKeyAndValue = (obj, key, value) => {
    const newdriver = {}
    Object.assign(newdriver, obj, {[key]: value})
    return newdriver
}

const destructivelyUpdateDriverWithKeyAndValue = (obj, key, value) => {
    obj[key] = value
    return obj
}

const deleteFromDriverByKey = (obj, key) => {
    const newobj = { ...obj } 
    delete newobj[key]
    return newobj
}

const destructivelyDeleteFromDriverByKey = (obj, key) => {
    let delobj = delete obj[key]
    return delobj
}