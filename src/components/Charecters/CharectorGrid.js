import React from 'react'
import CharecterItem from './CharecterItem';
import Spinner from '../ui/Spinner';

const CharectorGrid = ({items, isLoading}) => {
    return isLoading ? (
    <Spinner />
    ): (
        <section className="cards">
        {items.map((item) => (
            <CharecterItem key={item.char_id} item={item}></CharecterItem>
        ))}
    </section>
    )
}

export default CharectorGrid
