const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
  setTimeout(() => {
      // console.log('waiting');
      let output = '';
      posts.forEach((post, index) => {
          output += `<li>${post.title}</li>`
      });
      document.body.innerHTML = output
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if(!error) {
        resolve();
      } else {
        reject('Error: Something went wrong')
      }
    }, 2000); 
  });
}

// // 1 then / catch
// createPost({title: 'Post Three', body: 'This is post three'})
//     .then(getPosts) // resolve
//     .catch(err => console.log(err));

// // 2 Promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users');
// const promise4 = Promise.resolve('Wait for it');
// const promise5 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());


// Promise.all([promise1, promise2, promise3, promise4, promise5]).then((values) => console.log(values));


// // Async / Await
// async function init() {
//   await createPost({title: 'Post Three', body: 'This is post three'});
//   console.log('finished');
//   getPosts();
// }

// init();

// Async / Await / Fetch
async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await res.json();

  console.log(data);
}

fetchUsers();