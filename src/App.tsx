import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    textAlign: "center",
  },
  title: {
    color: "#fb2645",
    marginBottom: "20px",
  },
  text: {
    fontSize: "16px",
    marginBottom: "10px",
  },
};

const App = () => {
  const params = window.location.search;
  const url = params.split("=").length > 1 ? params.split("=")[1] : "";

  if (!url) {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Error: OpenAPI Schema URL Missing</h1>
        <p style={styles.text}>
          You need to pass the OpenAPI schema URL as a query string in the
          following format:
        </p>
        <p style={styles.text}>
          <i>https://swagger.rocketapi.net/?url=your_openapi_schema_url</i>
        </p>
      </div>
    );
  }

  return (
    <div style={{ background: "white" }}>
      <SwaggerUI url={url} />
    </div>
  );
};

export default App;
