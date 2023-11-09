import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import S from "../style/index.style"
import logo from "../images/logo.png"
import disney from "../images/disney-white.png"
import plusIcon from "../images/plus-icon.png"
import pixar from "../images/pixar.png"
import marvel from "../images/marvel.png"
import starWars from "../images/star-wars.png"
import nationalGeo from "../images/national-geo.png"

const IndexPage = () => (
  <S.Section>
    <S.Overlay1 />
    <S.Overlay2 />
    <S.Container>
      <S.Logo src={logo} alt="Disney+" />
      <S.Title>The best stories in the world, all in one place</S.Title>
      <S.PricesWrapper>
        <S.PriceCard>
          <S.PriceWrapper>
            <S.Price>$89.99</S.Price>
            <S.PriceText>/year</S.PriceText>
          </S.PriceWrapper>
          <S.PriceCardText>
            Save with an annual subscription. T&C's apply.
          </S.PriceCardText>
          <S.Button>Watch 7-days free</S.Button>
        </S.PriceCard>
        <S.PriceCard>
          <S.PriceWrapper>
            <S.Price>$8.99</S.Price>
            <S.PriceText>/year</S.PriceText>
          </S.PriceWrapper>
          <S.PriceCardText>
            Start streaming Disney+. No ads, no up-charges.
          </S.PriceCardText>
          <S.Button>Watch 7-days free</S.Button>
        </S.PriceCard>
      </S.PricesWrapper>
      <S.CompanyWrapper>
        <S.CompanyLogo width="110px" src={disney} alt="Disney" />
        <S.CompanyLogo width="26px" src={plusIcon} alt="divider" />
        <S.CompanyLogo width="110px" src={pixar} alt="Pixar" />
        <S.CompanyLogo width="26px" src={plusIcon} alt="divider" />
        <S.CompanyLogo width="110px" src={marvel} alt="Marvel" />
        <S.CompanyLogo width="26px" src={plusIcon} alt="divider" />
        <S.CompanyLogo width="100px" src={starWars} alt="Star Wars" />
        <S.CompanyLogo width="26px" src={plusIcon} alt="divider" />
        <S.CompanyLogo
          width="110px"
          src={nationalGeo}
          alt="National Geographic"
        />
      </S.CompanyWrapper>
    </S.Container>
  </S.Section>
)

export default IndexPage
