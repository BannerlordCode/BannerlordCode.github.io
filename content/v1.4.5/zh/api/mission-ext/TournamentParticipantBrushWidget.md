---
title: "TournamentParticipantBrushWidget"
description: "TournamentParticipantBrushWidget 的自动生成类参考。"
---
# TournamentParticipantBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tournament
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TournamentParticipantBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tournament/TournamentParticipantBrushWidget.cs`

## 概述

`TournamentParticipantBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `TournamentParticipantBrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `NameTextWidget` | `public TextWidget NameTextWidget { get; set; }` |
| `MatchState` | `public int MatchState { get; set; }` |
| `IsDead` | `public bool IsDead { get; set; }` |
| `IsMainHero` | `public bool IsMainHero { get; set; }` |
| `MainHeroTextBrush` | `public Brush MainHeroTextBrush { get; set; }` |
| `NormalTextBrush` | `public Brush NormalTextBrush { get; set; }` |
| `OnMission` | `public bool OnMission { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
TournamentParticipantBrushWidget widget = ...;
```

## 参见

- [本区域目录](../)