import React, { useEffect, useState } from "react";

import Cross from "../../assets/Cross.svg";
import { ModalWrapper } from "../Common/Modal/Modal.style";
import { BoxWrapper } from "../Common/Box/Box.style";
import { MenuItem, Typography } from "@mui/material";
import { PrimaryTextField } from "../Common/TextField/TextField.style";
import Button from "../Common/Button/Button";
import { isAlphabet, isNumber } from "../../utils/TypeCheck";
import { TripObjectStructure } from "../../utils/TripObjectStructure";
import { GenerateUniqueId } from "../../utils/GenerateUniqueId";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 420,
  bgcolor: "#FFFFFF",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const transportersList = [
  { value: "Blue Dart", label: "Blue Dart" },
  { value: "DHL", label: "DHL" },
  { value: "Delhivery", label: "Delhivery" },
  { value: "DTDC", label: "DTDC" },
  { value: "GATI", label: "GATI" },
  { value: "Safeexpress", label: "Safeexpress" },
];

function AddTripForm(props) {
  const [tripDetails, setTripDetails] = useState({ ...TripObjectStructure });
  const [addTripDisabled, setAddTripDisabled] = useState(true);

  useEffect(() => {
    if (tripDetails["tripId"].trim() === "") {
      const id = GenerateUniqueId();
      tripDetails["tripId"] = id;
      tripDetails["_id"] = id;
      tripDetails["id"] = id;
    }
    if (
      tripDetails["tripId"].trim() !== "" &&
      tripDetails["transporter"].trim() !== "" &&
      tripDetails["source"].trim() !== "" &&
      tripDetails["dest"].trim() !== "" &&
      tripDetails["phoneNumber"].trim() !== "" &&
      tripDetails["phoneNumber"].trim().length === 10
    ) {
      setAddTripDisabled(false);
    } else setAddTripDisabled(true);
  }, [tripDetails]);

  const setTripDetailsHandler = (key, value) => {
    const cb = (prev) => ({ ...prev, [`${key}`]: value });
    if (key === "tripId" || key === "transporter") setTripDetails(cb);
    else if ((key === "source" || key === "dest") && isAlphabet(value))
      setTripDetails(cb);
    else if (key === "phoneNumber" && isNumber(value)) setTripDetails(cb);
  };

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
              Add Trip
            </Typography>
            <img
              className="img-hover"
              alt="something went wrong!"
              src={Cross}
              onClick={() => {
                setTripDetails({ ...TripObjectStructure });
                props.closeModal(false);
              }}
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
            margin="40px 0 0 0"
            height="300px"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <PrimaryTextField
              size="small"
              type="text"
              width="45%"
              value={tripDetails["tripId"]}
              disabled
              label="Trip id"
            />
            <PrimaryTextField
              size="small"
              select
              width="45%"
              value={tripDetails["transporter"]}
              onChange={(e) => {
                setTripDetailsHandler("transporter", e.target.value);
              }}
              label="Transporter"
            >
              {transportersList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </PrimaryTextField>
            <PrimaryTextField
              size="small"
              type="text"
              width="45%"
              value={tripDetails["source"]}
              onChange={(e) => {
                setTripDetailsHandler("source", e.target.value);
              }}
              label="Source"
            />
            <PrimaryTextField
              size="small"
              type="text"
              width="45%"
              value={tripDetails["dest"]}
              onChange={(e) => {
                setTripDetailsHandler("dest", e.target.value);
              }}
              label="Destination"
            />
            <PrimaryTextField
              size="small"
              type="text"
              width="45%"
              value={tripDetails["phoneNumber"]}
              helperText="Phone Number should be 10 digits"
              onChange={(e) => {
                setTripDetailsHandler("phoneNumber", e.target.value);
              }}
              label="Phone"
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
              onClick={() => {
                setTripDetails({ ...TripObjectStructure });
                props.closeModal(false);
              }}
              styles={{
                width: "106px",
                bgColor: "#FFFFFF",
                color: "primary",
                margin: "5px",
                padding: 0,
              }}
            />
            <Button
              text="Add Trip"
              variant="contained"
              disabled={addTripDisabled}
              onClick={() => {
                props.addTripData(
                  tripDetails,
                  TripObjectStructure,
                  setTripDetails
                );
              }}
              styles={{ width: "126px", bgColor: "#0057D1", margin: "5px" }}
            />
          </BoxWrapper>
        </BoxWrapper>
      </ModalWrapper>
    </div>
  );
}

export default AddTripForm;
