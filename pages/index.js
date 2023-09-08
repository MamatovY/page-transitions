import { forwardRef, useMemo } from 'react';
import PageTransition from '../components/PageTransition';

const Home = (props, ref) => {
    return (
        <PageTransition ref={ref}>
            <main className='home'>
                Home
            </main>
        </PageTransition>
    )
}

export default forwardRef(Home);