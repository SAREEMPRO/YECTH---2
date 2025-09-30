import React from 'react';
import Icon from '../../../components/AppIcon';

const CoverageStats = ({ areas }) => {
  const totalClients = areas?.reduce((sum, area) => sum + area?.clientsServed, 0);
  const totalPartnerships = areas?.reduce((sum, area) => sum + area?.businessPartnerships, 0);
  const sameDayAreas = areas?.filter(area => area?.responseTime === 'Same Day')?.length;
  const averageResponseTime = areas?.length > 0 ? 
    (sameDayAreas / areas?.length * 100)?.toFixed(0) : 0;

  const stats = [
    {
      icon: 'MapPin',
      label: 'Service Areas',
      value: areas?.length,
      suffix: 'Locations',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: 'Users',
      label: 'Total Clients',
      value: totalClients,
      suffix: '+ Served',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      icon: 'Building',
      label: 'Business Partners',
      value: totalPartnerships,
      suffix: 'Partners',
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    },
    {
      icon: 'Clock',
      label: 'Same Day Service',
      value: averageResponseTime,
      suffix: '% Coverage',
      color: 'text-brand-orange',
      bgColor: 'bg-brand-orange/10'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats?.map((stat, index) => (
        <div key={index} className="bg-card rounded-xl border border-border p-6 text-center card-hover">
          <div className={`w-12 h-12 ${stat?.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
            <Icon name={stat?.icon} size={24} className={stat?.color} />
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-text-primary">{stat?.value}</p>
            <p className="text-sm text-text-secondary">{stat?.suffix}</p>
            <p className="text-xs text-text-secondary font-medium">{stat?.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoverageStats;