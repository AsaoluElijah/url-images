import DefaultStyle from "@/components/image-styles/DefaultStyle";
import MinimalStyle from "@/components/image-styles/MinimalStyle";
import Uno from "@/components/image-styles/Uno";
import Dos from "@/components/image-styles/Dos";
import Tres from "@/components/image-styles/Tres";

class StyleComponentFactory {
  static STYLE_COMPONENTS = {
    default: DefaultStyle,
    minimal: MinimalStyle,
    uno: Uno,
    dos: Dos,
    tres: Tres,
  };

  static getStyleComponent(style) {
    if (style === "r" || style === "random") {
      return this.getRandomStyleComponent();
    }
    return this.STYLE_COMPONENTS[style.toLowerCase()] || DefaultStyle;
  }

  static getRandomStyleComponent() {
    const styleKeys = Object.keys(this.STYLE_COMPONENTS);
    const randomIndex = Math.floor(Math.random() * styleKeys.length);
    return this.STYLE_COMPONENTS[styleKeys[randomIndex]];
  }
}

export default StyleComponentFactory;
