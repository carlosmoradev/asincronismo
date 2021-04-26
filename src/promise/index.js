const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Hey!!');
        } else {
            reject('Doh!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const sometimeWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => {
                resolve(true);
            }, 2500)
        } else {
            const error = new Error('Fail!');
            reject(error);
        }
    });
}

sometimeWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

Promise.all([somethingWillHappen(), sometimeWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err);
    })