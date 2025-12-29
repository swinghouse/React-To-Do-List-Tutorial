Branch protection recommendation for `dev`

Suggested settings (set via GitHub repo Settings -> Branches -> Branch protection rules):

- Protect branch: `dev`
- Require pull request reviews before merging: **Enable** (1 required review: maintainers or specific code owners)
- Require status checks to pass before merging: **Enable** and select checks to require; at minimum:
  - `CI - Install Dependencies` (ensures `npm ci` succeeds)
- Require branches to be up to date before merging: **Optional** (useful to ensure merges include latest changes)
- Require linear history: **Optional**
- Include administrators: **Recommended** (prevents accidental bypass)

Notes:
- Only repository admins can add/update protection rules. If you want, I can apply these using the GitHub REST API (requires a token with `repo` and `admin:repo_hook` scope).
- The PR labeler workflow is already in place to tag PRs with `ci: passed` or `ci: failed` based on `npm ci`.

If you want me to apply the rules automatically, provide a temporary Personal Access Token and confirm which exact checks you want to require (I recommend `CI - Install Dependencies` at minimum).