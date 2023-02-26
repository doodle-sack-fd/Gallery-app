import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection: any) => {
    const [docs, setDocs] = useState<any>([])

    useEffect(() => {
        const unsubscribe = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents: any[] = [];
                snap.forEach(doc => {
                    documents.push({ ...doc.data(), id: doc.id })
                    setDocs(documents)
                })
            })
        return () => unsubscribe()
    }, [collection])

    return { docs }
}

export default useFirestore