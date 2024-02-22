import React from "react";
import "./css/home.css";

const page = () => {
  return (
    <section>
      <div className="hero container">
        <div className="texts">
          <h1>Start building with our APIs for absolutely free.</h1>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button>Schedule a Demo</button>
          </form>
        </div>
        <img src="./phone.svg" alt="salom" />
      </div>
      <div className="company">
        <div className="container logos">
          <div className="company-about">
            <h1>Who we work with</h1>
            <p>
              Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accessible experiences for their users.
            </p>
            <button>About Us</button>
          </div>
          <div className="company-logos">
            <div className="company-top">
              <img src="/1.svg" alt="asdas" />
              <img src="/2.png" alt=";ldsof" />
              <img src="/3.png" alt="sadjcakl" />
            </div>
            <div className="company-bottom">
              <img src="/4.png" alt="asdas" />
              <img src="/5.png" alt=";ldsof" />
              <img src="/6.png" alt="sadjcakl" />
            </div>
          </div>
        </div>
      </div>
      <div className="coding container">
        <img src="/code.svg" alt="samkdkmaskl" />
        <article>
          <h1>Easy to implement</h1>
          <p>
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </article>
      </div>
    </section>
  );
};

export default page;
