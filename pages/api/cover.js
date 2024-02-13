import { ImageResponse } from "@vercel/og";

// Import style components
import Uno from "@/components/image-styles/Uno";
import Dos from "@/components/image-styles/Dos";
import Tres from "@/components/image-styles/Tres";
import DefaultStyle from "../../components/image-styles/DefaultStyle";
import MinimalStyle from "../../components/image-styles/MinimalStyle";

export const config = {
  runtime: "edge",
};

export default async function handler(request) {
  const { searchParams } = request.nextUrl;

  // Extract query parameters
  const articleTitle = searchParams.get("t") || searchParams.get("title");
  const articleDesc = searchParams.get("d") || searchParams.get("desc");
  const imageWidth =
    parseInt(searchParams.get("w") || searchParams.get("width"), 10) || 1200;
  const imageHeight =
    parseInt(searchParams.get("h") || searchParams.get("height"), 10) || 630;
  let style = searchParams.get("s") || searchParams.get("style") || "default";

  // Validate required parameters
  if (!articleTitle) {
    return new ImageResponse(<>Oops! Invalid params.</>, {
      width: imageWidth,
      height: imageHeight,
    });
  }

  // Note: Loading fonts with Promise.all doesn't work due to environment limitations.
  // Fonts are loaded sequentially as a workaround.
  const fontLatoBlack = await fetch(
    new URL("../../assets/fonts/Lato-Black.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const fontTypeWriter = await fetch(
    new URL("../../assets/fonts/TYPEWR__.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const fontNervous = await fetch(
    new URL("../../assets/fonts/Nervous.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  // Style component mapping
  const STYLE_COMPONENTS = {
    default: DefaultStyle,
    minimal: MinimalStyle,
    uno: Uno,
    dos: Dos,
    tres: Tres,
  };

  // Select a random style if requested
  if (style === "r" || style === "random") {
    const styleKeys = Object.keys(STYLE_COMPONENTS);
    const randomIndex = Math.floor(Math.random() * styleKeys.length);
    style = styleKeys[randomIndex];
  }

  // Determine the appropriate style component based on the 'style' parameter
  const StyleComponent = STYLE_COMPONENTS[style.toLowerCase()] || DefaultStyle;

  // Generate the image content with the selected style component
  const content = (
    <StyleComponent title={articleTitle} description={articleDesc} />
  );

  // Return the image response with the generated content and font configuration
  return new ImageResponse(content, {
    width: imageWidth,
    height: imageHeight,
    fonts: [
      { name: "Lato-Black", data: fontLatoBlack, style: "normal" },
      { name: "Typewriter", data: fontTypeWriter, style: "normal" },
      { name: "Nervous", data: fontNervous, style: "normal" },
    ],
    emoji: "openmoji",
  });
}
