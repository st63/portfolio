import { FC } from 'react'
import {
    Container,
    TitleWrap,
    Title,
    ContentWrap,
    Description,
    Buttons,
    LinkButton,
    Link,
} from './styles'

export const Project: FC<ProjectType> = ({
    title,
    technologies,
    toCode,
    toViewing,
}) => {
    return (
        <Container>
            <TitleWrap>
                <Title>{title}</Title>
            </TitleWrap>
            <ContentWrap>
                <Description>{technologies}</Description>
                <Buttons>
                    <LinkButton variant="outlined" size="large">
                        <Link href={toViewing} target="blank">
                            Превью
                        </Link>
                    </LinkButton>
                    <LinkButton variant="outlined" size="large">
                        <Link href={toCode} target="blank">
                            Код
                        </Link>
                    </LinkButton>
                </Buttons>
            </ContentWrap>
        </Container>
    )
}
