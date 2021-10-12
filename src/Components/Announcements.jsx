import styled from "styled-components"

const Container = styled.div`
    height: 35px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;
`

const Announcements = () => {
    return (
        <Container>
            Super deal! Free Shipping from 50$
        </Container>
    )
}

export default Announcements
