import React from 'react';
import * as C from './styles'
import {formatCurrentMonth} from '../../Filterhelp/dataFilter'

type Props ={
  currentMonth: string;
  onMonthChange:(newMonth: string)=> void;
}


export const InfoArea=({currentMonth, onMonthChange}: Props)=>{

const handlePreviMonth=()=>{
let [year, month]
=currentMonth.split('-')
let currentDate=new Date(parseInt(year), parseInt(month)-1, 1)
currentDate.setMonth(currentDate.getMonth()-1)
onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`)

}

const handleNextMonth=()=>{
let [year, month]
=currentMonth.split('-')
let currentDate=new Date(parseInt(year), parseInt(month)-1, 1)
currentDate.setMonth(currentDate.getMonth()+1)
onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`)

}

  return (

   <C.Container>
   <C.MonthArea>

   <C.MonthArrow onClick={handlePreviMonth}>⬅️</C.MonthArrow>

<C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
 
   <C.MonthArrow  onClick={handleNextMonth}>➡️</C.MonthArrow>

   </C.MonthArea>

   <C.ResumeArea>

   </C.ResumeArea>
   </C.Container>
    )
}