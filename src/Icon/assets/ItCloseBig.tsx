import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const component = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      xmlSpace='preserve'
      enableBackground='new 0 0 24 24'
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d='m12.7 12 6.7 6.6-.8.8-6.6-6.7-6.6 6.7-.8-.8 6.7-6.6-6.7-6.6.8-.8 6.6 6.7 6.6-6.7.8.8-6.7 6.6z' />
    </svg>
  );
};
