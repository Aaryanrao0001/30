import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Target, Trophy, Flame, Clock, CheckCircle } from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

const Dashboard = () => {
  const stats = [
    { label: 'Current Streak', value: '7', unit: 'days', icon: Flame, color: 'text-orange-500' },
    { label: 'Challenges Completed', value: '15', unit: 'out of 30', icon: CheckCircle, color: 'text-green-500' },
    { label: 'Total Time Spent', value: '24', unit: 'hours', icon: Clock, color: 'text-blue-500' },
    { label: 'Success Rate', value: '87', unit: '%', icon: Target, color: 'text-purple-500' }
  ];

  const recentChallenges = [
    { id: 1, title: 'Two Sum Problem', difficulty: 'Easy', completed: true, date: '2024-01-15' },
    { id: 2, title: 'Binary Tree Traversal', difficulty: 'Medium', completed: true, date: '2024-01-14' },
    { id: 3, title: 'Dynamic Programming - Fibonacci', difficulty: 'Medium', completed: true, date: '2024-01-13' },
    { id: 4, title: 'Array Rotation', difficulty: 'Easy', completed: true, date: '2024-01-12' },
    { id: 5, title: 'Graph DFS Implementation', difficulty: 'Hard', completed: false, date: '2024-01-11' }
  ];

  const upcomingChallenges = [
    { id: 1, title: 'Merge Sort Algorithm', difficulty: 'Medium', dueDate: '2024-01-16' },
    { id: 2, title: 'Binary Search Tree', difficulty: 'Medium', dueDate: '2024-01-17' },
    { id: 3, title: 'Hash Table Implementation', difficulty: 'Hard', dueDate: '2024-01-18' }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'success';
      case 'medium': return 'warning';
      case 'hard': return 'error';
      default: return 'default';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h1>
            <p className="text-gray-600">Here's your coding challenge overview</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className="text-center">
                    <div className="flex justify-center mb-3">
                      <Icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 mb-1">{stat.unit}</div>
                    <div className="text-sm font-medium text-gray-700">{stat.label}</div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Challenges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Recent Challenges</h2>
                  <Trophy className="w-5 h-5 text-yellow-500" />
                </div>
                <div className="space-y-4">
                  {recentChallenges.map((challenge) => (
                    <div key={challenge.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 mb-1">{challenge.title}</h3>
                        <div className="flex items-center space-x-2">
                          <Badge variant={getDifficultyColor(challenge.difficulty)} size="sm">
                            {challenge.difficulty}
                          </Badge>
                          <span className="text-sm text-gray-500">{challenge.date}</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        {challenge.completed ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Upcoming Challenges */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Upcoming Challenges</h2>
                  <Calendar className="w-5 h-5 text-blue-500" />
                </div>
                <div className="space-y-4">
                  {upcomingChallenges.map((challenge) => (
                    <div key={challenge.id} className="py-3 border-b border-gray-100 last:border-b-0">
                      <h3 className="font-medium text-gray-900 mb-2">{challenge.title}</h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Badge variant={getDifficultyColor(challenge.difficulty)} size="sm">
                            {challenge.difficulty}
                          </Badge>
                          <span className="text-sm text-gray-500">Due: {challenge.dueDate}</span>
                        </div>
                        <Button size="sm" variant="outline">
                          Start
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Progress Chart Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8"
          >
            <Card>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Progress Overview</h2>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-primary-500" />
                  </div>
                  <p className="text-gray-600">Progress chart will be displayed here</p>
                  <p className="text-sm text-gray-500 mt-1">Track your daily coding activity</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;