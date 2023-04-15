import * as React from "react";
import { Item } from "../redux/apiSlice";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { parseHTML } from "../utils/utils";
import ChevronRightIcon from "@mui/icons-material/ChevronLeftSharp";

interface Props {
  info: Item;
  index: number;
}

const FAQItem: React.FC<Props> = ({ info, index }) => {
  const [click, setClick] = React.useState(false);
  return (
    <>
      <Accordion className="accordion">
        <AccordionSummary
          onClick={() => setClick(!click)}
          expandIcon={click ? <ExpandMoreIcon /> : <ChevronRightIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography fontFamily="danaBold" className="title" fontSize={16}>
            <span>{index + 1}.</span> {info.title}
          </Typography>
        </AccordionSummary>
        <hr />
        <AccordionDetails>
          <Typography
            className="content"
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
