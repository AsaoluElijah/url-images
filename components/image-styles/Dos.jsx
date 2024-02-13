function Dos({ title, description }) {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "#F94C02",
        letterSpacing: -2,
        fontWeight: 700,
        fontFamily: "Nervous",
      }}
    >
      <h3
        style={{
          fontSize: 70,
          fontWeight: 900,
          background: "#C53A00",
          padding: "25px",
          color: "#fff",
          lineHeight: 1.6,
        }}
      >
        {title}
      </h3>
      {description && (
        <p
          style={{
            fontSize: 30,
            fontWeight: 900,
            background: "#C53A00",
            padding: "25px",
            border: "5px solid #fff",
            color: "#fff",
            lineHeight: 1.6,
            fontFamily: "Lato-Black",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default Dos;
