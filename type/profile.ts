export interface Post {
  id: string
  title: string
  description: string
  views: number
  seoTitle: string
  seoDescription: string
  seoKeywords: string
}

export interface Comment {
  id: string
  text: string
  postId: string
}

export interface Profile {
  name: string
}