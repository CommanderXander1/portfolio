import '../styles/Contact.css'

const Contact = () => {
    const contactInfo = {
        github: "https://github.com/CommanderXander1",
        email: "xanderdshotz@gmail.com"
    }
    return (
        <>
            <p className="contact-header" id='contact'>Contact</p>
            <div className='contact-body'>
                <div className="contact-bg">
                    <div className='contact-info'>
                        <p>Github: {contactInfo["github"]}</p>
                        <p>Email: {contactInfo["email"]}</p>
                    </div>
                </div>
            </div>
            
        </>
        
    )
}

export default Contact