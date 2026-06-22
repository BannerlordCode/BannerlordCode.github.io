<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLobbyMenuWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyMenuWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyMenuWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyMenuWidget.cs`

## 概述

`MultiplayerLobbyMenuWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `SelectedItemIndex` | `public int SelectedItemIndex { get; set; }` |
| `MenuItemListPanel` | `public ListPanel MenuItemListPanel { get; set; }` |
| `MatchmakingButtonWidget` | `public ButtonWidget MatchmakingButtonWidget { get; set; }` |

## 主要方法

### LobbyStateChanged
```csharp
public void LobbyStateChanged(bool isSearchRequested, bool isSearching, bool isMatchmakingEnabled, bool isCustomBattleEnabled, bool isPartyLeader, bool isInParty)
```

## 使用示例

```csharp
// MultiplayerLobbyMenuWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerLobbyMenuWidget
var widget = root.GetChild("multiplayerLobbyMenuWidget");;
```

## 参见

- [完整类目录](../catalog)