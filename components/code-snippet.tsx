"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CodeSnippetProps {
  code: string
  language: string
}

export default function CodeSnippet({ code, language }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative rounded-lg overflow-hidden mb-8">
      <div className="flex items-center justify-between px-4 py-2 bg-muted">
        <div className="text-sm font-mono">{language}</div>
        <Button variant="ghost" size="sm" onClick={copyToClipboard} className="h-8 gap-1 text-xs">
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </Button>
      </div>
      <pre
        className={cn(
          "p-4 overflow-x-auto text-sm font-mono bg-muted/50",
          "border border-muted-foreground/20 rounded-b-lg",
        )}
      >
        <code>{code}</code>
      </pre>
    </div>
  )
}
