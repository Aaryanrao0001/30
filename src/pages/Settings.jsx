import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings as SettingsIcon, User, Bell, Shield, Palette, Globe, Save, Eye, EyeOff } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [settings, setSettings] = useState({
    // Profile settings
    displayName: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    
    // Notification settings
    emailNotifications: true,
    pushNotifications: true,
    challengeReminders: true,
    weeklyReport: false,
    achievementNotifications: true,
    
    // Privacy settings
    profileVisibility: 'public',
    showProgress: true,
    showAchievements: true,
    
    // Appearance settings
    theme: 'light',
    language: 'en',
    timezone: 'America/Los_Angeles'
  });

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'privacy', name: 'Privacy', icon: Shield },
    { id: 'appearance', name: 'Appearance', icon: Palette },
  ];

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = () => {
    // Here you would typically save to backend
    alert('Settings saved successfully!');
  };

  const renderProfileSettings = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Display Name</label>
        <input
          type="text"
          value={settings.displayName}
          onChange={(e) => handleSettingChange('displayName', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
        <input
          type="email"
          value={settings.email}
          onChange={(e) => handleSettingChange('email', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
      
      <div className="border-t pt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Change Password</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={settings.currentPassword}
                onChange={(e) => handleSettingChange('currentPassword', e.target.value)}
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={settings.newPassword}
              onChange={(e) => handleSettingChange('newPassword', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={settings.confirmPassword}
              onChange={(e) => handleSettingChange('confirmPassword', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-900">Email Notifications</h3>
          <p className="text-sm text-gray-500">Receive notifications via email</p>
        </div>
        <button
          onClick={() => handleSettingChange('emailNotifications', !settings.emailNotifications)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            settings.emailNotifications ? 'bg-primary-500' : 'bg-gray-300'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-900">Push Notifications</h3>
          <p className="text-sm text-gray-500">Receive push notifications in browser</p>
        </div>
        <button
          onClick={() => handleSettingChange('pushNotifications', !settings.pushNotifications)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            settings.pushNotifications ? 'bg-primary-500' : 'bg-gray-300'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              settings.pushNotifications ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-900">Challenge Reminders</h3>
          <p className="text-sm text-gray-500">Daily reminders to complete challenges</p>
        </div>
        <button
          onClick={() => handleSettingChange('challengeReminders', !settings.challengeReminders)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            settings.challengeReminders ? 'bg-primary-500' : 'bg-gray-300'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              settings.challengeReminders ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-900">Weekly Report</h3>
          <p className="text-sm text-gray-500">Weekly progress summary</p>
        </div>
        <button
          onClick={() => handleSettingChange('weeklyReport', !settings.weeklyReport)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            settings.weeklyReport ? 'bg-primary-500' : 'bg-gray-300'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              settings.weeklyReport ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-900">Achievement Notifications</h3>
          <p className="text-sm text-gray-500">Notifications when you earn achievements</p>
        </div>
        <button
          onClick={() => handleSettingChange('achievementNotifications', !settings.achievementNotifications)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            settings.achievementNotifications ? 'bg-primary-500' : 'bg-gray-300'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              settings.achievementNotifications ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  );

  const renderPrivacySettings = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Profile Visibility</label>
        <select
          value={settings.profileVisibility}
          onChange={(e) => handleSettingChange('profileVisibility', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="public">Public</option>
          <option value="friends">Friends Only</option>
          <option value="private">Private</option>
        </select>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-900">Show Progress</h3>
          <p className="text-sm text-gray-500">Allow others to see your progress</p>
        </div>
        <button
          onClick={() => handleSettingChange('showProgress', !settings.showProgress)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            settings.showProgress ? 'bg-primary-500' : 'bg-gray-300'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              settings.showProgress ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-900">Show Achievements</h3>
          <p className="text-sm text-gray-500">Allow others to see your achievements</p>
        </div>
        <button
          onClick={() => handleSettingChange('showAchievements', !settings.showAchievements)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            settings.showAchievements ? 'bg-primary-500' : 'bg-gray-300'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              settings.showAchievements ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
        <div className="flex space-x-3">
          <button
            onClick={() => handleSettingChange('theme', 'light')}
            className={`px-4 py-2 rounded-md border ${
              settings.theme === 'light'
                ? 'border-primary-500 bg-primary-50 text-primary-700'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Light
          </button>
          <button
            onClick={() => handleSettingChange('theme', 'dark')}
            className={`px-4 py-2 rounded-md border ${
              settings.theme === 'dark'
                ? 'border-primary-500 bg-primary-50 text-primary-700'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Dark
          </button>
          <button
            onClick={() => handleSettingChange('theme', 'system')}
            className={`px-4 py-2 rounded-md border ${
              settings.theme === 'system'
                ? 'border-primary-500 bg-primary-50 text-primary-700'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            System
          </button>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
        <select
          value={settings.language}
          onChange={(e) => handleSettingChange('language', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="zh">Chinese</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
        <select
          value={settings.timezone}
          onChange={(e) => handleSettingChange('timezone', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="America/Los_Angeles">Pacific Time (PT)</option>
          <option value="America/Denver">Mountain Time (MT)</option>
          <option value="America/Chicago">Central Time (CT)</option>
          <option value="America/New_York">Eastern Time (ET)</option>
          <option value="Europe/London">Greenwich Mean Time (GMT)</option>
          <option value="Europe/Paris">Central European Time (CET)</option>
          <option value="Asia/Tokyo">Japan Standard Time (JST)</option>
        </select>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
            <p className="text-gray-600">Manage your account preferences and privacy settings</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Settings Navigation */}
            <div className="lg:w-64">
              <Card padding="sm">
                <nav className="space-y-1">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                          activeTab === tab.id
                            ? 'bg-primary-100 text-primary-700'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className="w-5 h-5 mr-3" />
                        {tab.name}
                      </button>
                    );
                  })}
                </nav>
              </Card>
            </div>

            {/* Settings Content */}
            <div className="flex-1">
              <Card>
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 capitalize">
                    {activeTab} Settings
                  </h2>
                </div>

                {activeTab === 'profile' && renderProfileSettings()}
                {activeTab === 'notifications' && renderNotificationSettings()}
                {activeTab === 'privacy' && renderPrivacySettings()}
                {activeTab === 'appearance' && renderAppearanceSettings()}

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex justify-end space-x-3">
                    <Button variant="outline">
                      Cancel
                    </Button>
                    <Button onClick={handleSave}>
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Settings;