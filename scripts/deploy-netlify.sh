#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
NODE_BIN="/Users/portatil-jmv/.local/node-v22.16.0-darwin-arm64/bin"
export PATH="$NODE_BIN:$PATH"

cd "$ROOT"

if ! netlify status >/dev/null 2>&1; then
  echo "Netlify no autenticado. Ejecuta: netlify login"
  exit 1
fi

netlify deploy --prod --dir=. --message "${1:-Production deploy}"
echo ""
echo "Live: https://jerome-valkarreras-ele.netlify.app"