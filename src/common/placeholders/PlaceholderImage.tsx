import React from "react";
import Image from "next/image";
import { ImageLoaderProps } from "next/image";

// TODO(gr3yknigh1): Implement foreground and background colors
export interface PlaceholderImageProps {
  width: number;
  height?: number;
  text?: string;
  foregroundColor?: string;
  backgroundColor?: string;
}

const PLACEHOLDER_URL = "https://via.placeholder.com";
const PLACEHOLDER_IMAGE_EXTENTIONS = "png";

function joinUrl(...items: string[]): string {
  return items.join("/");
}

function placeholderLoader(props: ImageLoaderProps) {
  return joinUrl(PLACEHOLDER_URL, props.src);
}

function getSrc(width: number, height: number, text?: string): string {
  let src = `${width}x${
    height ? height : width
  }.${PLACEHOLDER_IMAGE_EXTENTIONS}`;

  if (text) {
    src += "?text=" + text.replace(" ", "+");
  }

  return src;
}

export default function PlaceholderImage(props: PlaceholderImageProps) {
  // TODO(gr3yknigh1): implement changing `foregroundColor`,
  // and `backgroundColor` props
  const { width, height, text } = props;
  return (
    <Image
      src={getSrc(width, height ? height : width, text)}
      loader={placeholderLoader}
      quality="100"
      width={width}
      height={height ? height : width}
    ></Image>
  );
}
