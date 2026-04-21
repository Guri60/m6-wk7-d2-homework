import { useState } from "react";

const apps = [
  { name: "Netflix", color: "#e50914" },
  { name: "HBO Max", color: "#6c5ce7" },
  { name: "Hulu", color: "#1ce783" },
  { name: "Prime Video", color: "#00a8e1" },
];

export default function Home() {
  const [selected, setSelected] = useState("");

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>TV APPS</h1>

      <div style={styles.grid}>
        {apps.map((app) => (
          <div
            key={app.name}
            onClick={() => setSelected(app.name)}
            style={{
              ...styles.card,
              border:
                selected === app.name ? "3px solid black" : "1px solid #ddd",
            }}
          >
            <div
              style={{
                ...styles.logo,
                backgroundColor: app.color,
              }}
            >
              {app.name}
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div style={styles.selected}>
          You Selected: <b>{selected}</b>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    textAlign: "center",
    paddingTop: "40px",
    fontFamily: "Arial",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "30px",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    cursor: "pointer",
    padding: "5px",
    borderRadius: "10px",
    transition: "0.2s",
  },
  logo: {
    width: "140px",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    borderRadius: "10px",
    fontSize: "14px",
  },
  selected: {
    marginTop: "30px",
    fontSize: "20px",
  },
};