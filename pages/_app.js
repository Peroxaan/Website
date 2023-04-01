import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
	const title = pageProps?.seo?.title ?? "Peroxaan Studios";

	const pageTitle = pageProps?.seo?.title
		? pageProps.seo.title + " | Peroxaan Studios"
		: "Peroxaan Studios";
	const description =
		pageProps?.seo?.description ??
		"High-quality experiences for iOS, macOS, and Windows.";
	const image =
		process.env.NEXT_PUBLIC_URL + (pageProps?.seo?.image ?? "/cover.png");
	const imageAlt =
		pageProps?.seo?.imageAlt ??
		"Peroxaan Studios logo and name on a pink background.";

	return (
		<ThemeProvider attribute="class" disableTransitionOnChange>
			<Head>
				<title>{pageTitle}</title>
				<meta name="description" content={description} />
				<meta name="theme-color" content="#ff6c8b" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content={image} />
				<meta property="og:image:alt" content={imageAlt} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://peroxaan.com" />
				<meta property="og:site_name" content="Peroxaan Studios" />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>

			<style jsx global>
				{`
					:root {
						--font-inter: ${inter.style.fontFamily};
					}
				`}
			</style>

			<Navbar />
			<main className="mx-auto my-10 max-w-7xl px-6 2xl:px-0">
				<Component {...pageProps} />
			</main>

			<footer className="my-20 mx-auto max-w-7xl px-6 text-zinc-600 dark:text-zinc-400 2xl:px-0">
				<p>© 2023 Peroxaan Studios, LLC.</p>
				<p>
					Website built by{" "}
					<a
						href="https://nickoates.com"
						className="underline transition-colors ease-in-out hover:text-blue-700 dark:hover:text-blue-300"
					>
						Nick Oates
					</a>
					.
				</p>
				<p className="mb-2">
					Peroxaan logo designed by{" "}
					<a
						href="https://twitter.com/DylanMcD8"
						className="underline transition-colors ease-in-out hover:text-blue-700 dark:hover:text-blue-300"
					>
						Dylan McDonald
					</a>
					.
				</p>
				<p>App Store and the Apple logo are trademarks of Apple Inc.</p>
			</footer>
		</ThemeProvider>
	);
}
