import * as antd from "antd";
import * as Icons from 'feather-reactjs'

export default () => {
    return(
        <div className="landing_header">
            <div className="header_brand">
              <img src="https://dl.ragestudio.net/branding/comty/t4_fullTextDark.svg" />
            </div>
            <div className="header_links">
                <div className="header_linksBtn"><Icons.Activity /> Status </div>
                <div className="header_linksBtn"><Icons.GitCommit /> Changelogs </div>
                <div className="header_linksBtn"><Icons.Info /> About </div>
            </div>
        </div>
    )
}