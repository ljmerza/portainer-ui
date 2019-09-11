import React from 'react';
import { Container, Text } from 'native-base';

class HomeScreen extends React.Component {
    
    render() {
        return (
            <Container style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
            </Container>
        );
    }
}

export default HomeScreen;