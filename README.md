# Server and Client Side 

# Server Side 

1. Server  side is when the server renders the page and sends it to the client.
2. Server side is also called server side rendering (SSR).
3. Server side helps in SEO and friendly dynamic content.
4. Private and confidential info is stored in server side.
5. Used for data fetching.
6. Used in backend for API.
7. Complex rendering logic is done in server side.
8. Every components that is creating in next js is server components by default.


# Client Side
1. Client side is when the client renders the page.
2. Client side is also called client side rendering (CSR).
3. Client side is faster than server side.
4. Client side is used for interactivity and dynamic content.
5. It also helps in browser API.
6. Used for state management.
7. Also used for hooks
8. Client side animations & effect


# Important keys 

## very important
 1. If you want tp run code in a specific server or client side then you have to install client-only package or server-only package
2. npm install client-only and then import "client-only" and wrap the code in clientOnly
3. npm install server-only and then import "server-only" and wrap the code in serverOnly
 

 ## concept 2 
 1. when you are using client component in parent component then all the children components is also client components. 

 ## concept 3 
 1. fetching data in server components is called server side data fetching and it is very easy to implement. 
 2. fetching data in client components is called client side data fetching and it is very hard to implement. 
 3. we use server side data fetching because of easy implemennts and logic can also build in server components

 -------------------------------------------------------------------------

# code example 

## server side data fetching 

```typescript

export default async function Home() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

```

## client side data fetching 

```typescript
"use client"

import { useState } from "react"
import { useEffect } from "react"

export default function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

```
