import React from 'react';
import { classNames } from '../../utils';
import styles from "./Text.module.scss"

interface TextProps {
  text: string;
}

const Text: React.FC<TextProps> = ({ text }) => {
  return <div className={classNames(styles.text)}>{text}</div>;
};

export default Text;