import axios from "axios";

import {RegisterType} from "../components/global/gTypes";

export const HandleRegister = async (values: RegisterType) => {
  console.log(values);
  const resp = await axios.post(`http://localhost:3000/api`, {values});

  console.log(resp);
};

export const HandleLogin = async (values: RegisterType) => {
  console.log(values);
  const resp = await axios.post(`http://localhost:3000/api`, {values});

  console.log(resp);
};
