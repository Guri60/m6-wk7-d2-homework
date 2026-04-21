import { useNavigate, useParams } from "react-router-dom";

export default function SelectedApp() {
  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>TV APPS</h1>

      <div style={styles.box}>
        You Selected: <span style={styles.bold}>{name}</span>
      </div>

      <button style={styles.button} onClick={() => navigate("/")}>
        Go Back
      </button>
    </div>
  );
}

const styles = {
  page: {
    textAlign: "center",
    paddingTop: "60px",
    fontFamily: "Arial",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "40px",
  },
  box: {
    fontSize: "22px",
    marginBottom: "30px",
  },
  bold: {
    fontWeight: "bold",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    backgroundColor: "#333",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
};