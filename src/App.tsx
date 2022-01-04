import * as React from 'react'
import {useState} from 'react'

import * as C from './App.styles'
//import './App.css'

import {Item} from './types/Category';
import {Category} from './types/Category';

import {categories} from '../data/category';
import {items} from './data/Items';


const function App=()=> {

const [list, setListe]= useState(items)
const [currentMonth, setCurrentMonth]=useState();


  return (
   <C.Container>
    <C.Header>
      <C.HeaderText>Sistema financeiro</C.HeaderText>
      <C.Body>
    
      </C.Body>
    </C.Header>
   </C.Container>

  )
}