import React from "react";

import Card from "../Components/Card/Card";
import { BoxWrapper } from "../Components/Common/Box/Box.style";
import { useCounterContext } from "../Providers/CounterValuesProvider";

function CardContainer(props) {
  const { counterValues } = useCounterContext();

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
            position: "relative",
          }}
          width="240px"
          title="Total trips"
          number={counterValues?.totalTrips?.count}
        />
        <Card
          width="352px"
          title="Delivered"
          cardContainerWidth="70%"
          display="flex"
          number={counterValues?.delivered?.count}
          percentage={counterValues?.delivered?.percentage}
          onTime={counterValues?.delivered?.onTime}
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
          }}
        />
        <Card
          width="592px"
          statusCard={true}
          cardContainerWidth="180px"
          boxOneColor="#e6bcbe"
          cardContainerBorderRight="1px solid #E0E0E0"
          title="Delayed"
          number={counterValues?.delayed?.count}
          boxTwoTitle="In transit"
          boxTwoNumber={counterValues?.inTransit?.count}
          boxTwoPercentage={counterValues?.inTransit?.percentage}
          boxThreeTitle="Delivered"
          boxThreeNumber={counterValues?.delivered?.count}
          boxThreePercentage={counterValues?.delivered?.percentage}
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
            marginLeft: "-120px",
          }}
        />
      </BoxWrapper>
    </div>
  );
}

export default CardContainer;
