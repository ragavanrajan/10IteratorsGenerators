//Iterator Example 

function nameIterator(names) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < names.length ? { value: names[nextIndex++], done: false } : { done: true }
        }
    }

}

// create an array of names 

const namesArr = ['Jack', 'Jill', 'John'];
//Init iterator and pass in the names array 
const names = nameIterator(namesArr);

console.log(names.next().value); // will return Jack
console.log(names.next().value); // will return jil 
console.log(names.next().value); // will return john 
console.log(names.next().value); // will return undefined boz we have only three items in array

// Generator Example 
// add a * to tell javascript it is a generator

function* sayNames() {
    yield 'Jack';
    yield 'Jill';
    yield 'Mike';
}

const name = sayNames();
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);

// ID creators 
// Continously create ids for some reason 
function* createIds() {
    let index = 0;
    while (true) {
        yield index++;
    }
}

const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);