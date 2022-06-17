import React, { useEffect, useState } from 'react';
import axios from "axios";
import UsersList from './components/UsersList';
import ServicesList from './components/ServicesList';
import styled from 'styled-components';

const Header = styled.h1`
  color: #000000;
  border-bottom: 1px solid rgb(4, 4, 63);
  padding: 10px;
`

const Content = styled.div`
  margin-left: 10px;
`

export function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [services, setServices] = useState([]);
  const [activeService, setActiveService] = useState(null)

  useEffect(() => {
      axios
        .get("/users.json")
        .then((res) => setUsers(res.data))
        .catch((err) => console.log(err));

      axios
        .get("/services.json")
        .then((res) => setServices(res.data))
        .catch((err) => console.log(err));
  }, [])

  const onSelectService = (serviceId) => {
    setActiveService(serviceId)

    axios
      .get(`/users.json?service_id=${serviceId}`)
      .then((res) => setFilteredUsers(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Header>SIIT</Header>
      <Content>
        <UsersList users={activeService === null ? users : filteredUsers}/>
        <ServicesList
          services={services}
          onSelectService={onSelectService}
          users={users}
          activeService={activeService}
        />
      </Content>
    </>
  );
}