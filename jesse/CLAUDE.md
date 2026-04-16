# JESSE Vault -- jacquesjean.info

## Who I Am

This vault belongs to Jacques Jean. It governs automated content generation for the personal site at jacquesjean.info.

## Purpose

This is a focused JESSE vault for a single automation: generating and posting tweets when new blog posts are published. It is not a full task-management vault.

## Routines

- **Tweet from Blog**: See `Knowledge/Jesse-Guidelines/Tweet-From-Blog-Routine.md`
- **Writing Voice**: See `Knowledge/Jesse-Guidelines/Writing-Voice-Guidelines.md`

## Naming Conventions

- Filenames use Title-Case-With-Hyphens (e.g., `Tweet-From-Blog-Routine.md`).
- Archived files are prefixed with an ISO date (e.g., `2026-04-16-Old-File.md`).

## Source of Truth

This vault is the single source of truth for tweet style, tone, and formatting rules. The GitHub Action at `.github/workflows/tweet-on-publish.yml` executes the routine; this vault defines *what* gets posted and *how*.
