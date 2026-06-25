---
title: "MultiplayerLobbyCosmeticAnimationControllerWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLobbyCosmeticAnimationControllerWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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
var widget = new MultiplayerLobbyCosmeticAnimationControllerWidget(context);
```

## 参见

- [完整类目录](../catalog)