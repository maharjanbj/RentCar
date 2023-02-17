import React, { useEffect } from 'react'


const MyModal = ({ closeModal}) => {

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        };
    })
    // scroll


    return(
        <form>
            <div className='modal-wrapper' onClick={closeModal}></div>
            <div className='modal-container'>
            <h2>login</h2>
            <span>Name:</span><input className="input-box" type={Text} required /><br></br>
            <span>Password:</span><input className="input-box" type={"password"} required /><br></br>
            <input type={"checkbox"} checked />Remember me <br/>
            <button className="modal-btn" onClick={closeModal}>Submit</button>
            <br/><a href="index.html">forget password?</a>
            </div>
        </form>
    )
}
export default MyModal;