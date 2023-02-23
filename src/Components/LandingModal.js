import { Modal } from '@mui/material'
import React, {useState} from 'react'

function LandingModal() {

    const [landingModalIsOpen, setLandingModalIsOpen] = useState(true)

    return (
        <div>
            <Modal
                open={landingModalIsOpen}
                onClose={() => setLandingModalIsOpen(false)}
                onBackdropClick={() => setLandingModalIsOpen(false)}
                id="landing_modal"
                style={{position: 'absolute', height: "50vh", margin: 'auto', width: '75vw'}}
            >
                <div style={{ outline: 'none', border: '8px solid blue', overflow: 'hidden'}}>
                    <h1>Welcome to Music Genius</h1>
                    <p>Choose a musical Genre, set the 6 filter sliders, and hit “New Song” to discover music based on your preferences.</p>
                    <p>If you don’t want a slider setting in your preferences calculation, toggle it off using the corresponding switch.</p>
                    <p>For best results, toggling off 3 or 4 filter sliders will yield the largest collection of available songs.</p>
                    <p>This application is programmed using React, Redux, Node.js, and it utilizes the Spotify API. The concept, design, and application was developed by Adin Kramer.</p>
                </div>
            </Modal>
        </div>
    )
}

export default LandingModal