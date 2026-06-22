<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SingleplayerPersonalKillFeedItemWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SingleplayerPersonalKillFeedItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.KillFeed.Personal
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SingleplayerPersonalKillFeedItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/KillFeed/Personal/SingleplayerPersonalKillFeedItemWidget.cs`

## 概述

`SingleplayerPersonalKillFeedItemWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `NotificationTypeIconWidget` | `public Widget NotificationTypeIconWidget { get; set; }` |
| `NotificationBackgroundWidget` | `public Widget NotificationBackgroundWidget { get; set; }` |
| `AmountTextWidget` | `public TextWidget AmountTextWidget { get; set; }` |
| `MessageTextWidget` | `public RichTextWidget MessageTextWidget { get; set; }` |
| `FadeInTime` | `public float FadeInTime { get; }` |
| `StayTime` | `public float StayTime { get; }` |
| `FadeOutTime` | `public float FadeOutTime { get; }` |
| `TimeSinceCreation` | `public float TimeSinceCreation { get; }` |
| `IsDamage` | `public bool IsDamage { get; set; }` |
| `Amount` | `public int Amount { get; set; }` |
| `ItemType` | `public int ItemType { get; set; }` |
| `Message` | `public string Message { get; set; }` |
| `TypeID` | `public string TypeID { get; set; }` |
| `TroopTypeIconBrush` | `public Brush TroopTypeIconBrush { get; set; }` |
| `TroopTypeWidget` | `public Widget TroopTypeWidget { get; set; }` |
| `IsPaused` | `public bool IsPaused { get; set; }` |

## 主要方法

### SetSpeedModifier
```csharp
public void SetSpeedModifier(float newSpeed)
```

## 使用示例

```csharp
// SingleplayerPersonalKillFeedItemWidget (Widget) 的典型用法
// 声明/访问一个 SingleplayerPersonalKillFeedItemWidget
var widget = root.GetChild("singleplayerPersonalKillFeedItemWidget");;
```

## 参见

- [完整类目录](../catalog)