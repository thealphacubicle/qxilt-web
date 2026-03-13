'use client'

import { motion } from 'framer-motion'

const lines = [
  { type: 'import', content: 'import qxilt' },
  { type: 'empty', content: '' },
  { type: 'comment', content: '# Agent A reviews Agent B after an interaction' },
  { type: 'code', content: 'signal = qxilt.review(' },
  { type: 'code', content: '    agent_id="agent_b",' },
  { type: 'code', content: '    rating=0.9,' },
  { type: 'code', content: '    context={"task": "code_review"}' },
  { type: 'code', content: ')' },
  { type: 'empty', content: '' },
  { type: 'comment', content: '# Trust score updates automatically' },
  { type: 'code', content: 'score = qxilt.get_trust_score("agent_b")' },
]

export function CodeEditorMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="rounded-xl overflow-hidden border border-gray-700/50 shadow-2xl shadow-indigo-500/10"
    >
      <div className="flex items-center gap-2 px-4 py-2 bg-[#1e1e2e] border-b border-gray-700/50">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="ml-4 text-xs text-gray-500 font-mono">review.py</span>
      </div>

      <div className="bg-[#0B0F19] p-4 font-mono text-sm">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.3 + i * 0.08 }}
            className={`flex gap-4 ${
              i === 3
                ? 'bg-indigo-500/10 -mx-4 px-4 py-0.5 border-l-2 border-indigo-500'
                : ''
            }`}
          >
            <span className="w-6 text-right text-gray-600 select-none shrink-0">
              {line.content ? i + 1 : ''}
            </span>
            <span>
              {line.type === 'comment' && (
                <span className="text-gray-500">{line.content}</span>
              )}
              {line.type === 'import' && (
                <>
                  <span className="text-purple-400">import </span>
                  <span className="text-amber-300">qxilt</span>
                </>
              )}
              {line.type === 'code' && (
                <CodeLine content={line.content} />
              )}
            </span>
            {i === 3 && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-indigo-400 ml-1"
              />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function CodeLine({ content }: { content: string }) {
  const parts: React.ReactNode[] = []
  let key = 0

  if (content.includes('qxilt.review')) {
    parts.push(<span key={key++} className="text-amber-300">signal</span>)
    parts.push(<span key={key++} className="text-gray-400"> = </span>)
    parts.push(<span key={key++} className="text-amber-300">qxilt</span>)
    parts.push(<span key={key++} className="text-gray-400">.</span>)
    parts.push(<span key={key++} className="text-emerald-400">review</span>)
    parts.push(<span key={key++} className="text-gray-400">(</span>)
  } else if (content.includes('qxilt.get_trust_score')) {
    parts.push(<span key={key++} className="text-amber-300">score</span>)
    parts.push(<span key={key++} className="text-gray-400"> = </span>)
    parts.push(<span key={key++} className="text-amber-300">qxilt</span>)
    parts.push(<span key={key++} className="text-gray-400">.</span>)
    parts.push(<span key={key++} className="text-emerald-400">get_trust_score</span>)
    parts.push(<span key={key++} className="text-gray-400">(</span>)
    parts.push(<span key={key++} className="text-amber-200">{'"agent_b"'}</span>)
    parts.push(<span key={key++} className="text-gray-400">)</span>)
  } else if (content.includes('agent_id')) {
    parts.push(<span key={key++} className="text-gray-400">    </span>)
    parts.push(<span key={key++} className="text-amber-300">agent_id</span>)
    parts.push(<span key={key++} className="text-gray-400">=</span>)
    parts.push(<span key={key++} className="text-amber-200">{'"agent_b"'}</span>)
    parts.push(<span key={key++} className="text-gray-400">,</span>)
  } else if (content.includes('rating')) {
    parts.push(<span key={key++} className="text-gray-400">    </span>)
    parts.push(<span key={key++} className="text-amber-300">rating</span>)
    parts.push(<span key={key++} className="text-gray-400">=</span>)
    parts.push(<span key={key++} className="text-blue-400">0.9</span>)
    parts.push(<span key={key++} className="text-gray-400">,</span>)
  } else if (content.includes('context')) {
    parts.push(<span key={key++} className="text-gray-400">    </span>)
    parts.push(<span key={key++} className="text-amber-300">context</span>)
    parts.push(<span key={key++} className="text-gray-400">=</span>)
    parts.push(<span key={key++} className="text-amber-200">{"{"}</span>)
    parts.push(<span key={key++} className="text-amber-200">{'"task"'}</span>)
    parts.push(<span key={key++} className="text-gray-400">: </span>)
    parts.push(<span key={key++} className="text-amber-200">{'"code_review"'}</span>)
    parts.push(<span key={key++} className="text-amber-200">{"}"}</span>)
    parts.push(<span key={key++} className="text-gray-400">)</span>)
  } else if (content.trim() === ')') {
    parts.push(<span key={key++} className="text-gray-400">)</span>)
  } else {
    parts.push(<span key={key++} className="text-gray-300">{content}</span>)
  }

  return <>{parts}</>
}
