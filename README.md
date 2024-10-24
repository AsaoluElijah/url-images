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

## Available URL Parameters

- `t` or `title`: The title text to be included in the image. This is a required
  parameter.
- `d` or `desc`: The description text to be included in the image. This is
  optional.
- `w` or `width`: The width of the generated image in pixels. Default is `1200`.
- `h` or `height`: The height of the generated image in pixels. Default is
  `630`.
- `s` or `style`: The style to be used for the image. Options include `default`,
  `minimal`, `uno`, `dos`, and `tres`. If `r` or `random` is used, a style is
  randomly selected.

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
