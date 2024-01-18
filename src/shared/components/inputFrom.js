import { Button, Input, TextField, TextareaAutosize } from "@mui/material";
import React from "react";

export default function InputFrom() {
  return (
    <>
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <Input aria-label="Demo input" placeholder="Type something…" />
      <TextareaAutosize
        id="text-basic"
        maxRows={4}
        minRows={4}
        placeholder="Empty"
      />
      <Button>Button</Button>
      <Button slots={{ root: "div" }}>Button2</Button>
    </>
  );
}
