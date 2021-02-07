import {useEffect, useRef} from 'react';


const useUpdate = (fn: () => void,deps:any[]) => {
  const count = useRef(0)
  useEffect(()=>{
    count.current += 1;
  });
  useEffect(()=>{
    if(count.current > 1){  // 不要第一次渲染， 因为第一次渲染是 空数组
      fn();
    }
  },[fn,deps]);
};

export  {useUpdate}
