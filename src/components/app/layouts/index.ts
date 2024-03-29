import { ComponentProps } from 'react';
import Hero from './Hero';
import Dynamic from './Dynamic';
import Blank from './Blank';

const layouts = {
  Hero,
  Blank,
  Dynamic,
};

export default layouts;

// types

export type LayoutType = keyof typeof layouts;
export type Layout = ComponentProps<typeof layouts[keyof typeof layouts]>;
export type Layouts = Layout[];
