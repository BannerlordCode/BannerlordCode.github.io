<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLobbyAnnouncementIconBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyAnnouncementIconBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Home
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyAnnouncementIconBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Home/MultiplayerLobbyAnnouncementIconBrushWidget.cs`

## 概述

`MultiplayerLobbyAnnouncementIconBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `AnnouncementType` | `public string AnnouncementType { get; set; }` |
| `IconBrush` | `public Brush IconBrush { get; set; }` |

## 使用示例

```csharp
// MultiplayerLobbyAnnouncementIconBrushWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerLobbyAnnouncementIconBrushWidget
var widget = root.GetChild("multiplayerLobbyAnnouncementIconBrushWidget");;
```

## 参见

- [完整类目录](../catalog)