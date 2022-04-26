import React from 'react'
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, NavDropdown, Container, Modal } from 'react-bootstrap';
import Circle from "../../img/Cricle.png"
import Teams from "../../img/Teams.jpg"
import Time from "../../img/Timesheet.png"

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
  }
  handleModal() {
    this.setState({ show: !this.state.show })
  }
  render() {
    return (
      <><div className='App'>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <button aria-expanded="true" type="button" aria-haspopup="true" className='btn'><i class="material-icons">&#xe5c3;</i></button>
            <div className='icon'>
              <i class="fab fa-jira"></i>
            </div>
            <Navbar.Brand href="https://test8179.atlassian.net/jira/your-work">Jira Software</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <NavDropdown title="Your Work" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Projects" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Filters" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="DashBoards" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="People" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                </NavDropdown>

                <div className='apps'>
                  <NavDropdown title="Apps" id="navbarScrollingDropdown">
                    <div><h6>RECOMMEDED FOR YOUR TEAM</h6></div>
                    <small>Ship faster with marketplace apps that integrate your team's tool with Jira.</small>
                    {/* <div className='dropdown-item'><h6>RECOMMEDED FOR YOUR TEAM</h6></div>
                    <small className='dropdown-item'>Ship faster with marketplace apps that integrate your team's tool with Jira.</small> */}
                    <NavDropdown.Item className='nav-item'
                      href="https://test8179.atlassian.net/jira/marketplace/discover/app/com.tda.timesheet.report?source=apps-menu&installDialogOpen=true">
                      <span className='css-f6nuwn css-5mekwu'>
                        <img src={Time} style={{ width: "30px", height: "25px" }} />
                        Timesheet Tracking</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="https://test8179.atlassian.net/jira/marketplace/discover/app/circleci.jira?source=apps-menu&installDialogOpen=true">
                      <span className='css-f6nuwn css-5mekwu'>
                        <img src={Circle} style={{ width: "30px", height: "25px" }} />
                        Circle CI (CI/CD)
                      </span>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="https://test8179.atlassian.net/jira/marketplace/discover/app/microsoft-teams?source=apps-menu&installDialogOpen=true">
                      <span className='css-f6nuwn css-5mekwu'>
                        <img src={Teams} style={{ width: "30px", height: "25px" }} />
                        Microsoft Teams
                      </span>
                    </NavDropdown.Item>
                    <hr />
                    <NavDropdown.Item
                      href="https://test8179.atlassian.net/jira/marketplace/discover?source=apps-menu&sort=trending">
                      <span className='css-f6nuwn css-5mekwu'>Explore More Apps</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item 
                      href="https://test8179.atlassian.net/plugins/servlet/upm">
                       <span className='css-f6nuwn css-5mekwu'>Manage Your Apps</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="https://test8179.atlassian.net/jira/marketplace/manage/app-requests">
                      <span className='css-f6nuwn css-5mekwu'>View app requests</span>
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>


                <div>
                  <div className="modalClass">
                    <Button onClick={() => this.handleModal()}>Create</Button>
                  </div>

                  <Modal show={this.state.show} onHide={() => this.handleModal()}>
                    <Modal.Header closeButton>This is a Modal Heading</Modal.Header>
                    <Modal.Body>This is a Modal Body</Modal.Body>
                    <Modal.Footer>
                      <Button onClick={() => this.handleModal()}>Close</Button>
                      <Button onClick={() => this.handleModal()}>Save</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </Nav>
              <div className='search'>
                <input type="search"
                  class="form-control ds-input"
                  id="search-input" placeholder="Search..."
                  aria-label="Search for..." autocomplete="off"
                  data-docs-version="4.3"
                  // spellcheck="false"
                  role="combobox" aria-autocomplete="list"
                  aria-expanded="false" aria-owns="algolia-autocomplete-listbox-0" dir="auto" />
              </div>
              <div className='icons'>
                <button className='btn'><i class="fa fa-bell" aria-hidden="true"></i></button>
              </div>
              <div className='icons'>
                <button className='btn'><i class="fa fa-question-circle" ></i></button>
              </div>
              <div className='icons'>
                <button className='btn'><i class="fas fa-cog" aria-hidden="true"></i></button>
              </div>
              <div className='icons'>
                <button className='btn'><i class="far fa-user-circle" aria-hidden="true"></i></button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>


      </div>
      </>
    );
  }
}

export default Home;



