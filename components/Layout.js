import Head from "next/head"
import Header from "./Navbar/Header"
import Showcase from "./Showcase"
import Footer from "./Footer"
import {useRouter} from "next/router"

import styles from "@/styles/Layout.module.css"



export default function Layout({title, keywords, description, children}) {

    const router = useRouter()


    return (
        <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
        </Head>

        <Header/>
        {router.pathname === '/' && <Showcase/>}
            <div className={styles.container}>
                {children}
            </div>
        <Footer/>
        </>
    )
}


Layout.defaultProps = {
    title: '',
    description: '',
    keywords: ''
}

// Purposely provoking confidence in your identity through wisdom and truth!