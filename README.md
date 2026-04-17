# FinOps AWS — Scheduled Environment Shutdown

SaaS platform for FinOps in companies using AWS resources (EC2, EKS, RDS, EBS, etc.).

## Overview

Focused initially on **scheduled shutdown of non-production environments**, with roadmap features for:

- Right-sizing suggestions for EC2 instances
- EBS cost reduction recommendations
- RDS instance scheduling
- EKS cluster scale-down during off-hours
- Cost dashboards and alerts

## Architecture

```
.
├── backend/          # Node.js/TypeScript API + scheduler
│   └── src/
│       ├── api/      # REST API routes
│       ├── aws/      # AWS SDK integrations (EC2, RDS, EKS, EBS)
│       └── scheduler/ # Cron-based shutdown/startup scheduler
├── frontend/         # React dashboard
│   └── src/
├── infra/            # IaC (Terraform/CDK)
└── docs/             # Documentation
```

## Tech Stack

- **Backend:** Node.js + TypeScript + Fastify
- **Frontend:** React + TypeScript + Tailwind CSS
- **Database:** PostgreSQL (multi-tenant)
- **Queue:** AWS SQS for scheduling jobs
- **IaC:** Terraform
- **Auth:** AWS IAM cross-account roles

## Getting Started

```bash
# Install dependencies
npm install

# Run backend (development)
cd backend && npm run dev

# Run frontend (development)
cd frontend && npm run dev
```

## AWS Permissions Required

The platform uses cross-account IAM roles. Minimum permissions:

- `ec2:DescribeInstances`, `ec2:StartInstances`, `ec2:StopInstances`
- `rds:DescribeDBInstances`, `rds:StartDBInstance`, `rds:StopDBInstance`
- `eks:DescribeNodegroup`, `eks:UpdateNodegroupConfig`

## License

MIT
