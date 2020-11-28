import React from 'react';
import Link from 'next/link';

// const AppLink = ({ children, className, href }) => {
//   return (
//     <Link href={href}>
//       <a className={className}>{children}</a>
//     </Link>
//   );
// };

export const AppLink = (props) => {
  return (
    <Link href={props.href}>
      <a className={props.className}>{props.children}</a>
    </Link>
  );
};
