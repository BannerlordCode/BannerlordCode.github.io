---
title: "MultiplayerLobbyMatchmakingScreenWidget"
description: "MultiplayerLobbyMatchmakingScreenWidget 的自动生成类参考。"
---
# MultiplayerLobbyMatchmakingScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Matchmaking
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyMatchmakingScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Matchmaking/MultiplayerLobbyMatchmakingScreenWidget.cs`

## 概述

`MultiplayerLobbyMatchmakingScreenWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MultiplayerLobbyMatchmakingScreenWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CustomServerParentWidget` | `public MultiplayerLobbyCustomServerScreenWidget CustomServerParentWidget { get; set; }` |
| `PremadeMatchesParentWidget` | `public MultiplayerLobbyCustomServerScreenWidget PremadeMatchesParentWidget { get; set; }` |
| `IsMatchFindPossible` | `public bool IsMatchFindPossible { get; set; }` |
| `IsCustomGameFindEnabled` | `public bool IsCustomGameFindEnabled { get; set; }` |
| `SelectedModeIndex` | `public int SelectedModeIndex { get; set; }` |
| `FindGameButton` | `public ButtonWidget FindGameButton { get; set; }` |
| `SelectionInfo` | `public Widget SelectionInfo { get; set; }` |

## 主要方法

### LobbyStateChanged
`public void LobbyStateChanged(bool isSearchRequested, bool isSearching, bool isMatchmakingEnabled, bool isCustomBattleEnabled, bool isPartyLeader, bool isInParty)`

**用途 / Purpose:** **用途 / Purpose:** 调用 LobbyStateChanged 对应的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerLobbyMatchmakingScreenWidget 实例
MultiplayerLobbyMatchmakingScreenWidget multiplayerLobbyMatchmakingScreenWidget = ...;
multiplayerLobbyMatchmakingScreenWidget.LobbyStateChanged(false, false, false, false, false, false);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
MultiplayerLobbyMatchmakingScreenWidget widget = ...;
```

## 参见

- [本区域目录](../)