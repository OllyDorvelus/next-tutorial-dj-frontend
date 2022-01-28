import React from 'react'
import Head from 'next/head'
import Header from '@/components/header';
import Footer from '@/components/footer';
import styles from '@/styles/Layout.module.css';
import Showcase from '@/components/showcase';
import { useRouter } from 'next/router'

export default function Layout({ title, keywords, description, children }) {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>
            <Header />
            {router.pathname === '/' && <Showcase />}
            <div className={styles.container}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'DJ Events | Find the hottest parites',
    description: 'Find the latest DJ and other musical events',
    keywords: 'music, dj, edm, events'
}