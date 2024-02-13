function DefaultStyle({ title, description }) {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "linear-gradient(to bottom, #dbf4ff, #fff1f1)",
        letterSpacing: -2,
        fontWeight: 700,
        textAlign: "center",
        padding: "0 35px",
      }}
    >
      <h3
        style={{
          fontSize: 70,
          fontWeight: 900,
          lineHeight: 1.6,
        }}
      >
        {title}
      </h3>
      {description && (
        <p
          style={{
            fontSize: 40,
            fontWeight: 900,
            lineHeight: 1.6,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default DefaultStyle;
