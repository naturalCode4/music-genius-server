import React, {useState, useCallback} from "react"


function Switch({filterInfo, updateFilterDisabled}) {

    return (
        <div className="switch">
            <p>Switch</p>
            <form className="leverform" id="danceability-lever">
              <input 
                type="checkbox" 
                className="lever pristine" 
                checked={!filterInfo.key.disabled} // not controlling
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