import Head from 'next/head'
import { useState } from 'react'
import QRCode from "react-qr-code"

export default function Home() {
  const [value, setValue] = useState("https://www.google.com")
  return (
    <>
      <Head>
        <title>QR Code Generator</title>
      </Head>
      <main className="flex justify-center items-center w-full h-screen bg-black">
       <div className='space-y-4 flex flex-col items-center justify-center'>
        <QRCode value={value} />
        <form>
          <input
            type="text" 
            placeholder='Enter the link to generate a QR Code'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="bg-black/10 border rounded-md w-96 p-2 text-gray-100"
          />
        </form>
       </div>
      </main>
    </>
  )
}
