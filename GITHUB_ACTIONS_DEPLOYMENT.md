# GitHub Actions Deployment Guide

## Overview
Deploy your crypto-feed scraper using GitHub Actions for **completely free** scheduled execution.

## Architecture
- **GitHub Actions**: Runs scraper every 6 hours (free)
- **Vercel**: Hosts the blog (free)
- **Supabase**: Database (free tier)

## Setup Instructions

### 1. Push Code to GitHub
```bash
git add .
git commit -m "Add GitHub Actions scraper workflow"
git push origin main
```

### 2. Configure GitHub Secrets
In your GitHub repository, go to **Settings** → **Secrets and variables** → **Actions**

Add these **Repository Secrets**:

#### Required Secrets
```
SUPABASE_URL
Value: [Your Supabase project URL]

SUPABASE_ANON_KEY  
Value: [Your Supabase anon key]

SUPABASE_SERVICE_ROLE_KEY
Value: [Your Supabase service role key]

OPENAI_API_KEY
Value: [Your OpenAI API key]

FIRECRAWL_API_KEY
Value: [Your Firecrawl API key]
```

#### Optional Secrets
```
ENABLE_CURATION
Value: true

CURATION_BATCH_DELAY  
Value: 200
```

### 3. Test the Workflow

#### Manual Test
1. Go to **Actions** tab in your GitHub repo
2. Click **Crypto Feed Scraper** workflow
3. Click **Run workflow** button
4. Watch the logs to ensure it completes successfully

#### Scheduled Runs
- Automatically runs every 6 hours: `0, 6, 12, 18 UTC`
- First scheduled run will happen at next scheduled time

### 4. Monitor Execution

#### GitHub Actions
- **Logs**: View detailed execution logs for each run
- **Artifacts**: Failed runs upload logs for debugging
- **Notifications**: Email alerts for workflow failures

#### Workflow Status
- ✅ **Success**: "Scraper completed successfully"
- ❌ **Failure**: "Scraper failed" + uploaded error logs

## How It Works

### Workflow Schedule
```yaml
schedule:
  - cron: '0 */6 * * *'  # Every 6 hours
```

### Execution Flow
1. **Checkout code** from your repo
2. **Setup Node.js** environment  
3. **Install dependencies** for scraper package
4. **Run scraper once** (`npm run once`)
5. **Process articles**: RSS → AI → Supabase
6. **Auto-publish** to blog via existing logic

### Environment
- **Runtime**: Ubuntu Latest
- **Node.js**: Version 18
- **Timeout**: 6 hours maximum (more than enough)
- **Cost**: $0 (GitHub Actions free tier)

## Troubleshooting

### Common Issues
1. **Secret not found**: Check secret names match exactly
2. **Permission denied**: Ensure secrets are added to the repository
3. **Build failures**: Check package.json scripts exist
4. **Database connection**: Verify Supabase credentials

### Debug Steps
1. **Check workflow logs** in Actions tab
2. **Run manual workflow** to test immediately  
3. **Verify secrets** are properly configured
4. **Test locally** with `npm run scraper:once`

### Log Analysis
- **Success indicators**: "Scraper completed successfully"
- **Error patterns**: Check uploaded artifacts on failures
- **Database issues**: Look for Supabase connection errors

## Cost Breakdown
- **GitHub Actions**: Free (2,000 minutes/month for public repos)
- **Vercel**: Free (hobby plan)
- **Supabase**: Free (500MB database, 2GB bandwidth)
- **Total**: $0/month

## Production Checklist
- [ ] All secrets configured in GitHub repository
- [ ] Manual workflow test successful
- [ ] Blog deployed to Vercel with same Supabase connection
- [ ] Articles appearing in Supabase after workflow runs
- [ ] Blog displaying new articles from database
- [ ] Scheduled runs executing every 6 hours