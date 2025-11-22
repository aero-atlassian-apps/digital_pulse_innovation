import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { analytics, MaturityAssessmentData } from '../../src/utils/analytics';

interface AssessmentProps {
  onLeadCapture?: (data: AssessmentLeadData) => void;
}

interface AssessmentLeadData {
  name: string;
  email: string;
  company: string;
  score: number;
  level: string;
  recommendations: string[];
}

interface Question {
  id: string;
  category: string;
  question: string;
  options: {
    text: string;
    value: number;
  }[];
}

interface Answer {
  questionId: string;
  value: number;
}

const DigitalMaturityAssessment: React.FC<AssessmentProps> = ({ onLeadCapture }) => {
  const { t } = useTranslation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [leadData, setLeadData] = useState({
    name: '',
    email: '',
    company: ''
  });

  const questions: Question[] = [
    {
      id: 'strategy',
      category: 'Strategy & Leadership',
      question: 'How well-defined is your digital transformation strategy?',
      options: [
        { text: 'No formal strategy exists', value: 1 },
        { text: 'Strategy is being developed', value: 2 },
        { text: 'Strategy exists but not fully implemented', value: 3 },
        { text: 'Strategy is implemented and monitored', value: 4 },
        { text: 'Strategy is continuously optimized', value: 5 }
      ]
    },
    {
      id: 'culture',
      category: 'Culture & Change Management',
      question: 'How would you describe your organization\'s culture toward digital innovation?',
      options: [
        { text: 'Resistant to change', value: 1 },
        { text: 'Mixed attitudes toward change', value: 2 },
        { text: 'Accepting of change with guidance', value: 3 },
        { text: 'Embraces change and innovation', value: 4 },
        { text: 'Drives change and innovation', value: 5 }
      ]
    },
    {
      id: 'technology',
      category: 'Technology & Infrastructure',
      question: 'What is the state of your technology infrastructure?',
      options: [
        { text: 'Legacy systems, difficult to integrate', value: 1 },
        { text: 'Mix of legacy and modern systems', value: 2 },
        { text: 'Modernizing infrastructure', value: 3 },
        { text: 'Mostly modern, cloud-enabled', value: 4 },
        { text: 'Fully modern, scalable, and flexible', value: 5 }
      ]
    },
    {
      id: 'data',
      category: 'Data & Analytics',
      question: 'How effectively does your organization use data for decision-making?',
      options: [
        { text: 'Limited data collection and usage', value: 1 },
        { text: 'Basic data collection, limited analysis', value: 2 },
        { text: 'Regular data analysis for decisions', value: 3 },
        { text: 'Advanced analytics and insights', value: 4 },
        { text: 'Predictive analytics and AI-driven insights', value: 5 }
      ]
    },
    {
      id: 'processes',
      category: 'Processes & Operations',
      question: 'How digitized are your business processes?',
      options: [
        { text: 'Mostly manual processes', value: 1 },
        { text: 'Some digital processes', value: 2 },
        { text: 'Many processes are digitized', value: 3 },
        { text: 'Most processes are automated', value: 4 },
        { text: 'Fully optimized and automated', value: 5 }
      ]
    },
    {
      id: 'customer',
      category: 'Customer Experience',
      question: 'How would you rate your digital customer experience?',
      options: [
        { text: 'Limited digital touchpoints', value: 1 },
        { text: 'Basic digital presence', value: 2 },
        { text: 'Good digital experience', value: 3 },
        { text: 'Excellent omnichannel experience', value: 4 },
        { text: 'Personalized, predictive experience', value: 5 }
      ]
    },
    {
      id: 'skills',
      category: 'Skills & Capabilities',
      question: 'How would you assess your organization\'s digital skills?',
      options: [
        { text: 'Limited digital skills', value: 1 },
        { text: 'Some employees have digital skills', value: 2 },
        { text: 'Good digital skills in key areas', value: 3 },
        { text: 'Strong digital capabilities across teams', value: 4 },
        { text: 'Advanced digital expertise organization-wide', value: 5 }
      ]
    },
    {
      id: 'partnerships',
      category: 'Partnerships & Ecosystem',
      question: 'How developed are your digital partnerships and ecosystem?',
      options: [
        { text: 'No strategic digital partnerships', value: 1 },
        { text: 'Few basic partnerships', value: 2 },
        { text: 'Some strategic partnerships', value: 3 },
        { text: 'Strong partnership ecosystem', value: 4 },
        { text: 'Leading digital ecosystem', value: 5 }
      ]
    }
  ];

  const handleAnswer = (value: number) => {
    // Track form start on first answer
    if (answers.length === 0) {
      analytics.trackFormInteraction('maturity-assessment', 'start');
    }
    
    const newAnswers = [...answers];
    const existingAnswerIndex = newAnswers.findIndex(a => a.questionId === questions[currentQuestion].id);
    
    if (existingAnswerIndex >= 0) {
      newAnswers[existingAnswerIndex].value = value;
    } else {
      newAnswers.push({ questionId: questions[currentQuestion].id, value });
    }
    
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    setShowResults(true);
    
    // Track assessment completion with analytics
    const score = calculateScore();
    const level = getMaturityLevel(score).level;
    const analyticsData: MaturityAssessmentData = {
      score,
      level,
      answers: answers.map(a => a.value)
    };
    
    analytics.trackMaturityAssessment(analyticsData);
    analytics.trackToolInteraction('maturity-assessment', 'complete', {
      score,
      level: level.toLowerCase().replace(' ', '_')
    });
  };

  const getCurrentAnswer = () => {
    const answer = answers.find(a => a.questionId === questions[currentQuestion].id);
    return answer?.value || 0;
  };

  const calculateScore = () => {
    if (answers.length === 0) return 0;
    const total = answers.reduce((sum, answer) => sum + answer.value, 0);
    return Math.round((total / (questions.length * 5)) * 100);
  };

  const getMaturityLevel = (score: number) => {
    if (score >= 80) return { level: 'Digital Leader', color: 'text-green-600' };
    if (score >= 60) return { level: 'Digital Advancer', color: 'text-blue-600' };
    if (score >= 40) return { level: 'Digital Adopter', color: 'text-yellow-600' };
    if (score >= 20) return { level: 'Digital Beginner', color: 'text-orange-600' };
    return { level: 'Digital Laggard', color: 'text-red-600' };
  };

  const getRecommendations = (score: number) => {
    const recommendations = [];
    
    if (score < 20) {
      recommendations.push('Develop a comprehensive digital transformation strategy');
      recommendations.push('Invest in basic digital infrastructure');
      recommendations.push('Start digital literacy programs for employees');
    } else if (score < 40) {
      recommendations.push('Formalize your digital transformation strategy');
      recommendations.push('Begin modernizing legacy systems');
      recommendations.push('Establish digital training programs');
    } else if (score < 60) {
      recommendations.push('Accelerate digital initiative implementation');
      recommendations.push('Focus on data-driven decision making');
      recommendations.push('Enhance customer digital experience');
    } else if (score < 80) {
      recommendations.push('Optimize and scale successful digital initiatives');
      recommendations.push('Implement advanced analytics and AI');
      recommendations.push('Build strategic digital partnerships');
    } else {
      recommendations.push('Lead digital innovation in your industry');
      recommendations.push('Share best practices and mentor others');
      recommendations.push('Explore emerging technologies');
    }
    
    return recommendations;
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (onLeadCapture) {
      const score = calculateScore();
      const { level } = getMaturityLevel(score);
      const recommendations = getRecommendations(score);

      try {
        await onLeadCapture({
          name: leadData.name,
          email: leadData.email,
          company: leadData.company,
          score,
          level,
          recommendations
        });
        
        // Track lead capture with analytics
        analytics.trackLeadCapture({
          tool: 'maturity-assessment',
          name: leadData.name,
          email: leadData.email,
          company: leadData.company
        });
        
        analytics.trackFormInteraction('maturity-lead-form', 'complete', {
          score,
          level: level.toLowerCase().replace(' ', '_')
        });
        
        alert('Thank you! Your assessment report will be sent to your email shortly.');
        setShowLeadForm(false);
      } catch (error) {
        console.error('Failed to capture lead:', error);
        alert('There was an error submitting your information. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleLeadDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLeadData(prev => ({ ...prev, [name]: value }));
  };

  if (showResults) {
    const score = calculateScore();
    const { level, color } = getMaturityLevel(score);
    const recommendations = getRecommendations(score);

    return (
      <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-slate-900 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            {t('tools.assessment.results_title', 'Digital Maturity Assessment Results')}
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            {t('tools.assessment.results_subtitle', 'Your organization\'s digital maturity profile')}
          </p>
        </div>

        <div className="text-center mb-8">
          <div className="text-6xl font-bold mb-2 ${color}">
            {score}%
          </div>
          <div className={`text-2xl font-semibold ${color} mb-2`}>
            {level}
          </div>
          <p className="text-slate-600 dark:text-slate-300">
            {t('tools.assessment.score_description', 'Based on your assessment across 8 key dimensions')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              {t('tools.assessment.category_breakdown', 'Category Breakdown')}
            </h3>
            <div className="space-y-3">
              {questions.map((question) => {
                const answer = answers.find(a => a.questionId === question.id);
                const score = answer ? (answer.value / 5) * 100 : 0;
                return (
                  <div key={question.id}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-700 dark:text-slate-300">{question.category}</span>
                      <span className="text-slate-600 dark:text-slate-400">{Math.round(score)}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${score}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              {t('tools.assessment.recommendations', 'Key Recommendations')}
            </h3>
            <ul className="space-y-2">
              {recommendations.map((rec, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-slate-700 dark:text-slate-300 text-sm">{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => setShowLeadForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            {t('tools.assessment.get_detailed_report', 'Get Detailed Report')}
          </button>
        </div>

        {showLeadForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 w-full max-w-md">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                {t('tools.assessment.get_report_title', 'Get Your Detailed Assessment Report')}
              </h3>
              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    {t('tools.assessment.name', 'Name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={leadData.name}
                    onChange={handleLeadDataChange}
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    {t('tools.assessment.email', 'Email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={leadData.email}
                    onChange={handleLeadDataChange}
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    {t('tools.assessment.company', 'Company')}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={leadData.company}
                    onChange={handleLeadDataChange}
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                    required
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowLeadForm(false)}
                    className="flex-1 px-4 py-2 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                  >
                    {t('common.cancel', 'Cancel')}
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? t('common.sending', 'Sending...') : t('tools.assessment.send_report', 'Send Report')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-slate-900 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          {t('tools.assessment.title', 'Digital Maturity Assessment')}
        </h1>
        <p className="text-slate-600 dark:text-slate-300">
          {t('tools.assessment.subtitle', 'Evaluate your organization\'s digital maturity across key dimensions')}
        </p>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mb-2">
          <span>{t('tools.assessment.question', 'Question')} {currentQuestion + 1} {t('tools.assessment.of', 'of')} {questions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mb-8">
        <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
          {currentQ.category}
        </div>
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
          {currentQ.question}
        </h2>

        <div className="space-y-3">
          {currentQ.options.map((option, index) => (
            <label
              key={index}
              className="flex items-center p-4 border border-slate-300 dark:border-slate-600 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <input
                type="radio"
                name="answer"
                value={option.value}
                checked={getCurrentAnswer() === option.value}
                onChange={() => handleAnswer(option.value)}
                className="mr-3 text-blue-600"
              />
              <span className="text-slate-700 dark:text-slate-300">{option.text}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="px-4 py-2 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t('common.previous', 'Previous')}
        </button>
        <button
          onClick={handleNext}
          disabled={getCurrentAnswer() === 0}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentQuestion === questions.length - 1 ? t('common.finish', 'Finish') : t('common.next', 'Next')}
        </button>
      </div>
    </div>
  );
};

export default DigitalMaturityAssessment;