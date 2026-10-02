import './header.css';
import { LogOut } from 'lucide-react'

export default function Header() {
    return (
        <section     className="container-fluid flex-wrap">
            <header className="d-flex flex-wrap justify-content-center py-3 border-bottom border-secondary">
                <a
                    href="/"
                    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none header-link"
                >
                    <svg className="bi me-2" width={40} height={32}>
                        <use xlinkHref="#bootstrap" />
                    </svg>
                    
                </a>
                <ul className="nav nav-pills d-flex gap-2">
                    <li className="nav-item">
                        <a href="#" className="nav-link bg-danger d-flex gap-2 text-light header-link" aria-current="page">
                            <span>Sair</span><LogOut />
                        </a>
                    </li>
                </ul>
            </header>
        </section>
    )
}