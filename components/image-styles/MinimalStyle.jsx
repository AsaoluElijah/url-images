function MinimalStyle({ title, description, titleSize, descriptionSize, titleLineHeight }) {
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
        border: "8px solid #fff",
        color: "#fff",
        padding: "0 35px",
      }}
    >
      <h2
        style={{
          fontSize: titleSize,
          textDecoration: "underline",
          lineHeight: titleLineHeight,
        }}
      >
        {title}
      </h2>
      {description && <p style={{ fontSize: descriptionSize }}>{description}</p>}
    </div>
  );
}

export default MinimalStyle;
