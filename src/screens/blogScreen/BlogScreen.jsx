import './blogScreen.scss';
import React from 'react';
import { Container } from 'react-bootstrap';
import Article from '../../components/article/Article';

const BlogScreen = () => {
    return (
        <main>
            <Container className='blog-container'>
                {/* // TODO Rajouter la category-nav */}
                <Article />
                <Article />
                <Article />
            </Container>
        </main>
    );
};

export default BlogScreen;