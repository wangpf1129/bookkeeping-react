import {useEffect, useState} from 'react';
import {createId} from 'common/createId';
import {useUpdate} from './useUpdate';

// const defaultTags =[
//   // {id:createId(),name:"餐饮",iconName:"1"},  // 1
//   // {id:createId(),name:"娱乐",iconName:"2"},  // 2
//   // {id:createId(),name:"日用",iconName:"3"},  // 3
//   // {id:createId(),name:"通讯",iconName:"4"},  // 4
//   // {id:createId(),name:"果蔬",iconName:"5"},  // 5
//   // {id:createId(),name:"交通",iconName:"6"},  // 6
//   // {id:createId(),name:"烟酒",iconName:"7"},  // 7
//   // {id:createId(),name:"数码",iconName:"8"},  // 8
//   // {id:createId(),name:"服饰",iconName:"9"},  // 9
//   // {id:createId(),name:"宠物",iconName:"10"},  // 10
//   // {id:createId(),name:"旅行",iconName:"11"},  // 11
//   // {id:createId(),name:"美容",iconName:"12"},  // 12
//   // {id:createId(),name:"社交"},  // 13,
//   // {id:createId(),name:"汽车"},  // 14
//   // {id:createId(),name:"住房"},  // 15
//   // {id:createId(),name:"书籍"},  // 16
//   // {id:createId(),name:"长辈"},  // 17
//   // {id:createId(),name:"彩票"},  // 18
//   // {id:createId(),name:"学习"},  // 19
//   // {id:createId(),name:"办公"},  // 20
//   // {id:createId(),name:"礼物"},  // 21
//   // {id:createId(),name:"运动"},  // 22
//   // {id:createId(),name:"零食"},  // 23
//   // {id:createId(),name:"维修"},  // 24
//   // {id:createId(),name:"医疗"},  // 25
//
// ]
const useTags = ()=>{
  const [tags,setTags] = useState<{id:number,name:string,iconName:string}[]>([])

  useEffect(()=>{
   let localTags =  JSON.parse(window.localStorage.getItem('tags') || '[]')
    if(localTags.length === 0){
        localTags = [
          {id:createId(),name:"餐饮",iconName:"1"},  // 1
          {id:createId(),name:"娱乐",iconName:"2"},  // 2
          {id:createId(),name:"日用",iconName:"3"},  // 3
          {id:createId(),name:"通讯",iconName:"4"},  // 4
          {id:createId(),name:"果蔬",iconName:"5"},  // 5
          {id:createId(),name:"交通",iconName:"6"},  // 6
          {id:createId(),name:"烟酒",iconName:"7"},  // 7
          {id:createId(),name:"数码",iconName:"8"},  // 8
          {id:createId(),name:"服饰",iconName:"9"},  // 9
          {id:createId(),name:"宠物",iconName:"10"},  // 10
          {id:createId(),name:"旅行",iconName:"11"},  // 11
          {id:createId(),name:"美容",iconName:"12"},  // 12
        ]
    }
    setTags(localTags)
  },[])

  useUpdate(()=>{
    window.localStorage.setItem('tags',JSON.stringify(tags))
  },tags)

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
  const updateTag = (id:number,obj:{name:string,iconName:string})=>{
    setTags(tags.map(tag=>tag.id === id ? {id,name:obj.name,iconName:obj.iconName}:tag))
    window.location.reload()
  }
  // 删除该标签
  const deleteTag = (id:number)=>{
    setTags(tags.filter(tag=>tag.id !== id))
    window.location.reload()
  }

  // 添加该标签
  const addTag = (name:string,iconName:string)=>{
    if(name !== null && name !== ""){
      setTags([...tags,{id:createId(),name,iconName}])
      window.location.reload()
    }
  }

  // 获取该标签的名字
  const getName = (id:number)=>{
    const tag = tags.filter(tag => tag.id === id)[0]
    return tag ? tag.name : ""
  }
  // 获取该标签的图标
  const getIcon = (id:number)=>{
    const tag = tags.filter(tag => tag.id === id)[0]
    return tag ? tag.iconName : "9999"
  }
  // console.log(tags);
  return {tags,setTags,findTag,findIndex,updateTag,deleteTag,addTag,getName,getIcon}
}

export default useTags


