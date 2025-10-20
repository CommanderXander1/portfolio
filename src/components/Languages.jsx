import '../styles/Languages.css'
import PythonIcon from '../assets/python.png'
import JavaIcon from '../assets/java.png'
import JavaScriptIcon from '../assets/js.png'
import CIcon from '../assets/c.png'
import HTMLIcon from '../assets/html.png'
import ReactIcon from '../assets/react.png'

const Languages = () => {
    let langList = [
        {
            name: "Python",
            icon: PythonIcon
        }, 
        {
            name: "Java",
            icon: JavaIcon
        }, 
        {
            name: "React",
            icon: ReactIcon
        },
        {
            name: "JavaScript",
            icon: JavaScriptIcon
        },
        {
            name: "HTML",
            icon: HTMLIcon
        },
        {
            name: "C",
            icon: CIcon
        }]
    langList = langList.map((lang) => {
        return <div key={langList.indexOf(lang)} className="language-child">
            <div className="language-title-row">
                <img className="language-icon" src={lang.icon}></img>
                <h1 className="language-title">{lang.name}</h1>
            </div>
        </div>
    })
    return (
        <div className="language-parent">
            {langList}
        </div>
    )
}

export default Languages