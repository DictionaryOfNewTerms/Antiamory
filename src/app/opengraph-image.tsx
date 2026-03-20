import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#fafafa', fontFamily: 'sans-serif' }}>
        <div style={{ height: 4, backgroundColor: '#0f0f1a', width: '100%' }} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 80px' }}>
          <div style={{ fontSize: 56, fontWeight: 700, color: '#1a1a1a' }}>Antiamory</div>
          <div style={{ fontSize: 24, color: '#666', marginTop: 12 }}>Recognizing when scarcity obstructs the flow of love. A framework for awareness.</div>
          <div style={{ display: 'flex', marginTop: 32 }}>
            <div style={{ padding: '8px 20px', backgroundColor: '#0f0f1a', color: '#ffffff', borderRadius: 20, fontSize: 18 }}>Coming Soon</div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0 80px 24px' }}>
          <div style={{ fontSize: 18, color: '#999' }}>antiamory.org</div>
        </div>
      </div>
    ),
    { ...size }
  )
}
