import React, { useState } from "react";
import { toast } from "react-toastify";
import { Grid, TextField, TextareaAutosize } from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";
import { isEmpty } from "utils/generalOperations";

const contactFormInputFields = [
  {
    name: "name",
    type: "text",
  },
  {
    name: "email",
    type: "email",
  },
];

const INITIAL_STATE = {
  name: "",
  email: "",
  message: "",
};
export const ContactForm = () => {
  const [userInputs, setUserInputs] = useState(INITIAL_STATE);
  const [isLoading, setIsLoading] = useState(false);

  const sendMail = async (userInputs) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInputs),
    };
    return await fetch("http://localhost:5001/mail", requestOptions)
      .then((res) => res.json())
      .catch((error) => {
        console.log("sendMail: Failed to send mail, error = ", error);
        throw new "Failed to send mail"();
      });
  };

  const onChangeHandler = (event, fieldName) => {
    setUserInputs({ ...userInputs, [fieldName]: event.target.value });
  };

  const validateForm = (inputs) => {
    var response = { status: true };
    if (isEmpty(inputs)) {
      response.status = false;
    }
    return response;
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const { status } = validateForm({ ...userInputs });
      if (!status) {
        return toast.error("Please fill all the fields");
      }
      setIsLoading(true);
      setUserInputs({ ...userInputs });
      await sendMail(userInputs);
      setUserInputs(INITIAL_STATE);
      toast.success("Mail sent successfully!");
    } catch (error) {
      toast.error("Failed to mail!");
    }
    setIsLoading(false);
  };
  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <Grid
        container
        item
        direction="column"
        alignItems="center"
        spacing={3}
        className="capitalize"
      >
        {contactFormInputFields.map(({ name, type }, index) => {
          return (
            <Grid item key={index}>
              <TextField
                value={userInputs[name]}
                label={name}
                type={type}
                variant="outlined"
                color="primary"
                fullWidth
                onChange={(e) => onChangeHandler(e, name)}
              />
            </Grid>
          );
        })}

        <Grid item>
          <TextareaAutosize
            value={userInputs.message}
            minRows={5}
            placeholder="Type the message here!"
            style={{ width: "14rem" }}
            onChange={(e) => onChangeHandler(e, "message")}
          />
        </Grid>
        <Grid item>
          <LoadingButton
            loading={isLoading}
            loadingPosition="end"
            endIcon={<SendIcon />}
            variant="outlined"
            type="submit"
            disabled={isLoading}
          >
            Send
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};
