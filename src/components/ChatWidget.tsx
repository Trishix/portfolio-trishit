'use client'

import { FormEvent, useEffect, useState } from 'react'

const apiEndpoint = 'https://ubot-chat.vercel.app/api/chat/trishit'

type ChatRole = 'user' | 'assistant'

type ChatMessage = {
  role: ChatRole
  content: string
}

const starterPrompt = 'Tell me about yourself'

const initialMessages: ChatMessage[] = [
  {
    role: 'assistant',
    content: 'Hi, I am Trishit! Ask me anything about my work and projects.',
  },
]

const readTextLikeReply = (data: Record<string, unknown>) => {
  const candidates = [
    data.content,
    data.reply,
    data.response,
    data.message,
    data.text,
    data.delta,
    data.textDelta,
    data.output_text,
  ]

  for (const value of candidates) {
    if (typeof value === 'string' && value.trim()) {
      // Keep original spacing for streamed token chunks.
      return value
    }
  }

  return ''
}

const parseSsePayload = (raw: string) => {
  const lines = raw.split('\n')
  const chunks: string[] = []

  for (const line of lines) {
    if (!line.startsWith('data:')) continue
    const payload = line.slice(5).trim()
    if (!payload || payload === '[DONE]') continue

    try {
      const parsed = JSON.parse(payload) as Record<string, unknown>
      const chunk = readTextLikeReply(parsed)
      if (chunk) chunks.push(chunk)
    } catch {
      // Ignore malformed stream chunks and continue parsing next data lines.
    }
  }

  return chunks.join('').trim()
}

const parseAssistantReply = async (response: Response) => {
  const raw = await response.text()

  if (!raw.trim()) return ''

  // Handle streaming/event payloads like: data: {"type":"..."}
  if (raw.includes('\ndata:') || raw.trimStart().startsWith('data:')) {
    return parseSsePayload(raw)
  }

  try {
    const parsed = JSON.parse(raw) as Record<string, unknown>
    return readTextLikeReply(parsed)
  } catch {
    return raw.trim()
  }
}

const normalizeAssistantText = (text: string) => {
  return text
    .replace(/###\s*/g, '\n### ')
    .replace(/\*\*([^*]+)\*\*/g, (_, inner: string) => inner.toUpperCase())
    .replace(/\s+\*\s/g, '\n* ')
    .replace(/\*\s{2,}/g, '* ')
    .replace(/https?:\s*\/\s*\/\s*/gi, 'https://')
    .replace(/\s+\/\s+/g, '/')
    .replace(/([.!?])(?=[A-Za-z])/g, '$1 ')
    .replace(/\s+([.,!?;:])/g, '$1')
    .replace(/([\w)])\s+'\s*([\w])/g, "$1'$2")
    .replace(/[ \t]{2,}/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [showPromptBubble, setShowPromptBubble] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [input, setInput] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowPromptBubble(true)
    }, 2000)

    return () => {
      window.clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      setShowPromptBubble(false)
    }
  }, [isOpen])

  const appendUserAndSend = async (prompt: string) => {
    const trimmed = prompt.trim()
    if (!trimmed || isSending) return

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: trimmed }]
    setMessages(nextMessages)
    setInput('')
    setIsSending(true)
    setError('')

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: nextMessages }),
      })

      if (!response.ok) {
        throw new Error('Chat request failed. Please try again.')
      }

      const assistantReply = normalizeAssistantText(await parseAssistantReply(response))

      if (assistantReply) {
        setMessages((prev) => [...prev, { role: 'assistant', content: assistantReply }])
      }
    } catch (sendError) {
      setError(sendError instanceof Error ? sendError.message : 'Something went wrong while sending your message.')
    } finally {
      setIsSending(false)
    }
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await appendUserAndSend(input)
  }

  return (
    <div className="fixed z-[120] flex flex-col items-end gap-3 right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] md:right-5 md:bottom-5">
      {isOpen ? (
        <div className="w-[min(92vw,24rem)] rounded-2xl border border-outline-variant/20 bg-surface-container-lowest shadow-[0_14px_40px_rgba(0,0,0,0.25)]">
          <div className="flex items-center justify-between border-b border-outline-variant/10 px-4 py-4">
            <h3 className="font-headline text-sm font-bold text-on-surface">Chat with Trishit</h3>
            <button
              aria-label="Close chat"
              className="rounded-md p-1 text-on-surface-variant hover:bg-surface-container"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
          </div>
          <div className="border-b border-outline-variant/10 px-4 pt-3 pb-2">
            <p className="text-[11px] font-medium text-on-surface-variant">Ask about projects, skills, and experience.</p>
          </div>
          <div className="max-h-72 space-y-3 overflow-y-auto px-4 pt-5 pb-3">
            {messages.map((message, index) => (
              <div
                className={
                  message.role === 'user'
                    ? 'ml-10 whitespace-pre-wrap break-words rounded-xl bg-primary px-3 py-2 text-sm text-on-primary'
                    : 'mr-10 whitespace-pre-wrap break-words rounded-xl bg-surface-container-low px-3 py-2 text-sm leading-relaxed text-on-surface'
                }
                key={`${message.role}-${index}`}
              >
                {message.content}
              </div>
            ))}
            {isSending ? <p className="text-xs text-on-surface-variant">Trishit is typing...</p> : null}
            {error ? <p className="text-xs text-red-500">{error}</p> : null}
          </div>

          <div className="border-t border-outline-variant/10 px-4 py-3">
            <button
              className="mb-3 rounded-md border border-outline-variant/20 px-3 py-1.5 text-xs font-medium text-on-surface-variant transition-colors hover:bg-surface-container"
              onClick={() => appendUserAndSend(starterPrompt)}
              type="button"
            >
              {starterPrompt}
            </button>

            <form className="flex items-center gap-2" onSubmit={onSubmit}>
              <input
                className="w-full rounded-lg border border-outline-variant/20 bg-surface px-3 py-2 text-sm text-on-surface outline-none focus:border-primary"
                onChange={(event) => setInput(event.target.value)}
                placeholder="Type your message"
                value={input}
              />
              <button
                className="rounded-lg bg-signature-gradient px-3 py-2 text-xs font-bold text-on-primary disabled:opacity-60"
                disabled={isSending || !input.trim()}
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      ) : null}

      {showPromptBubble && !isOpen ? (
        <button
          className="hidden items-center gap-2 rounded-2xl border border-outline-variant/20 bg-surface px-3 py-2 text-sm font-medium text-on-surface shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition-transform hover:scale-[1.02] sm:flex"
          onClick={() => setIsOpen(true)}
          type="button"
        >
          <span className="material-symbols-outlined text-base leading-none text-primary">chat_bubble</span>
          <span>chat with me</span>
        </button>
      ) : null}

      <button
        aria-label="Open chat"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-signature-gradient text-on-primary shadow-lg transition-transform hover:scale-105 sm:h-14 sm:w-14"
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
      >
        <span className="material-symbols-outlined text-xl sm:text-2xl">chat</span>
      </button>
    </div>
  )
}
