import React from 'react';
import { connect } from 'react-redux';

import { StyleSheet } from 'react-native';
import { View, Container, Content, Form, Text, Item, Input, Picker, Icon, Button } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

import { addDomain, setDomain } from './actions';
import AddDomainModal from './domain-modal.component';

class LoginScreen extends React.Component {
    state = {
        showModal: false
    }

    componentDidMount() {
        this._getLoginToken();
    }

    _getLoginToken = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        if (userToken) this.props.navigation.navigate('Home');
    };

    toggleModal = () => this.setState({ showModal: this.state.showModal })

    onChangeDomain = domain => {
        if (domain === 'Add Domain'){
            this.toggleModal();
            return;
        }

        this.props.dispatchSetDomain(domain);
    }

    render() {
        const { login: {domain, domains }} = this.props;
        const { showModal } = this.state;

        return (
            <Container style={styles.container}>
                <AddDomainModal showModal={showModal} toggleModal={this.toggleModal} />
                <Form>
                    <Item>
                        <Input placeholder="Username" />
                    </Item>
                    <Item>
                        <Input placeholder="Password" />
                    </Item>
                    <Item last>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined }}
                            selectedValue={domain}
                            onValueChange={this.onChangeDomain}
                        >
                            {domains.map(domain => <Picker.Item key={domain} label={domain} value={domain} />)}
                        </Picker>
                    </Item>
                </Form>

                <View style={styles.loginButtonSection}>
                    <Button success>
                        <Text>Login</Text>
                    </Button>
                </View>
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
    dispatchSetDomain: setDomain,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
