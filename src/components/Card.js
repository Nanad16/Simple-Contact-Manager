import React from "react";
import MuiCard from "@mui/material/Card";

function Card(props) {
    return (
        <MuiCard {...props}>
        {props.children}
        </MuiCard>
    );
    }
export default Card;
// This component wraps the MUI Card component to allow for custom styling or additional props in the future.
// It can be used to create a consistent card style across the application.