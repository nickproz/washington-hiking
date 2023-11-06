import React, { FunctionComponent } from 'react';
import { Link as CloudscapeLink, LinkProps as CloudscapeLinkProps } from '@cloudscape-design/components';
import Link from 'next/link';

export type LinkProps = CloudscapeLinkProps;

const LinkComponent: FunctionComponent<LinkProps> = (props: CloudscapeLinkProps) => {
  return (
    <Link href={props.href!} passHref={true}>
      <CloudscapeLink {...props}>{props.children}</CloudscapeLink>
    </Link>
  );
};

export { LinkComponent };
