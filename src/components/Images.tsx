import React, { FC } from 'react'
import useFirestore from '../hooks/useFirestore'
import { motion } from 'framer-motion'

interface Iimg {
    setSelectedImg: any,
}

const Images: FC<Iimg> = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images')
    console.log(docs)
    return (
        <div className='img-grid'>
            {docs && docs.map((doc: any) => (
                <motion.div onClick={() => setSelectedImg(doc.url)} className='img-wrap' key={doc.id} whileHover={{ opacity: 1 }} layout>
                    <motion.img src={doc.url} alt="images" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{delay: 1}} />
                </motion.div>
            ))}
        </div>
    )
}

export default Images