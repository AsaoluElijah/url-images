import React from "react";
import DefaultStyle from "../components/image-styles/DefaultStyle";
import MinimalStyle from "../components/image-styles/MinimalStyle";
import Uno from "../components/image-styles/Uno";
import Dos from "../components/image-styles/Dos";
import Tres from "../components/image-styles/Tres";

type StyleComponentProps = {
  title: string;
  description: string;
};

type StyleComponentType = React.ComponentType<StyleComponentProps>;

const STYLE_COMPONENTS: Record<string, StyleComponentType> = {
  default: DefaultStyle,
  minimal: MinimalStyle,
  uno: Uno,
  dos: Dos,
  tres: Tres,
};

const getRandomStyleComponent = (): StyleComponentType => {
  const styleKeys = Object.keys(STYLE_COMPONENTS);
  const randomIndex = Math.floor(Math.random() * styleKeys.length);
  return STYLE_COMPONENTS[styleKeys[randomIndex]];
};

type StyleComponentFactoryProps = {
  title: string;
  description: string;
  style: string;
};

const StyleComponentFactory: React.FC<StyleComponentFactoryProps> = ({ title, description, style }) => {
  const StyleComponent = style === "r" || style === "random" ? getRandomStyleComponent() : (STYLE_COMPONENTS[style.toLowerCase()] || DefaultStyle);
  return <StyleComponent title={title} description={description} />;
};

export default StyleComponentFactory;
