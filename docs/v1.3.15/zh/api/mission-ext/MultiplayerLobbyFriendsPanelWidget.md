<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLobbyFriendsPanelWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyFriendsPanelWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Friend
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyFriendsPanelWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Friend/MultiplayerLobbyFriendsPanelWidget.cs`

## 概述

`MultiplayerLobbyFriendsPanelWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsForcedOpen` | `public bool IsForcedOpen { get; set; }` |
| `FriendsListPanel` | `public Widget FriendsListPanel { get; set; }` |
| `ShowListToggle` | `public ToggleStateButtonWidget ShowListToggle { get; set; }` |

## 使用示例

```csharp
// MultiplayerLobbyFriendsPanelWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerLobbyFriendsPanelWidget
var widget = root.GetChild("multiplayerLobbyFriendsPanelWidget");;
```

## 参见

- [完整类目录](../catalog)