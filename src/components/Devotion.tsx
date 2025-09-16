import { useEffect, useState } from 'react'
import { apiFetch } from '../lib/utils'

type Devotion = { _id: string; title: string; verse: string; content: string; date: string; coverImageUrl?: string }

export default function DevotionSection(){
  const [devotion, setDevotion] = useState<Devotion | null>(null)
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    (async ()=>{
      try {
        const items = await apiFetch('/devotions')
        const latest = items.sort((a:Devotion,b:Devotion)=> new Date(b.date).getTime() - new Date(a.date).getTime())[0]
        setDevotion(latest || null)
      } finally { setLoading(false) }
    })()
  },[])
  return (
    <section className="py-16 bg-white angle-top angle-bottom">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="heading-font text-3xl md:text-4xl font-bold text-gray-900">Daily Devotion</h2>
          <p className="text-gray-600">Be encouraged by today’s word</p>
        </div>
        {loading ? (
          <div className="rounded-2xl h-40 bg-gray-100 animate-pulse" />
        ) : devotion ? (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-0 max-w-3xl mx-auto overflow-hidden text-center">
            {devotion.coverImageUrl && (
              <img src={devotion.coverImageUrl} alt="Devotion cover" className="w-full h-56 object-cover" />
            )}
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-1">{new Date(devotion.date).toLocaleDateString()}</div>
              <h3 className="heading-font text-2xl font-bold text-gray-900 mb-1">{devotion.title}</h3>
              <div className="text-amber-600 font-semibold mb-4">{devotion.verse}</div>
              <p className="text-gray-700 whitespace-pre-wrap">{devotion.content}</p>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500">No devotion posted yet.</div>
        )}
      </div>
    </section>
  )
}


