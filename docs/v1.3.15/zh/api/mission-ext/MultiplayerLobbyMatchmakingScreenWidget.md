<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLobbyMatchmakingScreenWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `lobby state changed` 相关逻辑。

## 使用示例

```csharp
var widget = new MultiplayerLobbyMatchmakingScreenWidget(context);
```

## 参见

- [完整类目录](../catalog)