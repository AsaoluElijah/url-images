import ImageGenerator from "@/utils/ImageGenerator";

export const config = {
  runtime: "edge",
};

export default async function handler(request) {
  const imageGenerator = new ImageGenerator(request);
  return await imageGenerator.generateImage();
}
