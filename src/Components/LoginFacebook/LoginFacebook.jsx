import React from 'react'
// import ReactDOM from 'react-dom';
// import FacebookLogin from 'react-facebook-login';
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import FacebookLogin from 'react-facebook-login';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginFacebookApi } from '../../redux/productReducer/userReducer';
// import TiSocialFacebookCircular from 'react-icons/lib/ti/social-facebook-circular';

 
export default function LoginFacebook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //Gọi api đăng nhập facebook
  const responseFacebook = async (response) => {
    console.log(response);

    const action = loginFacebookApi(response.accessToken);
   
    await dispatch(action);

    //Chuyển hướng về profile
    navigate('/profile');

    /*
      ./ : về đầu thư mục chứa nó
      /: đi từ root
      name: đi qua lại giữa các tập tin chung thư mục
    */
  }
  return (
    <div>
      <FacebookLogin
        appId="527679862512783"
        // autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook} 
        // cssClass="my-facebook-button-class"
        // icon="fa-facebook"
        // render={renderProps => (
        //   <button onClick={renderProps.onClick}> Continue with Facebook</button>
        // )}
        // cssClass="my-facebook-button-class"
        // icon="fa-facebook"
        />
    </div>
  )
}
