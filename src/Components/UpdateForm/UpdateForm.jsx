import React, { useEffect, useState } from "react";
import { ModalWrapper } from "../Common/Modal/Modal.style";
import { BoxWrapper } from "../Common/Box/Box.style";
import { MenuItem, Typography } from "@mui/material";
import Cross from "../../assets/Cross.svg";
import { PrimaryTextField } from "../Common/TextField/TextField.style";
import Button from "../Common/Button/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 270,
  bgcolor: "#FFFFFF",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const imageStyle = {};

function UpdateForm(props) {
  const [status, setStatus] = useState(undefined);
  const [date, setDate] = useState(undefined);
  const [updateDisabled, setUpdateDisabled] = useState(true);
  const { allStatus } = props;

  useEffect(() => {
    setUpdateDisabled(!(status && date) || false);
  }, [status, date, setUpdateDisabled]);

  return (
    <div>
      <ModalWrapper
        open={props.openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxWrapper sx={style}>
          <BoxWrapper
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            position="relative"
            left="0"
            right="0"
            top="0"
            bottom="0"
          >
            <Typography
              id="modal-modal-title"
              variant="h3"
              fontFamily="Poppins"
              fontSize="20px"
              color="#1A1A1A"
              fontWeight="bold"
            >
              Update Status
            </Typography>
            <img
              className="img-hover"
              alt="something went wrong!"
              src={Cross}
              onClick={() => {
                props.closeModal(false, setStatus, setDate);
              }}
            />
          </BoxWrapper>
          <BoxWrapper
            display="flex"
            flexDirection="column"
            position="relative"
            left="0"
            right="0"
            top="0"
            bottom="0"
            height="200px"
            justifyContent="space-evenly"
          >
            <PrimaryTextField
              size="small"
              select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              label={"Status"}
            >
              {allStatus.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </PrimaryTextField>
            <PrimaryTextField
              size="small"
              type="datetime-local"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              label={"Time"}
              focused
            />
          </BoxWrapper>
          <BoxWrapper
            display="flex"
            flexDirection="row"
            position="relative"
            left="0"
            right="0"
            top="0"
            bottom="0"
            justifyContent="flex-end"
            margin="10px 0 0 0"
          >
            <Button
              text="Cancel"
              variant="outlined"
              onClick={() => props.closeModal(false, setStatus, setDate)}
              styles={{
                width: "106px",
                bgColor: "#FFFFFF",
                color: "primary",
                margin: "5px",
                padding: 0,
              }}
            />
            <Button
              text="Update Status"
              variant="contained"
              disabled={updateDisabled}
              onClick={() =>
                props.updateTableData(
                  {
                    status: allStatus.find((res) => res.value === status),
                    date,
                  },
                  setStatus,
                  setDate
                )
              }
              styles={{ width: "126px", bgColor: "#0057D1", margin: "5px" }}
            />
          </BoxWrapper>
        </BoxWrapper>
      </ModalWrapper>
    </div>
  );
}

export default UpdateForm;
