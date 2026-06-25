---
title: "ScoreboardSideMoraleListPanel"
description: "ScoreboardSideMoraleListPanel 的自动生成类参考。"
---
# ScoreboardSideMoraleListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScoreboardSideMoraleListPanel`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard/ScoreboardSideMoraleListPanel.cs`

## 概述

`ScoreboardSideMoraleListPanel` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Morale` | `public float Morale { get; set; }` |
| `MaxMorale` | `public float MaxMorale { get; set; }` |

## 主要方法

### ScoreboardSideMoraleListPanel
`public class ScoreboardSideMoraleListPanel(UIContext context)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ScoreboardSideMoraleListPanel 对应的操作。

```csharp
// 先通过子系统 API 拿到 ScoreboardSideMoraleListPanel 实例
ScoreboardSideMoraleListPanel scoreboardSideMoraleListPanel = ...;
var result = scoreboardSideMoraleListPanel.ScoreboardSideMoraleListPanel(context);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ScoreboardSideMoraleListPanel scoreboardSideMoraleListPanel = ...;
scoreboardSideMoraleListPanel.ScoreboardSideMoraleListPanel(context);
```

## 参见

- [本区域目录](../)