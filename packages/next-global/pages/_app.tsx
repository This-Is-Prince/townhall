// Copyright 2019-2025 @polka-labs/townhall authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import 'next-common/styles/global.css';
import 'next-common/styles/tailwind.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <Component {...pageProps} />;
}
