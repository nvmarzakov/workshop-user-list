import { useState } from "react"
import CreateUserModal from "./CreateUserModal"

export default function NewUser() {
    const [showCreateModal, setShowCreateModal] = useState(false)


    const createUserClickHandler = () => {
        setShowCreateModal(true);
    }

    const hideCreateUserModal = () => {
        setShowCreateModal(false)
    }

    return (
        <div>
            <button className="btn-add btn" onClick={createUserClickHandler}>Add new user</button>

            {showCreateModal && <CreateUserModal hideModal={hideCreateUserModal} />}
        </div>
    )
}