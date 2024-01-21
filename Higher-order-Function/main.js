import {post} from "./main2.js";

post.forEach((posts) =>{
    console.log(posts)
})

console.clear()

const filterPost = post.filter((posts)=>{
    return posts.userId === 26
})

console.log(filterPost)

const mappedpost = post.map((posts)=>{
    return posts.id
})

console.log(mappedpost)