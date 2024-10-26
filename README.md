# URL Images

URL Images let's you generate images dynamically based on the provided URL
parameters. This is particularly useful for creating custom images for articles,
blog posts, or social media content.

### Example

```text
https://url-image.vercel.app/api/cover?t=Image%20From%20URL%20Params&w=700
```

#### Output 👇

![Custom Image](https://url-image.vercel.app/api/cover?t=Image%20From%20URL%20Params&w=700)

---

## Base Endpoint

```text
https://url-image.vercel.app/api/cover
```

## API Route Parameters Documentation

This section outlines the query parameters that can be used with the API route for generating images.

### Query Parameters

- **Title Parameters**
  - `t` or `title`: 
    - **Description**: The title of the article.
    - **Default**: None (required).
  - `ts` or `titleSize`: 
    - **Description**: The font size of the title.
    - **Type**: Integer (in pixels).
    - **Default**: `70`.
  - `tw` or `titleWeight`: 
    - **Description**: The font weight of the title.
    - **Type**: String (e.g., "400", "700", "900").
    - **Default**: `900`.
  - `tlh` or `titleLineHeight`: 
    - **Description**: The line height of the title.
    - **Type**: String (e.g., "1.5", "1.6").
    - **Default**: `1.6`.

- **Description Parameters**
  - `d` or `desc`: 
    - **Description**: The description of the article.
    - **Default**: None (optional).
  - `ds` or `descriptionSize`: 
    - **Description**: The font size of the description.
    - **Type**: Integer (in pixels).
    - **Default**: `40`.
  - `dw` or `descriptionWeight`: 
    - **Description**: The font weight of the description.
    - **Type**: String (e.g., "400", "700", "900").
    - **Default**: `900`.
  - `dlh` or `descriptionLineHeight`: 
    - **Description**: The line height of the description.
    - **Type**: String (e.g., "1.5", "1.6").
    - **Default**: `1.6`.

- **Image Dimensions**
  - `w` or `width`: 
    - **Description**: The width of the generated image.
    - **Type**: Integer (in pixels).
    - **Default**: `1200`.
  - `h` or `height`: 
    - **Description**: The height of the generated image.
    - **Type**: Integer (in pixels).
    - **Default**: `630`.
  - `ar` or `aspectRatio`: 
    - **Description**: The aspect ratio of the image (e.g., "16:9").
    - **Default**: None (if provided, it will adjust the height based on the width).

### Usage Example

To generate an image with a specific title and description, you can use the following URL format:


## How to Use

To generate an image, construct a URL using the above parameters. For example:

```text
https://url-image.vercel.app/api/cover?t=My%20Article%20Title&d=Description%20of%20the%20article&w=800&h=630&s=uno
```

This URL will generate an image with the title "My Article Title", a
description, the specified dimensions, and using the `uno` style, as shown
below.

![Custom Image](https://url-image.vercel.app/api/cover?t=My%20Article%20Title&d=Description%20of%20the%20article&w=800&h=630&s=uno)

## Title Formatting

The title parameter is used to generate the title of the image. It is required
and must be provided. It is used in a verbose manner, whatever you provide will
be used as the title. It utilizes standard URL encoding, so you can use spaces,
special characters, etc.

The following URL will generate an image with the title "MY ARTICLE TITLE":

```text
https://url-image.vercel.app/api/cover?t=MY%20ARTICLE%20TITLE&w=700
```

You can also use a line break in the title by using `%0D` in the URL:

```
https://url-image.vercel.app/api/cover?t=MY%0DARTICLE%20TITLE&w=700
```

## Available Styles

- `default`: The default style for image generation.
- `minimal`: A minimalistic style.
- `uno`: A specific custom style.
- `dos`: Another specific custom style.
- `tres`: Yet another custom style.
- `random`: Randomly selects one of the available styles.

> Kindly note that this project is still in progress, and the contribution guide
> will be updated momentarily.
