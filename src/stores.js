import { writable } from 'svelte/store'

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: 'Wow this is so nice.',
  },
  {
    id: 2,
    rating: 1,
    text: 'i actually hated it. would have been 0 stars if allowed.',
  },
  {
    id: 3,
    rating: 8,
    text: 'haha witty response.',
  },
])
