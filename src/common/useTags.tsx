import {useState} from 'react';
import {createId} from './createId';

const defaultTags =[
  {id:createId(),name:"餐饮"},
  {id:createId(),name:"娱乐"},
  {id:createId(),name:"日用"},
  {id:createId(),name:"通讯"},
  {id:createId(),name:"果蔬"},
  {id:createId(),name:"交通"},
]
const useTags = ()=>{
  const [tags,setTags] = useState<{id:number,name:string}[]>(defaultTags)
  const findTag =(id:number)=> tags.filter(tag=> tag.id===id)[0]
  return {tags,setTags,findTag}
}

export default useTags

// "餐饮","娱乐","日用","通讯","果蔬","交通"

