import { FC } from 'react'
import { Container, TitleWrap, Title, Name } from './styles'
import { AccountsBlock } from '../AccountsBlock'

export const Header: FC = () => {
    return (
        <Container>
            <TitleWrap>
                <Title>Portfolio</Title>
                <Name>Andreev Stanislav</Name>
            </TitleWrap>
            <AccountsBlock />
        </Container>
    )
}
