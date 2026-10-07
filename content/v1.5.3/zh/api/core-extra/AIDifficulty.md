---
title: "AIDifficulty"
description: "棋类 AI 强度的词汇表，共 3 档（Easy/Normal/Hard）加 1 个哨兵值 NumTypes，嵌套在 BoardGameHelper 内。"
---

# AIDifficulty

**Namespace:** Helpers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum AIDifficulty`（嵌套在 `BoardGameHelper` 内）
**Base:** 无（`System.Enum` 派生）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Helpers/BoardGameHelper.cs`

## 概述

`AIDifficulty` 是棋类小游戏里 AI 难度的词汇表，定义在 `BoardGameHelper` 静态类内部。它只有 4 个枚举值：3 个实际难度档（`Easy` / `Normal` / `Hard`）和 1 个哨兵值 `NumTypes`。它只描述档位，不描述每档的具体行为——行为在别处。

## 心智模型

把 `AIDifficulty` 想成**棋类 AI 强度的词汇表**。它回答的问题是「这局棋的 AI 有多强」，而不是「AI 怎么走」。

3 个实际档位是 `Easy`（最弱）、`Normal`（默认）、`Hard`（最强）。第 4 个值 `NumTypes` 是**哨兵**，表示枚举值个数（= 3），不是可选难度。把它当作可选难度会多出一个非法档位。

它是**顺序枚举**（`Easy=0, Normal=1, Hard=2, NumTypes=3`），没有 `[Flags]` 特性。这意味着依赖 `(int)` 强转做算术是脆弱的——上游插入新档位就错位。遍历难度应写成 `for (AIDifficulty d = AIDifficulty.Easy; d < AIDifficulty.NumTypes; d++)` 这种**排除上界**的形式。

**它是 `BoardGameHelper` 的嵌套类型**，引用时要写 `BoardGameHelper.AIDifficulty`，不能只写 `AIDifficulty`（除非调用方自己 `using static` 或用别名）。

## 怎么用

### 怎么拿到它

通过 `BoardGameHelper.AIDifficulty` 引用。不需要实例化，也不需要从 `Campaign.Current` 取。

### 典型用法

**设置 AI 难度**：选一个档位传给棋类 UI 或 AI 逻辑，比如 `BoardGameHelper.AIDifficulty.Hard`。

**遍历可选难度**：用 `for (BoardGameHelper.AIDifficulty d = BoardGameHelper.AIDifficulty.Easy; d < BoardGameHelper.AIDifficulty.NumTypes; d++)` 遍历所有实际档位，排除 `NumTypes` 哨兵。

**比较难度**：直接用关系运算符，如 `if (difficulty > BoardGameHelper.AIDifficulty.Easy)`。

### 最容易踩的坑

- **`NumTypes` 不是难度**：它是「枚举值个数」的哨兵。把它当作可选难度会多出一个非法档位。
- **没有 `[Flags]`，是顺序枚举**：依赖 `(int)` 强转做算术是脆弱的（上游插入新档位就错位）。
- **它是 `BoardGameHelper` 的嵌套类型**：引用要写 `BoardGameHelper.AIDifficulty`。

## 关键成员

- `Easy` —— 最低难度档。`BoardGameHelper.cs:12`
- `Normal` —— 默认难度档。`BoardGameHelper.cs:14`
- `Hard` —— 最高实际难度档。`BoardGameHelper.cs:16`
- `NumTypes` —— 哨兵值，表示档位数量（= 3），不是可选难度。`BoardGameHelper.cs:18`

## 真实示例

```csharp
// 棋类小游戏：设置 AI 难度并记录结局
BoardGameHelper.AIDifficulty difficulty = BoardGameHelper.AIDifficulty.Hard;
BoardGameHelper.BoardGameState result = BoardGameHelper.BoardGameState.None;

// 遍历可选难度（排除 NumTypes 哨兵）
for (BoardGameHelper.AIDifficulty d = BoardGameHelper.AIDifficulty.Easy; d < BoardGameHelper.AIDifficulty.NumTypes; d++)
    Campaign.Current.Models.BoardGameModel.SetDifficulty(d);
```

## 参见

- ↔ [BoardGameHelper](../BoardGameHelper) —— 本 enum 是它的嵌套类型，引用时要写 `BoardGameHelper.AIDifficulty`
- ↔ [Campaign](../../campaign/Campaign) —— 棋类小游戏是战役里的活动

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
