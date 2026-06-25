---
title: "MultiplayerLobbyAfterBattleExperiencePanelWidget"
description: "MultiplayerLobbyAfterBattleExperiencePanelWidget 的自动生成类参考。"
---
# MultiplayerLobbyAfterBattleExperiencePanelWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyAfterBattleExperiencePanelWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby/MultiplayerLobbyAfterBattleExperiencePanelWidget.cs`

## 概述

`MultiplayerLobbyAfterBattleExperiencePanelWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MultiplayerLobbyAfterBattleExperiencePanelWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `GainedExperience` | `public int GainedExperience { get; set; }` |
| `ExperienceFillBar` | `public MultiplayerScoreboardAnimatedFillBarWidget ExperienceFillBar { get; set; }` |
| `EarnedExperienceCounterTextWidget` | `public CounterTextBrushWidget EarnedExperienceCounterTextWidget { get; set; }` |
| `CurrentLevelTextWidget` | `public TextWidget CurrentLevelTextWidget { get; set; }` |
| `NextLevelTextWidget` | `public TextWidget NextLevelTextWidget { get; set; }` |

## 主要方法

### StartAnimation
`public void StartAnimation(float animationDelay)`

**用途 / Purpose:** 启动animation流程或状态机。

```csharp
// 先通过子系统 API 拿到 MultiplayerLobbyAfterBattleExperiencePanelWidget 实例
MultiplayerLobbyAfterBattleExperiencePanelWidget multiplayerLobbyAfterBattleExperiencePanelWidget = ...;
multiplayerLobbyAfterBattleExperiencePanelWidget.StartAnimation(0);
```

### Reset
`public void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 MultiplayerLobbyAfterBattleExperiencePanelWidget 实例
MultiplayerLobbyAfterBattleExperiencePanelWidget multiplayerLobbyAfterBattleExperiencePanelWidget = ...;
multiplayerLobbyAfterBattleExperiencePanelWidget.Reset();
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
MultiplayerLobbyAfterBattleExperiencePanelWidget widget = ...;
```

## 参见

- [本区域目录](../)