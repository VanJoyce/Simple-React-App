import "../style.css";
import { Nav } from "react-bootstrap";

function Navigation() {
    return (
        <>
            <Nav className="navigation">
                <Nav.Link href="/">Dashboard</Nav.Link>
                <Nav.Link href="/users">Users</Nav.Link>
                <Nav.Link href="/cars">Cars</Nav.Link>
                <Nav.Link href="/availability">Availability</Nav.Link>
            </Nav>
        </>
    );
}

export default Navigation;
