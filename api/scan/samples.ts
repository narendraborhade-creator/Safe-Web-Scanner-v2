export default function handler(_request: any, response: any) {
	response.status(200).json({
		quickScans: [
			{ name: 'Google Search', url: 'https://google.com', category: 'Search & Cloud', safe: true },
			{ name: 'GitHub Official', url: 'https://github.com', category: 'Developer Platform', safe: true },
			{ name: 'Wikipedia', url: 'https://en.wikipedia.org', category: 'Encyclopedia', safe: true },
			{ name: 'Legacy Insecure HTTP', url: 'http://neverssl.com', category: 'Plain HTTP', safe: false },
			{ name: 'PayPal Phishing Clone', url: 'http://paypal-verification-account-update.xyz', category: 'Phishing Imitation', safe: false },
		],
		presetComparisons: [
			{ title: 'Official Bank vs. Phishing Clone', site1: 'https://paypal.com', site2: 'http://paypal-verification-account-update.xyz', description: 'See how SSL/TLS certificates and domain reputation detect spoofing.' },
			{ title: 'Payment Gateway Security', site1: 'https://stripe.com', site2: 'https://paypal.com', description: 'Compare enterprise-grade TLS, HSTS preloading, and CSP policies.' },
			{ title: 'HTTPS Encrypted vs Unencrypted HTTP', site1: 'https://en.wikipedia.org', site2: 'http://neverssl.com', description: 'Observe the vulnerability delta when data is transmitted in plaintext.' },
		],
	});
}