# 损坏字符重建登记（Reconstruction Ledger）

**为什么有这份文件**：页面是给读者看的，不该有施工痕迹；但如果重建的字符不留证据，
它将永远无法被复核 —— 「没登记的重建 = 不可检测的谎」（boss #4312）。

**规则**（详见 `CONTRACT.md` 第 7 节）：
```
① 兄弟页找到同句中文版      → 用它，登记出处为兄弟页路径
② ①落空 + 有同桶槽位统计   → 允许统计重建，登记依据类型「统计重建」，必须给得出分子分母
③ ①落空 + 无任何判别依据   → 不许选，报「无判别依据」，等裁定
```

---

## R-001 · `content/v1.4.5/zh/api/campaign/AlleyLeaderDiedMapNotification.md`

| 项 | 内容 |
|---|---|
| 位置 | L16，字节偏移 676 |
| 原字节 | 2 × U+FFFD |
| 坏 | `是「你有条暗巷失去首领（或人手不足）��这条地图通知。` |
| 好 | `是「你有条暗巷失去首领（或人手不足）」那条地图通知。` |
| 修复人 | worker-34 |
| 采集时间 | 2026-10-04 |
| 裁定 | boss #4312 —— **接受统计重建，条件是登记而非默认** |

### 依据①（兄弟页）：**落空**

| 候选位置 | 结果 |
|---|---|
| `content/v1.3.15/zh/api/campaign/AlleyLeaderDiedMapNotification.md` | 不存在（该版本此页在 `campaign-ext/`） |
| `content/v1.4.7/zh/api/campaign/AlleyLeaderDiedMapNotification.md` | 不存在 |
| `content/v1.3.15/zh/api/campaign-ext/AlleyLeaderDiedMapNotification.md` | 存在，0 处命中「失去首领（或人手不足）」 |
| `content/v1.4.5/zh/api/campaign-ext/AlleyLeaderDiedMapNotification.md` | 存在，0 处命中 |
| `content/v1.3.0/zh/api/campaign/AlleyLeaderDiedMapNotification.md` | 存在，0 处命中 |
| `git log --follow` 全部 6 提交 `15e4a0309f` `29a6946d35` `81abf85b13` `e8356e504c` `c46221fb3a` `d934d9085b` | **两个 FFFD 在最早可用提交里即已存在，无干净版本可取** |

⇒ ① 确实失败。落空不是没找，是确实没有。

### 依据②（统计重建）：两个字符各锁一条

**字符① = `」`｜依据类型：语法硬约束（非选择）**
本页 `## 概述` 中 `「` 之后紧跟一个已成对的 `（…）`（`或人手不足`），引号处于未闭合状态。
中文全角引号必须配对 ⇒ 必须补 `」`。本桶 172 处 `是「…」` 全部成对闭合。

**字符② = `那`｜依据类型：统计重建｜分子/分母 3/3，0/3 反例**
同桶 `## 概述` 槽位使用 `是「X」…地图通知` 模板的共 3 页，**3/3 用「那」，0/3 用「这」**：

| 出处页 | 原文 |
|---|---|
| `zh/api/campaign/AcceptCallToWarOfferMapNotification.md:16` | `是「盟友号召你一起对某国开战」那条地图通知。` |
| `zh/api/campaign/AlleyUnderAttackMapNotification.md:16` | `是「你的暗巷正在被攻打」那条地图通知。`（最近的同族兄弟，同为 Alley 系通知） |
| `zh/api/campaign/AllianceOfferMapNotification.md:16` | `是「某国向你提议结盟」那条地图通知。` |

反向排除：`」这条地图通知` 在全树 5 处命中，**全部落在 `viewmodel/*ItemVM.md` 的 frontmatter `description:` 槽位**，
与本页「## 概述正文」不是同一槽位，**不构成本槽位的反例**。

### 整句语义出处（英文姊妹页，非 boss 指定目录）

`content/v1.4.5/en/api/campaign/AlleyLeaderDiedMapNotification.md:16`
> `AlleyLeaderDiedMapNotification` is the map notice for "one of your alleys lost its leader (or is short of hands)".

给出整句语义与引号边界（中文侧对应 `「……（或人手不足）」`）。
**它不含那个中文连接字，因此不能独立定下字符②** —— 字符②的依据只有槽位统计。

### 强度声明

字符① = 语法事实，可信度高。
字符② = **统计证据，强度上限就是统计**，不是原句比对。此处登记即为让该强度可见、可复核。

### 附带偏差（已核，不追责）

HEAD 该页末尾有 1 个 LF，Write 工具实测吞掉文件末尾换行（写 `A\nB` 与 `A\nB\n` 两次均产出同样 11 字节）。
`LF 105 → 104`，落在仓库多数派约定上（`zh/api` 9,423 页中 8,689 页无末尾换行）。
**除末尾 LF 与那 2 个字符外，其余 10,861 字节与 HEAD 完全一致**（首个差异偏移 676）。
