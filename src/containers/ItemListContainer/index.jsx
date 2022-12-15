import React from 'react'
import Item from '../../components/Item';
import './styles.scss'

const ItemListContainer = () => {
  return (
    <div className='item-list-container'>
        <Item title={"Titulo 1"}/>
        <Item title={"Titulo 2"}/>
        <Item title={"Titulo 3"}/>
        <Item title={"Titulo 4"}/>
        <Item title={"Titulo 5"}/>
    </div>
  )
}

export default ItemListContainer