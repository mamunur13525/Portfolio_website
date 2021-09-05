import { Cloud } from "react-icon-cloud";
import React from "react";
import { v4 } from "uuid";

// https://raw.githubusercontent.com/simple-icons/simple-icons/develop/_data/simple-icons.json
const iconSlugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const wordTags = [
  {
    id: 0,
    title: "Hello",
  },
  {
    id: 1,
    title: "World",
  },
  {
    id: 1,
    title: "World",
  },
  {
    id: 1,
    title: "World",
  },
  {
    id: 1,
    title: "World",
  },
  {
    id: 1,
    title: "World",
  },
  {
    id: 1,
    title: "World",
  },
  {
    id: 1,
    title: "World",
  },
  {
    id: 1,
    title: "World",
  },
  {
    id: 1,
    title: "World",
  },
  {
    id: 1,
    title: "World",
  },
  {
    id: 1,
    title: "World",
  },
  {
    id: 1,
    title: "World",
  },
  {
    id: 1,
    title: "World",
  },
  {
    id: 1,
    title: "World",
  },
  {
    id: 1,
    title: "World",
  },
  {
    id: 1,
    title: "World",
  },
  {
    id: 1,
    title: "World",
  },
  {
    id: 1,
    title: "World",
  },
];

export default function TagCanvus() {
  const tagCanvasOptions = {
    textColour: "#FFFFFF",
    outlineThickness: 0.5,
    outlineColour: "#fe0853",
    maxSpeed: 0.06,
    freezeActive: true,
    shuffleTags: true,
    shape: "sphere",
    zoom: 1,
    noSelect: true,
    textFont: null,
    pinchZoom: true,
    freezeDecel: true,
    fadeIn: 3000,
    initial: [0.3, -0.1],
    depth: 0.8,
    clickToFront: 500,
    textHeight: 30,
    imageScale: 2,
    reverse: true,
    tooltip: "native",
    tooltipDelay: 0,
    wheelZoom: true,
  };

  return (
    <Cloud
      id={"word"}
      type={"word"}
      tags={wordTags}
      key={v4()}
      tagCanvasOptions={tagCanvasOptions}
    />
  );
}
