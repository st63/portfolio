import { FC } from 'react'
import { PROJECTS } from '../constants'
import { Project } from '../Project'
import { Container } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const projects: JSX.Element[] = PROJECTS.map((project: ProjectType) => {
    return (
        <SwiperSlide key={project.id}>
            <Project {...project} />
        </SwiperSlide>
    )
})

export const Projects: FC = () => {
    return (
        <Container>
            <Swiper spaceBetween={30} slidesPerView={2.5} grabCursor={true}>
                {projects}
            </Swiper>
        </Container>
    )
}
