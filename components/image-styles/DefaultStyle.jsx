function DefaultStyle({ title, description, titleSize, descriptionSize, titleWeight, descriptionWeight, titleLineHeight, descriptionLineHeight }) {
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
          fontSize: titleSize,
          fontWeight: titleWeight,
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
            lineHeight: descriptionLineHeight,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default DefaultStyle;
