import React from "react"


function Switch({filterInfo, updateFilterDisabled}) {

    return (
        <div className="switch">
            <p>Switch</p>
            <form className="leverform" id="danceability-lever">
              <input 
                type="checkbox" 
                className="lever pristine" 
                defaultChecked={!filterInfo.key.disabled} 
                onChange={() => updateFilterDisabled(filterInfo.key)}
                />
              <label>
                  <span>On</span>
              </label>
            </form>
        </div>
    )
}

export default Switch