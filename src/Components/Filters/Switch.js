import React, {useState} from "react"
import '../../css/Switch.css'

function Switch({filterInfo, updateFilterDisabled}) {

    console.log(filterInfo.disabled)

    const [leverIsOn, setLeverIsOn] = useState(!filterInfo.disabled)

    const handleSwitchChange = () => {
      updateFilterDisabled(filterInfo.key)
      setLeverIsOn(!leverIsOn)
      document.getElementById(filterInfo.key)?.classList.remove("pristine");
    }

    return (
        <div className="switch">
            <form className="leverform">
              <input 
                type="checkbox" 
                id={filterInfo.key}
                className="lever pristine" 
                aria-checked={!leverIsOn}
                defaultChecked={!filterInfo.key.disabled} 
                onChange={handleSwitchChange}
                />
              <label>
                  <span>On</span>
              </label>
            </form>
        </div>
    )
}

export default Switch