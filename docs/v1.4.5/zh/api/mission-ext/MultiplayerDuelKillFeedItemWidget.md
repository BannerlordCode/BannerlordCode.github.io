<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerDuelKillFeedItemWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerDuelKillFeedItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.KillFeed
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerDuelKillFeedItemWidget : MultiplayerGeneralKillFeedItemWidget`
**Base:** `MultiplayerGeneralKillFeedItemWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.KillFeed/MultiplayerDuelKillFeedItemWidget.cs`

## 概述

`MultiplayerDuelKillFeedItemWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MultiplayerDuelKillFeedItemWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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
var widget = new MultiplayerDuelKillFeedItemWidget(context);
```

## 参见

- [完整类目录](../catalog)