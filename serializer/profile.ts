import { type Post, type Comment, type Profile } from '@/type/profile'

export function PostSerializer(el: any): Post {
  return {
    id: el.id,
    title: el.title,
    description: el.description,
    views: el.views,
    seoTitle: el.seo_title,
    seoDescription: el.seo_description,
    seoKeywords: el.seo_keywords,
  }
}

export function CommentSerializer(el: any): Comment {
  return {
    id: el.id,
    text: el.text,
    postId: el.postId,
  }
}

export function ProfileSerializer(el: any): Profile {
  return {
    name: el.name,
  }
}
