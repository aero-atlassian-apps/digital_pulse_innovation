import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { analytics, ROICalculationData } from '../../src/utils/analytics';

interface ROICalculatorProps {
  onLeadCapture?: (data: LeadData) => void;
}

interface LeadData {
  name: string;
  email: string;
  company: string;
  results: ROICalculation;
}

interface ROICalculation {
  currentCosts: number;
  potentialSavings: number;
  roiPercentage: number;
  paybackMonths: number;
  annualSavings: number;
}

interface FormData {
  teamSize: string;
  averageSalary: string;
  projectDuration: string;
  currentEfficiency: string;
  improvementTarget: string;
  defectRate: string;
  name: string;
  email: string;
  company: string;
}

const ROICalculator: React.FC<ROICalculatorProps> = ({ onLeadCapture }) => {
  const { t, i18n } = useTranslation();
  
  // Debug language changes
  useEffect(() => {
    console.log('Current language:', i18n.language);
    console.log('ROI Calculator title:', t('tools.roi.title'));
  }, [i18n.language, t]);
  const [formData, setFormData] = useState<FormData>({
    teamSize: '',
    averageSalary: '',
    projectDuration: '',
    currentEfficiency: '70',
    improvementTarget: '85',
    defectRate: '15',
    name: '',
    email: '',
    company: ''
  });
  const [calculation, setCalculation] = useState<ROICalculation | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStarted, setFormStarted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Track form start on first input
    if (!formStarted && ['teamSize', 'averageSalary', 'projectDuration'].includes(name) && value) {
      setFormStarted(true);
      analytics.trackFormInteraction('roi-calculator', 'start');
    }
  };

  const calculateROI = () => {
    const teamSize = parseInt(formData.teamSize) || 0;
    const avgSalary = parseFloat(formData.averageSalary) || 0;
    const projectDuration = parseInt(formData.projectDuration) || 0;
    const currentEfficiency = parseInt(formData.currentEfficiency) || 70;
    const improvementTarget = parseInt(formData.improvementTarget) || 85;
    const defectRate = parseInt(formData.defectRate) || 15;

    // Calculate current costs
    const monthlySalaryCost = (teamSize * avgSalary) / 12;
    const projectLaborCost = monthlySalaryCost * projectDuration;
    const defectCost = projectLaborCost * (defectRate / 100) * 2; // Defects cost 2x to fix
    const currentCosts = projectLaborCost + defectCost;

    // Calculate potential savings
    const efficiencyGain = (improvementTarget - currentEfficiency) / 100;
    const reducedDefectRate = defectRate * 0.3; // 70% reduction in defects
    const newDefectCost = projectLaborCost * (reducedDefectRate / 100) * 2;
    const efficiencySavings = projectLaborCost * efficiencyGain;
    const qualitySavings = defectCost - newDefectCost;
    const totalSavings = efficiencySavings + qualitySavings;

    // Calculate ROI metrics
    const consultingCost = teamSize * 5000; // Estimated consulting cost
    const netSavings = totalSavings - consultingCost;
    const roiPercentage = consultingCost > 0 ? (netSavings / consultingCost) * 100 : 0;
    const paybackMonths = consultingCost > 0 ? Math.ceil(consultingCost / (totalSavings / 12)) : 0;
    const annualSavings = totalSavings;

    return {
      currentCosts,
      potentialSavings: totalSavings,
      roiPercentage,
      paybackMonths,
      annualSavings
    };
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const results = calculateROI();
    setCalculation(results);
    setShowResults(true);
    
    // Track ROI calculation with analytics
    const analyticsData: ROICalculationData = {
      teamSize: parseInt(formData.teamSize) || 0,
      averageSalary: parseFloat(formData.averageSalary) || 0,
      currentEfficiency: parseInt(formData.currentEfficiency) || 70,
      targetEfficiency: parseInt(formData.improvementTarget) || 85,
      timeFrame: parseInt(formData.projectDuration) || 0,
      roi: results.roiPercentage,
      savings: results.potentialSavings
    };
    
    analytics.trackROICalculation(analyticsData);
    analytics.trackToolInteraction('roi-calculator', 'calculate', {
      team_size: analyticsData.teamSize,
      roi_percentage: analyticsData.roi
    });
  };

  const handleGetReport = () => {
    setShowLeadForm(true);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (onLeadCapture && calculation) {
      const leadData: LeadData = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        results: calculation
      };
      
      try {
        await onLeadCapture(leadData);
        // In a real implementation, you would send this to your backend
        console.log('Lead captured:', leadData);
        
        // Track lead capture with analytics
        analytics.trackLeadCapture({
          tool: 'roi-calculator',
          name: formData.name,
          email: formData.email,
          company: formData.company
        });
        
        analytics.trackFormInteraction('roi-lead-form', 'complete', {
          team_size: parseInt(formData.teamSize) || 0,
          roi_percentage: calculation.roiPercentage
        });
        alert('Thank you! Your ROI report will be sent to your email shortly.');
        setShowLeadForm(false);
      } catch (error) {
        console.error('Failed to capture lead:', error);
        alert('There was an error submitting your information. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-slate-900 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          {t('tools.roi.title', 'ROI Calculator')}
        </h1>
        <p className="text-slate-600 dark:text-slate-300">
          {t('tools.roi.subtitle', 'Calculate the potential return on investment from our digital transformation services')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
            {t('tools.roi.input_section', 'Input Your Data')}
          </h2>
          <form onSubmit={handleCalculate} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                {t('tools.roi.team_size', 'Team Size')}
              </label>
              <input
                type="number"
                name="teamSize"
                value={formData.teamSize}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white"
                placeholder="e.g., 10"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                {t('tools.roi.avg_salary', 'Average Annual Salary ($)')}
              </label>
              <input
                type="number"
                name="averageSalary"
                value={formData.averageSalary}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white"
                placeholder="e.g., 80000"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                {t('tools.roi.project_duration', 'Project Duration (months)')}
              </label>
              <input
                type="number"
                name="projectDuration"
                value={formData.projectDuration}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white"
                placeholder="e.g., 12"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                {t('tools.roi.current_efficiency', 'Current Team Efficiency (%)')}
              </label>
              <input
                type="range"
                min="30"
                max="90"
                name="currentEfficiency"
                value={formData.currentEfficiency}
                onChange={handleInputChange}
                className="w-full"
              />
              <div className="text-center text-sm text-slate-600 dark:text-slate-400">{formData.currentEfficiency}%</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                {t('tools.roi.target_efficiency', 'Target Efficiency (%)')}
              </label>
              <input
                type="range"
                min="50"
                max="95"
                name="improvementTarget"
                value={formData.improvementTarget}
                onChange={handleInputChange}
                className="w-full"
              />
              <div className="text-center text-sm text-slate-600 dark:text-slate-400">{formData.improvementTarget}%</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                {t('tools.roi.defect_rate', 'Current Defect Rate (%)')}
              </label>
              <input
                type="range"
                min="5"
                max="40"
                name="defectRate"
                value={formData.defectRate}
                onChange={handleInputChange}
                className="w-full"
              />
              <div className="text-center text-sm text-slate-600 dark:text-slate-400">{formData.defectRate}%</div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              {t('tools.roi.calculate', 'Calculate ROI')}
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
            {t('tools.roi.results', 'Results')}
          </h2>
          
          {showResults && calculation ? (
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                <h3 className="font-medium text-slate-900 dark:text-white mb-2">
                  {t('tools.roi.annual_savings', 'Annual Savings')}
                </h3>
                <p className="text-2xl font-bold text-green-600">
                  ${calculation.annualSavings.toLocaleString()}
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                <h3 className="font-medium text-slate-900 dark:text-white mb-2">
                  {t('tools.roi.roi_percentage', 'ROI Percentage')}
                </h3>
                <p className="text-2xl font-bold text-blue-600">
                  {calculation.roiPercentage.toFixed(0)}%
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                <h3 className="font-medium text-slate-900 dark:text-white mb-2">
                  {t('tools.roi.payback_months', 'Payback Period')}
                </h3>
                <p className="text-2xl font-bold text-purple-600">
                  {calculation.paybackMonths} months
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                <h3 className="font-medium text-slate-900 dark:text-white mb-2">
                  {t('tools.roi.current_costs', 'Current Costs')}
                </h3>
                <p className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                  ${calculation.currentCosts.toLocaleString()}
                </p>
              </div>

              <button
                onClick={handleGetReport}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                {t('tools.roi.get_report', 'Get Detailed Report')}
              </button>
            </div>
          ) : (
            <div className="text-center text-slate-500 dark:text-slate-400 py-12">
              <p>{t('tools.roi.enter_data', 'Enter your data and click "Calculate ROI" to see results')}</p>
            </div>
          )}
        </div>
      </div>

      {showLeadForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              {t('tools.roi.get_report_title', 'Get Your Detailed ROI Report')}
            </h3>
            <form onSubmit={handleLeadSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {t('tools.roi.name', 'Name')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {t('tools.roi.email', 'Email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {t('tools.roi.company', 'Company')}
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
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
                  {isSubmitting ? t('common.sending', 'Sending...') : t('tools.roi.send_report', 'Send Report')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ROICalculator;