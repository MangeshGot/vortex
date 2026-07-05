import React, { useState } from 'react';

type TerminalTab = 'whoami' | 'skills' | 'terraform' | 'gitops';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TerminalTab>('whoami');

  return (
    <section className="relative overflow-hidden bg-brand-dark px-6 py-20 text-white md:px-12 lg:py-24 bg-grid-pattern bg-[size:24px_24px]">
      {/* Visual Glowing Elements */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent/10 opacity-60 blur-[100px]" />
      <div className="absolute top-1/3 right-10 -z-10 h-[250px] w-[250px] rounded-full bg-brand-emerald/5 opacity-40 blur-[80px]" />

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Hero Left Content */}
          <div className="space-y-8 lg:col-span-7">
            
            {/* Profile Avatar Card */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="relative">
                <img 
                  src="/mangesh.jpg" 
                  alt="Mangesh Dilip Sonawane" 
                  className="h-24 w-24 rounded-2xl object-cover border-2 border-brand-accent shadow-[0_0_20px_rgba(99,102,241,0.35)] grayscale contrast-125"
                />
                <span className="absolute -bottom-1.5 -right-1.5 flex h-4 w-4">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-emerald opacity-75"></span>
                  <span className="relative inline-flex h-4 w-4 rounded-full bg-brand-emerald border-2 border-brand-dark"></span>
                </span>
              </div>
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-border bg-brand-panel/85 px-3 py-0.5 text-[10px] font-mono text-indigo-400">
                  SYSTEM STATUS: OPERATIONAL
                </div>
                <h1 className="text-2xl font-bold font-mono text-white tracking-tight sm:text-3xl">
                  MANGESH D. SONAWANE
                </h1>
                <p className="text-xs text-brand-emerald font-mono tracking-wider">
                  DEVOPS ENGINEER // PUNE, INDIA
                </p>
              </div>
            </div>
            
            <h2 className="font-sans text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-tight">
              I automate <span className="bg-gradient-to-r from-brand-accent via-purple-400 to-brand-emerald bg-clip-text text-transparent">deployments</span> and secure cloud infrastructures.
            </h2>
            
            <p className="max-w-xl text-sm text-gray-400 sm:text-base leading-relaxed">
              DevOps Engineer with experience in automating, deploying, and managing applications and infrastructure. Skilled in designing and maintaining CI/CD pipelines, Infrastructure as Code, containerization, and orchestration.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center rounded-lg bg-brand-accent px-5 py-3 text-sm font-semibold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20"
              >
                Inspect Pipelines
              </a>
              <button 
                onClick={() => {
                  const target = document.getElementById('terminal-view');
                  target?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center rounded-lg border border-brand-border bg-brand-panel px-5 py-3 text-sm font-semibold text-gray-300 hover:bg-brand-border transition-colors font-mono cursor-pointer"
              >
                cat qualifications.sh
              </button>
            </div>
          </div>

          {/* Hero Right Code Window Panel */}
          <div className="lg:col-span-5" id="terminal-view">
            <div className="overflow-hidden rounded-xl border border-brand-border bg-brand-panel shadow-2xl">
              {/* Window Header */}
              <div className="flex items-center justify-between bg-black/40 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-brand-emerald/80" />
                </div>
                <div className="font-mono text-xs text-gray-500">vortex-terminal ~ guest</div>
                <div className="w-4" />
              </div>
              
              {/* Interactive Tabs */}
              <div className="flex border-b border-brand-border bg-black/20 text-xs font-mono">
                <button 
                  onClick={() => setActiveTab('whoami')}
                  className={`px-4 py-2 border-r border-brand-border transition-colors cursor-pointer ${activeTab === 'whoami' ? 'bg-brand-panel text-white border-b border-b-brand-accent' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  whoami.sh
                </button>
                <button 
                  onClick={() => setActiveTab('skills')}
                  className={`px-4 py-2 border-r border-brand-border transition-colors cursor-pointer ${activeTab === 'skills' ? 'bg-brand-panel text-white border-b border-b-brand-accent' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  neofetch.sh
                </button>
                <button 
                  onClick={() => setActiveTab('terraform')}
                  className={`px-4 py-2 border-r border-brand-border transition-colors cursor-pointer ${activeTab === 'terraform' ? 'bg-brand-panel text-white border-b border-b-brand-accent' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  iac-apply.tf
                </button>
                <button 
                  onClick={() => setActiveTab('gitops')}
                  className={`px-4 py-2 transition-colors cursor-pointer ${activeTab === 'gitops' ? 'bg-brand-panel text-white border-b border-b-brand-accent' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  gitops-sync.yaml
                </button>
              </div>

              {/* Code/Logs Content */}
              <div className="p-5 font-mono text-xs text-gray-300 min-h-[220px] select-none">
                {activeTab === 'whoami' && (
                  <div className="space-y-2 animate-fadeIn">
                    <div>
                      <span className="text-brand-emerald">$</span> whoami
                      <div className="text-gray-400 mt-1">mangesh-dilip-sonawane</div>
                    </div>
                    <div>
                      <span className="text-brand-emerald">$</span> cat role.json
                      <div className="text-gray-400 whitespace-pre mt-1">{`{
  "title": "DevOps Engineer",
  "location": "Pune, MH, India",
  "experience": "B.Tech Computer Engineering"
}`}</div>
                    </div>
                  </div>
                )}

                {activeTab === 'skills' && (
                  <div className="space-y-1 animate-fadeIn">
                    <span className="text-brand-emerald">$</span> neofetch --skills
                    <div className="text-brand-accent font-bold mt-1">Mangesh@DevOps</div>
                    <div className="text-gray-500">--------------</div>
                    <div className="grid grid-cols-1 gap-x-2 gap-y-0.5 text-gray-400">
                      <div><span className="text-indigo-400">Cloud Platform:</span> AWS (Terraform)</div>
                      <div><span className="text-indigo-400">IaC Framework:</span> Terraform</div>
                      <div><span className="text-indigo-400">Container Tech:</span> Docker & Kubernetes</div>
                      <div><span className="text-indigo-400">CI/CD Engines:</span> Jenkins, GitHub Actions, Argo CD</div>
                      <div><span className="text-indigo-400">Core Network:</span> IPv4, VLANs, L2 Managed Switches</div>
                      <div><span className="text-indigo-400">OS Platforms:</span> Linux system administration</div>
                    </div>
                  </div>
                )}

                {activeTab === 'terraform' && (
                  <div className="space-y-2 animate-fadeIn">
                    <span className="text-brand-emerald">$</span> terraform apply -auto-approve
                    <div className="text-gray-500 text-[10px] leading-tight">
                      aws_vpc.vortex_network: Creating...<br />
                      aws_subnet.eks_subnets[0]: Creating...<br />
                      aws_eks_cluster.vortex_prod: Creating...<br />
                    </div>
                    <div className="text-brand-emerald">
                      + aws_eks_cluster.vortex_prod: Creation complete [ID: eks-prod]
                    </div>
                    <div className="text-gray-400 mt-1">
                      Apply complete! Resources: 18 added, 0 changed, 0 destroyed.
                    </div>
                  </div>
                )}

                {activeTab === 'gitops' && (
                  <div className="space-y-1 animate-fadeIn">
                    <span className="text-brand-emerald">$</span> argocd app sync vortex-prod
                    <div className="text-gray-400 mt-1">Timestamp: {new Date().toISOString().split('T')[0]} 16:34:00</div>
                    <div className="text-brand-emerald mt-1 font-bold">✓ App synced successfully</div>
                    <div className="text-gray-400 grid grid-cols-2 gap-1 pt-1 text-[10px]">
                      <div>Name: vortex-application</div>
                      <div>Status: <span className="text-brand-emerald font-bold">Synced</span></div>
                      <div>Target: EKS-Cluster-01</div>
                      <div>Revision: main/a7d8b9f</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
