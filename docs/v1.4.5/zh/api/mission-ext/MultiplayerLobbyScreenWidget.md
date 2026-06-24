<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLobbyScreenWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerLobbyScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyScreenWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby/MultiplayerLobbyScreenWidget.cs`

## 概述

`MultiplayerLobbyScreenWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MultiplayerLobbyScreenWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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
var widget = new MultiplayerLobbyScreenWidget(context);
```

## 参见

- [完整类目录](../catalog)