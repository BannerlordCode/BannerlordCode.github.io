---
title: "ScoreboardBattleRewardsWidget"
description: "ScoreboardBattleRewardsWidget 的自动生成类参考。"
---
# ScoreboardBattleRewardsWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScoreboardBattleRewardsWidget`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard/ScoreboardBattleRewardsWidget.cs`

## 概述

`ScoreboardBattleRewardsWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `ScoreboardBattleRewardsWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AnimationDelay` | `public float AnimationDelay { get; set; }` |
| `AnimationInterval` | `public float AnimationInterval { get; set; }` |
| `ItemContainer` | `public Widget ItemContainer { get; set; }` |

## 主要方法

### ScoreboardBattleRewardsWidget
`public class ScoreboardBattleRewardsWidget(UIContext context)`

**用途 / Purpose:** 处理与 「scoreboard battle rewards widget」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ScoreboardBattleRewardsWidget 实例
ScoreboardBattleRewardsWidget scoreboardBattleRewardsWidget = ...;
var result = scoreboardBattleRewardsWidget.ScoreboardBattleRewardsWidget(context);
```

### StartAnimation
`public void StartAnimation()`

**用途 / Purpose:** 启动「animation」流程或状态机。

```csharp
// 先通过子系统 API 拿到 ScoreboardBattleRewardsWidget 实例
ScoreboardBattleRewardsWidget scoreboardBattleRewardsWidget = ...;
scoreboardBattleRewardsWidget.StartAnimation();
```

### Reset
`public void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 ScoreboardBattleRewardsWidget 实例
ScoreboardBattleRewardsWidget scoreboardBattleRewardsWidget = ...;
scoreboardBattleRewardsWidget.Reset();
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
ScoreboardBattleRewardsWidget widget = ...;
```

## 参见

- [本区域目录](../)