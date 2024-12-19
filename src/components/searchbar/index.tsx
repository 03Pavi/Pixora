"use client";
import { alpha, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#ffff",
    marginLeft: 0,
    width: "100%",
    minWidth: 350,
    height: 50,
    boxShadow: `0 2px 4px rgba(0, 0, 0, 0.1)`,
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(5)})`,
      transition: theme.transitions.create("width"),
      height: 35,
      width: "100%",
    },
  }));

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon sx={{ fontSize: 30, color: "var(--placeholder-color)" }} />
      </SearchIconWrapper>
      <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
    </Search>
  );
};

export default SearchBar;
