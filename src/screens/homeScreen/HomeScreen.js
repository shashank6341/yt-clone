import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import CategoriesBar from "../../components/categoriesBar/CategoriesBar"
import Video from "../../components/Video/Video"

const HomeScreen = () => {
    return (
        <Container>
            <CategoriesBar/>
            <Row>
                {
                    [...new Array(21)].map((value, i)=> (
                    <Col lg={3} md={4} key={i}>
                        <Video/>
                    </Col>
                    ))}
            </Row>
        </Container>
    )
}

export default HomeScreen
