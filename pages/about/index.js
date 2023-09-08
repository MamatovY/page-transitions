import { forwardRef, useMemo } from 'react';
import PageTransition from '../../components/PageTransition';

const About = (props, ref) => {
    return (
        <PageTransition ref={ref}>
            <main className='about'>
                About
            </main>
        </PageTransition>
    )
}

export default forwardRef(About);