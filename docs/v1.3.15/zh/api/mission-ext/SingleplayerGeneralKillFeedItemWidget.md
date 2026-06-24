<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SingleplayerGeneralKillFeedItemWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SingleplayerGeneralKillFeedItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.KillFeed.General
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SingleplayerGeneralKillFeedItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/KillFeed/General/SingleplayerGeneralKillFeedItemWidget.cs`

## 概述

`SingleplayerGeneralKillFeedItemWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `SingleplayerGeneralKillFeedItemWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TroopTypeIconBrush` | `public Brush TroopTypeIconBrush { get; set; }` |
| `MurdererTypeWidget` | `public Widget MurdererTypeWidget { get; set; }` |
| `VictimTypeWidget` | `public Widget VictimTypeWidget { get; set; }` |
| `ActionIconWidget` | `public Widget ActionIconWidget { get; set; }` |
| `VictimNameWidget` | `public TextWidget VictimNameWidget { get; set; }` |
| `MurdererNameWidget` | `public TextWidget MurdererNameWidget { get; set; }` |
| `FadeInTime` | `public float FadeInTime { get; }` |
| `StayTime` | `public float StayTime { get; }` |
| `FadeOutTime` | `public float FadeOutTime { get; }` |
| `TimeSinceCreation` | `public float TimeSinceCreation { get; }` |
| `MurdererName` | `public string MurdererName { get; set; }` |
| `MurdererType` | `public string MurdererType { get; set; }` |
| `VictimName` | `public string VictimName { get; set; }` |
| `VictimType` | `public string VictimType { get; set; }` |
| `IsUnconscious` | `public bool IsUnconscious { get; set; }` |
| `IsHeadshot` | `public bool IsHeadshot { get; set; }` |
| `IsSuicide` | `public bool IsSuicide { get; set; }` |
| `IsDrowning` | `public bool IsDrowning { get; set; }` |
| `IsPaused` | `public bool IsPaused { get; set; }` |

## 主要方法

### SetSpeedModifier
`public void SetSpeedModifier(float newSpeed)`

**用途 / Purpose:** 设置 `speed modifier` 的值或状态。

## 使用示例

```csharp
var widget = new SingleplayerGeneralKillFeedItemWidget(context);
```

## 参见

- [完整类目录](../catalog)