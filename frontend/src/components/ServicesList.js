import React from 'react';
import styled from 'styled-components';

const LinkButton = styled.a`
    color: #000000;
    height: 60px;
    width: 60px;
    margin-right: 30px;
    display: flex;
    border: 1px solid transparent;
    border-radius: 50px;
    background-color: #ffffff
`

const Title = styled.h3`
    color: rgb(4, 4, 63);
`

const Logo = styled.img`
    width: 100%;
    border: 1px solid transparent;
    border-radius: 50px;
    object-fit: contain;
`

const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column
`

const ServicesBox = styled.div`
    display: flex;
    flex-direction: row
`

function ServicesList({ services }) {
    return (
        <ServicesContainer>
            <Title>Services List</Title>
            <ServicesBox>
                {services.map(service => (
                    <LinkButton href={service.website_url} target="_blank">
                        <Logo src={service.logo_url}/>
                    </LinkButton>
                ))}
            </ServicesBox>
        </ServicesContainer>
    )
}

export default ServicesList;