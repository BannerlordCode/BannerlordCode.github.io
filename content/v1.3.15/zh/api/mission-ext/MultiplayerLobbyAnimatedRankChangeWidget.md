---
title: "MultiplayerLobbyAnimatedRankChangeWidget"
description: "MultiplayerLobbyAnimatedRankChangeWidget 的自动生成类参考。"
---
# MultiplayerLobbyAnimatedRankChangeWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyAnimatedRankChangeWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyAnimatedRankChangeWidget.cs`

## 概述

`MultiplayerLobbyAnimatedRankChangeWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MultiplayerLobbyAnimatedRankChangeWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsAnimationRequested` | `public bool IsAnimationRequested { get; set; }` |
| `IsPromoted` | `public bool IsPromoted { get; set; }` |
| `OldRankName` | `public TextWidget OldRankName { get; set; }` |
| `NewRankName` | `public TextWidget NewRankName { get; set; }` |
| `OldRankSprite` | `public MultiplayerLobbyRankItemButtonWidget OldRankSprite { get; set; }` |
| `NewRankSprite` | `public MultiplayerLobbyRankItemButtonWidget NewRankSprite { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
MultiplayerLobbyAnimatedRankChangeWidget widget = ...;
```

## 参见

- [本区域目录](../)