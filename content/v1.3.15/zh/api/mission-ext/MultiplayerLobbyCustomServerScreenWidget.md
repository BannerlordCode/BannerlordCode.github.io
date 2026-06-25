---
title: "MultiplayerLobbyCustomServerScreenWidget"
description: "MultiplayerLobbyCustomServerScreenWidget 的自动生成类参考。"
---
# MultiplayerLobbyCustomServerScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyCustomServerScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyCustomServerScreenWidget.cs`

## 概述

`MultiplayerLobbyCustomServerScreenWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MultiplayerLobbyCustomServerScreenWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `FilterSearchBarScope` | `public NavigationScopeTargeter FilterSearchBarScope { get; set; }` |
| `FilterButtonsScope` | `public NavigationScopeTargeter FilterButtonsScope { get; set; }` |
| `ServerListPanel` | `public ListPanel ServerListPanel { get; set; }` |
| `JoinServerButton` | `public ButtonWidget JoinServerButton { get; set; }` |
| `HostServerButton` | `public ButtonWidget HostServerButton { get; set; }` |
| `CreateGameButton` | `public ButtonWidget CreateGameButton { get; set; }` |
| `CloseCreatePanelButton` | `public ButtonWidget CloseCreatePanelButton { get; set; }` |
| `JoinGamePanel` | `public Widget JoinGamePanel { get; set; }` |
| `CreateGamePanel` | `public Widget CreateGamePanel { get; set; }` |
| `RefreshButton` | `public ButtonWidget RefreshButton { get; set; }` |
| `FiltersPanel` | `public Widget FiltersPanel { get; set; }` |
| `ServerCountText` | `public TextWidget ServerCountText { get; set; }` |
| `InfoText` | `public TextWidget InfoText { get; set; }` |
| `IsPartyLeader` | `public bool IsPartyLeader { get; set; }` |
| `IsInParty` | `public bool IsInParty { get; set; }` |
| `IsAnyGameSelected` | `public bool IsAnyGameSelected { get; set; }` |
| `IsPlayerBasedCustomBattleEnabled` | `public bool IsPlayerBasedCustomBattleEnabled { get; set; }` |
| `IsPremadeGameEnabled` | `public bool IsPremadeGameEnabled { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
MultiplayerLobbyCustomServerScreenWidget widget = ...;
```

## 参见

- [本区域目录](../)