export default function Home() {
  return (
    <main style={{ maxWidth: 560, margin: "80px auto", padding: 24, lineHeight: 1.7 }}>
      <h1 style={{ fontSize: 24 }}>🤖 LINE Bot</h1>
      <p style={{ color: "#666" }}>บอทกำลังทำงานอยู่</p>
      <p style={{ color: "#666", fontSize: 14 }}>
        Webhook endpoint: <code>/api/line-webhook</code>
      </p>
    </main>
  );
}
