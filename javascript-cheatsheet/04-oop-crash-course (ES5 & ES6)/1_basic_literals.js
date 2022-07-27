// const s1 = 'Hello';
// console.log(typeof s1);

// const s2 = new String('Hello');
// console.log(typeof s2);

// console.log(window);
// window.alert(1);

// console.log(window.navigator.appVersion);
// console.log(navigator.appVersion);

// Object Literal
const book1 = {
    title: 'Book1',
    author: 'John Doe',
    year: '2013',

    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

const book2 = {
    title: 'Book2',
    author: 'Jane Doe',
    year: '2016',

    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

console.log(book1.title);
console.log(book2.getSummary());
console.log(Object.keys(book2))
console.log(Object.values(book2))