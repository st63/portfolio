import styled from 'styled-components'
import Button from '@mui/material/Button'
import { COLORS } from '../constants'

export const Container = styled.div`
    background-color: ${COLORS.GREY};
    height: 300px;
    border-radius: 10%;
    margin: 40px 0px 60px 0px;
    padding: 35px 35px 50px 35px;
    display: flex;
    flex-direction: column;

    &:hover {
        box-shadow: 0 15px 63px rgb(65 96 234 / 41%);
        transition: box-shadow 0.5s ease;
    }
`

export const TitleWrap = styled.div`
    height: 30%;
`

export const Title = styled.h2`
    font-size: 34px;
`

export const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70%;
`

export const Description = styled.p`
    font-size: 24px;
`

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
`

export const LinkButton = styled(Button)``

export const Link = styled.a`
    &:active,
    &:hover,
    & {
        text-decoration: none;
        color: rgb(25, 118, 210);
    }
`
