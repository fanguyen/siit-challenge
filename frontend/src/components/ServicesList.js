import React from 'react';
import styled from 'styled-components';

const LogoBox = styled.div`
    color: #000000;
    height: 60px;
    width: 60px;
    display: flex;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 50px;
    background-color: #ffffff
`

const Link = styled.a `
    margin-top: 20px;
    text-decoration: none;
    background-color: rgba(83, 0, 236, 0.96);
    border: 1px solid transparent;
    border-radius: 8px;
    color: #ffffff;
    padding 8px;
    font-size: 13px
`

const Title = styled.h3`
    color: #000000;
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

const Service = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    margin: 5px 0;
    padding: 10px;
    border: 3px solid #ffffff;
    border-radius: 8px;
    margin-right: 20px;
    text-decoration: none;
    cursor: pointer
`

const ServicePrice = styled.div`
    color: #333;
    margin-top: 20px;
`

function ServicesList({ services, onSelectService, activeService, users }) {
    const serviceMonthlyCost = (serviceId, servicePrice) => {
        const numberOfUsers = users.filter(user => user.service_ids.includes(serviceId)).length;
        return (servicePrice.flat_cost + servicePrice.cost_per_user * (numberOfUsers - servicePrice.nb_users_included)) / 100
    }

    return (
        <ServicesContainer>
            <Title>Services List</Title>
            <ServicesBox>
                {services.map(service => (
                    <Service
                        key={service.id}
                        onClick={() => onSelectService(service.id)}
                        style={service.id === activeService ? { borderColor: `rgba(83, 0, 236, 0.96)`} : {}}
                    >
                        <LogoBox>
                            <Logo src={service.logo_url}/>
                        </LogoBox>
                        <Link href={service.website_url} target="_blank">service link</Link>
                        <ServicePrice>Cost: {serviceMonthlyCost(service.id, service.price)}</ServicePrice>
                    </Service>
                ))}
            </ServicesBox>
        </ServicesContainer>
    )
}

export default ServicesList;