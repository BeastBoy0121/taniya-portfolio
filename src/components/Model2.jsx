import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";

import schoolGirlModel from "../assets/models/schoolgirl.glb?url";

const SchoolGirl = () => {
  const group = useRef();

  const { scene, animations } = useGLTF(schoolGirlModel);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const first = Object.values(actions)[0];
    first?.play();
  }, [actions]);

  return (
    <primitive
      ref={group}
      object={scene}
      scale={1.6}
      position={[0, 0, 0]}
      rotation={[-0.19, -Math.PI / 1.9, 0]}
    />
  );
};

export default SchoolGirl;
