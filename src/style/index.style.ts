import styled from "styled-components";
import background from "../images/background.jpg";

const Section = styled.section`
    display: flex;
    flex-direction: column;
    background-image: url(${background});
    background-size: 80%;

    background-position: top right;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    position: relative;
    background-color: #051435;
    overflow: hidden;
`;

const Container = styled.div`
    display: flex;
    margin-top: auto;
    padding: 16px 70px;
    flex-direction: column;
    max-width: 800px;
    z-index: 1;
`;

const Logo = styled.img`
    width: 200px;
    object-fit: contain;
    margin-bottom: 24px;
`;

const Title = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 48px;
    color: #fdfdfb;
    margin-bottom: 32px;
`;

const PricesWrapper = styled.div`
    display: flex;
    gap: 32px;
    width: 90%;
    margin-bottom: 150px;
`;

const PriceCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 16px;
`;

const PriceWrapper = styled.div`
    display: flex;
    gap: 4px;
    align-items: flex-end;
`;

const Price = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 48px;
    color: #fdfdfb;
    line-height: 1;
    margin: 0;
`;

const PriceText = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: #fdfdfb;
    opacity: 0.8;
    margin: 0;

`;

const PriceCardText = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #fdfdfb;
    opacity: 0.8;
    margin: 0;
`;



const Overlay1 = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #051435 0%, #051435 20%, transparent 100%);
`;

const Overlay2 = styled.div`
    position: absolute;

    bottom: 0;
    left: 0;
    background: linear-gradient(to top, #051435 0%,#051435 10%, transparent 100%) ;
    opacity: 1;
    width: 100%;
    height: 100%;
    transform: rotate(0deg) translateY(50%);

`;

const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-block: 16px;
    background-color:#0072d3;
    color: #fdfdfb;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 18px;
    border-radius: 4px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: rgba(0, 114, 211, 0.8);
    }
`;

const CompanyWrapper = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    margin: 0;
    padding: 0;
`;

const CompanyLogo = styled.img<{width: string}>`
    object-fit: cover;
    margin: 0;
    width: ${(props) => props.width};
`;

const S = { 
    Section,
    Overlay1,
    Overlay2,
    Button,
    Container,
    Logo,
    Title,
    PricesWrapper,
    PriceCard,
    PriceWrapper,
    Price,
    PriceText,
    PriceCardText,
    CompanyWrapper,
    CompanyLogo
 };

export default S;
