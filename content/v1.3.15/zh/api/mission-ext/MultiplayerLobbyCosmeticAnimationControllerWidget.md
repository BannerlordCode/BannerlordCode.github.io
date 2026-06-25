---
title: "MultiplayerLobbyCosmeticAnimationControllerWidget"
description: "MultiplayerLobbyCosmeticAnimationControllerWidget 的自动生成类参考。"
---
# MultiplayerLobbyCosmeticAnimationControllerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyCosmeticAnimationControllerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyCosmeticAnimationControllerWidget.cs`

## 概述

`MultiplayerLobbyCosmeticAnimationControllerWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MultiplayerLobbyCosmeticAnimationControllerWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CosmeticRarity` | `public int CosmeticRarity { get; set; }` |
| `MinAlphaChangeDuration` | `public float MinAlphaChangeDuration { get; set; }` |
| `MaxAlphaChangeDuration` | `public float MaxAlphaChangeDuration { get; set; }` |
| `MinAlphaLowerBound` | `public float MinAlphaLowerBound { get; set; }` |
| `MinAlphaUpperBound` | `public float MinAlphaUpperBound { get; set; }` |
| `MaxAlphaLowerBound` | `public float MaxAlphaLowerBound { get; set; }` |
| `MaxAlphaUpperBound` | `public float MaxAlphaUpperBound { get; set; }` |
| `RarityCommonColor` | `public Color RarityCommonColor { get; set; }` |
| `RarityRareColor` | `public Color RarityRareColor { get; set; }` |
| `RarityUniqueColor` | `public Color RarityUniqueColor { get; set; }` |
| `AnimationPartContainer` | `public BasicContainer AnimationPartContainer { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
MultiplayerLobbyCosmeticAnimationControllerWidget widget = ...;
```

## 参见

- [本区域目录](../)