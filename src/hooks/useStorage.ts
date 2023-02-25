import { useState, useEffect } from 'react'
import { projectStorage } from '../firebase/config'

const useStorage = (file: any) => {
    const [progress, setProgress] = useState<number>(0)
    const [error, setError] = useState<null>(null)
    const [url, setUrl] = useState<null>(null)

    useEffect(() => {
        // references ссылка на файл внутрки корзины
        const storageRef = projectStorage.ref(file.name)

        storageRef.put(file).on('state_change', (snap: any) => {
            // Progress bar
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage)
        }, (err: any) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownLoadURL()
            setUrl(url)
        })
    }, [file])

    return { progress, url, error }
}

export default useStorage

