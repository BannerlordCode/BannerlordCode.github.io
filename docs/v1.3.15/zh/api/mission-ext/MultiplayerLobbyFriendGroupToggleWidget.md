<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLobbyFriendGroupToggleWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyFriendGroupToggleWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Friend
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyFriendGroupToggleWidget : ToggleButtonWidget`
**Base:** `ToggleButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Friend/MultiplayerLobbyFriendGroupToggleWidget.cs`

## 概述

`MultiplayerLobbyFriendGroupToggleWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `CollapseIndicator` | `public Widget CollapseIndicator { get; set; }` |
| `TitleContainer` | `public Widget TitleContainer { get; set; }` |
| `PlayerCountText` | `public TextWidget PlayerCountText { get; set; }` |
| `PlayerCount` | `public int PlayerCount { get; set; }` |
| `InitialClosedState` | `public bool InitialClosedState { get; set; }` |

## 使用示例

```csharp
// MultiplayerLobbyFriendGroupToggleWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerLobbyFriendGroupToggleWidget
var widget = root.GetChild("multiplayerLobbyFriendGroupToggleWidget");;
```

## 参见

- [完整类目录](../catalog)