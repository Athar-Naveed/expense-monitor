import toast from "react-hot-toast";
import {useRouter} from "next/router";
import {RegisterType} from "../components/global/gTypes";

export const HandleRegister = async (value: RegisterType) => {
  const route = useRouter();

  try {
    const resp = await fetch(`http://localhost:3000/api/users`, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    const dat = await resp.json();

    if (dat.status == 200) {
      toast.success(dat.message, {
        duration: 3000,
        position: "top-center",
      });
      route.push(`user/${dat.username}`);
    }
  } catch (error: any) {
    toast.error(error.message, {
      duration: 1500,
      position: "top-center",
    });
  }
};

export const HandleLogin = async (values: RegisterType) => {
  console.log(values);
  const resp = await fetch(`http://localhost:3000/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  console.log(resp);
};

export const HandleDataCreation = async () => {
  const resp = await fetch(`http://localhost:3000/api`);

  console.log(resp);
};
