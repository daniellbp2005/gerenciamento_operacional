import './sidebar.css'
export default function SideBar() {
    return (
        <div
            className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark fixed-top h-100 side-width"
        >

            <ul className="nav nav-pills flex-column mb-auto mt-2">
                <li className="">
                    <a
                        href="/"
                        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none header-link"
                    >
                        <span className="pl-4 fs-5 text-light border-bottom border-secondary">Eventos Musicais</span>
                    </a>
                </li>
                {" "}
                <li className="nav-item">
                    {" "}
                    <a href="#" className="nav-link active" aria-current="page">
                        {" "}
                        <svg
                            className="bi pe-none me-2"
                            width={16}
                            height={16}
                            aria-hidden="true"
                        >
                            <use xlinkHref="#home" />
                        </svg>
                        Home
                    </a>{" "}
                </li>{" "}
                <li>
                    {" "}
                    <a href="#" className="nav-link text-white">
                        {" "}
                        <svg
                            className="bi pe-none me-2"
                            width={16}
                            height={16}
                            aria-hidden="true"
                        >
                            <use xlinkHref="#speedometer2" />
                        </svg>
                        Eventos
                    </a>{" "}
                </li>{" "}
                <li>
                    {" "}
                    <a href="#" className="nav-link text-white">
                        {" "}
                        <svg
                            className="bi pe-none me-2"
                            width={16}
                            height={16}
                            aria-hidden="true"
                        >
                            <use xlinkHref="#table" />
                        </svg>
                        Editar
                    </a>{" "}
                </li>{" "}
                <li>
                    {" "}
                    <a href="#" className="nav-link text-white">
                        {" "}
                        <svg
                            className="bi pe-none me-2"
                            width={16}
                            height={16}
                            aria-hidden="true"
                        >
                            <use xlinkHref="#grid" />
                        </svg>
                        Ciar
                    </a>{" "}
                </li>{" "}
            </ul>{" "}
            <hr />{" "}
            <div className="dropdown">
                {" "}
                <a
                    href="#"
                    className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    {" "}
                    <img
                        src="https://github.com/mdo.png"
                        alt=""
                        width={32}
                        height={32}
                        className="rounded-circle me-2"
                    />{" "}
                    <strong>Usuário</strong>{" "}
                </a>{" "}
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    {" "}
                    <li>
                        <a className="dropdown-item" href="#">
                            Sign out
                        </a>
                    </li>{" "}
                </ul>{" "}
            </div>{" "}
        </div>

    )
}