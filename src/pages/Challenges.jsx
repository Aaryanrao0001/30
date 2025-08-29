import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Code2, Clock, Users } from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

const Challenges = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const challenges = [
    {
      id: 1,
      title: 'Two Sum Problem',
      description: 'Find two numbers in an array that add up to a target sum.',
      difficulty: 'Easy',
      category: 'Arrays',
      estimatedTime: '30 min',
      participants: 1234,
      completed: true
    },
    {
      id: 2,
      title: 'Binary Tree Traversal',
      description: 'Implement in-order, pre-order, and post-order traversal for binary trees.',
      difficulty: 'Medium',
      category: 'Trees',
      estimatedTime: '45 min',
      participants: 856,
      completed: true
    },
    {
      id: 3,
      title: 'Dynamic Programming - Fibonacci',
      description: 'Solve Fibonacci sequence using dynamic programming approach.',
      difficulty: 'Medium',
      category: 'Dynamic Programming',
      estimatedTime: '40 min',
      participants: 967,
      completed: false
    },
    {
      id: 4,
      title: 'Graph DFS Implementation',
      description: 'Implement depth-first search algorithm for graph traversal.',
      difficulty: 'Hard',
      category: 'Graphs',
      estimatedTime: '60 min',
      participants: 543,
      completed: false
    },
    {
      id: 5,
      title: 'Merge Sort Algorithm',
      description: 'Implement the merge sort algorithm with optimal time complexity.',
      difficulty: 'Medium',
      category: 'Sorting',
      estimatedTime: '35 min',
      participants: 789,
      completed: false
    },
    {
      id: 6,
      title: 'Hash Table Implementation',
      description: 'Build a hash table with collision handling using chaining.',
      difficulty: 'Hard',
      category: 'Hash Tables',
      estimatedTime: '75 min',
      participants: 432,
      completed: false
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'success';
      case 'medium': return 'warning';
      case 'hard': return 'error';
      default: return 'default';
    }
  };

  const filteredChallenges = challenges.filter(challenge => {
    const matchesSearch = challenge.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         challenge.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'all' || 
                             challenge.difficulty.toLowerCase() === selectedDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Coding Challenges</h1>
            <p className="text-gray-600">Choose your next challenge and start coding!</p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search challenges..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Difficulties</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div>

          {/* Challenges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChallenges.map((challenge, index) => (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card hover className="h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant={getDifficultyColor(challenge.difficulty)} size="sm">
                      {challenge.difficulty}
                    </Badge>
                    <Code2 className="w-5 h-5 text-gray-400" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {challenge.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 flex-1">
                    {challenge.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {challenge.estimatedTime}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {challenge.participants}
                      </span>
                    </div>
                    
                    <div className="text-xs text-gray-500 mb-3">
                      Category: {challenge.category}
                    </div>
                    
                    <Button 
                      className="w-full" 
                      variant={challenge.completed ? 'secondary' : 'primary'}
                    >
                      {challenge.completed ? 'View Solution' : 'Start Challenge'}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredChallenges.length === 0 && (
            <div className="text-center py-12">
              <Code2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No challenges found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Challenges;