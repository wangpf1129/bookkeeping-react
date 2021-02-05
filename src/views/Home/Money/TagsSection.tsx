import styled from 'styled-components';
import Icon from 'components/Icon';
import React, { useState} from 'react';

const Wrapper = styled.section`
   padding: 20px 38px;   
   >ol {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-right: -24px;
    >li{
      background-color:#eee;
      border-radius: 10px;
      box-shadow: 2px 3px 4px #ddd;
      padding: 10px;
      margin-top: 24px;
      margin-right: 12px;
      display:flex;
      flex-direction: column;
      text-align: center;
      font-size: 12px;
      >span{padding-top: 5px}
      .icon{
        width: 28px;
        height: 28px;
        fill:rgba(0,0,0,.6)
      }
    }
    .selected{
      background-color:#a1ddd4;
      box-shadow: 1px 2px 2px #ddd;
    } 
  }
`;

type Props = {
  value:string[],
  onChange:(value:string[])=>void
}
const TagsSection:React.FC<Props>=(props)=> {
  const [tags,setTags] = useState<string[]>(["餐饮","娱乐","日用","通讯","果蔬","交通"])
  const selectedTags = props.value
  const toggleTag = (tag:string)=>{
    return ()=>{
      const index = selectedTags.indexOf(tag)
      if(index >= 0){
        // 如果 该 tag被选中，就复制所有没有被选中的 tag 作为新的 selectedTag
        props.onChange(selectedTags.filter(item => item !== tag))
      }else{
        props.onChange([tag])
      }
    }
  }

  const addTag = ()=>{
    const tagName = window.prompt("请输入你想要添加的标签")
    if(tagName !== null){
      setTags([...tags,tagName])
    }
  }

  return (
        <Wrapper>
          <ol>
            {tags.map((tag)=>{
              return (
                <li key={tag} onClick={toggleTag(tag)} className={selectedTags.indexOf(tag) >= 0 ? "selected" : ""}>
                 <Icon name={tag}/>
                 <span>{tag}</span>
              </li>)
            })}
            <li onClick={addTag}>
              <Icon name="add"/>
              <span>设置</span>
            </li>
          </ol>
        </Wrapper>
)
}
export {TagsSection}