// https://source.unsplash.com/random/?code,blur
import { ImageResponse } from "@vercel/og";
import DefaultStyle from "../../components/image-styles/DefaultStyle";
import MinimalStyle from "../../components/image-styles/MinimalStyle";
import Uno from "@/components/image-styles/Uno";

export const config = {
  runtime: "edge",
};

export default async function handler(request) {
  const { searchParams } = request.nextUrl;
  const articleTitle = searchParams.get("t") || searchParams.get("title");
  const articleDesc = searchParams.get("d") || searchParams.get("desc");
  let style = searchParams.get("s") || searchParams.get("style") || "default";

  // Load fonts
  const fontLatoRegular = await fetch(
    new URL("../../assets/fonts/Lato-Regular.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const fontLatoBlack = await fetch(
    new URL("../../assets/fonts/Lato-Black.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const fontTypeWriter = await fetch(
    new URL("../../assets/fonts/TYPEWR__.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const fontNervous = await fetch(
    new URL("../../assets/fonts/Nervous.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const fontAudiowide = await fetch(
    new URL("../../assets/fonts/Audiowide.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  if (!articleTitle) {
    return new ImageResponse(<>Opps! Invalid params</>, {
      width: 1200,
      height: 630,
    });
  }

  // Mapping style names to components
  const STYLE_COMPONENTS = {
    default: DefaultStyle,
    minimal: MinimalStyle,
    uno: Uno,
  };

  // Check if style is set to 'r' for random
  if (style === "r" || style === "random") {
    const styleKeys = Object.keys(STYLE_COMPONENTS);
    const randomIndex = Math.floor(Math.random() * styleKeys.length);
    style = styleKeys[randomIndex];
  }

  const StyleComponent =
    STYLE_COMPONENTS[style.toLowerCase()] || STYLE_COMPONENTS["default"];

  const content = (
    <StyleComponent title={articleTitle} description={articleDesc} />
  );

  return new ImageResponse(content, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Lato-Black",
        data: fontLatoBlack,
        style: "normal",
      },
      {
        name: "Lato-Regular",
        data: fontLatoRegular,
        style: "normal",
      },
      {
        name: "Typewriter",
        data: fontTypeWriter,
        style: "normal",
      },
      {
        name: "Nervous",
        data: fontNervous,
        style: "normal",
      },
      {
        name: "Audiowide",
        data: fontAudiowide,
        style: "normal",
      },
    ],
    emoji: "openmoji",
  });
}
