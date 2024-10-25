import { ImageResponse } from "@vercel/og";
import StyleComponentFactory from "./StyleComponentFactory";
import FontLoader from "./FontLoader";
import { NextRequest } from "next/server";

class ImageGenerator {
  params: { articleTitle: string; articleDesc: string; imageWidth: number; imageHeight: number; style: string; };

  constructor(request: NextRequest) {
    const url = new URL(request.url);
    this.params = {
      articleTitle: url.searchParams.get("t") || url.searchParams.get("title") || "",
      articleDesc: url.searchParams.get("d") || url.searchParams.get("desc") || "",
      imageWidth: parseInt(url.searchParams.get("w") || url.searchParams.get("width") || "1200", 10),
      imageHeight: parseInt(url.searchParams.get("h") || url.searchParams.get("height") || "630", 10),
      style: url.searchParams.get("s") || url.searchParams.get("style") || "default",
    };
    console.log(this.params);
  }

  async generateImage() {
    if (!this.params.articleTitle) {
      return this.generateErrorImage();
    }

    const content = (
      <StyleComponent title={this.params.articleTitle} description={this.params.articleDesc} />
    );

    const fonts = await FontLoader.loadFonts();

    return new ImageResponse(content, {
      width: this.params.imageWidth,
      height: this.params.imageHeight,
      fonts,
      emoji: "openmoji",
    });
  }

  generateErrorImage() {
    return new ImageResponse(<>Oops! Invalid params.</>, {
      width: this.params.imageWidth,
      height: this.params.imageHeight,
    });
  }
}

export default ImageGenerator;
