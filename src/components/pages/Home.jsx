import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthData, selectUser, setAuth, setUser } from "../../redux/features/auth";
import { TextField, Typography, Box, Grid, Button } from "@mui/material";

function Home() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [isCorrect, setIsCorrect] = useState(false);

  const authData = useSelector(selectAuthData);
  const user = useSelector(selectUser);

  const handleChange = (e) => {
    if (e.target.name === "login") {
      dispatch(setUser({ login: e.target.value, password: user.password }));
    }
    if (e.target.name === "password") {
      dispatch(setUser({ login: user.login, password: e.target.value }));
    }
  };

  const handleClick = () => {
    dispatch(setAuth(true));
    history.push("/profile");
  };

  useEffect(() => {
    if (user.login === authData.login && user.password === authData.password) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  }, [dispatch, user]);

  return (
    <div>
      <Box component="div" sx={{ pt: 3, width: 500, margin: "auto" }}>
        <Typography variant="h3" component="h3" sx={{ mb: 3 }}>
          Войдите
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              name="login"
              required
              fullWidth
              label="Login"
              autoFocus
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              fullWidth
              label="Password"
              name="password"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          disabled={isCorrect ? false : true}
          sx={{ mt: 3, mb: 2 }}
          onClick={handleClick}
        >
          Войти
        </Button>
      </Box>
    </div>
  );
}

export default Home;
