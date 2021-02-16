import {RecordItem} from 'hooks/useRecords';

type callback = (id: number) => string;
const getData = (x:RecordItem[],y:number,fn:callback)=>{
  // 获得支出的ID，根据ID来选出 标签名 和 amount
  const expensesID = x.map(item => item.tagIds);
  const expensesAmount = x.map(item=>item.amount)
  const arrayName = []
  const arrayPer = []
  for (let i = 0; i < expensesID.length; i++) {
    arrayName.push(fn(expensesID[i][0]))
    arrayPer.push(((expensesAmount[i] / y)*100).toFixed(2)+'%')
  }
  const valueAndName:any[]= []
  for(let i =0;i<arrayName.length;i++){
    valueAndName[i] =  {
      value: expensesAmount[i], name: arrayName[i],
      label: {color: '#000'}, labelLine: {lineStyle: {color: '#000'}}
    }
  }
  return valueAndName
}

export  {getData}