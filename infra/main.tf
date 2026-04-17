terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

variable "aws_region" {
  default = "us-east-1"
}

variable "environment" {
  default = "production"
}

# IAM role for cross-account access
resource "aws_iam_role" "finops_scheduler" {
  name = "FinOpsSchedulerRole"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          AWS = "arn:aws:iam::${data.aws_caller_identity.current.account_id}:root"
        }
      }
    ]
  })
}

data "aws_caller_identity" "current" {}

resource "aws_iam_role_policy" "finops_scheduler" {
  name = "FinOpsSchedulerPolicy"
  role = aws_iam_role.finops_scheduler.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "ec2:DescribeInstances",
          "ec2:StartInstances",
          "ec2:StopInstances",
          "rds:DescribeDBInstances",
          "rds:StartDBInstance",
          "rds:StopDBInstance",
          "eks:DescribeNodegroup",
          "eks:UpdateNodegroupConfig",
        ]
        Resource = "*"
      }
    ]
  })
}
