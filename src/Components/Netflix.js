import { Component } from "react";

class Netflix extends Component {
  render() {
    return (
      <>
        <div className="container"></div>

        <div className="navbar">
          <div class="headTag">NETFLIX</div>

          <div className="signup-btn">
            <button>Log in </button>
            <button>Sign up </button>
          </div>
        </div>

        <div className="main">
          <div className="main_Container">
            <h2>Unlimited movies,TV,shows and more.</h2>
            <p>Lorem ipsum dolor sit amet consectetur a</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, vel!
            </p>

            <div>
              <input type="text" placeholder="Search Here" />
              <button className="search_Button">Get started</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Netflix;
