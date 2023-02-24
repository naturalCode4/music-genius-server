import { Modal, ModalDialog } from '@mui/joy'
import React, {useState} from 'react'

function LandingModal() {

    const [landingModalIsOpen, setLandingModalIsOpen] = useState(true)

    return (
        <div>
            <Modal
                open={landingModalIsOpen}
                onClose={() => setLandingModalIsOpen(false)}
            >
                <ModalDialog style={{ background: 'linear-gradient(to top, rgba(1, 141, 255, 1) 0%, #9a2020 96%)', width: '75vh' }}>
                    <div id='modal_text'>
                        <h1>Welcome to Music Genius</h1>
                        <hr></hr>
                        <p><b>Discover music based on your preferences!</b></p>
                        <p>Choose a musical Genre, set the six filter sliders, and hit “New Song”.</p>
                        <p>To omit filters from your song generation, toggle off the corresponding switches. For best results, toggling off 3 or 4 filter sliders will yield the largest collection of available songs.</p>
                        <p>This application is programmed using React, Redux, Node.js, and utilizing the Spotify API. The concept, design, and codebase was developed by <a href="https://www.linkedin.com/in/adinkramer/" target="_blank" rel="noreferrer">Adin Kramer</a>.</p>
                    </div>
                </ModalDialog>
            </Modal>
        </div>
    )
}

export default LandingModal