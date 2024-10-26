function Dos({ title, description, titleSize, descriptionSize, titleWeight, descriptionWeight, titleLineHeight, descriptionLineHeight }) {
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
          fontSize: titleSize,
          fontWeight: titleWeight,
          background: "#C53A00",
          padding: "25px",
          color: "#fff",
          lineHeight: titleLineHeight,
        }}
      >
        {title}
      </h3>
      {description && (
        <p
          style={{
            fontSize: descriptionSize,
            fontWeight: descriptionWeight,
            background: "#C53A00",
            padding: "25px",
            border: "5px solid #fff",
            color: "#fff",
            lineHeight: descriptionLineHeight,
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
