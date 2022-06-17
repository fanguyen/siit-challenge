import React from 'react';
import styled from 'styled-components';

const UserCard = styled.div`
    background-color: rgb(4, 4, 63);
    margin: 5px 0;
    padding: 10px;
    border: 1px solid;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 300px;
`

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px
`

const UserName = styled.div`
    color: #ffffff;
    margin-bottom: 5px;
`

const UserPosition = styled.div`
    color: #ffffff;
`

const UserAvatar = styled.img`
    color: #ffffff;
    border: 1px solid;
    border-radius: 50px;
`

const Title = styled.h3`
    color: rgb(4, 4, 63);
`

function UsersList({ users }) {
    return (
        <div>
            <Title>Users List</Title>
            {users.map(user => (
                <UserCard key={user.id}>
                    <UserAvatar src={user.avatar_url} />
                    <UserInfo>
                        <UserName>{user.name}</UserName>
                        <UserPosition>{user.position}</UserPosition>
                    </UserInfo>
                </UserCard>
            ))}
        </div>
    )
}

export default UsersList;