import { useEffect } from "react";
import {
  getFacebookLoginStatus,
  initFacebookSdk,
  fbLogin,
} from "../../utils/FacebookSDK";

export default function FBInit() {
  useEffect(() => {
    console.log("Started use effect");
    initFacebookSdk().then(() => {
      getFacebookLoginStatus().then((response) => {
        if (response == null) {
          console.log("No login status for the person");
        } else {
          console.log(response);
        }
      });
    });
  }, []);

  function login() {
    console.log("reached log in button");
    fbLogin().then((response) => {
      console.log(response);
      if (response.status === "connected") {
        console.log("Person is connected");
      } else {
        // something
      }
    });
  }

  //   function getLoginStatus() {
  //     getFacebookLoginStatus().then((res) => {
  //       console.log(res);
  //     });
  //   }

  return (
    <div>
      <button onClick={login}>Click me!</button>
    </div>
  );
}
