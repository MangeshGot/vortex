import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "h-6 w-6" }) => {
  const normName = name.toLowerCase().replace(/[\s()\-.]/g, '');

  // AWS Logo (Cloud outline with nodes)
  if (normName.includes('aws') || normName.includes('amazon')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
        <path d="M8 16h.01" />
        <path d="M8 20h.01" />
        <path d="M12 18h.01" />
        <path d="M16 16h.01" />
        <path d="M16 20h.01" />
      </svg>
    );
  }

  // Docker Logo (Container grid)
  if (normName.includes('docker') || normName.includes('container')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="6" height="5" rx="1" />
        <rect x="9" y="7" width="6" height="5" rx="1" />
        <rect x="16" y="7" width="6" height="5" rx="1" />
        <rect x="5" y="13" width="6" height="5" rx="1" />
        <rect x="12" y="13" width="6" height="5" rx="1" />
        <path d="M12 2v5" />
        <path d="M7 10h10" />
      </svg>
    );
  }

  // Terraform Logo (Isometric blocks)
  if (normName.includes('terraform') || normName.includes('iac')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
        <path d="M12 22V12" />
        <path d="M4 7l8 5 8-5" />
        <path d="M12 12l8-5M12 12L4 7" />
        <path d="M12 17l4-2.5M12 17l-4-2.5" />
      </svg>
    );
  }

  // Kubernetes Logo (Heptagon helm)
  if (normName.includes('kubernetes') || normName.includes('eks') || normName.includes('orchestration')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4v12l-8 4-8-4V6l8-4z" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v7" />
        <path d="M12 15v7" />
        <path d="M4 18l5.5-3.5" />
        <path d="M20 6l-5.5 3.5" />
        <path d="M4 6l5.5 3.5" />
        <path d="M20 18l-5.5-3.5" />
      </svg>
    );
  }

  // Jenkins Logo (Classic gears/automation check)
  if (normName.includes('jenkins') || normName.includes('actions') || normName.includes('cicd')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
        <path d="M12 8v8" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
      </svg>
    );
  }

  // Argo CD Logo (Sync loops)
  if (normName.includes('argocd') || normName.includes('argo')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l.73-.73" />
      </svg>
    );
  }

  // Git / Version Control (Branching node)
  if (normName.includes('git') || normName.includes('github') || normName.includes('version')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M6 9v6" />
        <path d="M9 6h5a4 4 0 0 1 4 4v5" />
      </svg>
    );
  }

  // Linux (Terminal prompt)
  if (normName.includes('linux') || normName.includes('windows') || normName.includes('operating')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    );
  }

  // Networking (Switch/Routers diagram nodes)
  if (normName.includes('network') || normName.includes('vlan') || normName.includes('switch') || normName.includes('router')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="10" x2="6" y2="14" />
        <line x1="18" y1="10" x2="18" y2="14" />
      </svg>
    );
  }

  // Default Fallback Icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
};
