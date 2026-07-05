export interface Tool {
  name: string;
  category: 'cloud' | 'iac' | 'cicd' | 'containers' | 'monitoring' | 'networking';
  version?: string;
}

export interface Challenge {
  summary: string;
  painPoints: string[];
}

export interface Architecture {
  description: string;
  diagramUrl?: string;
  tools: Tool[];
}

export interface PipelineStage {
  stageName: string;
  status: 'success' | 'failed' | 'pending';
  tools: string[];
  logs?: string[];
}

export interface MeasurableResult {
  label: string;
  value: string;
  description: string;
}

export interface DevOpsCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  company: string;
  period: string;
  challenge: Challenge;
  architectureAndTools: Architecture;
  pipelineStages: PipelineStage[];
  measurableResults: MeasurableResult[];
}
