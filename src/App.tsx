import { useState, Fragment } from 'react';
import { Hero } from './components/dashboard/Hero';
import { TechIcon } from './components/common/TechIcon';
import projectsData from './data/projects.json';
import type { DevOpsCaseStudy, PipelineStage } from './types/portfolio';

function App() {
  const [selectedProject] = useState<DevOpsCaseStudy>(projectsData[0] as DevOpsCaseStudy);
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);

  const activeStage: PipelineStage = selectedProject.pipelineStages[activeStageIndex];

  return (
    <div className="min-h-screen bg-brand-dark text-gray-300 font-sans selection:bg-brand-accent/30 selection:text-white">
      
      {/* 1. System Navigation Header Bar */}
      <header className="sticky top-0 z-50 border-b border-brand-border bg-brand-dark/80 backdrop-blur-md px-6 py-4">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm tracking-widest text-white font-bold">
              VORTEX <span className="text-brand-accent">//</span> SONAWANE.IO
            </span>
            <span className="hidden sm:inline-block h-4 w-[1px] bg-brand-border" />
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded bg-brand-border px-2 py-0.5 text-[10px] font-mono text-gray-400">
              ENV: PRODUCTION
            </span>
          </div>

          <nav className="flex items-center gap-6 font-mono text-xs text-gray-400">
            <a href="#summary" className="hover:text-white transition-colors">/profile</a>
            <a href="#projects" className="hover:text-white transition-colors">/experience</a>
            <a href="#skills" className="hover:text-white transition-colors">/skills</a>
            <a href="#education" className="hover:text-white transition-colors">/education</a>
            <a href="#contact" className="hover:text-white transition-colors">/connect</a>
            <span className="h-2 w-2 rounded-full bg-brand-emerald animate-pulse" title="System normal" />
          </nav>
        </div>
      </header>

      {/* 2. Interactive Hero Section */}
      <Hero />

      {/* Main Content Area */}
      <main className="mx-auto max-w-6xl px-6 py-16 space-y-24">

        {/* 3. Professional Summary */}
        <section id="summary" className="scroll-mt-24">
          <div className="rounded-xl border border-brand-border bg-brand-panel p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-brand-accent font-mono text-xs font-bold">
              <span>$ cat summary.txt</span>
            </div>
            <h2 className="text-xl font-bold text-white font-mono uppercase">
              Professional Summary
            </h2>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              DevOps Engineer with strong experience in automating, deploying, and managing applications and infrastructure. Skilled in designing and maintaining CI/CD pipelines, Infrastructure as Code (Terraform), containerization, and orchestration using Jenkins, Docker, Kubernetes, and Argo CD. Proficient in AWS cloud services, source code management (Git/GitHub), and Linux system administration. Experienced in collaborating with cross-functional teams to deliver reliable and scalable production systems.
            </p>
          </div>
        </section>

        {/* 4. Projects Showcase & Work Experience Console */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div className="space-y-2 border-l-2 border-brand-accent pl-4">
            <h2 className="text-2xl font-bold tracking-tight text-white font-mono uppercase">
              $ get --experience --detailed
            </h2>
            <p className="text-sm text-gray-400">
              Work experience at Rasiklal M. Dhariwal International and project metrics breakdowns.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12">
            
            {/* Left side: Case Study Metadata & Text Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-xl border border-brand-border bg-brand-panel p-6 space-y-6">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-brand-accent">{selectedProject.company}</span>
                    <span className="text-xs text-gray-500 font-mono">Pune, India</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">{selectedProject.title}</h3>
                  <div className="text-xs text-gray-400 font-mono mt-1">{selectedProject.role} | {selectedProject.period}</div>
                </div>

                {/* KPI Result Blocks */}
                <div className="grid grid-cols-3 gap-3">
                  {selectedProject.measurableResults.map((result, idx) => (
                    <div key={idx} className="rounded-lg border border-brand-border bg-black/35 p-3 text-center hover:border-brand-emerald/30 transition-colors">
                      <div className="text-lg sm:text-xl font-extrabold text-brand-emerald font-mono">{result.value}</div>
                      <div className="text-[10px] font-mono text-gray-400 uppercase tracking-tight mt-1 leading-tight">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Challenge Segment */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-white border-b border-brand-border pb-1 font-bold">
                    [01] THE CHALLENGE
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {selectedProject.challenge.summary}
                  </p>
                  <ul className="text-xs text-gray-400 space-y-1.5 list-none pl-1 pt-1">
                    {selectedProject.challenge.painPoints.map((point, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <span className="text-red-500 font-mono">✗</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture & Tools Segment */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-white border-b border-brand-border pb-1 font-bold">
                    [02] THE SOLUTION & TOOLS USED
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {selectedProject.architectureAndTools.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {selectedProject.architectureAndTools.tools.map((tool, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center gap-1.5 rounded border border-brand-border bg-black/40 px-2 py-1 text-xs font-mono text-indigo-300"
                      >
                        <TechIcon name={tool.name} className="h-3.5 w-3.5" />
                        <span>{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Interactive Pipeline & Log Visualizer */}
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-xl border border-brand-border bg-brand-panel overflow-hidden">
                <div className="bg-black/30 border-b border-brand-border px-5 py-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-white font-bold">INTERACTIVE DEPLOYMENT PIPELINE</span>
                    <span className="flex items-center gap-1.5 rounded bg-brand-emerald/10 px-2 py-0.5 text-[9px] font-mono text-brand-emerald uppercase">
                      Status: Active
                    </span>
                  </div>
                </div>

                {/* Pipeline Flowchart Container */}
                <div className="p-6 bg-black/20 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
                  {selectedProject.pipelineStages.map((stage, idx) => (
                    <Fragment key={idx}>
                      <button
                        onClick={() => setActiveStageIndex(idx)}
                        className={`w-full md:w-32 p-3 rounded-lg border text-center font-mono text-xs transition-all duration-300 cursor-pointer ${
                          activeStageIndex === idx 
                            ? 'border-brand-accent bg-brand-accent/15 text-white shadow-[0_0_15px_rgba(99,102,241,0.2)]' 
                            : 'border-brand-border bg-brand-panel hover:border-gray-500 text-gray-400'
                        }`}
                      >
                        <div className="text-[10px] text-gray-500 mb-1">STAGE 0{idx + 1}</div>
                        <div className="font-semibold truncate">{stage.stageName}</div>
                        <div className="text-[9px] text-brand-emerald mt-1">● Success</div>
                      </button>
                      
                      {idx < selectedProject.pipelineStages.length - 1 && (
                        <div className="hidden md:block text-gray-600 font-bold text-lg select-none">
                          ➔
                        </div>
                      )}
                    </Fragment>
                  ))}
                </div>

                {/* Simulated Log Output Window */}
                <div className="border-t border-brand-border bg-[#05060b] p-5 font-mono text-xs">
                  <div className="flex items-center justify-between text-gray-500 border-b border-brand-border/40 pb-2 mb-3">
                    <span>CONSOLE_OUTPUT (Stage: {activeStage.stageName})</span>
                    <span className="text-[10px]">RECONCILED: OK</span>
                  </div>

                  <div className="space-y-1.5 min-h-[120px] text-gray-300">
                    <div className="text-gray-500">// Simulating output stream...</div>
                    <div className="text-indigo-400">$ load_stage_logs --stage "{activeStage.stageName}"</div>
                    {activeStage.logs?.map((log, idx) => (
                      <div key={idx} className="flex gap-2">
                        <span className="text-brand-emerald select-none">✓</span>
                        <span className="break-all">{log}</span>
                      </div>
                    ))}
                    <div className="inline-block h-3.5 w-1.5 bg-brand-emerald animate-pulse ml-1 align-middle" />
                  </div>
                </div>
              </div>

              {/* Network segment illustration simulation */}
              <div className="rounded-xl border border-brand-border bg-brand-panel p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-brand-border/60 pb-3">
                  <div className="font-mono text-xs text-white font-bold">VLAN INFRASTRUCTURE SEGMENTATION</div>
                  <div className="text-[10px] text-brand-emerald font-mono flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 bg-brand-emerald rounded-full" /> PHYSICAL SWITCH LINK
                  </div>
                </div>
                <p className="text-xs text-gray-400">
                  Network segmentation configured at Rasiklal M. Dhariwal International to partition administrative, staging, and production domains.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-[10px] pt-1">
                  <div className="border border-brand-border bg-black/40 p-3 rounded hover:border-brand-accent/50 transition-colors">
                    <span className="text-brand-accent font-bold">VLAN 10 // ADMIN</span>
                    <div className="text-gray-500 mt-1">Subnet: 10.10.10.0/24</div>
                    <div className="text-gray-400">Status: Isolated</div>
                  </div>
                  <div className="border border-brand-border bg-black/40 p-3 rounded hover:border-brand-accent/50 transition-colors">
                    <span className="text-brand-accent font-bold">VLAN 20 // STAGING</span>
                    <div className="text-gray-500 mt-1">Subnet: 10.10.20.0/24</div>
                    <div className="text-gray-400">Status: Isolated</div>
                  </div>
                  <div className="border border-brand-border bg-black/40 p-3 rounded hover:border-brand-accent/50 transition-colors">
                    <span className="text-brand-accent font-bold">VLAN 30 // PROD</span>
                    <div className="text-gray-500 mt-1">Subnet: 10.10.30.0/24</div>
                    <div className="text-gray-400">Status: Regulated</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. Technical Skills Matrix */}
        <section id="skills" className="space-y-8 scroll-mt-24">
          <div className="space-y-2 border-l-2 border-brand-accent pl-4">
            <h2 className="text-2xl font-bold tracking-tight text-white font-mono uppercase">
              $ cat skills_matrix.json
            </h2>
            <p className="text-sm text-gray-400">
              Core technologies and architectural paradigms leveraged for continuous deployment and secure network configurations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            
            <div className="border border-brand-border bg-brand-panel p-5 rounded-xl space-y-3 hover:border-brand-accent/50 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-indigo-400 font-mono text-xs">01 / CLOUD PLATFORMS</span>
                <TechIcon name="aws" className="h-5 w-5 text-orange-400" />
              </div>
              <h3 className="text-white text-base font-bold">Amazon Web Services (AWS)</h3>
              <p className="text-xs text-gray-400">
                Designing highly available cloud environments with VPCs, subnets, route tables, IAM policies, and Amazon EKS cluster control-planes.
              </p>
            </div>

            <div className="border border-brand-border bg-brand-panel p-5 rounded-xl space-y-3 hover:border-brand-accent/50 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-indigo-400 font-mono text-xs">02 / INFRASTRUCTURE AS CODE</span>
                <TechIcon name="terraform" className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-white text-base font-bold">Terraform</h3>
              <p className="text-xs text-gray-400">
                Authoring reusable, modular configurations to provision, version-control, and scale cloud infrastructure with 100% repeatability.
              </p>
            </div>

            <div className="border border-brand-border bg-brand-panel p-5 rounded-xl space-y-3 hover:border-brand-accent/50 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-indigo-400 font-mono text-xs">03 / ORCHESTRATION</span>
                <TechIcon name="kubernetes" className="h-5 w-5 text-blue-400" />
              </div>
              <h3 className="text-white text-base font-bold">Kubernetes</h3>
              <p className="text-xs text-gray-400">
                Managing application scaling, high-availability deployments, replica sets, namespaces, ConfigMaps, and cluster networking.
              </p>
            </div>

            <div className="border border-brand-border bg-brand-panel p-5 rounded-xl space-y-3 hover:border-brand-accent/50 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-indigo-400 font-mono text-xs">04 / CONTAINERIZATION</span>
                <TechIcon name="docker" className="h-5 w-5 text-sky-400" />
              </div>
              <h3 className="text-white text-base font-bold">Docker</h3>
              <p className="text-xs text-gray-400">
                Packaging applications into container images using multi-stage builds to optimize footprints, layer caching, and build performance.
              </p>
            </div>

            <div className="border border-brand-border bg-brand-panel p-5 rounded-xl space-y-3 hover:border-brand-accent/50 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-indigo-400 font-mono text-xs">05 / CI/CD AUTOMATION</span>
                <TechIcon name="jenkins" className="h-5 w-5 text-red-400" />
              </div>
              <h3 className="text-white text-base font-bold">Jenkins, Actions & ArgoCD</h3>
              <p className="text-xs text-gray-400">
                Designing declarative CI/CD pipelines, Git branching workflow policies, and continuous GitOps reconciliation loops to Amazon EKS.
              </p>
            </div>

            <div className="border border-brand-border bg-brand-panel p-5 rounded-xl space-y-3 hover:border-brand-accent/50 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-indigo-400 font-mono text-xs">06 / NETWORKING INFRASTRUCTURE</span>
                <TechIcon name="networking" className="h-5 w-5 text-teal-400" />
              </div>
              <h3 className="text-white text-base font-bold">L2 Managed Switches & VLANs</h3>
              <p className="text-xs text-gray-400">
                Configuring physical routers, switches, IPv4 routing protocols, subnets, and multiple VLANs for corporate network partitioning.
              </p>
            </div>

          </div>
        </section>

        {/* 6. Education & Qualifications */}
        <section id="education" className="space-y-8 scroll-mt-24">
          <div className="space-y-2 border-l-2 border-brand-accent pl-4">
            <h2 className="text-2xl font-bold tracking-tight text-white font-mono uppercase">
              $ cat education.log
            </h2>
            <p className="text-sm text-gray-400">
              Academic credentials and certifications in Computer Engineering.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-brand-border bg-brand-panel p-6 rounded-xl space-y-3 hover:border-brand-accent/50 transition-all duration-300">
              <div className="text-brand-emerald font-mono text-xs">GRADUATE DEGREE</div>
              <h3 className="text-white text-lg font-bold">Bachelor of Technology (B.Tech)</h3>
              <p className="text-sm text-indigo-300 font-mono">Computer Engineering</p>
              <p className="text-xs text-gray-400">
                Vishwakarma Institute of Technology, Bibwewadi, Pune
              </p>
            </div>

            <div className="border border-brand-border bg-brand-panel p-6 rounded-xl space-y-3 hover:border-brand-accent/50 transition-all duration-300">
              <div className="text-brand-emerald font-mono text-xs">TECHNICAL DIPLOMA</div>
              <h3 className="text-white text-lg font-bold">Diploma in Engineering</h3>
              <p className="text-sm text-indigo-300 font-mono">Computer Engineering</p>
              <p className="text-xs text-gray-400">
                Government Polytechnic, Pune
              </p>
            </div>
          </div>
        </section>

        {/* 7. Contact / Connection Section */}
        <section id="contact" className="scroll-mt-24">
          <div className="rounded-xl border border-brand-border bg-gradient-to-r from-brand-panel to-brand-dark p-8 md:p-12 relative overflow-hidden">
            
            {/* Background elements */}
            <div className="absolute bottom-0 right-0 h-40 w-40 bg-brand-accent/5 rounded-full blur-3xl" />
            
            <div className="relative max-w-2xl space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-white font-mono">
                $ telnet sonawane.io 23
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Looking to automate your development staging flows or require robust infrastructure code modules? Let's connect to discuss how I can help bring stability to your production environments.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 pt-2 font-mono text-xs text-gray-300">
                <a href="mailto:m.sonawanegot@gmail.com" className="flex items-center gap-3 hover:text-brand-accent transition-colors">
                  <span className="text-brand-accent">✉</span> m.sonawanegot@gmail.com
                </a>
                <a href="tel:+918551021306" className="flex items-center gap-3 hover:text-brand-accent transition-colors">
                  <span className="text-brand-accent">📞</span> +91 8551021306
                </a>
                <a href="tel:+918554090499" className="flex items-center gap-3 hover:text-brand-accent transition-colors">
                  <span className="text-brand-accent">📞</span> +91 8554090499
                </a>
                <span className="flex items-center gap-3">
                  <span className="text-brand-accent">📍</span> Pune, Maharashtra, India
                </span>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-brand-border/60">
                <button 
                  onClick={() => window.print()}
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-xs font-semibold hover:bg-indigo-500 transition-colors font-mono cursor-pointer"
                >
                  Print Portfolio Resume
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Declaration Disclaimer (Visible when printing) */}
        <section className="hidden print:block pt-12 border-t border-dashed border-gray-700 font-mono text-xs text-gray-400 space-y-4">
          <p className="font-bold text-white">DECLARATION</p>
          <p>
            I hereby declare that the information provided above is true and correct to the best of my knowledge and belief.
          </p>
          <div className="flex justify-between pt-6">
            <div>
              <p>Place: Pune</p>
              <p>Date: {new Date().toLocaleDateString()}</p>
            </div>
            <div className="text-right">
              <p>Signature</p>
              <p className="font-bold text-white mt-4">Mangesh Sonawane</p>
            </div>
          </div>
        </section>

      </main>

      {/* System Status Footer */}
      <footer className="border-t border-brand-border bg-black/40 px-6 py-6 font-mono text-center text-[10px] text-gray-500">
        <p>VORTEX SYSTEM PORTFOLIO // RUNNING V1.3.0 // POWERED BY REACT, VITE & TAILWIND CSS V4</p>
        <p className="mt-1">© {new Date().getFullYear()} Mangesh Dilip Sonawane. All systems operational.</p>
      </footer>

    </div>
  );
}

export default App;
