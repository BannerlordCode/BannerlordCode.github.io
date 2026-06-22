<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerPersonalKillFeedItemWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerPersonalKillFeedItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.KillFeed
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPersonalKillFeedItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/KillFeed/MultiplayerPersonalKillFeedItemWidget.cs`

## 概述

`MultiplayerPersonalKillFeedItemWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `NotificationTypeIconWidget` | `public Widget NotificationTypeIconWidget { get; set; }` |
| `NotificationBackgroundWidget` | `public Widget NotificationBackgroundWidget { get; set; }` |
| `AmountTextWidget` | `public TextWidget AmountTextWidget { get; set; }` |
| `MessageTextWidget` | `public RichTextWidget MessageTextWidget { get; set; }` |
| `FadeInTime` | `public float FadeInTime { get; set; }` |
| `StayTime` | `public float StayTime { get; set; }` |
| `FadeOutTime` | `public float FadeOutTime { get; }` |
| `TimeSinceCreation` | `public float TimeSinceCreation { get; }` |
| `IsDamage` | `public bool IsDamage { get; set; }` |
| `Message` | `public string Message { get; set; }` |
| `ItemType` | `public int ItemType { get; set; }` |
| `Amount` | `public int Amount { get; set; }` |

## 主要方法

### SetSpeedModifier
```csharp
public void SetSpeedModifier(float newSpeed)
```

### SetMaxAlphaValue
```csharp
public void SetMaxAlphaValue(float newMaxAlpha)
```

## 使用示例

```csharp
// MultiplayerPersonalKillFeedItemWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerPersonalKillFeedItemWidget
var widget = root.GetChild("multiplayerPersonalKillFeedItemWidget");;
```

## 参见

- [完整类目录](../catalog)