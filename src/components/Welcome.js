import html from "../images/HTML.png"
import javascript from "../images/javascript.png"
import python from "../images/python2.jpg"

export default function Welcome(props) {
    var settings = {
        dots: true
      };

    return (
        <div className="welcome">
            <h1>Welcome {props.username}!</h1>
            <h2>Explore our courses</h2>
            <div className="welcome-img">
                <div className="img-wrap">
                    <img src={html} />
                    <p className="img-desc">The HyperText Markup Language or HTML is the standard markup language 
                    for documents designed to be displayed in a web browser.</p>
                </div>    
                <div className="img-wrap">
                    <img src={javascript} />
                    <p className="img-desc">JavaScript, often abbreviated JS, is a programming language that is 
                    one of the core technologies of the World Wide Web, alongside HTML and CSS.</p>
                </div> 
                <div className="img-wrap">
                    <img src={python} />
                    <p className="img-desc">Python is a high-level, interpreted, general-purpose programming 
                    language. Its design philosophy emphasizes code readability with the use of significant 
                    indentation.</p>
                </div> 
            </div>
            <button className="form--submit" onClick={props.handleClickReturn}>Return</button>
        </div>
    )
}