import React from 'react';
import { connect } from 'react-redux';

import { Modal, Text, View, StyleSheet } from 'react-native';
import { View, Container, Form, Text, Item, Input, Button } from 'native-base';

import { addDomain } from './actions';

class DomainModal extends React.Component {

    onAddDomain = domain => {
        console.log(domain, state)
    }

    render() {
        const { showModal, toggleModal } = this.props;

        return (
            <Container style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={showModal}
                    onRequestClose={toggleModal}>
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <Form>
                                <Item>
                                    <Input placeholder="Domain" />
                                </Item>
                            </Form>

                            <View style={styles.loginButtonSection}>
                                <Button success>
                                    <Text>Add</Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                </Modal>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
    },
    loginButtonSection: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

const mapStateToProps = state => {
    return {
        login: state.login,
    }
}

const mapDispatchToProps = {
    dispatchAddDomain: addDomain,
}

export default connect(mapStateToProps, mapDispatchToProps)(DomainModal);
