import React from 'react';
import { classNames } from '../../utils';
import styles from "./Text.module.scss"

interface TextProps {
  text: string;
  size:['p1','p2']
}
/**
 * Primary UI component for user interaction
 */
const Text: React.FC<TextProps> = ({ text,size }) => {
  return <div className={classNames(styles.text, size?styles[size]:styles.p1)}>{text}</div>;
};

export default Text;