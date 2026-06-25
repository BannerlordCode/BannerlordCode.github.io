---
title: "GameNotificationWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameNotificationWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameNotificationWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameNotificationWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/GameNotificationWidget.cs`

## 概述

`GameNotificationWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `GameNotificationWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `RampUpInSeconds` | `public float RampUpInSeconds { get; set; }` |
| `RampDownInSeconds` | `public float RampDownInSeconds { get; set; }` |
| `AnnouncerImageIdentifier` | `public ImageIdentifierWidget AnnouncerImageIdentifier { get; set; }` |
| `NotificationId` | `public int NotificationId { get; set; }` |
| `TotalTime` | `public float TotalTime { get; set; }` |
| `TextWidget` | `public RichTextWidget TextWidget { get; set; }` |
| `TotalDt` | `public float TotalDt { get; set; }` |

## 使用示例

```csharp
var widget = new GameNotificationWidget(context);
```

## 参见

- [完整类目录](../catalog)