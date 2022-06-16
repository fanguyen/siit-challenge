import React, { useEffect, useState } from 'react';
import axios from "axios";
import UsersList from './components/UsersList';
import styled from 'styled-components';

const Header = styled.h1`
  color: #000000;
  border-bottom: 1px solid rgb(4, 4, 63);
  padding: 10px;
`

export function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      axios
      .get("/users.json")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, [])

  return (
    <>
      <Header>SIIT</Header>
      <UsersList users={users}/>
    </>
  );
}