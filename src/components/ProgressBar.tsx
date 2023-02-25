import React, { FC, useEffect } from 'react'
import useStorage from '../hooks/useStorage'

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
        <div className='progress-bar' style={{ width: progress + '%' }}>
            progress
        </div>
    )
}

export default ProgressBar