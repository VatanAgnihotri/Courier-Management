import React from "react";

import Card from "../Components/Card/Card";
import { BoxWrapper } from "../Components/Common/Box/Box.style";

function CardContainer(props) {
  return (
    <div>
      <BoxWrapper
        display="flex"
        width="100%"
        flexDirection="row"
        bgcolor="white"
        marginTop="2%"
        justifyContent="space-around"
      >
        <Card
          titleStyle={{
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: "600",
            lineHeight: "24px",
            letterSpacing: "0px",
            textAlign: "left",
            color: "#666666",
          }}
          countStyle={{
            fontFamily: "Poppins",
            fontSize: "24px",
            fontWeight: "600",
            lineHeight: "36px",
            letterSpacing: "0px",
            textAlign: "center",
          }}
          width="240px"
          title="Total trips"
          number="18,033"
        />
        <Card
          width="352px"
          title="Delivered"
          cardContainerWidth="70%"
          display="flex"
          number="18,033"
          progressBar={true}
          justifyContent="space-between"
          titleStyle={{
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: "600",
            lineHeight: "24px",
            letterSpacing: "0px",
            textAlign: "left",
            color: "#666666",
          }}
          countStyle={{
            fontFamily: "Poppins",
            fontSize: "24px",
            fontWeight: "600",
            lineHeight: "36px",
            letterSpacing: "0px",
            textAlign: "center",
          }}
        />
        <Card
          width="592px"
          statusCard={true}
          cardContainerWidth="180px"
          boxOneColor="#e6bcbe"
          cardContainerBorderRight="1px solid #E0E0E0"
          title="Delayed"
          number="18,033"
          boxTwoTitle="In transit"
          boxTwoNumber="18,033"
          boxThreeTitle="Delivered"
          boxThreeNumber="18,033"
          titleStyle={{
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: "600",
            lineHeight: "24px",
            letterSpacing: "0px",
            textAlign: "left",
            color: "#CC3333",
            margin: "14px 16px 5px 16px",
          }}
          countStyle={{
            fontFamily: "Poppins",
            fontSize: "24px",
            fontWeight: "600",
            lineHeight: "36px",
            letterSpacing: "0px",
            textAlign: "center",
            marginLeft: "-80px",
          }}
        />
      </BoxWrapper>
    </div>
  );
}

export default CardContainer;
