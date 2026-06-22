<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLobbyAnimatedRankChangeWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyAnimatedRankChangeWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyAnimatedRankChangeWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyAnimatedRankChangeWidget.cs`

## 概述

`MultiplayerLobbyAnimatedRankChangeWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsAnimationRequested` | `public bool IsAnimationRequested { get; set; }` |
| `IsPromoted` | `public bool IsPromoted { get; set; }` |
| `OldRankName` | `public TextWidget OldRankName { get; set; }` |
| `NewRankName` | `public TextWidget NewRankName { get; set; }` |
| `OldRankSprite` | `public MultiplayerLobbyRankItemButtonWidget OldRankSprite { get; set; }` |
| `NewRankSprite` | `public MultiplayerLobbyRankItemButtonWidget NewRankSprite { get; set; }` |

## 使用示例

```csharp
// MultiplayerLobbyAnimatedRankChangeWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerLobbyAnimatedRankChangeWidget
var widget = root.GetChild("multiplayerLobbyAnimatedRankChangeWidget");;
```

## 参见

- [完整类目录](../catalog)