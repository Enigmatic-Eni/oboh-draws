import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Montserrat } from 'next/font/google';
import { Toaster } from "react-hot-toast";


const inter = Montserrat({
  weight: ['400'],
  subsets: ['latin'],
});



const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
    <QueryClientProvider client={queryClient}>
     <Component {...pageProps} />
     <Toaster position={"top-right"}/>
    </QueryClientProvider>
    </div>
  )
}
