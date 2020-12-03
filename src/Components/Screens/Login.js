import React from "react";
import "../../Styles/signin.css";
export default class Login extends React.Component {
  render() {
    return (
      <div className={"authBox"}>
        <div className="leftBox">
          <div className="bgGreen" />
          <div className={"imageAuth"} />
          <div className={"imageText bold style1"}>
            SankarNarayana Malagundla
          </div>
          <div className={"imageText style2"}>
            Minister for BC Welfare, MLA, Dharmavaram, Penukonda, Anantapur,
            Andhra Pradesh
          </div>
        </div>
        <div className="rightBox">
          <div className="box">
            <div className="titleAuth">Welcome</div>
            <div className="inputbox">
              <input className="inputs" type="text" placeholder="User name" />
            </div>
            <div className="inputbox">
              <input
                className="inputs"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="contentBox">
              <div className="checkboxbox">
                <input type="checkbox" className="checkbox" />
                <label className="checkboxLabel">Remeber</label>
              </div>
              <div className="text">Forget password?</div>
            </div>
            <div className="btnAuth">Login</div>
            <div className="borderbox">
              <div className="line" />
              <div className="text1 or">OR</div>
            </div>
            <div className={"sociallinks"}>
              <div className="icAuth facebook" />
              <div className=" icAuth google" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
