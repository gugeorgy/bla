interface AccessibilityState {
  selected: boolean;
  disable: boolean;
}

export interface TextProps {
  accessibilityState?: AccessibilityState;
  children?: React.ReactNode;
  className?: string;
  ellipsizeMode?: 'clip' | 'head' | 'middle' | 'tail';
  numberOfLines?: number;
  onPress?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  contentStyle?: React.CSSProperties | undefined;
  disabled?: boolean;
  tag?: 'p' | 'span';
  dataDetectorType?:
    | 'all'
    | 'email'
    | 'link'
    | 'none'
    | 'phoneNumber'
    | 'title';
}
