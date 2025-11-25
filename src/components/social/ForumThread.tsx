
import React from 'react';
import { MessageSquare, ThumbsUp, CornerDownRight } from 'lucide-react';
import { ForumPost } from '../../types';

interface ForumThreadProps {
  post: ForumPost;
  isReply?: boolean;
}

export const ForumThread: React.FC<ForumThreadProps> = ({ post, isReply = false }) => {
  return (
    <div className={`flex gap-4 ${isReply ? 'ml-12 mt-4 border-l-2 border-slate-100 pl-4' : 'bg-white p-6 rounded-xl border border-slate-200 shadow-sm'}`}>
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600 text-sm">
          {post.avatar}
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900">{post.author}</span>
            <span className="text-xs text-slate-500">{post.timestamp}</span>
          </div>
        </div>
        <p className="text-slate-600 mb-4 leading-relaxed">{post.content}</p>
        
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-1.5 text-slate-500 hover:text-accent-600 text-sm font-medium transition-colors">
            <ThumbsUp size={16} />
            <span>{post.likes}</span>
          </button>
          {!isReply && (
             <button className="flex items-center gap-1.5 text-slate-500 hover:text-accent-600 text-sm font-medium transition-colors">
              <MessageSquare size={16} />
              <span>Responder</span>
            </button>
          )}
        </div>

        {post.replies && post.replies.length > 0 && (
          <div className="mt-4">
            {post.replies.map(reply => (
              <ForumThread key={reply.id} post={reply} isReply={true} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
