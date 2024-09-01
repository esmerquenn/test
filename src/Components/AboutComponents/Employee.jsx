import React from "react";
import { Skeleton, Card } from "antd";
function Employee({ item, index }) {
  const { name, surname, position, birthdate, professional, image } = item;
  const hasData = name && surname && position && birthdate && professional && image;
  const isEven = index % 2 === 0;
  return (
    <section>
      {hasData ? (
        isEven ? (
          <article className="main-width_horizontal">
            <div className="name_div">
              <div>
                <h3>
                  {name} {surname}
                </h3>
                <h4>{position}</h4>
                <h6>{professional}</h6>
              </div>
              <p>
                <span className="birth">{birthdate}</span>
              </p>
            </div>
            <div className="main_img_horizontal">
              <img src={image} alt="image" />
            </div>
          </article>
        ) : (
          <article className="main-width_horizontal">
            <div className="main_img_horizontal">
              <img src={image} alt="image" />
            </div>
            <div className="name_div">
              <div>
                <h3>
                  {name} {surname}
                </h3>
                <h4>{position}</h4>
                <h6>{professional}</h6>
              </div>
              <p>
                <span className="birth">{birthdate}</span>
              </p>
            </div>
          </article>
        )
      ) : (
        <Card style={{ width: 300, marginTop: 16 }}>
          <Skeleton loading={!hasData} avatar active>
            <Card.Meta title="Name Surname" description="Professional - Position" />
          </Skeleton>
        </Card>
      )}
    </section>
  );
}

export default Employee;
