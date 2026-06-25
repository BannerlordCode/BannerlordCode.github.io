---
title: "MultiplayerScoreboardAnimatedFillBarWidget"
description: "MultiplayerScoreboardAnimatedFillBarWidget 的自动生成类参考。"
---
# MultiplayerScoreboardAnimatedFillBarWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerScoreboardAnimatedFillBarWidget : FillBarWidget`
**Base:** `FillBarWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard/MultiplayerScoreboardAnimatedFillBarWidget.cs`

## 概述

`MultiplayerScoreboardAnimatedFillBarWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MultiplayerScoreboardAnimatedFillBarWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsStartRequested` | `public bool IsStartRequested { get; set; }` |
| `AnimationDelay` | `public float AnimationDelay { get; set; }` |
| `AnimationFillSpeed` | `public float AnimationFillSpeed { get; set; }` |
| `TimesOfFullFill` | `public int TimesOfFullFill { get; set; }` |

## 主要方法

### FullFillFinishedHandler
`public delegate void FullFillFinishedHandler(bool isPositive)`

**用途 / Purpose:** **用途 / Purpose:** 调用 FullFillFinishedHandler 对应的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerScoreboardAnimatedFillBarWidget 实例
MultiplayerScoreboardAnimatedFillBarWidget multiplayerScoreboardAnimatedFillBarWidget = ...;
multiplayerScoreboardAnimatedFillBarWidget.FullFillFinishedHandler(false);
```

### StartAnimation
`public void StartAnimation(float animationDelay = 0f)`

**用途 / Purpose:** **用途 / Purpose:** 启动animation流程或状态机。

```csharp
// 先通过子系统 API 拿到 MultiplayerScoreboardAnimatedFillBarWidget 实例
MultiplayerScoreboardAnimatedFillBarWidget multiplayerScoreboardAnimatedFillBarWidget = ...;
multiplayerScoreboardAnimatedFillBarWidget.StartAnimation(0);
```

### Reset
`public void Reset()`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 MultiplayerScoreboardAnimatedFillBarWidget 实例
MultiplayerScoreboardAnimatedFillBarWidget multiplayerScoreboardAnimatedFillBarWidget = ...;
multiplayerScoreboardAnimatedFillBarWidget.Reset();
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
MultiplayerScoreboardAnimatedFillBarWidget widget = ...;
```

## 参见

- [本区域目录](../)