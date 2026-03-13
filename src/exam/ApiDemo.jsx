import axios from "axios";
import { useEffect, useState } from "react";

export default function APIdemo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get("https://dummy-json.mock.beeceptor.com/posts");
      setData(res.data);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h2>API Demo</h2>
      <ul>
        {data.map((u) => (
          <li key={u.id}>{u.title} - {u.body}</li>
        ))}
      </ul>
    </div>
  );
}