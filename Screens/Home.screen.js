import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {
    SearchBar,
    Card,
    ListItem,
    Header,
    Button,
    Icon
} from 'react-native-elements';
import * as axios from 'axios';
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        };
    }
    makeChanges() {
        console.log('changes done');
    }
    componentDidMount() {
        return axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                // handle success console.log(response.data);
                this.setState({dataSource: response.data})
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    render() {
        const dataSource = this.state.dataSource;
        return (
            <ScrollView>
                <View>
                    {/* <Header
                        placement="left"
                        leftComponent={{
                        icon: 'menu',
                        color: '#fff'
                    }}
                        centerComponent={{
                        text: 'MY TITLE',
                        style: {
                            color: '#fff'
                        }
                    }}
                        rightComponent={{
                        icon: 'home',
                        color: '#fff'
                    }}/> */}
                    <SearchBar
                        showLoading
                        platform="ios"
                        cancelButtonTitle="Cancel"
                        placeholder='Search'/>
                        {!dataSource.length && <Button
                        title=""
                        loading
                        loadingProps={{
                        size: "large",
                        color: "rgba(111, 202, 186, 1)"
                    }}
                        titleStyle={{
                        fontWeight: "700"
                    }}
                        buttonStyle={{
                        backgroundColor: "rgba(92, 99,216, 1)",
                        width: 300,
                        height: 45,
                        borderColor: "transparent",
                        borderWidth: 0,
                        borderRadius: 5
                    }}
                        containerStyle={{
                        marginTop: 20
                    }}/>
}

                    <View style={styles.container}>
                        <Card
                            title='HELLO WORLD'
                            image={{
                            uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg'
                        }}>
                            <Text
                                style={{
                                marginBottom: 10
                            }}>
                                The idea with React Native Elements is more about component structure than
                                actual design.
                            </Text>
                            <Button
                                icon={< Icon name = 'code' color = '#ffffff' />}
                                backgroundColor='#03A9F4'
                                buttonStyle={{
                                borderRadius: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                marginBottom: 0
                            }}
                                title='VIEW NOW'/>
                        </Card>
                        {dataSource.length > 0 && <Card
                            containerStyle={{
                            padding: 0
                        }}>
                            {this
                                .state
                                .dataSource
                                .map((data, i) => {
                                    return (<ListItem
                                        key={i}
                                        roundAvatar
                                        title={data.title}
                                        avatar={{
                                        uri: 'https://via.placeholder.com/150'
                                    }}/>);
                                })
}
                        </Card>
}
                    </View>
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0
    }
})
export default HomeScreen;
