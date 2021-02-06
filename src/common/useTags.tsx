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

  // 找到该ID
  const findIndex = (id:number)=>{
    let result = -1;
    for(let i=0;i<tags.length;i++){
      if(tags[i].id === id){
        result = i;
        break;
      }
    }
    return result
  }

  // 更新该标签
  const updateTag = (id:number,obj:{name:string})=>{
    const index = findIndex(id)
    // 深拷贝 tags 得到 tagsClon
    const tagsClone = JSON.parse(JSON.stringify(tags))
    tagsClone.splice(index,1,{id:id,name:obj.name})
    setTags(tagsClone)
  }
  console.log(tags);
  return {tags,setTags,findTag,findIndex,updateTag}
}

export default useTags

// "餐饮","娱乐","日用","通讯","果蔬","交通"

