---
title: "MultiplayerDeathCardWidget"
description: "MultiplayerDeathCardWidget 的自动生成类参考。"
---
# MultiplayerDeathCardWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerDeathCardWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MultiplayerDeathCardWidget.cs`

## 概述

`MultiplayerDeathCardWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MultiplayerDeathCardWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `WeaponTextWidget` | `public TextWidget WeaponTextWidget { get; set; }` |
| `TitleTextWidget` | `public TextWidget TitleTextWidget { get; set; }` |
| `KillerNameTextWidget` | `public ScrollingRichTextWidget KillerNameTextWidget { get; set; }` |
| `KillCountContainer` | `public Widget KillCountContainer { get; set; }` |
| `SelfInflictedTitleBrush` | `public Brush SelfInflictedTitleBrush { get; set; }` |
| `NormalBrushTitleBrush` | `public Brush NormalBrushTitleBrush { get; set; }` |
| `FadeInModifier` | `public float FadeInModifier { get; set; }` |
| `FadeOutModifier` | `public float FadeOutModifier { get; set; }` |
| `StayTime` | `public float StayTime { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsSelfInflicted` | `public bool IsSelfInflicted { get; set; }` |
| `KillCountsEnabled` | `public bool KillCountsEnabled { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
MultiplayerDeathCardWidget widget = ...;
```

## 参见

- [本区域目录](../)