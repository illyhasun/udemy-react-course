import { useState } from 'react'

import Modal from './Modal'
import Backdrop from './Backdrop'

export default function Todo(props) {

    const [modalOpen, setModalOpen] = useState(false)

    const deleteHandler = () => {
        setModalOpen(true)
    }
    const closeHandler = () => {
        setModalOpen(false)
    }

    return (
        <div>
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {modalOpen && <Modal onCancel={closeHandler} onConfirm={closeHandler} />}
            {modalOpen && <Backdrop onClose={closeHandler}/>}
        </div>

    )
}
