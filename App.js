import React, {Component} from 'react';
import store from './src/store';
import {Provider} from 'react-redux';
import TKTEditor from './src/editor';

import BostCoinPermissionScreen from './src/screens/boostCoinPermissionScreen';
import BoostCoinBuyScreen from './src/screens/boostCoinBuyScreen';
import MyProfileScreenNew from './src/screens/myProfileScreenNew';
import ProfileSnapPost from './src/components/profile/V2/profileSnapPost';
import PostsTabContent from './src/components/profile/V2/postsTabContent';
import ProfileDetailHeaderEditorOverlay from './src/components/profile/V2/profileDetailHeaderEditOverlay';
import ProfileHeader from './src/components/profile/V2/profileHeader';
import AppNavigator from './src/navigator';
import UserProfileScreenNew from './src/screens/userProfileScreenNew';
import LoginScreen from './src/screens/loginScreen';
import ImageEditingScreen from './src/screens/imageEditingScreen';
import ImageCropScreen from './src/screens/imageCropScreen.js';
import FiltersScreen from './src/screens/filtersScreen';
import UserMessageScreen from './src/screens/userMessageScreen';
import TextEditor from './src/editor/components/textEditor';
import {connect} from 'react-redux';


class App extends Component {
  state = {
    authenticated: false,
  };
  setAuthenticationStatus = (value) => {
    this.setState({authenticated: value});
  };
  render() {
    return (
      <>
        {/* <BoostCoinBuyScreen /> */}
        {/* <BostCoinPermissionScreen /> */}
        {/* <MyProfileScreenNew /> */}
        {/* <ProfileSnapPost /> */}
        {/* <PostsTabContent /> */}
        {/* <ProfileDetailHeader /> */}
        {/* <ProfileHeader /> */}
        {this.props.isAuthenticated ? (
          <AppNavigator />
        ) : (
          <LoginScreen onAuth={this.setAuthenticationStatus} />
        )}

        {/* <UserMessageScreen /> */}
        {/* <FiltersScreen /> */}
        {/* <ImageCropScreen /> */}
        {/* <UserProfileScreenNew /> */}
        {/* <ProfileDetailHeaderEditorOverlay visible={true} /> */}
        {/* TODO: Shift TKTEditor one to Right Place */}
        <TKTEditor />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.AuthReducer.isAuthenticated
})
export default  connect(mapStateToProps, null)(App);
