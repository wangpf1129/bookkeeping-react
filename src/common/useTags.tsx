import {useState} from 'react';

const useTags = ()=>{
  const [tags,setTags] = useState<{id:number,name:string}[]>([
    {id:1,name:"餐饮"},
    {id:2,name:"娱乐"},
    {id:3,name:"日用"},
    {id:4,name:"通讯"},
    {id:5,name:"果蔬"},
    {id:6,name:"交通"},
  ])
  return {tags,setTags}
}

export default useTags

// "餐饮","娱乐","日用","通讯","果蔬","交通"