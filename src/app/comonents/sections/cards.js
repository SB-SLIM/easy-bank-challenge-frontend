import React from "react";
import Card from "../../ui/card";

export default function Cards() {
  return (
    <div className="container cards">
      <Card
        title="Online Banking"
        source="./assets/icon-online.svg"
        icon={true}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi eum a
        quod minima! In officia omnis mollitia alias assumenda perspiciatis,
        molestias corrupti facilis quibusdam.
      </Card>
      <Card
        title="Simple Budgeting"
        source="./assets/icon-budgeting.svg"
        icon={true}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi eum a
        quod minima! In officia omnis mollitia alias assumenda perspiciatis,
        molestias corrupti facilis quibusdam.
      </Card>
      <Card
        title="Fast Onboarding"
        source="./assets/icon-onboarding.svg"
        icon={true}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi eum a
        quod minima! In officia omnis mollitia alias assumenda perspiciatis,
        molestias corrupti facilis quibusdam.
      </Card>
      <Card title="Open API" source="./assets/icon-api.svg" icon={true}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi eum a
        quod minima! In officia omnis mollitia alias assumenda perspiciatis,
        molestias corrupti facilis quibusdam.
      </Card>
    </div>
  );
}
