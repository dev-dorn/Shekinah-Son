import { Request, Response } from 'express'
import { Model } from 'mongoose'

export const createCrudHandlers = <T>(ModelEntity: Model<T>) => ({
  create: async (req: Request, res: Response) => {
    try {
      const doc = await ModelEntity.create(req.body)
      res.status(201).json(doc)
    } catch (err) {
      res.status(400).json({ error: 'Failed to create', details: (err as Error).message })
    }
  },
  list: async (_req: Request, res: Response) => {
    try {
      const docs = await ModelEntity.find().sort({ createdAt: -1 })
      res.json(docs)
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch', details: (err as Error).message })
    }
  },
  get: async (req: Request, res: Response) => {
    try {
      const doc = await ModelEntity.findById(req.params.id)
      if (!doc) return res.status(404).json({ error: 'Not found' })
      res.json(doc)
    } catch (err) {
      res.status(400).json({ error: 'Invalid id', details: (err as Error).message })
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const doc = await ModelEntity.findByIdAndUpdate(req.params.id, req.body, { new: true })
      if (!doc) return res.status(404).json({ error: 'Not found' })
      res.json(doc)
    } catch (err) {
      res.status(400).json({ error: 'Failed to update', details: (err as Error).message })
    }
  },
  remove: async (req: Request, res: Response) => {
    try {
      const doc = await ModelEntity.findByIdAndDelete(req.params.id)
      if (!doc) return res.status(404).json({ error: 'Not found' })
      res.status(204).send()
    } catch (err) {
      res.status(400).json({ error: 'Failed to delete', details: (err as Error).message })
    }
  },
})


