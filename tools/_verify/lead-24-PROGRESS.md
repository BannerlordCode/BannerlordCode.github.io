# lead-24 进度：v1.4.7 + v1.5.3 缺页写作线

## 队列清单（已冻结）
| 文件 | wc -l（含 header） | N（缺页数） | 冻结时刻 |
| --- | --- | --- | --- |
| `tools/_verify/missing-types-1.4.7-zh.txt` | 5604 | 5603 | 2026-10-07T11:09 |
| `tools/_verify/missing-types-1.4.7-en.txt` | 5604 | 5603 | 2026-10-07T11:09 |
| `tools/_verify/missing-types-1.5.3-zh.txt` | 5606 | 5605 | 2026-10-07T11:09 |
| `tools/_verify/missing-types-1.5.3-en.txt` | 5737 | 5736 | 2026-10-07T11:09 |

**注**：v1.4.6 已交回 lead-18（boss #17996 调整）。本线只负责 v1.4.7 + v1.5.3。

## ★ 算术现实（boss 要求写入）
```
两棵树缺页合计：5603 + 5603 + 5605 + 5736 = 22,547 页
实测吞吐（批次 2）：20.6 页/小时（3 worker）
⇒ 22,547 ÷ 20.6 = 1,095 小时 ≈ 45.6 天【连续不停】工作
⇒ 在当前形态下覆盖全部 22,547 页需要约 1,095 小时（45.6 天不间断）
★ 结论：全覆盖【不可能达成】—— 这是量级差，不是慢。
⇒ 策略改为【按价值排序覆盖】（boss #17995 ③）：
  ① 优先：public API 面（mod 直接 new/继承/调用的）
  ② 次之：有跨版本差异的类
  ③ 最低：internal/private/嵌套辅助类型（mod 无法访问）⇒ 跳过
```

## 当前页数（实测 2026-10-07 20:40）
| 树 | zh/api | zh 全部 | en | 合计 |
| --- | --- | --- | --- | --- |
| v1.4.7 | 70 | 77 | 47 | 126 |
| v1.5.3 | 146 | — | 6 | 152 |

## 批次记录

### 批次 1：v1.4.7/zh/api/sandbox（5 页）✅
- 2 worker · ~71 分钟 · 4.2 页/小时
- pass 5/5 · deep_pass 5/5 · tier 5/5 handwritten_deep
- J5R unresolved=0 · BROKEN_LINKS=0 · U+FFFD=0

### 批次 2：v1.4.7/zh/api/system（12 页）✅
- 3 worker · ~35 分钟 · 20.6 页/小时
- pass 12/12 · deep_pass 12/12 · tier 12/12 handwritten_deep
- J5R unresolved=0 · BROKEN_LINKS=0 · U+FFFD=0
- lead-20 复核：11/12 PASS · 1 FAIL（Input.md 体量不足，已修复）
- 12 页已入库 git ✅

### 批次 3：v1.4.7/zh/api/network（12 页）✅
- 3 worker · ~35 分钟 · 20.6 页/小时
- pass 12/12 · deep_pass 8/12（4 stub: MessageContract, ClientsideSession, ServersideSession, TickManager — 缺真实示例）
- J5R unresolved=0 · U+FFFD=0
- 12 页已入库 git ✅

## 吞吐量实测
| 批次 | 页数 | worker 数 | 耗时 | 页/小时 |
| --- | --- | --- | --- | --- |
| 批次 1 | 5 | 2 | ~71 分钟 | 4.2 |
| 批次 2 | 12 | 3 | ~35 分钟 | 20.6 |
| 批次 3 | 12 | 3 | ~35 分钟 | 20.6 |

## 计数不变量（每批必检）
- **本批 N 页 ⇒ `_index.md` 必须新增恰好 N 行**（批次 2 的 worker 只加了 4/12 行，已手动补齐）

## 已知修复
- 导航链接深度：骨架的 `## 导航` 三行是 bucket `_index` 深度，套到叶子页上整体少一级。已修复为 `../../../` / `../../` / `../../../architecture/`。
- Input.md 体量不足：body 2395B < 2500B 门槛。已补充至 3441B。
- _index.md 表格：worker 只加部分行。已手动补齐。

## 待办
- 修复批次 3 的 4 个 stub 页（补真实 C# 示例）
- 批次 4：5-6 worker，按价值排序选桶（优先 public API 面）
- v1.5.3 尚未启动
- en 树尚未启动
