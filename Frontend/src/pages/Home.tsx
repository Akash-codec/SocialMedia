import { motion } from 'motion/react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Search, Bell } from 'lucide-react';
import { useState } from 'react';

const STORIES = [
  { id: 1, user: 'alex_chen', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&auto=format&fit=crop' },
  { id: 2, user: 'sarah_m', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&auto=format&fit=crop' },
  { id: 3, user: 'design_daily', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&auto=format&fit=crop' },
  { id: 4, user: 'travel_pro', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&auto=format&fit=crop' },
  { id: 5, user: 'foodie_life', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&auto=format&fit=crop' },
  { id: 6, user: 'tech_guru', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&auto=format&fit=crop' },
];

const SUGGESTIONS = [
  { id: 1, user: 'creative_studio', subtitle: 'New to Instagram', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&auto=format&fit=crop' },
  { id: 2, user: 'photography_hub', subtitle: 'Followed by alex_chen', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&auto=format&fit=crop' },
  { id: 3, user: 'art_gallery', subtitle: 'Suggested for you', image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&h=200&auto=format&fit=crop' },
];

const DUMMY_POSTS = [
  {
    id: 1,
    user: 'alex_chen',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&auto=format&fit=crop',
    content: "Just launched my new portfolio! checked it out?",
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80',
    likes: 124,
    comments: 5,
    timestamp: '2h'
  },
  {
    id: 2,
    user: 'sarah_m',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&auto=format&fit=crop',
    content: "Beautiful sunset today! 🌅",
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&auto=format&fit=crop&q=80',
    likes: 856,
    comments: 42,
    timestamp: '4h'
  },
];

const HomePage = () => {
    const [posts] = useState(DUMMY_POSTS);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-6">
                {/* Stories Bar */}
                <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800 shadow-sm overflow-x-auto no-scrollbar">
                    <div className="flex space-x-4 min-w-max">
                         <div className="flex flex-col items-center space-y-1 cursor-pointer">
                            <div className="w-16 h-16 rounded-full p-[2px] border-2 border-gray-200 dark:border-gray-700">
                                <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center text-2xl">
                                    +
                                </div>
                            </div>
                            <span className="text-xs font-medium">Add Story</span>
                        </div>
                        {STORIES.map(story => (
                            <div key={story.id} className="flex flex-col items-center space-y-1 cursor-pointer">
                                <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500">
                                    <div className="w-full h-full rounded-full p-[2px] bg-white dark:bg-gray-900">
                                        <img src={story.image} alt={story.user} className="w-full h-full rounded-full object-cover" />
                                    </div>
                                </div>
                                <span className="text-xs font-medium">{story.user}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Posts */}
                <div className="space-y-6">
                    {posts.map((post) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden"
                        >
                            {/* Header */}
                            <div className="p-3 flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500">
                                         <div className="w-full h-full rounded-full p-[2px] bg-white dark:bg-gray-900">
                                            <img src={post.avatar} alt={post.user} className="w-full h-full rounded-full object-cover" />
                                        </div>
                                    </div>
                                    <span className="font-semibold text-sm">{post.user}</span>
                                    <span className="text-gray-400 text-sm">• {post.timestamp}</span>
                                </div>
                                <button className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">
                                    <MoreHorizontal className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Image */}
                            <div className="relative aspect-square w-full bg-gray-100 dark:bg-gray-800">
                                <img
                                    src={post.image}
                                    alt="Post content"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Actions */}
                            <div className="p-3">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center space-x-4">
                                        <button className="hover:opacity-75 transition-opacity">
                                            <Heart className="w-6 h-6 hover:fill-red-500 hover:text-red-500 transition-colors" />
                                        </button>
                                        <button className="hover:opacity-75 transition-opacity">
                                            <MessageCircle className="w-6 h-6" />
                                        </button>
                                        <button className="hover:opacity-75 transition-opacity">
                                            <Send className="w-6 h-6 rotate-[-25deg] mb-1" />
                                        </button>
                                    </div>
                                    <button className="hover:opacity-75 transition-opacity">
                                        <Bookmark className="w-6 h-6" />
                                    </button>
                                </div>

                                {/* Likes & Caption */}
                                <div className="space-y-1">
                                    <p className="font-semibold text-sm">{post.likes} likes</p>
                                    <p className="text-sm">
                                        <span className="font-semibold mr-2">{post.user}</span>
                                        {post.content}
                                    </p>
                                    <p className="text-gray-500 text-sm cursor-pointer">View all {post.comments} comments</p>
                                    <p className="text-gray-400 text-[10px] uppercase mt-1">Add a comment...</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Sidebar Suggestions */}
            <div className="hidden lg:block relative">
                <div className="sticky top-24 space-y-6">
                    {/* User Profile Mini */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&auto=format&fit=crop" alt="Current User" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="font-semibold text-sm">active_user</p>
                                <p className="text-gray-500 text-sm">Kumar Ver...</p>
                            </div>
                        </div>
                        <button className="text-blue-500 text-xs font-semibold hover:text-blue-700">Switch</button>
                    </div>

                    {/* Suggestions Header */}
                    <div className="flex items-center justify-between">
                        <p className="text-gray-500 font-semibold text-sm">Suggestions For You</p>
                        <button className="text-xs font-semibold hover:text-gray-500">See All</button>
                    </div>

                    {/* Suggestions List */}
                    <div className="space-y-4">
                        {SUGGESTIONS.map(suggestion => (
                            <div key={suggestion.id} className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                                        <img src={suggestion.image} alt={suggestion.user} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm hover:underline cursor-pointer">{suggestion.user}</p>
                                        <p className="text-gray-500 text-xs">{suggestion.subtitle}</p>
                                    </div>
                                </div>
                                <button className="text-blue-500 text-xs font-semibold hover:text-blue-700">Follow</button>
                            </div>
                        ))}
                    </div>

                    {/* Footer Links */}
                    <div className="text-xs text-gray-400 mt-8 space-y-2">
                         <p>About • Help • Press • API • Jobs • Privacy • Terms</p>
                         <p>© 2026 SOCIALFUSE FROM DEEPMIND</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
