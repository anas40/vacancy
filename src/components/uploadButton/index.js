import { useLocation } from 'react-router-dom'

function UploadButton() {
    const { pathname } = useLocation()
    function pickFile() {
        document.querySelector('#resume').click()
    }
    if (pathname === "/register") return ""
    return (<div>
        <button className="btn" onClick={pickFile}>Upload Resume</button>
    </div>)
}

export default UploadButton