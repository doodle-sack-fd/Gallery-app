import React, { FC, useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import { motion } from 'framer-motion'

interface IProgressBarProp {
    setFile: any,
        file: any;
}

const ProgressBar: FC<IProgressBarProp> = ({ file, setFile }) => {
    const { url, progress } = useStorage(file)

    useEffect(() => {
        if (url) {
            setFile(null)
        }
    }, [url, setFile])

    return (
        <motion.div className='progress-bar' initial={{width: 1}} animate={{width: progress + '%'}}>
            progress
        </motion.div>
    )
}

export default ProgressBar