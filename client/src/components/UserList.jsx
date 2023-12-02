import NewUser from "./NewUser"
import Pagination from "./Pagination"
import Search from "./Search"
import UserListTable from "./USerListTable"

export default function UserList() {
    return (
        // < !--Section component-- >
        <section className="card users-container">
            {/* <!-- Search bar component --> */}
            <Search />

             {/* <!-- Table component --> */}
            <UserListTable />

            {/* <!-- New user button  --> */}
            <NewUser />

            {/* <!-- Pagination component  --> */}
            <Pagination />
        </section>
    )
}