import PropTypes from "prop-types";
import Logo from "../assets/logo2.png";


import moment from "moment";
import Markdown from "./Markdown";
import { Person, Refresh, ThumbDown, ThumbUp } from "@mui/icons-material";
import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";

/**
 * A chat message component that displays a message with a timestamp and an icon.
 *
 * @param {Object} props - The properties for the component.
 */
const Message = (props) => {
  const { id, createdAt, text, ai = false } = props.message;


  return (
    <>
    <Stack flexDirection={ai ? 'flex-row-reverse' : 'row'} justifyContent={ai ? "flex-start" : 'flex-end'} alignItems={ai? "flex-start":'flex-end'} gap={2} paddingY={2} key={id}>
      <Stack flexDirection={'column'} justifyContent={ai? 'flex-start':'flex-end'} alignItems={ai ? 'flex-start' : 'flex-end'} gap={2} sx={
        ai ? { backgroundColor: "secondary.dark", borderRadius: "10px", padding: "10px", maxWidth: "80%" }:
        { backgroundColor: "primary.dark", borderRadius: "10px", padding: "10px", maxWidth: "80%" }
        }>
        <Markdown markdownText={text} />


        {/* stack footer */}
        {/* box that is centered, flex, and keeps both items between each other */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
        <Typography variant="body2" color="text.secondary" textAlign={ai?'right' :'left'}>
        {moment(createdAt).calendar()}
        </Typography>
        {ai && <Box sx={{ display: "flex", alignItems: "center", gap: 2, cursor:"pointer" }}>
              <Tooltip placement="top" title="Rate reply as neutral - NOT IMPLEMENTED"><IconButton><ThumbUp /></IconButton></Tooltip>
              <Tooltip placement="top" title="Rate reply as negative - NOT IMPLEMENTED"> <IconButton><ThumbDown /></IconButton></Tooltip>
              <Tooltip placement="top" title="Regenerate last message"><IconButton onClick={(e) => props.regen(e)}><Refresh /></IconButton></Tooltip>
             </Box>}
             </Box>

      </Stack>
    </Stack>
    {/* <img src={Logo} style={{ width: "50px", height: "50px", marginRight:"auto" }} alt="logo" /> */}
    {/* <Person sx={{ color: "primary.main", fontSize: "50px", marginLeft:"auto" }} /> */}

    </>
  );
};

export default Message;

Message.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    createdAt: PropTypes.number.isRequired,
    text: PropTypes.string,
    ai: PropTypes.bool,
    // regen: PropTypes.func,
  }).isRequired,
  regen: PropTypes.func,
};
