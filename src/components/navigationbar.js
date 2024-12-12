import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/missions">Missions</Nav.Link>
                    <Nav.Link href="/addmissions">Add Missions</Nav.Link>
                    <Nav.Link href="/aircraft">Aircraft</Nav.Link>
                    <Nav.Link href="/characters">Characters</Nav.Link>
                    <Nav.Link href="/playerlog">Player Log</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;