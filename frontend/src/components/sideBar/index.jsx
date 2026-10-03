'use client'
import './sidebar.css'
import { House, CalendarDays, SquarePen, CirclePlus } from 'lucide-react';
import Logo from '../Logo';
import { usePathname } from 'next/navigation';

export default function SideBar() {
    const url = usePathname();
    return (
        <div
            className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark fixed-top h-100 side-width"
        >

            <ul className="nav nav-pills flex-column mb-auto mt-2 gap-1">
                <li className="">
                    <a
                        href="/"
                        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
                    >
                        <span className="py-2"> <Logo /> </span>
                    </a>
                </li>
                {" "}
                <li className="nav-item">
                    {" "}
                    <a href="/" className={`nav-link d-flex flex-col align-items-center gap-2 text-light ${url === "/" ? "active" : null}`} aria-current="page">
                        <House size={18} />
                        <span>Home</span>
                    </a>{" "}
                </li>{" "}
                {/* <li>
                    {" "}
                    <a href="/Eventos" className={`nav-link d-flex flex-col align-items-center gap-2 text-light ${url === "/Eventos" ? "active" : null}`}>
                        {" "}
                        <CalendarDays size={18} />
                        <span>Eventos</span>
                    </a>{" "}
                </li>{" "} */}
                <li>
                    {" "}
                    <a href="/Editar" className={`nav-link text-white d-flex flex-col align-items-center gap-2 text-light ${url === "/Editar" ? "active " : null}`}>
                        {" "}
                        <SquarePen size={18} />
                        <span>Editar</span>
                    </a>{" "}
                </li>{" "}
                <li>
                    {" "}
                    <a href="/Criar" className={`nav-link text-white d-flex flex-col align-items-center gap-2 text-light ${url === "/Criar" ? "active" : null}`}>
                        <CirclePlus size={18} />
                        <span>Ciar</span>
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