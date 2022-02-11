import { useState, useEffect } from 'react'
import Card from '../interfaces/Card'
import Category from '../interfaces/Category'
import CardContainer from './CardContainer'
import styles from '../styles/Home.module.css'

export default function CategoryContainer({ category, reset }: { category: Category, reset: boolean }) {
    const [selected, setSelected] = useState('')
    useEffect(() => {
        if (reset) {
            setSelected('')
        }
    }, [reset])

    return (
        <div>
            <p className={styles.category_title}>{category.title}</p>
            <div className={styles.card_container}>
                {
                    category.items.map((card: Card, index) => (
                        <CardContainer 
                            key={index}
                            card={card}
                            isSelected={card.title === selected}
                            setSelected={(value: string) => setSelected(value)}
                        />
                    ))
                }
            </div>
            <input type="hidden" name={category.title} value={selected || ''} />
        </div>
    )
}