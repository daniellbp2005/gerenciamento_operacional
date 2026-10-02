import './footer.css';

export default function Footer() {
    return (
        <div className="container-fluid">
            
            <footer className="d-flex flex-wrap justify-content-between align-items-center p-3 my-4 border-top border-secondary">
                
                <p className="col-md-4 mb-0 text-light">
                    © 2025 Company, Inc
                </p>
                <a
                    href="/"
                    className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
                    aria-label="Bootstrap"
                >
                    
                    <svg className="bi me-2" width={40} height={32} aria-hidden="true">
                        <use xlinkHref="#bootstrap" />
                    </svg>
                </a>
                <ul className="nav col-md-4 justify-content-end ">
                    
                    <li className="nav-item ">
                        <a href="#" className="nav-link px-2 text-light footer-link">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-light footer-link">
                            Features
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-light footer-link">
                            Pricing
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-light footer-link">
                            FAQs
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-light footer-link">
                            About
                        </a>
                    </li>
                </ul>
            </footer>
        </div>

    )
}