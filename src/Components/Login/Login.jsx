/* eslint-disable import/no-named-as-default, no-shadow, consistent-return */
import React, { Component } from 'react';
import { Grid, Card, Button } from 'semantic-ui-react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import './Login.css';

// NOTE all commented out code will be used in future mapping of state, dispatching of actions etc
// import { renderSheets } from '../../actions/renderActions';
// import injectWidgetId from '../../utils/utils';
/* eslint-disable react/prefer-stateless-function */
export class Login extends Component {
  // componentDidMount() {
  //   if (cookie.load('userName') !== undefined) {
  //     const name = cookie.load('userName');
  //     // NOTE write function to trigger the render of the main sheets page
  //   }
  // }
  render() {
    const GOOGLE_AUTH_URL = process.env.REACT_APP_GOOGLE_AUTH_URL;
    return (
      <Grid verticalAlign={'middle'}>
        <Grid.Row centered verticalAlign={'middle'}>
          <Grid.Column centered verticalAlign={'middle'}>
            <Card raised centered className="island">
              <Card.Content>
                <Button
                  as="a"
                  href={`${GOOGLE_AUTH_URL}`}
                  className="butterButton"
                  size="large"
                  content="Login with Google"
                  icon="google"
                />
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

// Login.propTypes = {
//   /* eslint-disable react/no-unused-prop-types, react/require-default-props */
//   renderLogin: PropTypes.func.isRequired,
//   userName: PropTypes.string,
// };
//
// export const mapStateToProps = (state, ownProps) => {
//   const id = ownProps.widgetId;
//   const currentPage = state.widgets.byId[id].currentPage.render;
//   const userName = state.widgets.byId[id].currentPage.userName;
//
//   return {
//     currentPage,
//     userName,
//   };
// };
//
// export const mapDispatchToProps = dispatch => bindActionCreators({
//   renderLogin,
// }, dispatch);
export default Login;
// export default injectWidgetId(connect(mapStateToProps, mapDispatchToProps)(Login));
