import * as antd from "antd";
import * as Icons from 'feather-reactjs'
import { LastestVersion, RemoteActions } from 'components'
import packagejson from 'packageJson'
import React from 'react'

export default class Landing extends React.Component{
  render(){
    return (
      <>
        <div className="container_top">
            <div className="container_wrapper" >

                <div className="floating_card">
                    <h1>Your new</h1>
                    <h4>prototype of an social network.</h4>
                    <div className="links_launcher" style={{ marginTop: "30px" }}>
                      <div><p onClick={() => window.open(packagejson.globalGit) }><Icons.GitHub /> Also it`s open source !</p></div>
                    </div>
                </div>

                <div className="floating_card">
                  <div className="float_divider">
                    <div>
                      <p style={{ fontSize: "18px" }}>Comty is an extensible & modular platform depends on your needs, you can find many functions and features, discover how!</p>
                      <antd.Button type="ghost" shape="round" >Tell me more</antd.Button>
                    </div>
                    <div>
                      <RemoteActions />
                      <LastestVersion />
                    </div>
                  </div>
                </div>

            </div>
        </div>

      
        <div className="container_1">
          <div className="container_wrapper">

            <div className="feature_titles">
              <h2> <Icons.LifeBuoy /> To improve the experience we have made our application off-road</h2>
            </div>
            <div className="features_wrapper">  
              <div className="feature_card">
                <div className="feature_card_content">
                  <div className="feature_icon" style={{ backgroundColor: "#ECECFF" }}><Icons.Box style={{ color: "#786DF9" }} /></div>
                  <h1>Modular</h1>
                  <p>bruh bruh bruh</p>
                </div>
              </div>
              <div className="feature_card">
                <div className="feature_icon" style={{ backgroundColor: "#FDF6E6" }}><Icons.Lock style={{ color: "#EFBB45" }} /></div>
                <h1>Secure</h1>
                <p>bruh bruh bruh</p>
              </div>
              <div className="feature_card">
                <div className="feature_icon" style={{ backgroundColor: "#E5F9F0" }}><Icons.Copy style={{ color: "#44CC9A" }} /></div>
                <h1>Upgradeable</h1>
                <p>bruh bruh bruh</p>
              </div>
            </div>
            <div className="feature_titles">
              <h3> <Icons.Target /> The finishing touch to finish with an extra </h3>
            </div>
            
          </div>
        </div>


      </>
    )
  }
}