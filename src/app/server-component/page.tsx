import {add, sub} from "@/utils/index"
import React from 'react'

const ServerComponent = () => {
    const result = add(1, 2)
    console.log(result)
    const subResult = sub(1, 2)
    console.log(subResult)
  return (
    <div>ServerComponent</div>
  )
}

export default ServerComponent

