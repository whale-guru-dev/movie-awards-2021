import Image from 'next/image'
import { FormEvent } from 'react'
import Card from '../interfaces/Card'
import styles from '../styles/Home.module.css'

const myLoader = ({ src, width, quality }: { src: string, width: number | undefined, quality: number | undefined }) => {
    return `${src}?w=${width}&q=${quality || 100}`
}

export default function CardContainer({ card, isSelected, setSelected }: { card: Card, isSelected: boolean, setSelected: Function }) {
    const handleClick = (e: FormEvent) => {
        e.preventDefault()
        setSelected(card.title)
    }

    return (
        <div className={`${styles.card} ${isSelected ? styles.selected : ''}`}>
            <h4>{card.title}</h4>
            <Image
                loader={myLoader}
                src={card.photoUrL}
                alt={card.title}
                width={100}
                height={100}
            />
            <button onClick={(e) => handleClick(e)}>Select Button</button>
        </div>
    )
}