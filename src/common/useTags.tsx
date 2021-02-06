import {useState} from 'react';

const useTags = ()=>{
  const [tags,setTags] = useState<string[]>(["餐饮","娱乐","日用","通讯","果蔬","交通"])
  return {tags,setTags}
}

export default useTags