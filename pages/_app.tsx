import { SWRConfig } from 'swr'
import './general.css'

function MyApp({ Component, pageProps }) {
    return (
        <SWRConfig
            value={{
                refreshInterval: 1000,
                fetcher: (url, opts) => fetch(`/api/${url}`, opts).then((res) => res.json())
            }}
        >
                <Component {...pageProps} />
        </SWRConfig>
    )
}

export default MyApp
