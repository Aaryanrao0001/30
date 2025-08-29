import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MapPin, Calendar, Github, Linkedin, Trophy, Edit3, Camera } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    location: 'San Francisco, CA',
    joinDate: 'January 2024',
    bio: 'Passionate software developer with a love for problem-solving and continuous learning. Currently working through the 30-day coding challenge to enhance my algorithmic thinking.',
    github: 'alexjohnson',
    linkedin: 'alex-johnson-dev',
    skills: ['JavaScript', 'Python', 'React', 'Node.js', 'MongoDB', 'SQL']
  });

  const stats = [
    { label: 'Challenges Completed', value: '15', color: 'text-green-500' },
    { label: 'Current Streak', value: '7 days', color: 'text-orange-500' },
    { label: 'Total Points', value: '1,250', color: 'text-purple-500' },
    { label: 'Rank', value: '#127', color: 'text-blue-500' }
  ];

  const recentAchievements = [
    { title: '7-Day Streak', description: 'Maintained coding for 7 consecutive days', date: '2024-01-15' },
    { title: 'Array Master', description: 'Completed 10 array-based challenges', date: '2024-01-12' },
    { title: 'Early Bird', description: 'Completed 5 challenges before 9 AM', date: '2024-01-10' }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Profile Header */}
          <Card className="mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {profileData.name.split(' ').map(n => n[0]).join('')}
                </div>
                <button className="absolute bottom-0 right-0 p-1 bg-white rounded-full shadow-md border border-gray-200 hover:bg-gray-50">
                  <Camera className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="text-2xl font-bold text-gray-900 border-b border-gray-300 focus:outline-none focus:border-primary-500"
                    />
                  ) : (
                    <h1 className="text-2xl font-bold text-gray-900">{profileData.name}</h1>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  >
                    <Edit3 className="w-4 h-4 mr-2" />
                    {isEditing ? 'Save' : 'Edit'}
                  </Button>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-1" />
                    {isEditing ? (
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="border-b border-gray-300 focus:outline-none focus:border-primary-500"
                      />
                    ) : (
                      profileData.email
                    )}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="border-b border-gray-300 focus:outline-none focus:border-primary-500"
                      />
                    ) : (
                      profileData.location
                    )}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Joined {profileData.joinDate}
                  </div>
                </div>
                
                {isEditing ? (
                  <textarea
                    value={profileData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    rows="3"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-600">{profileData.bio}</p>
                )}
                
                <div className="flex items-center space-x-4 mt-4">
                  <a href={`https://github.com/${profileData.github}`} className="flex items-center text-gray-600 hover:text-gray-900">
                    <Github className="w-4 h-4 mr-1" />
                    {profileData.github}
                  </a>
                  <a href={`https://linkedin.com/in/${profileData.linkedin}`} className="flex items-center text-gray-600 hover:text-gray-900">
                    <Linkedin className="w-4 h-4 mr-1" />
                    {profileData.linkedin}
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="text-center">
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {profileData.skills.map((skill, index) => (
                    <Badge key={index} variant="primary">
                      {skill}
                    </Badge>
                  ))}
                  {isEditing && (
                    <Button variant="outline" size="sm" className="text-xs">
                      + Add Skill
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>

            {/* Recent Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Recent Achievements</h2>
                  <Trophy className="w-5 h-5 text-yellow-500" />
                </div>
                <div className="space-y-4">
                  {recentAchievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Trophy className="w-4 h-4 text-yellow-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{achievement.title}</h3>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                        <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Activity Chart Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8"
          >
            <Card>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Activity Timeline</h2>
              <div className="h-48 flex items-center justify-center bg-gray-50 rounded-lg">
                <div className="text-center">
                  <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Activity timeline will be displayed here</p>
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

export default Profile;