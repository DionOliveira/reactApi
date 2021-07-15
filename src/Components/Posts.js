import React, { Component } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';



export default class Autores extends Component {
    state = {
        autores: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then(res => {
                const autores = res.data;
                this.setState({ autores })
            })
    }
    render() {
        return (
            <div>
                <Container>
                    <h1>Lista de Autores</h1>
                    <ListGroup as="ul">
                        {this.state.autores.map(autor =>
                            <div key={autor.id}>
                                <ListGroup.Item as="li" active>
                                    {autor.title}
                                </ListGroup.Item>
                                <ListGroup.Item as="li"> {autor.body}</ListGroup.Item>
                            <br />
                            </div>
                        )}
                    </ListGroup>
                </Container>
            </div>
        )
    }
}
