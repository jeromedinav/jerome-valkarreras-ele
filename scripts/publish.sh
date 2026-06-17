#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
GH="${GH:-$(command -v gh || echo "$HOME/.local/bin/gh")}"

cd "$ROOT"

if ! "$GH" auth status >/dev/null 2>&1; then
  echo "GitHub no autenticado. Ejecuta:"
  echo "  $GH auth login --hostname github.com --git-protocol https --web"
  exit 1
fi

if ! git remote get-url origin >/dev/null 2>&1; then
  "$GH" repo create jerome-valkarreras-ele --public --source=. --remote=origin --push
else
  git push -u origin main
fi

echo ""
echo "Siguiente paso en GitHub:"
echo "  Repo → Settings → Pages → Source: GitHub Actions"
echo ""
echo "URL esperada:"
USER=$("$GH" api user -q .login)
echo "  https://${USER}.github.io/jerome-valkarreras-ele/"