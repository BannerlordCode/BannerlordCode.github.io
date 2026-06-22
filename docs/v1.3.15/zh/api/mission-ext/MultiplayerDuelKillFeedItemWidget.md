<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerDuelKillFeedItemWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerDuelKillFeedItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.KillFeed
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerDuelKillFeedItemWidget : MultiplayerGeneralKillFeedItemWidget`
**Base:** `MultiplayerGeneralKillFeedItemWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/KillFeed/MultiplayerDuelKillFeedItemWidget.cs`

## 概述

`MultiplayerDuelKillFeedItemWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEndOfDuel` | `public bool IsEndOfDuel { get; set; }` |
| `Background` | `public BrushWidget Background { get; set; }` |
| `VictimCompassBackground` | `public BrushWidget VictimCompassBackground { get; set; }` |
| `MurdererCompassBackground` | `public BrushWidget MurdererCompassBackground { get; set; }` |
| `VictimNameText` | `public ScrollingRichTextWidget VictimNameText { get; set; }` |
| `MurdererNameText` | `public ScrollingRichTextWidget MurdererNameText { get; set; }` |
| `VictimScoreText` | `public TextWidget VictimScoreText { get; set; }` |
| `MurdererScoreText` | `public TextWidget MurdererScoreText { get; set; }` |

## 使用示例

```csharp
// MultiplayerDuelKillFeedItemWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerDuelKillFeedItemWidget
var widget = root.GetChild("multiplayerDuelKillFeedItemWidget");;
```

## 参见

- [完整类目录](../catalog)