import { FC, useState } from 'react'
import ProgressBar from './ProgressBar'



const UploadForm: FC = () => {

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
            <label htmlFor="">
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>
            {error && <div><>{error}</></div>}
            {file && <div><>{file.name}</></div>}
            {file && <ProgressBar file={file} setFile={setFile} />}
        </form>
    )
}

export default UploadForm