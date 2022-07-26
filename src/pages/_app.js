import '../../styles/globals.css'
import Head from 'next/head'
import Header from "../components/Header"

export default function MyApp({ Component, pageProps }) {
    return <div className="flex flex-col h-screen">
        <Head>
            <title>Sky</title>
        </Head>
        <Header/>
        <Component {...pageProps} />
    </div>
}