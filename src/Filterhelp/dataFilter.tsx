import {Item} from '../types/Item';
//funções para facilitar a amnutenção do código
export const getCurrentMonth=()=>{
  let now=new Date();
  return `${now.getFullYear()}-${now.getMonth()+1}`;
  
}

//função para monitorar a mudança de mes e monitorar a list ou o item

export const filterListByMonth=(list: Item[], date:string): Item[]=>{
    let newList: Item[]=[];
    //gerar array de ano e mes
    let[year, month] = date.split('-');
//loop para verificar a list geral
  for(let i in list){
    if(list[i].date.getFullYear()===parseInt(year)&& 
    (list[i].date.getMonth()+1)===parseInt(month)
    
    ){
      newList.push(list[i]);
    }
  }
return newList;
}