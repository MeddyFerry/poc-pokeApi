import axios from "axios";
import React from "react";

const baseURL = "https://dog.ceo/api/Rottweiler/image/random";

export default function Dogo() {
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    axios.get(baseURL).then((res) => {
      setData(res.data.message);
    });
  }, []);
}
