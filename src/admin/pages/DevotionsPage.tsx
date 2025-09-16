import { useEffect, useState } from 'react'
import { apiFetch } from '../../lib/utils'
import { Card } from '../../components/ui/Card'
import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'

type Devotion = { _id?: string; title: string; verse: string; content: string; date: string; coverImageUrl?: string }

export default function DevotionsPage(){
  const [items, setItems] = useState<Devotion[]>([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState<Devotion>({ title: '', verse: '', content: '', date: new Date().toISOString().slice(0,10), coverImageUrl: '' })
  const [editingId, setEditingId] = useState<string | null>(null)

  const load = async () => { setLoading(true); setItems(await apiFetch('/devotions')); setLoading(false) }
  useEffect(()=>{ load() }, [])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (editingId) {
      await apiFetch(`/devotions/${editingId}`, { method: 'PUT', body: JSON.stringify(form) })
    } else {
      await apiFetch('/devotions', { method: 'POST', body: JSON.stringify(form) })
    }
    setForm({ title: '', verse: '', content: '', date: new Date().toISOString().slice(0,10), coverImageUrl: '' })
    setEditingId(null)
    await load()
  }

  const remove = async (id?: string) => {
    if (!id) return; if (!confirm('Delete this devotion?')) return
    await apiFetch(`/devotions/${id}`, { method: 'DELETE' })
    await load()
  }

  return (
    <div>
      <h2 className="heading-font text-2xl font-bold mb-4">Daily Devotions</h2>
      <Card className="mb-6 grid md:grid-cols-4 gap-3">
        <Input placeholder="Title" value={form.title} onChange={e=>setForm({...form,title:e.target.value})} required />
        <Input placeholder="Verse (e.g., John 3:16)" value={form.verse} onChange={e=>setForm({...form,verse:e.target.value})} required />
        <Input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})} required />
        <Input placeholder="Cover Image URL (optional)" value={form.coverImageUrl} onChange={e=>setForm({...form,coverImageUrl:e.target.value})} />
        <div className="md:col-span-4">
          <textarea placeholder="Content" value={form.content} onChange={e=>setForm({...form,content:e.target.value})} rows={5} className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500' />
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={submit as any}>{editingId ? 'Update' : 'Publish'}</Button>
          {editingId && (
            <button onClick={()=>{ setEditingId(null); setForm({ title: '', verse: '', content: '', date: new Date().toISOString().slice(0,10), coverImageUrl: '' }) }} className="text-sm text-gray-600 hover:underline">Cancel</button>
          )}
        </div>
      </Card>
      <Card>
        {loading ? 'Loading…' : (
          <ul className="divide-y">
            {items.map(d => (
              <li key={d._id} className="py-3 flex items-start justify-between gap-3">
                <div>
                  <div className="font-semibold">{d.title}</div>
                  <div className="text-sm text-gray-500">{d.verse} · {new Date(d.date).toLocaleDateString()}</div>
                  <p className="mt-2 text-sm text-gray-700 max-w-2xl whitespace-pre-wrap">{d.content}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={()=>{ setEditingId(d._id!); setForm({ title: d.title, verse: d.verse, content: d.content, date: d.date.slice(0,10), coverImageUrl: (d as any).coverImageUrl || '' }) }} className="text-blue-600 hover:underline text-sm">Edit</button>
                  <button onClick={()=>remove(d._id)} className="text-red-600 hover:underline text-sm">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  )
}


