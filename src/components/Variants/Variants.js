import React from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

const Variants = (props) => {
    console.log(props.value ? props.value.toString():"");
  const variants = props.variants.map(variant=>{
      return (
        <FormControlLabel value={variant._id.toString()} control={<Radio />} label={variant.content} />
      );
  });  
  return (
    <RadioGroup style={{paddingLeft:"2vh",paddingRight:"2vh"}} row name="questions" value={props.value ? props.value.toString():""} onChange={props.variantOnChangeHandler}>
        {variants}
    </RadioGroup>
  );
};

export default Variants;
