import React, {useEffect, useRef} from 'react';
import echarts from 'echarts';


const  Chart = (props:any) =>{
  const {option} = props
  const containerRef = useRef<HTMLDivElement>(null)
  const chart = useRef(option)
  useEffect(()=>{
    if(containerRef.current !== null){
      const  width = document.documentElement.clientWidth
      containerRef.current.style.width = `${width-20}px`
      containerRef.current.style.height = `${(width-20)*1.2}px`
      chart.current = echarts.init(containerRef.current)
    }
  },[])
  useEffect(()=>{
      chart.current.setOption(option)
  },[option])
  return (
          <div ref={containerRef}>
          </div>
  )
}

export  {Chart}