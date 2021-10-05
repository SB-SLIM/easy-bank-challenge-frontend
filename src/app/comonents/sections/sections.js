import React from "react";
import Button from "../../ui/Button";
import Card from "../../ui/card";
import Cards from "./cards";

export default function Sections() {
  return (
    <section>
      <span className="image-1"></span>
      <div className="image"></div>
      <div id="home" className="section  bg-ligth-very-gray pt-5 pb-5">
        <div className=" container p-0">
          <div className="section-title">
            <h1 className="color-primary">
              Next generation <br /> digital banking
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              ducimus illum iusto eos repellendus ipsam, saepe distinctio ut?
              Error doloremque dicta placeat necessitatibus ex nam repudiandae
              ad ipsum, quae dignissimos!
            </p>
            <Button>Requeste Invite</Button>
          </div>
        </div>
      </div>
      <div id="about" className="section bg-light-blue pt-5 pb-5">
        <div className="container p-0">
          <div className="section-title pb-3">
            <h1>Why choose easy bank ? </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              itaque culpa fugit facilis!
            </p>
          </div>
          <Cards />
        </div>
      </div>
      <div id="careers" className="section bg-ligth-very-gray pt-5 pb-5">
        <div className="container">
          <div className="col-6 ms-0 pb-3">
            <h1>Latest Articles </h1>
          </div>
          <div className="container cards">
            <Card
              title="Receive money in any currency with no fees"
              source="./assets/image-currency.jpg"
              author="By Claire Robinson"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              eum a quod minima! In officia omnis mollitia alias assumenda
              perspiciatis, molestias corrupti facilis quibusdam.
            </Card>
            <Card
              title="Treat yourself without worrying about money"
              source="./assets/image-restaurant.jpg"
              author="By Wilson Hutton"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              eum a quod minima! In officia omnis mollitia alias assumenda
              perspiciatis, molestias corrupti facilis quibusdam.
            </Card>
            <Card
              title="Take your Easybank card wherever you go"
              source="./assets/image-plane.jpg"
              author="By Wilson Hutton"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              eum a quod minima! In officia omnis mollitia alias assumenda
              perspiciatis, molestias corrupti facilis quibusdam.
            </Card>
            <Card
              title="Our invite-only Beta account are now live!"
              source="./assets/image-confetti.jpg"
              author="By Claire Robinson"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              eum a quod minima! In officia omnis mollitia alias assumenda
              perspiciatis, molestias corrupti facilis quibusdam.
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
