import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import Link from 'next/link'

const MainNav = () => {
  return (
    <>
        <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className="me-auto">
                        <Link href='/advertisements'>Advertisements</Link>
                        <Link href='/viewInquiries'>View inquiries</Link>
                        <Link href='/invoices'>Invoices</Link>
                        <Link href='/myPersonalData'>My personal data</Link>
                        <Link href='/referaFriend'>Refer a friend</Link>
                        <Link href='/help'>Help</Link>
                        <NavDropdown 
                            title="Dropdown" 
                            id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  );
}

export default MainNav;