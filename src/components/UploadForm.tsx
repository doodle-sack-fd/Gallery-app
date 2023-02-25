import { FC, PropsWithChildren, useState } from 'react'

const UploadForm: FC<PropsWithChildren> = () => {

    const [file, setFile] = useState<any | null>(null)
    const [error, setError] = useState<string | null>(null)
    const types = ['image/png', 'image/jpeg']

    const changeHandler = (evt: any) => {

        evt.preventDefault();
        const selected = evt.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setError(null)
        } else {
            setFile(null)
            setError('Please select an image file (png or jpeg)')
        }
    }

    return (
        <form>
            <input type="file" onChange={changeHandler} />
            {error && <div><>{error}</></div>}
            {file && <div><>{file.name}</></div>}
        </form>
    )
}

export default UploadForm