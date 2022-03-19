import { FC } from 'react'
import { Projects } from './Projects'
import { About } from './About'
import { AppContainer, Content } from './styles'
import { Header } from './Header'

const App: FC = () => {
    return (
        <AppContainer>
            <Header />
            <Content>
                <About />
                <Projects />
            </Content>
        </AppContainer>
    )
}

export default App
