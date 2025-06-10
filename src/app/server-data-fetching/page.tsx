import React from 'react'
interface Data {
    id: number;
    title: string;
    completed: boolean;
}
const ServerDataFetching = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);

  return (
<section>
    {/* {data.map((u:any)=>(
    <li key={u.id}>{u.title}</li>
    ))} */}
    <h1> Server Data Fetching </h1>
    <h1>{data.id}</h1>
    <p>{data.completed ? "completed" : "not completed" }</p>
</section>
  )
};

export default ServerDataFetching