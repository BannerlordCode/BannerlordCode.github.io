---
title: "MultiplayerArmoryPageWidget"
description: "MultiplayerArmoryPageWidget 的自动生成类参考。"
---
# MultiplayerArmoryPageWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerArmoryPageWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerArmoryPageWidget.cs`

## 概述

`MultiplayerArmoryPageWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MultiplayerArmoryPageWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsTauntAssignmentActive` | `public bool IsTauntAssignmentActive { get; set; }` |
| `IsTauntControlsOpen` | `public bool IsTauntControlsOpen { get; set; }` |
| `TauntEnabledRadialDistance` | `public int TauntEnabledRadialDistance { get; set; }` |
| `TauntDisabledRadialDistance` | `public int TauntDisabledRadialDistance { get; set; }` |
| `TauntStateAnimationDuration` | `public float TauntStateAnimationDuration { get; set; }` |
| `TauntAssignmentOverlayAlpha` | `public float TauntAssignmentOverlayAlpha { get; set; }` |
| `LeftSideParent` | `public Widget LeftSideParent { get; set; }` |
| `GameModesDropdownParent` | `public Widget GameModesDropdownParent { get; set; }` |
| `HeroPreviewParent` | `public Widget HeroPreviewParent { get; set; }` |
| `TauntAssignmentOverlay` | `public Widget TauntAssignmentOverlay { get; set; }` |
| `ManageTauntsButton` | `public Widget ManageTauntsButton { get; set; }` |
| `TauntSlotsContainer` | `public Widget TauntSlotsContainer { get; set; }` |
| `RightPanelTabControl` | `public TabControl RightPanelTabControl { get; set; }` |
| `TauntCircleActionSelector` | `public CircleActionSelectorWidget TauntCircleActionSelector { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
MultiplayerArmoryPageWidget widget = ...;
```

## 参见

- [本区域目录](../)