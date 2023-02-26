import React, { FC } from 'react'
import { motion } from 'framer-motion'

interface IBigImgSelected {
    selectedImg: string,
    setSelectedImg: any
}

const BigModalImg: FC<IBigImgSelected> = ({ selectedImg, setSelectedImg }) => {

    const closeModalWindow = (evt: any) => {
        if (evt.target.classList.contains('backdrop')) {
            setSelectedImg(null)
        }
    }

    return (
        <motion.div onClick={closeModalWindow} className='backdrop' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <motion.img src={selectedImg} alt="bigImage" initial={{y: '-100vh'}} animate={{y: 0}}/>
        </motion.div>
    )
}

export default BigModalImg