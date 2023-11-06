'use client';
import React, { FunctionComponent } from 'react';
import { TopNavigation } from '@cloudscape-design/components';
import Logo from '../../public/assets/mountains-invert.png';
import { useRouter } from 'next/navigation';

const TopNavComponent: FunctionComponent = () => {
  const router = useRouter();

  function onFollow(e: CustomEvent): void {
    e.preventDefault();
    router.push('/');
  }

  return (
    <TopNavigation
      identity={{
        href: '/',
        title: 'Washington Hikes',
        logo: { src: Logo.src, alt: 'Service' },
        onFollow,
      }}
      utilities={[]}
    />
  );
};

export { TopNavComponent };
