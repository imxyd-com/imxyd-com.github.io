import { ITag } from './tag'

export interface IPost {
  title: string
  fileName: string
  tags: string[]
  date: string
  content: string
  published: boolean
  featureImage: {
    name?: string,
    path?: string,
    type?: string,
  }
  deleteFileName?: string
}

export interface IPostData {
  title: string
  date: string
  published: boolean
  tags: string
  feature: string
}

export interface IPostDb {
  content: string

  abstract: string,

  data: IPostData

  fileName: string
}

export interface ITagRenderData extends ITag {
  link: string
}

export interface IPostRenderData {
  content: string
  fileName: string
  abstract: string
  title: string
  tags: ITagRenderData[]
  date: string
  feature: string
  link: string
}
