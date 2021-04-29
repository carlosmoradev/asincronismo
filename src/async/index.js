const doSomeThingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('So Something Async'), 3000)
        : reject(new Error('Test error'))
    });
}

const doSomeThing = async () => {
    const something = await doSomeThingAsync();
    console.log(something);
}

console.log('Before...');
doSomeThing();
console.log('After...');


const anotherFunction = async () => (
    try {
        const something = await doSomeThingAsync();
        console.log(something);
    } catch (error) {
        console.error(error);
    }
)

console.log('Before another...');
doSomeThing();
console.log('After another...');