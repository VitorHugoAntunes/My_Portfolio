import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

interface LayoutProps {
    childrenProps: ReactNode;
}

export default function Layout({ childrenProps }: LayoutProps) {

    return (
        <div>

            {childrenProps}
        </div>
    );
}