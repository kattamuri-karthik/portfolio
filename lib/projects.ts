export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectDecision = {
  title: string;
  rationale: string;
  tradeoff: string;
};

export type ProjectCaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  stack: string[];
  impact: string;
  github: string;
  live: string;
  problem: string;
  constraints: string[];
  architecture: string[];
  decisions: ProjectDecision[];
  outcomes: string[];
  metrics: ProjectMetric[];
};

export const projects: ProjectCaseStudy[] = [
  {
    slug: "ckd-prediction",
    title: "Chronic Kidney Disease Prediction",
    tagline: "Clinical risk classification with interpretable ML signals.",
    summary:
      "A supervised ML pipeline for CKD classification using medical attributes and preprocessing safeguards to reduce noisy predictions.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    impact:
      "Built a repeatable model training workflow that supports early-risk screening experiments.",
    github: "https://github.com/kattamuri-karthik/chronic-kidney-disease-prediction",
    live: "#",
    problem:
      "Manual clinical screening can be delayed when datasets are noisy and features are incomplete. The project aims to predict CKD risk class from structured health inputs.",
    constraints: [
      "Dataset had missing values and mixed numeric/categorical features.",
      "Class imbalance required careful validation strategy.",
      "Model needed basic interpretability for non-ML stakeholders."
    ],
    architecture: [
      "Data ingestion and schema validation.",
      "Imputation and categorical encoding pipeline.",
      "Model training with multiple algorithms and cross-validation.",
      "Evaluation and error analysis for false positives/negatives."
    ],
    decisions: [
      {
        title: "Pipeline-first preprocessing",
        rationale:
          "Wrapped transforms into a reproducible pipeline to avoid data leakage across training and validation.",
        tradeoff:
          "Initial setup was longer, but experiment consistency improved significantly."
      },
      {
        title: "Compare baseline and tuned models",
        rationale:
          "Started with simple baselines before hyperparameter tuning to quantify real gains.",
        tradeoff:
          "Training time increased, but model choice became defensible."
      }
    ],
    outcomes: [
      "Created a reusable notebook-to-script workflow for training runs.",
      "Documented feature influence trends for medically meaningful attributes.",
      "Improved confidence in early-stage risk categorization experiments."
    ],
    metrics: [
      { label: "Models Compared", value: "4" },
      { label: "Validation Method", value: "K-Fold CV" },
      { label: "Pipeline Coverage", value: "100% preprocessing in-pipeline" }
    ]
  },
  {
    slug: "study-management-system",
    title: "Study Management Academy System",
    tagline: "Centralized academic workflow and student record management.",
    summary:
      "A system for handling student records, attendance, and course tracking with cleaner academic operations.",
    stack: ["HTML", "CSS", "Python", "SQL"],
    impact:
      "Reduced manual record fragmentation by centralizing key academic workflows.",
    github: "https://github.com/kattamuri-karthik/study-management-academy-system",
    live: "#",
    problem:
      "Institution data was scattered across separate files and manual processes, creating delays in tracking student progress and course operations.",
    constraints: [
      "Needed simple UI for non-technical users.",
      "Required consistent CRUD behavior across multiple entities.",
      "Database normalization had to remain understandable for maintenance."
    ],
    architecture: [
      "Relational schema for students, courses, and performance records.",
      "Server-side Python logic for validation and operations.",
      "Frontend forms for record management and quick updates.",
      "Query layer for tracking course-wise and student-wise status."
    ],
    decisions: [
      {
        title: "Normalized relational schema",
        rationale:
          "Reduced duplicate records and improved update consistency.",
        tradeoff:
          "Joins became more frequent, but data integrity improved."
      },
      {
        title: "Form validation on both client and server",
        rationale:
          "Prevented malformed entries while preserving backend trust boundaries.",
        tradeoff:
          "Validation logic duplicated in places for better safety."
      }
    ],
    outcomes: [
      "Improved reliability of student/course records.",
      "Simplified reporting workflows for administrative tasks.",
      "Established a cleaner foundation for future full-stack upgrades."
    ],
    metrics: [
      { label: "Core Entities", value: "5+" },
      { label: "Operations", value: "Full CRUD" },
      { label: "Data Integrity", value: "Normalized SQL schema" }
    ]
  },
  {
    slug: "cctv-object-detection-reporting",
    title: "CCTV Object Detection with Text Generation",
    tagline: "Computer vision events converted into readable scene reports.",
    summary:
      "A real-time detection pipeline that identifies objects from CCTV-like streams and generates textual summaries for monitoring.",
    stack: ["Python", "OpenCV", "Deep Learning", "NLP"],
    impact:
      "Combined vision and language outputs to make monitoring insights faster to review.",
    github:
      "https://github.com/kattamuri-karthik/cctv-object-detection-text-generation",
    live: "#",
    problem:
      "Raw video feeds are hard to monitor continuously. The goal was to detect important objects and convert events into human-readable updates.",
    constraints: [
      "Latency had to remain acceptable for near real-time use.",
      "Object confidence thresholds required tuning to reduce noise.",
      "Generated text needed to stay concise and factual."
    ],
    architecture: [
      "Frame capture and preprocessing pipeline.",
      "Object detection inference with threshold filtering.",
      "Temporal aggregation of detections into event windows.",
      "Template-based report generation from detected entities."
    ],
    decisions: [
      {
        title: "Window-based event aggregation",
        rationale:
          "Grouped multiple frame detections into one event summary to reduce repeated alerts.",
        tradeoff:
          "Very short-lived events could be underrepresented."
      },
      {
        title: "Template-driven text generation",
        rationale:
          "Ensured predictable, low-hallucination reports for surveillance use.",
        tradeoff:
          "Less expressive than generative free-form narration."
      }
    ],
    outcomes: [
      "Reduced alert noise by consolidating repetitive detections.",
      "Delivered readable summaries suitable for quick human review.",
      "Created a modular pipeline that can swap detector backends."
    ],
    metrics: [
      { label: "Processing Mode", value: "Near real-time" },
      { label: "Output", value: "Detection + text summary" },
      { label: "Noise Control", value: "Confidence threshold + aggregation" }
    ]
  },
  {
    slug: "ai-resume-analyzer-mock-interview",
    title: "AI Resume Analyzer and Mock Interview",
    tagline: "Resume intelligence with interview simulation workflow.",
    summary:
      "An AI workflow that reviews resumes, suggests improvements, and generates mock interview questions with feedback loops.",
    stack: ["Python", "NLP", "Machine Learning", "Prompt Engineering"],
    impact:
      "Created a practical preparation flow from resume quality checks to interview practice.",
    github: "https://github.com/kattamuri-karthik/ai-resume-analyzer-mock-interview",
    live: "#",
    problem:
      "Students often lack actionable feedback on resume quality and interview readiness. The system provides targeted analysis and practice prompts.",
    constraints: [
      "Feedback had to remain role-relevant and concise.",
      "Question generation needed difficulty progression.",
      "System should avoid overclaiming user capabilities."
    ],
    architecture: [
      "Resume parsing and skill extraction layer.",
      "Rule + ML hybrid scoring for structure and relevance.",
      "Question generation module by role/topic.",
      "Feedback summary module with actionable next steps."
    ],
    decisions: [
      {
        title: "Hybrid scoring approach",
        rationale:
          "Combined deterministic checks with ML signals to keep recommendations stable.",
        tradeoff:
          "More logic to maintain than a single-model approach."
      },
      {
        title: "Progressive interview rounds",
        rationale:
          "Improved skill-building by moving from fundamentals to scenario-based questions.",
        tradeoff:
          "Longer interaction flow for complete sessions."
      }
    ],
    outcomes: [
      "Generated role-specific improvement suggestions.",
      "Enabled iterative practice through mock interviews.",
      "Improved confidence in interview preparation routines."
    ],
    metrics: [
      { label: "Workflow Stages", value: "3 (Analyze, Ask, Improve)" },
      { label: "Question Strategy", value: "Progressive difficulty" },
      { label: "Feedback Type", value: "Actionable bullet points" }
    ]
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getPortfolioKnowledgeBase() {
  return projects
    .map((project) => {
      return [
        `Project: ${project.title}`,
        `Summary: ${project.summary}`,
        `Impact: ${project.impact}`,
        `Stack: ${project.stack.join(", ")}`,
        `Problem: ${project.problem}`,
        `Architecture: ${project.architecture.join(" -> ")}`,
        `Key outcomes: ${project.outcomes.join("; ")}`
      ].join("\n");
    })
    .join("\n\n");
}
