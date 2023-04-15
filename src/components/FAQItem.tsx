import * as React from "react";
import { Item } from "../redux/apiSlice";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { parseHTML } from "../utils/utils";

interface Props {
  info: Item;
  index: number;
}

const FAQItem: React.FC<Props> = ({ info, index }) => {
  console.log("info is", info);
  console.log("hhh", parseHTML(info.description));
  return (
    <>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography fontFamily="danaBold">
            <span>{index + 1}.</span> {info.title}
          </Typography>
        </AccordionSummary>
        <hr />
        <AccordionDetails>
          <Typography
            fontFamily="danaRegular"
            fontSize={14}
            textAlign={"justify"}
          >
            {parseHTML(info.description)}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export { FAQItem };
