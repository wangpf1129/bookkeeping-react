import {useState} from 'react';
import {createId} from './createId';

const defaultTags =[
  {id:createId(),name:"餐饮"},  // 1
  {id:createId(),name:"娱乐"},  // 2
  {id:createId(),name:"日用"},  // 3
  {id:createId(),name:"通讯"},  // 4
  {id:createId(),name:"果蔬"},  // 5
  {id:createId(),name:"交通"},  // 6
  {id:createId(),name:"烟酒"},  // 7
  {id:createId(),name:"数码"},  // 8
  {id:createId(),name:"服饰"},  // 9
  {id:createId(),name:"宠物"},  // 10
  {id:createId(),name:"旅行"},  // 11
  {id:createId(),name:"美容"},  // 12
]
const useTags = ()=>{
  const [tags,setTags] = useState<{id:number,name:string}[]>(defaultTags)
  const findTag =(id:number)=> tags.filter(tag=> tag.id===id)[0]

  // 找到 某个标签的id
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

  // 修改该标签
  const updateTag = (id:number,obj:{name:string})=>{
    // const index = findIndex(id)
    // // 深拷贝 tags 得到 tagsClone
    // const tagsClone = JSON.parse(JSON.stringify(tags))
    // tagsClone.splice(index,1,{id:id,name:obj.name})
    // setTags(tagsClone)
    setTags(tags.map(tag=>tag.id === id ? {id,name:obj.name}:tag))
  }
  // 删除该标签
  const deleteTag = (id:number)=>{
    // const index = findIndex(id)
    // // 深拷贝 tags 得到 tagsClone
    // const tagsClone = JSON.parse(JSON.stringify(tags))
    // tagsClone.splice(index,1)
    // setTags(tagsClone)
    setTags(tags.filter(tag=>tag.id !== id))
  }
  // console.log(tags);
  return {tags,setTags,findTag,findIndex,updateTag,deleteTag}
}

export default useTags


