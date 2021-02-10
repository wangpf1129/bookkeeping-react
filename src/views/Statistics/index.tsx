import Layout from 'components/Layout';
import React from 'react';
import {TypeSection} from 'components/TypeSection';
import {useRecords} from 'hooks/useRecords';
import useTags from 'hooks/useTags';
import  day from 'dayjs'
import styled from 'styled-components';
import Icon from '../../components/Icon';


const RecordList = styled.section`
 display:flex;
 flex-direction: column;
 justify-content: center;
`
const RecordItem = styled.div`
  background-color:#f9faf5;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
  }
  .left{
    padding-right: 10px;
    .icon{ 
      width: 38px;
      height: 38px;
    }
  }
  .center{
    flex: 1;
    display: flex;
    flex-direction: column;
    .nameSpan{
      font-size: 18px;
      font-weight: 700;
    }
    .noteSpan{
      margin-top: 8px;
      color: #666; 
      font-size: 14px;
    }
  }
  .right {
    .amountSpan{
      font-size: 18px;
      font-weight: 700;
    }
  }
  
`
const Statistics: React.FC = () => {
  const {records} =useRecords()
  const {getName,getIcon} = useTags()
  return (
          <Layout name="统计">
            <TypeSection/>
            <RecordList>
              {records.map((item,index) => {
                  return (
                          <RecordItem key={index}>
                            <div className="left">
                              {item.tagIds.map(tagId=> <span key={tagId}>
                                <Icon name={getIcon(tagId)}/>
                              </span>)}
                            </div>
                            <div className="center">
                              {item.tagIds.map(tagId=> <span key={tagId} className="nameSpan">{getName(tagId)}</span>)}
                              <span className="noteSpan">{item.note || "无备注"}</span>
                            </div>
                            <div className="right">
                              <span className="amountSpan">￥{item.amount}</span>
                            </div>
                          </RecordItem>

                  )
              })}
            </RecordList>
          </Layout>
  );
};
export default Statistics;
