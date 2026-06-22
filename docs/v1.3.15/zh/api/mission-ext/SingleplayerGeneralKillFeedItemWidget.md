<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SingleplayerGeneralKillFeedItemWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
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
```csharp
public void SetSpeedModifier(float newSpeed)
```

## 使用示例

```csharp
// SingleplayerGeneralKillFeedItemWidget (Widget) 的典型用法
// 声明/访问一个 SingleplayerGeneralKillFeedItemWidget
var widget = root.GetChild("singleplayerGeneralKillFeedItemWidget");;
```

## 参见

- [完整类目录](../catalog)