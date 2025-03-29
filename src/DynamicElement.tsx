import {
  type ElementType,
  type ReactNode,
  type ComponentPropsWithoutRef,
  type FC,
} from 'react';

// Define a type that allows for any HTML element and its props
type DynamicElementProps<T extends ElementType = 'div'> = {
  element?: T;
  children?: ReactNode;
} & ComponentPropsWithoutRef<T>;

export const DynamicElement = <T extends ElementType = 'div'>({
  element,
  children,
  ...props
}: DynamicElementProps<T>): ReturnType<FC<DynamicElementProps<T>>> => {
  // Create the element dynamically based on the element prop
  const Element = element || 'div';

  return (
    <Element {...props}>
      {children || `This is a dynamic <${String(element || 'div')}> element`}
    </Element>
  );
};