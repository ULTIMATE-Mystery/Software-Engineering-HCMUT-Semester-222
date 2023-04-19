import { styled } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const StyledButton = styled(Button)(
  ({ theme, buttonFunc, powerPermission }) => ({
    marginRight: "10px",
    backgroundColor:
      buttonFunc === "Phân quyền"
        ? powerPermission
          ? theme.colors.greenAccent[600]
          : theme.colors.redAccent[600]
        : theme.colors.greenAccent[600],
    width: "130px",
    "& .MuiButton-label": {
      color: "white",
    },
    "& .MuiButton-endIcon": {
      color: "white",
    },
    "&.Mui-disabled": {
      opacity: 0.5,
    },
    "&.Mui-error": {
      color: theme.palette.error.main,
    },
  })
);

const ButtonCell = ({ buttonFunc, powerPermission, onClick, className }) => {
  const endIcon =
    buttonFunc === "Chi tiết" ? <DescriptionIcon /> : <PersonAddIcon />;

  return (
    <StyledButton
      className={className}
      size="small"
      color={
        buttonFunc === "Phân quyền" && !powerPermission ? "error" : "secondary"
      }
      variant="outlined"
      endIcon={endIcon}
      onClick={onClick}
      disabled={!powerPermission && buttonFunc === "Phân quyền"}
    >
      <Typography>{buttonFunc}</Typography>
    </StyledButton>
  );
};

export default ButtonCell;
