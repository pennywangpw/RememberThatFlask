import React from "react";

function HomePage() {

  return (
    <div className="bg-blue-0bf">
      <div className="txt-ali-center pad-t-4rem">
        <h1 className="color-white mrg-t-0p fontS-300rem">The smart to-do app for busy people.</h1>
      </div>
      <div className="width-max-700p mrg-lr-auto flx-col flx-ai-center">
        <div className="flx gap15p">
          <div className="bg-white width-fit pad10p borderR-10p width-max-250p">
            <span className="fontW-600 fontS-115rem">
                Watch "Return of Iron Man" on Friday night.
              </span>
          </div>
          <div className="bg-white width-fit pad10p borderR-10p height-fit">
            <span className="fontW-600 fontS-115rem">
              Go to Picnic Day tomorrow.
            </span>
          </div>
        </div>
        <div className="pad-t-4rem">
          <img src="https://www.rememberthemilk.com/img/hp_steve_2.png?1663390145" alt="a person" />
        </div>
        <div className="color-white txt-ali-center">
          <h1>Get reminded, from here now</h1>
          <p className="">
            Stop thinking about to-dos, and let the app remember for you.
          </p>
        </div>
      </div>
      <div id="about" className="bg-white">
        <div className="width-max-700p grid-2-8 mrg-lr-auto">
          <div></div>
          <div>
            <h3 className="fontS-175rem">Developers</h3>
            <div className="flx gap15p fontS-125rem">
              Dongliang Li
              <a href="https://github.com/dongliang09" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/dongliang-li-a9ab038a/" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
            <div className="flx gap15p fontS-125rem">
              Sarah Moore
              <a href="https://github.com/sarahmoore19" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/sarah-moore-747946259" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
            <div className="flx gap15p fontS-125rem">
              Seng Wang
              <a href="https://github.com/Wang55566" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/seng-wang-142a5a149/" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
            <div className="flx gap15p fontS-125rem">
              Penny Wang
              <a href="https://github.com/pennywangpw" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/yi-ping-penny-wang-40654114b/" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="flx-jc-center mrg-lr-auto">@ 2023 Remember That Flask</div>
      </div>
    </div>
  )
}

export default HomePage;