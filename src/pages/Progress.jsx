import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Calendar, Target, Award, Flame, BarChart3 } from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

const Progress = () => {
  const weeklyProgress = [
    { day: 'Mon', completed: 1, total: 1 },
    { day: 'Tue', completed: 1, total: 1 },
    { day: 'Wed', completed: 1, total: 1 },
    { day: 'Thu', completed: 0, total: 1 },
    { day: 'Fri', completed: 1, total: 1 },
    { day: 'Sat', completed: 1, total: 1 },
    { day: 'Sun', completed: 1, total: 1 }
  ];

  const achievements = [
    { title: 'First Challenge', description: 'Completed your first coding challenge', date: '2024-01-08', earned: true },
    { title: '7-Day Streak', description: 'Maintained a 7-day coding streak', date: '2024-01-14', earned: true },
    { title: 'Early Bird', description: 'Completed 5 challenges before 9 AM', date: '2024-01-12', earned: true },
    { title: '15-Day Milestone', description: 'Complete 15 challenges', date: null, earned: false },
    { title: 'Week Warrior', description: 'Complete all challenges in a week', date: '2024-01-15', earned: true },
    { title: '30-Day Champion', description: 'Complete the full 30-day challenge', date: null, earned: false }
  ];

  const skillProgress = [
    { skill: 'Arrays & Strings', progress: 85, challenges: 12 },
    { skill: 'Data Structures', progress: 60, challenges: 8 },
    { skill: 'Algorithms', progress: 45, challenges: 6 },
    { skill: 'Dynamic Programming', progress: 30, challenges: 3 },
    { skill: 'Graph Theory', progress: 20, challenges: 2 },
    { skill: 'System Design', progress: 10, challenges: 1 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Progress</h1>
            <p className="text-gray-600">Track your coding journey and celebrate your achievements</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="text-center">
                <Flame className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">7</div>
                <div className="text-sm text-gray-600">Current Streak</div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="text-center">
                <Target className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">15/30</div>
                <div className="text-sm text-gray-600">Challenges Done</div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="text-center">
                <Award className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">4</div>
                <div className="text-sm text-gray-600">Achievements</div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="text-center">
                <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">87%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </Card>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Weekly Progress */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">This Week</h2>
                  <Calendar className="w-5 h-5 text-blue-500" />
                </div>
                <div className="flex justify-between items-end space-x-2">
                  {weeklyProgress.map((day, index) => (
                    <div key={day.day} className="flex flex-col items-center">
                      <div className="text-xs text-gray-500 mb-2">{day.day}</div>
                      <div 
                        className={`w-8 h-${day.completed ? '12' : '4'} rounded-t ${
                          day.completed ? 'bg-green-500' : 'bg-gray-200'
                        } transition-all duration-300`}
                      />
                      <div className="text-xs mt-1 text-gray-400">
                        {day.completed}/{day.total}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Achievements</h2>
                  <Award className="w-5 h-5 text-yellow-500" />
                </div>
                <div className="space-y-4 max-h-64 overflow-y-auto">
                  {achievements.map((achievement, index) => (
                    <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg ${
                      achievement.earned ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        achievement.earned ? 'bg-green-500' : 'bg-gray-300'
                      }`}>
                        <Award className={`w-4 h-4 ${achievement.earned ? 'text-white' : 'text-gray-500'}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-medium ${achievement.earned ? 'text-green-800' : 'text-gray-600'}`}>
                          {achievement.title}
                        </h3>
                        <p className={`text-sm ${achievement.earned ? 'text-green-600' : 'text-gray-500'}`}>
                          {achievement.description}
                        </p>
                        {achievement.date && (
                          <p className="text-xs text-gray-400 mt-1">Earned on {achievement.date}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Skill Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Skill Development</h2>
                <BarChart3 className="w-5 h-5 text-purple-500" />
              </div>
              <div className="space-y-6">
                {skillProgress.map((skill, index) => (
                  <div key={skill.skill}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{skill.skill}</span>
                      <div className="flex items-center space-x-2">
                        <Badge variant="default" size="sm">
                          {skill.challenges} challenges
                        </Badge>
                        <span className="text-sm text-gray-600">{skill.progress}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-primary-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.progress}%` }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Progress;