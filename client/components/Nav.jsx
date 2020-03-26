import React from 'react';
import { Link } from 'react-router-dom';
import { logOff } from 'authenticare/client';
import { getUserDetails } from '../api/walkerApi';
import { getDecodedToken, isAuthenticated } from 'authenticare/client';
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated';
import { Row, Col } from 'reactstrap';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileUrl: ''
    };
  }

  componentDidMount() {
    if (isAuthenticated()) {
      const id = getDecodedToken().id;

      getUserDetails(id).then(user => {
        if (user.owner) {
          this.setState({
            profileUrl: '/owner/' + user.owner.id
          });
        } else {
          this.setState({
            profileUrl: '/walker/' + user.walker.id
          });
        }
      });
    }
  }

  render() {
    return (
      <div className="nav">
        <Link to="/">
          <img className="logo" src="/images/Logo1.png" alt="logo" />
        </Link>

        <Row className='align-items-center bd-highlight'>
          <Col>
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
          </Col>
          <IfNotAuthenticated>
            <Col>
              <li>
                <Link className="nav-link" to="/Login">
                  Login
                </Link>
              </li>
            </Col>
            <Col>
              <li>
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
            </Col>
            <Col>
              <li>
                <Link className="nav-link" to="/Contact">
                  Contact
                </Link>
              </li>
            </Col>
          </IfNotAuthenticated>

          <IfAuthenticated>
            <Col>
              <li>
                <Link className="nav-link" to={this.state.profileUrl}>
                  My Profile
                </Link>
              </li>
            </Col>
            <Col>
              <li>
                <Link className="nav-link" to="/" onClick={logOff}>
                  Logout
                </Link>
              </li>
            </Col>
            <Col>
              <li>
                <Link className="nav-link" to="/doglist">
                  Doglist
                </Link>
              </li>
            </Col>
            <Col>
              <li>
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
            </Col>
            <Col>
              <li>
                <Link className="nav-link" to="/Contact">
                  Contact
                </Link>
              </li>
            </Col>
          </IfAuthenticated>
        </Row>
      </div>
    );
  }
}

export default Nav;
