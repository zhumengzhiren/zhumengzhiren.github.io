#!/bin/bash
# Sync resumes from Overleaf: pull latest → compile all → copy to website
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(dirname "$SCRIPT_DIR")"
OVERLEAF_DIR="$ROOT/overleaf_resume"
PUBLIC_DIR="$ROOT/client/public"

eval "$(/usr/libexec/path_helper)"

echo "→ Pulling latest from Overleaf..."
cd "$OVERLEAF_DIR"
git pull

echo "→ Compiling resumes..."
for f in main industry_ai industry_sys; do
    rm -f ${f}.aux ${f}.log ${f}.out
    pdflatex -interaction=nonstopmode ${f}.tex > /dev/null 2>&1
    if [ -f "${f}.pdf" ]; then
        echo "  ✓ ${f}.pdf"
    else
        echo "  ✗ ${f}.tex failed to compile"
    fi
done

echo "→ Copying PDFs..."
cp main.pdf "$PUBLIC_DIR/resume_en.pdf"
cp industry_ai.pdf "$PUBLIC_DIR/resume_ai.pdf"
cp industry_sys.pdf "$PUBLIC_DIR/resume_sys.pdf"

echo "✓ Done. All resumes updated."
