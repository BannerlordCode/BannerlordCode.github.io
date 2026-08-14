---
title: "MultiplayerScoreboardStatsListPanel"
description: "MultiplayerScoreboardStatsListPanel 的自动生成类参考。"
---
# MultiplayerScoreboardStatsListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerScoreboardStatsListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardStatsListPanel.cs`

## 概述

`MultiplayerScoreboardStatsListPanel` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NameColumnWidthRatio` | `public float NameColumnWidthRatio { get; set; }` |
| `ScoreColumnWidthRatio` | `public float ScoreColumnWidthRatio { get; set; }` |
| `SoldiersColumnWidthRatio` | `public float SoldiersColumnWidthRatio { get; set; }` |

## 使用示例

```csharp
// 从对应子系统 API 获取实例
MultiplayerScoreboardStatsListPanel instance = ...;
```

## 参见

- [本区域目录](../)