'use client';

import React from 'react';
import Text from '@/components/text/index';

import styles from './Button.module.css';
import Icon from '../icon';

interface ButtonProp {
  label?: string;
  icon?: React.ReactNode;
  contentStyle?: React.CSSProperties;
  disabled?: boolean;
  onPress?: () => void;
  align?: 'start' | 'center' | 'end';
}

export default function Button(props: ButtonProp) {
  const { align, contentStyle, disabled, icon, label, onPress } = props;

  return (
    <button
      type="button"
      className={styles.button}
      onClick={onPress}
      disabled={disabled}
      style={{ ...contentStyle, justifyContent: align }}
    >
      {icon ? <Icon icon={icon} /> : null}
      {label ? <Text>{label}</Text> : null}
    </button>
  );
}
