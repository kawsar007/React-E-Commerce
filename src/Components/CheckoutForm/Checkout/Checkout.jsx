import { Paper, Step, Stepper, Typography, StepLabel, CssBaseline, CircularProgress, Divider, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import useStyles from "./Styles";


import { commerce } from "../../../Library/commerce";

const steps = ["Shipping address", "Payment details"];

const Checkout = ({ cart, onCaptureCheckout, order, error }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  //console.log(checkoutToken, "checkoutToken");

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        console.log(token, "Token");
        setCheckoutToken(token);
      } catch (error) {
        console.log(error);
      }
    };
    generateToken();
  }, [cart]);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  const timeouts = () => {
    setTimeout(() =>{
      setIsFinished(true)
    }, 3000);
  }

  const Confirmations = () => order.customer ? (
    <>
     <div>
       <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}</Typography>
       <Divider className={classes.divider}/>
       <Typography variant="subtitle2">Order ref: {order.customer.reference}</Typography>
     </div>
     <br/>
     <button component={Link} to='/' variant="outlined" type="button">Back to Home</button>
    </>
  ) : isFinished ? (
      <>
        <div>
          <Typography variant="h4" style={{color: 'salmon'}}>Payment Successful.</Typography>
        <Typography variant="h5" style={{color: '#eb4d4b'}}>Thank you for your purchase.️‍🔥️‍🔥️‍🔥</Typography>
       <Divider className={classes.divider}/>
        </div>
        <br/>
        <Button component={Link} to='/' variant="outlined" type="button">Back to Home</Button>
      </>
  ) : (
    <div className={classes.spinner}>
      <CircularProgress/>
    </div>
  );

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        backStep={backStep}
        nextStep={nextStep}
        onCaptureCheckout={onCaptureCheckout}
        timeouts={timeouts}
      />
    );

  return (
    <>
    <CssBaseline/>
      <div className={classes.toolbar}>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((step) => (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <Confirmations />
            ) : (
              checkoutToken && <Form />
            )}
          </Paper>
        </main>
      </div>
    </>
  );
};

export default Checkout;
