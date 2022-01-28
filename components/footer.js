import React from 'react'
import Link from 'next/link'
import styles from '../styles/Footer.module.css';

export default function footer() {
    return (
        <footer className={styles.footer}>
            <p>Copyright &copy; DJ Events</p>
            <p>
                <Link href='/about'>About This Project</Link>
            </p>
        </footer>
    )
}
