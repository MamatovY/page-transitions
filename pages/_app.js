import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
    const router = useRouter()

    return (
        <AnimatePresence initial={false} mode="popLayout">
            <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
    )
}