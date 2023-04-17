import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ChartsPage = () => {
  const navigate = useNavigate();
  const searchParmas = new URLSearchParams(window.location.search.slice(1));

  useEffect(() => {
    if (!searchParmas.get("type")) {
      navigate("/charts?type=bar");
    }
  }, []);

  return <h1>This is Charts Page!</h1>;
};

export default ChartsPage;
