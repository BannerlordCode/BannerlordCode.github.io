<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLobbyScreenWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyScreenWidget.cs`

## 概述

`MultiplayerLobbyScreenWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsLoggedIn` | `public bool IsLoggedIn { get; set; }` |
| `IsSearchGameRequested` | `public bool IsSearchGameRequested { get; set; }` |
| `IsSearchingGame` | `public bool IsSearchingGame { get; set; }` |
| `IsCustomBattleEnabled` | `public bool IsCustomBattleEnabled { get; set; }` |
| `IsMatchmakingEnabled` | `public bool IsMatchmakingEnabled { get; set; }` |
| `IsPartyLeader` | `public bool IsPartyLeader { get; set; }` |
| `IsInParty` | `public bool IsInParty { get; set; }` |
| `MenuWidget` | `public MultiplayerLobbyMenuWidget MenuWidget { get; set; }` |
| `HomeScreenWidget` | `public MultiplayerLobbyHomeScreenWidget HomeScreenWidget { get; set; }` |
| `MatchmakingScreenWidget` | `public MultiplayerLobbyMatchmakingScreenWidget MatchmakingScreenWidget { get; set; }` |
| `ProfileScreenWidget` | `public MultiplayerLobbyProfileScreenWidget ProfileScreenWidget { get; set; }` |
| `FriendsPanelWidget` | `public MultiplayerLobbyFriendsPanelWidget FriendsPanelWidget { get; set; }` |

## 使用示例

```csharp
// MultiplayerLobbyScreenWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerLobbyScreenWidget
var widget = root.GetChild("multiplayerLobbyScreenWidget");;
```

## 参见

- [完整类目录](../catalog)