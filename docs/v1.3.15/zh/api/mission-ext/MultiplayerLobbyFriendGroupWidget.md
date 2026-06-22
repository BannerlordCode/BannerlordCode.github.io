<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLobbyFriendGroupWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyFriendGroupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Friend
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyFriendGroupWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Friend/MultiplayerLobbyFriendGroupWidget.cs`

## 概述

`MultiplayerLobbyFriendGroupWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `List` | `public ListPanel List { get; set; }` |
| `Toggle` | `public MultiplayerLobbyFriendGroupToggleWidget Toggle { get; set; }` |

## 使用示例

```csharp
// MultiplayerLobbyFriendGroupWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerLobbyFriendGroupWidget
var widget = root.GetChild("multiplayerLobbyFriendGroupWidget");;
```

## 参见

- [完整类目录](../catalog)