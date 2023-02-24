import { FC, PropsWithChildren, useState } from 'react'
import { ISubmit } from '../hooks/sumt'

const UploadForm: FC<PropsWithChildren<ISubmit> = () => {

    // const { error, files } = useTypedSelector(state => state.files)

    const [file, setFile] = useState<ISubmit | null>(null)
    const [error, setError] = useState<ISubmit | string>('')
    const er = 'er'
    const types = ['image/png', 'image/jpeg']

    const changeHandler = (evt: any) => {

        evt.preventDefault();
        const selected = evt.target.files[0];
        // const localImageUrl = window.URL.createObjectURL(selected);

        if (selected && types.includes(selected.type)) {
            setFile(selected)
        } else {
            setFile(null)
            setError('Please select an image file (png or jpeg)')
        }
    }




    return (
        <form>
            <input type="file" onChange={changeHandler} />
        </form>
    )
}

export default UploadForm