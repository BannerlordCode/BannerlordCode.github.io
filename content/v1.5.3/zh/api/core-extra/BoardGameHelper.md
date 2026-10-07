---
title: "BoardGameHelper"
description: "棋类小游戏的类型容器，把 AI 难度与结局两个枚举收在一起，本身不含任何方法。"
---

# BoardGameHelper

**Namespace:** Helpers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class BoardGameHelper`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Helpers/BoardGameHelper.cs`

## 概述

`BoardGameHelper` 是 1.5.3 新增的棋类小游戏子系统的类型容器。它只有 34 行，**没有任何方法、字段或属性**——只做一件事：把两个棋类枚举（`AIDifficulty` 和 `BoardGameState`）收在同一个静态类里，让棋类 UI 与 AI 有共同的词汇表。

## 心智模型

把 `BoardGameHelper` 想成**棋类小游戏的类型容器**，而不是「棋类逻辑」。

按名字猜「这里能下棋 / 能算 AI 走法」会错。这个类是空的——它不持有任何状态，不定义任何行为，只定义两个「词汇表」：`AIDifficulty`（AI 难度档位）和 `BoardGameState`（一局棋的结局）。真正的棋类逻辑（走法生成、AI 决策、胜负判定）在别处，这里只负责让那些代码有共同的枚举可以引用。

**两个 enum 是嵌套类型**，引用时要写 `BoardGameHelper.AIDifficulty` / `BoardGameHelper.BoardGameState`，不能只写 `AIDifficulty`（除非调用方自己 `using static` 或用别名）。普查/文档口径把它们归到 `Helpers` 命名空间、页名取最后一段，这与 C# 里的书写形式不同。

因为它 `static` 且无成员，**没有可实例化的东西、也没有可调的方法**——想扩展棋类行为不能靠继承它。

## 怎么用

### 怎么拿到它

静态类，直接通过嵌套类型引用。不需要实例化，也不需要从 `Campaign.Current` 取。

### 典型用法

**设置 AI 难度**：用 `BoardGameHelper.AIDifficulty` 选一个档位（`Easy` / `Normal` / `Hard`），传给棋类 UI 或 AI 逻辑。

**记录棋局结局**：用 `BoardGameHelper.BoardGameState` 记录结果（`Win` / `Loss` / `Draw`），棋类 UI 用它决定显示哪句结果文案。

**遍历可选难度**：用 `for (AIDifficulty d = AIDifficulty.Easy; d < AIDifficulty.NumTypes; d++)` 这种排除上界的形式遍历，不要把 `NumTypes` 当可选难度。

### 最容易踩的坑

- **这个类是空的**：按名字猜「这里能下棋 / 能算 AI 走法」会错。它只是一个把两个棋类枚举收在一起的容器。
- **两个 enum 是嵌套类型**：引用时要写 `BoardGameHelper.AIDifficulty` / `BoardGameHelper.BoardGameState`，不能只写 `AIDifficulty`（除非调用方自己 `using static` 或用别名）。
- **没有可实例化的东西、也没有可调的方法**：想扩展棋类行为不能靠继承它。

## 关键成员

- `public enum AIDifficulty` —— 嵌套枚举，表示棋类小游戏里 AI 的难度档位（`Easy` / `Normal` / `Hard` / `NumTypes`）。`BoardGameHelper.cs:9`
- `public enum BoardGameState` —— 嵌套枚举，表示一局棋的结局（`None` / `Win` / `Loss` / `Draw`）。`BoardGameHelper.cs:22`

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

- ↔ [Campaign](../../campaign/Campaign) —— 棋类小游戏是战役里的活动，生命周期挂在战役上
- ↔ [GameModels](../../campaign/GameModels) —— 棋类的规则/难度若可替换，应走模型层而不是这个容器类

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
