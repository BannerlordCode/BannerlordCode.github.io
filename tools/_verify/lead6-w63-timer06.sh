#!/usr/bin/env bash
# worker-63 批 5 单页计时器（读/写分开，§5 要求）
# 用法： lead6-w63-timer.sh <page-basename> <read|write>
# 读阶段调用一次（开工），写阶段调用一次（落笔后），各自 append 一行 TSV。
set -euo pipefail
LOG="$(dirname "$0")/lead6-w63-batch06.timing.tsv"
PAGE="$1"; PHASE="$2"
NOW=$(date +%s.%N)
if [ "$PHASE" = "read" ]; then
  # 读开始：写 start 标记
  echo -e "${PAGE}\tREAD_START\t${NOW}" >> "$LOG"
elif [ "$PHASE" = "readend" ]; then
  echo -e "${PAGE}\tREAD_END\t${NOW}" >> "$LOG"
elif [ "$PHASE" = "write" ]; then
  echo -e "${PAGE}\tWRITE_END\t${NOW}" >> "$LOG"
else
  echo "usage: $0 <page> <read|readend|write>" >&2; exit 2
fi
