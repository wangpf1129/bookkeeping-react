import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';
import day from 'dayjs'
export type RecordItem = {
  tagIds: number[]
  note: string
  category: '+' | '-'
  amount: number
  createdAt: string
}
type newRecordItem = Omit<RecordItem, 'createdAt'> // 我不要 RecordItem 的 createdAt ，其他都要

const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);

  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);

  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, records);

  // 添加
  const addRecord = (newRecord: newRecordItem) => {
    if (newRecord.tagIds.length === 0) {
      alert('请输入标签！');
      return false;
    }
    if (newRecord.amount <= 0) {
      alert('请输入金额！');
      return false;
    }
    const record = {...newRecord, createdAt: (new Date()).toISOString()};
    setRecords([...records, record]);
    return true;
  };

  // 获取 支出的标签
  const income = records.filter(item => item.category === '-');
  // 获取 今日支出的金额
  const incomeMoney = (today:string)=>{
   const todayIncome = income.filter(item => day(item.createdAt).format('DD') === today)
    return  todayIncome.map(item => item.amount)
  }
  // 获取 收入的标签
  const expenses = records.filter(item => item.category === '+');
  // 获取 本月收入的金额
  const expensesMoney = (today:string)=>{
    const mouthExpenses =  expenses.filter(item => day(item.createdAt).format('MM') === today)
    return  mouthExpenses.map(item => item.amount)
  }

  return {records, addRecord,incomeMoney,expensesMoney};
};

export {useRecords};





