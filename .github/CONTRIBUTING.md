Contributing — short guide

Thanks for contributing! Two small items to avoid accidental PRs against the upstream repo:

1) Confirm the PR base is your repo (`swinghouse/React-To-Do-List-Tutorial`) and the base branch is `dev`.
   - When creating a PR on GitHub, double-check the **Base repository** and **Base branch** fields at the top of the PR page.

2) Push branches to this repository (swinghouse) rather than the original fork.
   - Check remotes: `git remote -v`
   - If your repo (swinghouse) is already `origin`, push the branch and set upstream:
     - `git checkout -b chore/my-change`
     - `git push -u origin chore/my-change`
   - If you originally cloned the upstream author’s repo and need to add your repo as a remote:
     - `git remote add swinghouse https://github.com/swinghouse/React-To-Do-List-Tutorial.git`
     - `git push --set-upstream swinghouse chore/my-change`

3) Prefer the GitHub CLI to create PRs (explicit base & head flags reduce mistakes):
   - Authenticate first: `gh auth login`
   - Create a PR (branch pushed to your `swinghouse` repo):
     - `gh pr create --base dev --head swinghouse:chore/my-change --title "chore: ..." --body "Short description"`
   - If you pushed the branch to **this** repository (same repo), you can omit the owner from `--head`:
     - `gh pr create --base dev --head chore/my-change --title "..." --body "..."`

4) PR template and guard action
   - This repo includes a PR template that reminds you to confirm the base repo/branch.
   - A GitHub Action runs on PR open/edit and will comment if the base repo/branch is incorrect.

Thanks — small checks like these reduce accidental PRs against upstream forks. If you want, add a note here describing any preferred branching naming conventions and I’ll include it.