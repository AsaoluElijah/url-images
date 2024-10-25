type FontStyle = 'normal' | 'italic';

export const runtime = 'edge';

export default class FontLoader {
  static async loadFont(fontName: string): Promise<{ name: string; data: ArrayBuffer; style: FontStyle }> {
    
    // try {
      const fontUrl = new URL(`../assets/fonts/${fontName}.ttf`, import.meta.url);
      
      const response = await fetch(fontUrl);
      console.log(response);
      if (!response.ok) {
        throw new Error(`Failed to fetch font: ${fontName}. Status: ${response.status}`);
      }
      
      const fontData = await response.arrayBuffer();
      
      return { name: fontName, data: fontData, style: 'normal' as FontStyle };
    // } catch (error) {
    //   throw new Error(`Failed to load font: ${fontName}. Error: ${error.message}`);
    // }
  }
}