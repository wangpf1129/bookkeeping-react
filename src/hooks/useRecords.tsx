import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';
import day from 'dayjs';

export type RecordItem = {
  tagIds: number[]
  note: string
  category: '+' | '-'
  amount: number
  createdAt: string
}
// type newRecordItem = Omit<RecordItem, 'createdAt'> // 我不要 RecordItem 的 createdAt ，其他都要

const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);

  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);

  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, records);

  // 添加
  const addRecord = (newRecord: RecordItem) => {
    if (newRecord.tagIds.length === 0) {
      alert('请输入标签！');
      return false;
    }
    if (newRecord.amount <= 0) {
      alert('请输入金额！');
      return false;
    }
    // const record = {...newRecord, createdAt: (new Date()).toISOString()};
    setRecords([...records, newRecord]);
    return true;
  };

  // 获取 收入的标签
  const income = records.filter(item => item.category === '+');
  // 获取 今日收入的金额
  const incomeMoney = (today: string) => {
    const mouthIncome = income.filter(item => day(item.createdAt).format('MM') === today);
    return mouthIncome.map(item => item.amount);
  };
  // 获取总收入
  const incomeAll = income.map(item => item.amount).reduce((preMoney, amount) => {
    return preMoney += amount;
  }, 0);

  // 获取 支出的标签
  const expenses = records.filter(item => item.category === '-');
  // 获取 本月支出的金额
  const expensesMoney = (today: string) => {
    const todayExpenses = expenses.filter(item => day(item.createdAt).format('DD') === today);
    return todayExpenses.map(item => item.amount);
  };
  // 获取总收入
  const expensesALL = expenses.map(item => item.amount).reduce((preMoney, amount) => {
    return preMoney += amount;
  }, 0);
  // 获取当日的总收入或总支出
  const dayTotalList = (type:string) => {
    // 日期从大到小排
    const newList = [...records]
            .filter(r=>r.category === type)
            .sort((a, b) => day(b.createdAt).valueOf() - day(a.createdAt).valueOf());
    if (newList.length === 0) {return [];}

    type Result = { title: string, total?: number, items: RecordItem[] }[]
    const result: Result = [{title: day(newList[0].createdAt).format('YYYY-MM-DD'), items: [newList[0]]}];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (day(last.title).isSame(day(current.createdAt), 'day')) {
        last.items.push(current);
      } else {
        result.push({title: day(current.createdAt).format('YYYY-MM-DD'), items: [current]});
      }
    }
    // 将金额相加
    result.map(group =>
            group.total = group.items.reduce((sum, item) => {
              return sum + item.amount;
            }, 0));
    return  result
  };
  return {records, addRecord, incomeMoney, expensesMoney, incomeAll, expensesALL, expenses, income,dayTotalList};
};

export {useRecords};





