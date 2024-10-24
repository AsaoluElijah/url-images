class FontLoader {
  static async loadFonts() {
    const fontLatoBlack = await fetch(
      new URL("../../assets/fonts/Lato-Black.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());

    return [
      { name: "Lato-Black", data: fontLatoBlack, style: "normal" },
      { name: "Typewriter", data: fontLatoBlack, style: "normal" },
      { name: "Nervous", data: fontLatoBlack, style: "normal" },
    ];
  }
}

export default FontLoader;
