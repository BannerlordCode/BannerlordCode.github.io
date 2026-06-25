---
title: "MultiplayerLobbyProfileScreenWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLobbyProfileScreenWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerLobbyProfileScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyProfileScreenWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby/MultiplayerLobbyProfileScreenWidget.cs`

## 概述

`MultiplayerLobbyProfileScreenWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MultiplayerLobbyProfileScreenWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `SelectedModeIndex` | `public int SelectedModeIndex { get; set; }` |
| `FindGameButton` | `public ButtonWidget FindGameButton { get; set; }` |
| `SelectionInfo` | `public Widget SelectionInfo { get; set; }` |
| `HasUnofficialModulesLoaded` | `public bool HasUnofficialModulesLoaded { get; set; }` |

## 主要方法

### LobbyStateChanged
`public void LobbyStateChanged(bool isSearchRequested, bool isSearching, bool isMatchmakingEnabled, bool isCustomBattleEnabled, bool isPartyLeader, bool isInParty)`

**用途 / Purpose:** 处理 `lobby state changed` 相关逻辑。

## 使用示例

```csharp
var widget = new MultiplayerLobbyProfileScreenWidget(context);
```

## 参见

- [完整类目录](../catalog)