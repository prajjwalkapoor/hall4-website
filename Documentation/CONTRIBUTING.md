# Contributing to Hall-4 Website

## Standard Commit Messages

This project is using the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) standard. Please follow these steps to ensure your commit messages are standardized:

  - Commit messages should have this format: `<type>[optional scope]: <description>`
  - Type must be one of the following:
    * **docs**: Documentation only changes
    * **feat**: A new feature
    * **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  - Scope should be `ui` or `global`
  - Description should be concise.
  - Example: `feat(ui): added image gallery`

## Before making PR
  - Run `git fetch upstream` & `git rebase upstream/master` to fetch updated codebase into your local repository before creating any new branch.
  - Run `git checkout -b <your-branch-name>`
  
## Local Setup

1. Fork and clone the repository.
2. Add remote upstream `git remote add upstream https://github.com/prajjwalkapoor/hall4-website.git`