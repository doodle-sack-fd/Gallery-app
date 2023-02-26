import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore, timeStamp } from '../firebase/config'

const useStorage = (file: any) => {
    const [progress, setProgress] = useState<number>(0)
    const [error, setError] = useState<null>(null)
    const [url, setUrl] = useState<null | string>(null)

    useEffect(() => {
        // references ссылка на файл внутрки корзины
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFirestore.collection('images');

        storageRef.put(file).on('state_change', (snap: any) => {
            // Progress bar
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage)
        }, (err: any) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL()
            const createdAt = timeStamp()
            collectionRef.add({
                url,
                createdAt,
            })
            setUrl(url)
        })
    }, [file])

    return { progress, url, error }
}

export default useStorage

