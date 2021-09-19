import React, { useContext } from "react";
import "./home.css";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { usercontext } from "../usercontext/usercontext";

const Home = () => {
  const [users, setUser] = useContext(usercontext);

  return (
    <div>
      <Link to="/create">
        <Button className="create__btn" variant="primary">
          Create User
        </Button>
      </Link>

      <Table striped bordered>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.position}</td>
              <td>{user.salary}</td>
              <td>
                <Link to={"/read/"+user.id}>
                  <Button className="action__btn" variant="success">
                    Read
                  </Button>
                </Link>
                <Link to={"/update/"+user.id}>
                <Button className="action__btn" variant="info">
                  Update
                </Button>
                </Link>
                <Link to={"/delete/"+user.id}>
                <Button className="action__btn" variant="danger">
                  Delete
                </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
