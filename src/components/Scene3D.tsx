import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { CodeScreen } from './CodeScreen';

export function Scene3D() {
  return (
    <div className="relative h-[400px] w-full">
      <CodeScreen />
    </div>
  );
}