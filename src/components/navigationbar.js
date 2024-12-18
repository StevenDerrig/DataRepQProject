//Navigation bar component
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

//Link the navigation bar to the different pages
const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/missions">Missions</Nav.Link>
                    <Nav.Link href="/addmissions">Add Missions</Nav.Link>
                    <Nav.Link href="/aircraft">Aircraft</Nav.Link>
                    <Nav.Link href="/addaircraft">Add Aircraft</Nav.Link>
                    <Nav.Link href="/characters">Characters</Nav.Link>
                    <Nav.Link href="/addcharacter">Add Character</Nav.Link>
                    <Nav.Link href="/playerlog">Player Log</Nav.Link>
                    <Nav.Link href="/addplayerlog">Add Player Log</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;