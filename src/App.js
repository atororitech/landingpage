import './App.css';
import logo from "../src/assets/logo.svg";
import headerImage from "../src/assets/header-image.png";
import duckImage from "../src/assets/duck.png";
import phoneImage from "../src/assets/phone.png";

function App() {
  return (
      <div className="App">
        <div className={"header"}>
          <div className={"logo"}>
            <img src={logo} alt="Site Logo"/>
          </div>
          <div className={"header-content"}>
            <div className={"header-content-text"}>
              <h1 className={"header-title"}>Banking <br/>
                for humans</h1>
              <p className={"header-desc"}>
                Meet the banking app on a mission <br/> to build products that level the <br/> financial playing field.
              </p>
              <a href="#" className={"header-link"}>Join Dave</a>
            </div>
            <div className={"header-image"}>
              <img src={headerImage} alt="Header Image"/>
            </div>
          </div>
        </div>
        <div className={"column-design"}>
          <h2 className={"column-header"}>How it works</h2>
          <p className={"column-text"}>Show step by step how to get started</p>
          <div className={"columns"}>
            <div>
              <img src={duckImage} alt="Columns Image"/>
              <h3>First Step</h3>
              <h4>At the beginning you have to signup and verify your account ...</h4>
            </div>
            <div>
              <img src={duckImage} alt="Columns Image"/>
              <h3>First Step</h3>
              <h4>At the beginning you have to signup and verify your account ...</h4>
            </div>
            <div>
              <img src={duckImage} alt="Columns Image"/>
              <h3>First Step</h3>
              <h4>At the beginning you have to signup and verify your account ...</h4>
            </div>
          </div>
        </div>
        <div className={"image-header"}>
          <img src={phoneImage} alt="Some Info is here"/>
          <div className={"image-header-content"}>
            <h2>Need help <br/> covering a bill?</h2>
            <p>Get a small advance on your next paycheck and then pay Dave back when it arrives. No interest. No credit check.</p>
          </div>
        </div>
        <div className={"comments flex-center-cl"}>
          <h2 className={"comments-header"}>What people say <br/> about Dave</h2>
          <p className={"comments-content"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
          <p className={"comments-author"}>Jane Doe - CEO at ACME inc.</p>
        </div>
        <div className={"image-header"}>
          <div className={"image-header-content"}>
            <h2>Join millions of <br/> members and counting</h2>
            <a href="#" className={"header-link"}>Join Dave</a>
          </div>
          <img src={headerImage} alt="Some Info is here"/>
        </div>
        <div className={"footer-faq flex-center-cl"}>
          <h2>FAQ</h2>
          <div>
            <h3>Question one?</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
          </div>
          <div>
            <h3>Question one?</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
          </div>
          <div>
            <h3>Question one?</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
          </div>
          <div>
            <h3>Question one?</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
          </div>
          <div>
            <h3>Question one?</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
          </div>
          <div className={"contact"}>
            <a href="#" className={"header-link"}>Contact For More</a>
          </div>
        </div>
      </div>
  );
}

export default App;
