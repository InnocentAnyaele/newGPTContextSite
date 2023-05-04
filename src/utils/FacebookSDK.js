  
  export const initFacebookSdk = () => {
    return new Promise((resolve, reject) => {
      // Load the Facebook SDK asynchronously
      window.fbAsyncInit = () => {
        window.FB.init({
          appId: '1268250524120464',
          cookie: true,
          xfbml: true,
          version: 'v16.0'
        });
        // Resolve the promise when the SDK is loaded
        resolve();
      };
  
      // (function(d, s, id) {
      //   const fjs = d.getElementsByTagName(s)[0];
      //   if (d.getElementById(id)) {
      //     return;
      //   }
      //   const js = d.createElement(s);
      //   js.id = id;
      //   js.src = 'https://connect.facebook.net/en_US/sdk.js';
      //   fjs.parentNode.insertBefore(js, fjs);
      // })(document, 'script', 'facebook-jssdk');
      
    });
  };
  
  export const getFacebookLoginStatus = () => {
    return new Promise((resolve, reject) => {
      window.FB.getLoginStatus((response) => {
        resolve(response);
      });
    });
  };

  export const fbLogin = () => {
    return new Promise((resolve, reject) => {
      window.FB.login((response) => {
        resolve(response)        
      })
    })
  }


  