export default function Header() {
    return (
        <section className="container-fluid flex-wrap">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-2 border-bottom">
                <a
                    href="/"
                    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
                >
                    <svg className="bi me-2" width={40} height={32}>
                        <use xlinkHref="#bootstrap" />
                    </svg>
                    <span className="fs-4 text-light">Eventos Musicais</span>
                </a>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a href="#" className="nav-link active text-light" aria-current="page">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-light">
                            Features
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-light">
                            Pricing
                        </a>
                    </li>
                </ul>
            </header>
        </section>
    )
}