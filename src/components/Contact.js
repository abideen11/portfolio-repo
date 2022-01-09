import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

export default function Contact() {
    const form = useRef()

    const sendEmail = e => {
        emailjs.sendForm('service_npigc2i','template_9w83lwk',form.current,'user_PodJhmSOVpwNTJvC5n4Ex')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
    }
    return(
        <div id="to-cnt" className="div-ctc">
            <h1>Let Connect!</h1>
            <div className="dv2-ctc-div">
                <form className="dv2-ctc-form" ref={form} onSubmit={sendEmail}>
                    <label className="ctc-lbl1">
                        Name
                        <input className="ctc-inp1" name="from_name" placeholder="Name" />
                    </label>
                    <label className="ctc-lbl2">
                        Email 
                        <input className="ctc-inp2" name="from_email" placeholder="Email" />
                    </label>
                    <label className="ctc-lbl3">
                        Message
                        <textarea className="ctc-inp3" name="message" />
                    </label>
                    <input className="ctc-inp4" type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}