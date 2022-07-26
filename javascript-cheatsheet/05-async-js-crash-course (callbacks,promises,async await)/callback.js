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


// // Without Callback
// function createPost(post) {
//     setTimeout(() => {
//         posts.push(post);
//     }, 2000); 
// }

// createPost({title: 'Post Three', body: 'This is post three'});
// getPosts();


function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000); 
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts);