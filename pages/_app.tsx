import { AppProps } from 'next/app';
import { Layout } from '@/components';
import { darkTheme } from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '@/app/registry';
import GlobalStyles from '@/styles/GlobalStyles';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <StyledComponentsRegistry>
            <ThemeProvider theme={darkTheme}>
                <GlobalStyles />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
            </ThemeProvider>
        </StyledComponentsRegistry>
    );
}