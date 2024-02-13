function MinimalStyle({ title, description }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        padding: "0 25px",
        backgroundColor: "#000",
        border: "5px solid #fff",
        color: "#fff",
        padding: "0 35px",
      }}
    >
      <h2
        style={{
          fontSize: "70px",
          textDecoration: "underline",
          lineHeight: 1.7,
        }}
      >
        {title}
      </h2>
      {description && <p style={{ fontSize: "40px" }}>{description}</p>}
    </div>
  );
}

export default MinimalStyle;
