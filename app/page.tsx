import Link from "next/link";

export default function Page() {
  return (
    <>
      <Link href="https://github.com/AsaoluElijah/url-images">GitHub</Link>
      <br />
      <Link href="/api/hello">API Test</Link>
      <br />
      <Link href="/api/cover?t=Hello">API Cover</Link>
    </>
  );
}
