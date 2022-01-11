import * as React from 'react';

//import App from './App'

import * as C from './App.styles';

import {useState, useEffect} from 'react';

import {Item} from './types/Item';

import {Category} from './types/Category';

import {categories} from './data/categories';

import {items} from './data/items';

import {getCurrentMonth, filterListByMonth} from './Filterhelp/dataFilter'

import {TableArea} from './components/TableArea'

 const App=()=> {
//criando o state de list
const [list, setList]= useState(items);
//crianod o state para filtrar  list
const [filteredList, setFilteredList]=useState<Item[]>([]);

const [currentMonth, setCurrentMonth]=useState(getCurrentMonth());
//funçao paraa monitorar e set a list
useEffect(()=>{
 setFilteredList (filterListByMonth(list, currentMonth))
 
},[list, currentMonth]);

  return (
   <C.Container>
    <C.Header>
      <C.HeaderText>Sistema Financeiro</C.HeaderText>
        </C.Header>
      <C.Body>
    
<TableArea list={filteredList}/>
      
      </C.Body>
   </C.Container>
  )
}

export default App;