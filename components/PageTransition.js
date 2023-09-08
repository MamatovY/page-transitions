'use client'
import { motion } from 'framer-motion';

function PageTransition({ children, ...rest }) {
    const onTheRight = { x: '100%' };
    const inTheCenter = { x: 0 };
    const onTheLeft = { x: '-100%' };

    const transition = { duration: 0.6, ease: 'easeInOut' };

    return (
        <motion.div
            initial={onTheRight}
            animate={inTheCenter}
            exit={onTheLeft}
            transition={transition}
            {...rest}
        >
            {children}
        </motion.div>
    );
}

export default PageTransition;

// Jsx
// import React, { forwardRef, useMemo } from 'react';
// import PageTransition from '../path/to/PageTransition';

// function IndexPage(props, ref) {
//     return (
//         <PageTransition ref={ref}>
//             <div className="IndexPage">{/* ... */}</div>
//         </PageTransition>
//     );
// }

// export default React.forwardRef(IndexPage);