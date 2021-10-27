import React from "react";
import { useSelector } from "react-redux";
import { selectUser, selectIsAuth } from "../../redux/features/auth";

function Profile() {
  const user = useSelector(selectUser);
  const isAuth = useSelector(selectIsAuth);

  if (!isAuth) {
    return <h1>Вы не авторизованны</h1>;
  }
  return (
    <div>
      <h1>{user.login}</h1>
    </div>
  );
}

export default Profile;
