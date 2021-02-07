import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type RecordItem = {
  tagIds:number[]
  note:string
  category: '+' | '-'
  amount:number
  createdAt:string
}
type newRecordItem = Omit<RecordItem, "createdAt"> // 我不要 RecordItem 的 createdAt ，其他都要

const useRecords =() => {
  const [records,setRecords] =useState<RecordItem[]>([])

  useEffect(()=>{
    setRecords(JSON.parse(window.localStorage.getItem('records') || "[]"))
  },[])

  useUpdate(()=>{
    window.localStorage.setItem('records',JSON.stringify(records))
  },[records])

  const addRecord = (newRecord:newRecordItem )=>{
    if(newRecord.tagIds.length === 0){
      alert("请输入标签！")
      return  false
    }
    if(newRecord.amount <= 0){
      alert("请输入金额！")
      return false
    }
    const record = {...newRecord,createdAt:(new Date()).toISOString()}
    setRecords([...records,record])
    return  true
  }

  return {records,addRecord}
}

export  {useRecords}

