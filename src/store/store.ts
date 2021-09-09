import { Store } from 'pullstate';
import { CommentType, comments } from '../data/comments'

type CommentStorage = {
    comment: CommentType[]
    showLike: number
}

export const CommentStore = new Store<CommentStorage>({
    comment: comments,
    showLike: 0
})

const showComment = () => {
    const output: string[] = []
    for(let i = 0; i <)
}