import { ImageResponse } from "@vercel/og";
import StyleComponentFactory from "./StyleComponentFactory";
import FontLoader from "./FontLoader";

class ImageGenerator {
  constructor(request) {
    const { searchParams } = request.nextUrl;
    this.params = {
      articleTitle: searchParams.get("t") || searchParams.get("title"),
      articleDesc: searchParams.get("d") || searchParams.get("desc"),
      imageWidth: parseInt(searchParams.get("w") || searchParams.get("width"), 10) || 1200,
      imageHeight: parseInt(searchParams.get("h") || searchParams.get("height"), 10) || 630,
      style: searchParams.get("s") || searchParams.get("style") || "default",
    };
  }

  async generateImage() {
    if (!this.params.articleTitle) {
      return this.generateErrorImage();
    }

    const StyleComponent = StyleComponentFactory.getStyleComponent(this.params.style);
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
