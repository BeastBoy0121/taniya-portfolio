import reactModel from "../assets/models/react.glb?url";
import nodeModel from "../assets/models/node.glb?url";
import pythonModel from "../assets/models/python.glb?url";
import dockerModel from "../assets/models/docker.glb?url";
import gitModel from "../assets/models/git.glb?url";

export const techStackIcons = [
  {
    name: "React",
    modelPath: reactModel,
    scale: 1.2,
    rotation: [0, 0, 0],
  },
  
  {
    name: "Node.js",
    modelPath: nodeModel,
    scale: 3.8,
    rotation: [0, -1.4, 0],
  },
  {
    name: "Python",
    modelPath: pythonModel,
    scale: 0.9,
    rotation: [0, 0, 0],
  },
  {
    name: "Docker",
    modelPath: dockerModel,
    scale: 32,
    rotation: [0, 0, 0],
  },
  {
    name: "Git",
    modelPath: gitModel,
    scale: 0.05,
    rotation: [0, -1, 0],
  },
];
