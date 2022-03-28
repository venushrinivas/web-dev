import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',tuit: whatsHappening});
    }
    return(
        <>
            <div className="d-flex w-100 ps-3">
                <div className="wd-avatar">
                    <img src="/tuiter/assets/images/elon.png" height="48px" width="48px" alt=""/>
                </div>
                <div className="form-group w-100 ps-3 pb-3">
                    <textarea placeholder="Whats happening?" className="wd-create-tuit form-control-plaintext mb-3" value={whatsHappening} onChange={(event)=>setWhatsHappening(event.target.value)}/>
                    <div className="d-flex wd-create-tuit-actions">
                        <div>
                            <i className="far fa-image me-2"/>
                            <i className="far fa-chart-bar me-2"/>
                            <i className="far fa-smile me-2"/>
                            <i className="far fa-calendar-alt me-2"/>
                        </div>
                        <div className="float-right">
                            <button onClick={tuitClickHandler} className="btn btn-primary wd-tweet-override" type="button">Tuit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default WhatsHappening;