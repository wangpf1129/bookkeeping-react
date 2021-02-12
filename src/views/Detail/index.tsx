import Layout from 'components/Layout';
import React, {useState} from 'react';
import {RecordItem, useRecords} from 'hooks/useRecords';
import useTags from 'hooks/useTags';
import day from 'dayjs';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {TypeSection} from 'components/TypeSection';
import {CategorySection} from '../Home/Money/section/CategorySection';
import {MoneyLink} from 'components/MoneyLink/MoneyLink';

const DateDiv = styled.div`
  font-size: 16px;
  color: #9ccac0;
  font-weight: 700;
  padding: 10px;
`;
const RecordList = styled.section`
 margin: 14px;
 display:flex;
 flex-direction: column;
 justify-content: center;
`;
const RecordItems = styled.div`
  background-color:#f9faf5;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
  }
  .left{
    padding-right: 10px;
    .icon{ 
      width: 42px; 
      height: 42px;
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
    display: flex;
    flex-direction: column;
    .amountSpan{
      font-size: 18px;
      font-weight: 700;
    }
    .dateSpan{
      margin-top: 8px;
      color: #666; 
      font-size: 14px;
      text-align: right;
    }
  }
  
`;
const IconDiv = styled.div`
 .icon{
  width: 148px;
  height: 148px;
 }
 margin-top: 80px;
 padding: 20px;
 text-align: center;
 font-size: 24px; 
`;

const Detail: React.FC = () => {

  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName, getIcon} = useTags();

  const hash: { [key: string]: RecordItem[] } = {};
  const selectedRecords = records.filter(r => r.category === category);
  selectedRecords.map(r => {
    const key = day(r.createdAt).format('YYYY-MM-DD');
    // const key = r.createdAt;
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
    return hash;
  });
  // 把对象变为数组
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });

  return (
          <Layout name="明细">
            <TypeSection>
              <CategorySection value={category}
                               onChange={value => setCategory(value)}
              />
            </TypeSection>
            {array.length === 0 ?
                    <IconDiv><Icon name="none"/><MoneyLink/></IconDiv>
                    : array.map(([date, records], index) => {
                      return (
                              <div key={index}>
                                <DateDiv>{date}</DateDiv>
                                <RecordList>
                                  {records.map((item, index) => {
                                    return (
                                            <RecordItems key={index}>
                                              <div className="left">
                                                {item.tagIds.map(tagId => <span key={tagId}>
                                                  <Icon name={getIcon(tagId)}/>
                                                </span>)}
                                              </div>
                                              <div className="center">
                                                {item.tagIds.map(tagId =>
                                                        <span key={tagId} className="nameSpan">{getName(tagId)}</span>)}
                                                <span className="noteSpan">{item.note || '无备注'}</span>
                                              </div>
                                              <div className="right">
                                                <span className="amountSpan">￥{item.amount}</span>
                                                <span className="dateSpan">
                                                  {day(item.createdAt).format('HH:mm')}
                                                </span>
                                              </div>
                                            </RecordItems>
                                    );
                                  })}
                                </RecordList>
                              </div>
                      );
                    })
            }
          </Layout>
  );
};
export default Detail;
