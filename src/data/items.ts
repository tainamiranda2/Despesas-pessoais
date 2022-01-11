import React from 'react'

import {Item} from '../types/Item'

export const items: Item[]=[

  {date: new Date(2022, 2, 12),
   category: 'roupas', title: 'vestido', value: 150.00
  },

  {date: new Date(2022, 2, 16),
   category: 'cartao', title: 'nubank', value: 50.00
  },

  {date: new Date(2022, 2, 18), category: 'rent', title: 'Transporte', value: 150.00 },

  {date: new Date(2022, 12, 8), category: 'salary', title: 'Salário', value: 600.00 },

];
