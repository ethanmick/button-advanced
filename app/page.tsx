'use client'

import { Button } from '@/components/ui/button'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [loading, setLoading] = useState(false)
  return (
    <main className="container mx-auto mt-20">
      <div className="grid grid-cols-4 items-center justify-center gap-8">
        <Button className="justify-self-center" size="small">
          Primary
        </Button>
        <Button className="justify-self-center" size="default">
          Primary
        </Button>
        <Button className="justify-self-center" size="default" disabled>
          Primary
        </Button>
        <Button
          className="justify-self-center"
          size="default"
          loading={loading}
          onClick={() => setLoading(!loading)}
        >
          Primary
        </Button>
        <Button className="justify-self-center" size="large">
          Primary
        </Button>
        {/* Secondary */}
        <Button
          className="justify-self-center"
          variant="secondary"
          size="small"
        >
          Secondary
        </Button>
        <Button
          className="justify-self-center"
          variant="secondary"
          size="default"
        >
          Secondary
        </Button>
        <Button
          className="justify-self-center"
          variant="secondary"
          size="default"
          disabled
        >
          Secondary
        </Button>
        <Button
          className="justify-self-center"
          variant="secondary"
          size="large"
        >
          Secondary
        </Button>
        {/* Destructive */}
        <Button
          className="justify-self-center"
          variant="destructive"
          size="small"
        >
          Destructive
        </Button>
        <Button
          className="justify-self-center"
          variant="destructive"
          size="default"
        >
          Destructive
        </Button>
        <Button
          className="justify-self-center"
          variant="destructive"
          size="default"
          disabled
        >
          Destructive
        </Button>
        <Button
          className="justify-self-center"
          variant="destructive"
          size="large"
        >
          Destructive
        </Button>
        {/* Ghost */}
        <Button className="justify-self-center" variant="ghost" size="small">
          Ghost
        </Button>
        <Button className="justify-self-center" variant="ghost" size="default">
          Ghost
        </Button>
        <Button
          className="justify-self-center"
          variant="ghost"
          size="default"
          disabled
        >
          Ghost
        </Button>
        <Button className="justify-self-center" variant="ghost" size="large">
          Ghost
        </Button>
        {/* Link */}
        <Button className="justify-self-center" variant="link" size="small">
          Link
        </Button>
        <Button className="justify-self-center" variant="link" size="default">
          Link
        </Button>
        <Button
          className="justify-self-center"
          variant="link"
          size="default"
          disabled
        >
          Link
        </Button>
        <Button className="justify-self-center" variant="link" size="large">
          Link
        </Button>
      </div>
    </main>
  )
}