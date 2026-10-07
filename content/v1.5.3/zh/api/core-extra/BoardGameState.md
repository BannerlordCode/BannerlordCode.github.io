---
title: "BoardGameState"
description: "一局棋的结局词汇表：None（未结束/默认）、Win、Loss、Draw，嵌套在 BoardGameHelper 内。"
---

# BoardGameState

**Namespace:** Helpers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum BoardGameState`（嵌套在 `BoardGameHelper` 内）
**Base:** 无（`System.Enum` 派生）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Helpers/BoardGameHelper.cs`

## 概述

`BoardGameState` 是棋类小游戏里「一局棋的结局」的词汇表，定义在 `BoardGameHelper` 静态类内部。它只有 4 个枚举值：`None`（未结束/默认）、`Win`（获胜）、`Loss`（失败）、`Draw`（平局）。棋类 UI 用它决定显示哪句结果文案，AI 用它决定是否继续。

## 心智模型

把 `BoardGameState` 想成**一局棋的结局词汇表**。它回答的问题是「这局棋的结果是什么」，而不是「怎么判定胜负」。

4 个值的语义是：`None` 是默认值（`default(BoardGameState)` 就是它），表示「还没结束」或「未设置」；`Win` / `Loss` 是从某一方视角定义的胜负；`Draw` 是平局。

**关键区分：`None` 与「还没开始」和「平局」是三件不同的事。** `None` 是默认值，`Draw` 才是平局。把 `None` 当平局处理会错。

**`Win` / `Loss` 是从某一方视角定义的**——枚举本身不带「谁赢了」，谁用谁负责定义视角。

**它与同文件的 `AIDifficulty` 不一致**：`AIDifficulty` 有 `NumTypes` 哨兵，`BoardGameState` 没有。想遍历结局不能照 `AIDifficulty` 的写法抄。

**它是 `BoardGameHelper` 的嵌套类型**，引用时要写 `BoardGameHelper.BoardGameState`，不能只写 `BoardGameState`（除非调用方自己 `using static` 或用别名）。

## 怎么用

### 怎么拿到它

通过 `BoardGameHelper.BoardGameState` 引用。不需要实例化，也不需要从 `Campaign.Current` 取。

### 典型用法

**记录棋局结局**：用 `BoardGameHelper.BoardGameState.Win` / `Loss` / `Draw` 记录结果，棋类 UI 用它决定显示哪句结果文案。

**判断是否结束**：用 `if (state != BoardGameHelper.BoardGameState.None)` 判断棋局是否已结束。

**AI 决策**：AI 用 `Win` / `Loss` 评估局面，决定是否继续或认输。

### 最容易踩的坑

- **`None` 与「还没开始」和「平局」是三件不同的事**：`None` 是默认值（`default` 就是它），`Draw` 才是平局；把 `None` 当平局处理会错。
- **只有 4 个值、没有 `NumTypes` 哨兵**（与同文件的 `AIDifficulty` 不一致）：想遍历结局不能照 `AIDifficulty` 的写法抄。
- **它是 `BoardGameHelper` 的嵌套类型**：引用要写 `BoardGameHelper.BoardGameState`。
- **`Win` / `Loss` 是从某一方视角定义的**：枚举本身不带「谁赢了」，谁用谁负责定义视角。

## 关键成员

- `None` —— 默认/未结束状态（也是 `default(BoardGameState)`）。`BoardGameHelper.cs:25`
- `Win` —— 玩家（或该状态的持有方）获胜。`BoardGameHelper.cs:27`
- `Loss` —— 失败。`BoardGameHelper.cs:29`
- `Draw` —— 平局。`BoardGameHelper.cs:31`

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

- ↔ [BoardGameHelper](../BoardGameHelper) —— 本 enum 是它的嵌套类型，引用时要写 `BoardGameHelper.BoardGameState`
- ↔ [Campaign](../../campaign/Campaign) —— 棋类小游戏是战役里的活动

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
