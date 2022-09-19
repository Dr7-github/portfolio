import {motion,AnimatePresence} from 'framer-motion'
import {useRouter} from 'next/router'

import '../styles/transition.module.css'

const Transition = ({children}) =>{
    const {asPath} = useRouter()

    return(
        <div className='effect-1'>
            <AnimatePresence
                initial={false}
                exitBeforeEnter
            >
                <motion.div
                    key={asPath}
                    variants={variants}
                    animate='in'
                    initial='out'
                    exit='out'
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

const variants = {
    out:{
        opacity:0,
        y:40,
        transition:{
            duration:1,
            ease:'easeInOut'
        }
    },
    in:{
        opacity:1,
        y:0,
        transition:{
            duration:0.75,
            delay:0.5
        }
    },
}

export default Transition