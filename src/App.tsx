import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const App = () => {
  const params = window.location.search;
  const url = params.split("=").length > 1 ? params.split("=")[1] : "";

  return (
    <div style={{ background: "white" }}>
      <SwaggerUI url={url} />
    </div>
  );
};

export default App;
