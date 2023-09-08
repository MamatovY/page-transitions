import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import Header from '../components/header'
import '../global.css'

export default function App({ Component, pageProps }) {
    const router = useRouter()

    return (
        <AnimatePresence initial={false} mode="popLayout">
            <Header />
            <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
    )
}